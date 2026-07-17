#!/usr/bin/env python3
"""Propose an import mapping for the legacy NAGJ archive.

The upstream site (github.com/ohiomathteacher/ggb-journal) keeps one static
details page per article at `articles/vXXnY-surname.html`, each carrying full
Highwire Press citation metadata plus the abstract and keywords. That is a far
better source than articles.js, which has no abstracts at all -- and because
each page IS one article, no fuzzy author matching is needed.

What still needs a human: the keyword ending each slug. `campuzano2023tracing`
is an editorial choice, not a derivable fact, so every slug here is a guess for
review.

Issue year comes from articles.js, not the details page: v3n1 is volume year
2014 but carries a publication date of 2013-11-15, and the slug must use the
volume year.

Usage:
    python scripts/propose_import_map.py --details-dir DIR [--out import-map.yml]
"""

from __future__ import annotations

import argparse
import collections
import glob
import html as htmllib
import json
import os
import re
import subprocess
import sys
import unicodedata

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CATALOG = os.path.join(REPO_ROOT, "assets", "js", "articles.js")

STOPWORDS = {
    "a", "an", "the", "and", "or", "but", "of", "in", "on", "at", "to", "for",
    "with", "from", "by", "as", "is", "it", "its", "into", "using", "use",
    "some", "their", "this", "that", "through", "via", "when", "how",
}

DETAILS_NAME = re.compile(r"^v(\d+)n(\d+)-([a-z0-9]+)(?:-(\d+))?\.html$")

# SPDX identifiers, keyed by the licence URL in DC.Rights (http and https both
# appear upstream, so the scheme is normalised away before lookup).
LICENSES = {
    "creativecommons.org/licenses/by-nc-sa/4.0": "CC-BY-NC-SA-4.0",
    "creativecommons.org/licenses/by-sa/4.0": "CC-BY-SA-4.0",
    "creativecommons.org/licenses/by-nc/4.0": "CC-BY-NC-4.0",
    "creativecommons.org/licenses/by/4.0": "CC-BY-4.0",
}


def strip_accents(text: str) -> str:
    return "".join(c for c in unicodedata.normalize("NFKD", text) if not unicodedata.combining(c))


def clean_text(raw: str) -> str:
    """Unescape HTML and repair the upstream's double-escaped non-breaking spaces.

    13 abstracts contain the literal characters '&amp;nbsp;', which renders on
    their site as the visible text '&nbsp;' mid-sentence. Unescaping once turns
    that into '&nbsp;', which we then drop; a genuine &nbsp; entity unescapes to
    \\xa0 and is dropped by the same pass.
    """
    text = htmllib.unescape(raw)
    text = text.replace("&nbsp;", " ").replace("\xa0", " ")
    text = re.sub(r"<[^>]+>", "", text)
    return re.sub(r"\s+", " ", text).strip()


def find_corruption(text: str) -> str | None:
    """Report mis-encoded text rather than silently importing or 'fixing' it.

    v5n2-manthey carries 'Poincare' + U+00CC + U+0081 -- a UTF-8 combining acute
    (CC 81 = U+0301) that was decoded as Latin-1 at some point. Mapping the pair
    back to U+0301 is easy, but that file's spacing is damaged too
    ('ThePoincare <acute>disk'), so recombining it means guessing where three
    spaces belong. A journal should not guess at an author's abstract.
    """
    controls = sorted({f"U+{ord(c):04X}" for c in text if unicodedata.category(c) == "Cc"})
    if controls:
        return (
            f"text contains control characters ({', '.join(controls)}), which usually means "
            "a Latin-1/UTF-8 mis-decode upstream; copy the correct text from the PDF by hand"
        )
    return None


def metas(src: str, name: str) -> list[str]:
    return [htmllib.unescape(m) for m in re.findall(rf'<meta name="{name}" content="([^"]*)"', src)]


def load_issue_years(path: str) -> dict[tuple[int, int], dict]:
    """Map (volume, issue) -> issue record from articles.js, via a real JS engine."""
    script = (
        "const fs = require('fs');"
        "const src = fs.readFileSync(process.argv[1], 'utf8');"
        "const data = eval(src + '\\n;NAGJ_DATA;');"
        "process.stdout.write(JSON.stringify(data));"
    )
    try:
        result = subprocess.run(["node", "-e", script, path], capture_output=True, text=True, check=True)
    except FileNotFoundError:
        sys.exit("node is required to read articles.js (it is JavaScript, not JSON)")
    except subprocess.CalledProcessError as exc:
        sys.exit(f"node could not evaluate {path}:\n{exc.stderr}")

    return {(i["volume"], i["number"]): i for i in json.loads(result.stdout)["issues"]}


def guess_keyword(title: str) -> str:
    """First distinguishing word of the title, falling back to the journal's subject."""
    for word in re.findall(r"[A-Za-z][A-Za-z0-9]*", strip_accents(title)):
        if word.lower() not in STOPWORDS:
            return word.lower()
    return "geogebra"


def parse_details(path: str, issues: dict) -> tuple[dict | None, dict | None]:
    name = os.path.basename(path)
    parsed = DETAILS_NAME.match(name)
    if not parsed:
        return None, {"file": name, "reason": "filename does not match vXXnY-surname[-N].html"}

    vol, num, surname, _dup = (int(parsed.group(1)), int(parsed.group(2)), parsed.group(3), parsed.group(4))
    src = open(path, encoding="utf-8").read()

    title = (metas(src, "citation_title") or [""])[0]
    if not title:
        return None, {"file": name, "reason": "no citation_title"}

    issue = issues.get((vol, num))
    if not issue:
        return None, {"file": name, "reason": f"no issue v{vol}n{num} in articles.js (needed for the volume year)"}

    names = metas(src, "citation_author")
    affils = metas(src, "citation_author_institution")
    authors = [
        {"name": n, "affiliation": affils[i] if i < len(affils) else None}
        for i, n in enumerate(names)
    ]

    abstract_match = re.search(r"<h2[^>]*>Abstract</h2>\s*<p[^>]*>(.*?)</p>", src, re.DOTALL)
    abstract = clean_text(abstract_match.group(1)) if abstract_match else ""
    if not abstract:
        return None, {"file": name, "reason": "no abstract found on the details page"}

    corruption = find_corruption(abstract + " " + title)
    if corruption:
        return None, {"file": name, "reason": corruption}

    kw_match = re.search(r"<strong>Keywords:</strong>(.*?)</p>", src, re.DOTALL)
    keywords = []
    if kw_match:
        seen = set()
        for k in clean_text(kw_match.group(1)).split(","):
            k = k.strip()
            if k and k.lower() not in seen:
                seen.add(k.lower())
                keywords.append(k)

    # 16 legacy articles list no keywords. Every article in this journal is about
    # GeoGebra, so the editor's ruling is to default to it rather than publish a
    # record with an empty keyword list.
    if not keywords:
        keywords = ["GeoGebra"]

    first = (metas(src, "citation_firstpage") or [None])[0]
    last = (metas(src, "citation_lastpage") or [None])[0]
    pages = f"{first}--{last}" if first and last else None

    rights = (metas(src, "DC.Rights") or [""])[0]
    key = re.sub(r"^https?://", "", rights).rstrip("/")
    license_id = LICENSES.get(key)

    pub = (metas(src, "citation_publication_date") or [""])[0].replace("/", "-")
    year = issue["year"]

    return {
        "pdf": name.replace(".html", ".pdf"),
        "details": name,
        "slug": f"{surname}{year}{guess_keyword(title)}",
        "title": title,
        "authors": authors,
        "volume": vol,
        "issue": num,
        "year": year,
        "date": pub or f"{year}-01-01",
        "pages": pages,
        "article_type": "Proceedings Article" if issue.get("isProceedings") else "Research Article",
        "license": license_id,
        "keywords": keywords,
        "abstract": abstract,
        "legacy_url": rights and (metas(src, "citation_abstract_html_url") or [None])[0],
    }, None


def to_yaml(entries: list[dict], problems: list[dict]) -> str:
    def s(v):
        if v is None:
            return "null"
        if isinstance(v, int):
            return str(v)
        return '"' + str(v).replace("\\", "\\\\").replace('"', '\\"') + '"'

    out = [
        "# Import map for the legacy NAGJ archive.",
        "# Generated by scripts/propose_import_map.py from the upstream details pages.",
        "#",
        "# Every `slug` ends in a keyword GUESSED from the title. Review each one,",
        "# then run scripts/apply_import_map.py to write the _articles records.",
        "",
        "articles:",
    ]
    for e in entries:
        out.append(f"  - pdf: {s(e['pdf'])}")
        if e.get("duplicate"):
            out.append(
                "    # !! COLLISION: another article proposes this exact slug. Both papers"
                "\n    #    share a first author, year, and opening title word. Give each a"
                "\n    #    distinct keyword before applying, or one PDF will overwrite the other."
            )
            out.append(f"    slug: {s(e['slug'])}        # <- MUST CHANGE")
        else:
            out.append(f"    slug: {s(e['slug'])}        # <- review the keyword")
        out.append(f"    title: {s(e['title'])}")
        out.append("    authors:")
        for a in e["authors"]:
            out.append(f"      - name: {s(a['name'])}")
            out.append(f"        affiliation: {s(a['affiliation'])}")
        out.append(f"    volume: {e['volume']}")
        out.append(f"    issue: {e['issue']}")
        out.append(f"    year: {e['year']}")
        out.append(f"    date: {s(e['date'])}")
        out.append(f"    pages: {s(e['pages'])}")
        out.append(f"    article_type: {s(e['article_type'])}")
        out.append(f"    license: {s(e['license'])}")
        out.append("    keywords:")
        for k in e["keywords"]:
            out.append(f"      - {s(k)}")
        out.append(f"    abstract: {s(e['abstract'])}")
        out.append("")

    out.append("# Could not be imported automatically -- each needs a human decision.")
    out.append("problems:")
    if not problems:
        out.append("  []")
    for p in problems:
        out.append(f"  - file: {s(p['file'])}")
        out.append(f"    reason: {s(p['reason'])}")
    return "\n".join(out) + "\n"


def main() -> int:
    parser = argparse.ArgumentParser(description="Propose a legacy archive import mapping.")
    parser.add_argument("--details-dir", required=True, help="upstream articles/ directory of details pages")
    parser.add_argument("--catalog", default=CATALOG, help="path to articles.js (for volume years)")
    parser.add_argument("--out", help="write YAML here (default: stdout)")
    args = parser.parse_args()

    issues = load_issue_years(args.catalog)

    entries, problems = [], []
    for path in sorted(glob.glob(os.path.join(args.details_dir, "*.html"))):
        entry, problem = parse_details(path, issues)
        (entries if entry else problems).append(entry or problem)

    # Two papers by one author, in one issue, whose titles open with the same
    # word collide on the guessed keyword. Applying that would have one PDF
    # overwrite the other, so mark them loudly instead of picking a winner.
    counts = collections.Counter(e["slug"] for e in entries)
    duplicates = {slug for slug, n in counts.items() if n > 1}
    for entry in entries:
        if entry["slug"] in duplicates:
            entry["duplicate"] = True

    text = to_yaml(entries, problems)
    if args.out:
        with open(args.out, "w", encoding="utf-8") as handle:
            handle.write(text)
        print(f"wrote {args.out}")
    else:
        print(text)

    print(f"\nimported: {len(entries)}", file=sys.stderr)
    print(f"problems: {len(problems)}", file=sys.stderr)
    if duplicates:
        print(f"slug collisions that MUST be resolved: {len(duplicates)}", file=sys.stderr)
        for slug in sorted(duplicates):
            print(f"  {slug}", file=sys.stderr)
    return 0


if __name__ == "__main__":
    sys.exit(main())
