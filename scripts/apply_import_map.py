#!/usr/bin/env python3
"""Apply a reviewed import map: copy legacy PDFs and write _articles records.

Reads the YAML produced by propose_import_map.py (with its guessed slug keywords
corrected by a human), copies each PDF into assets/papers/vXX/nY/<slug>.pdf, and
writes the matching _articles/<slug>.md record.

Existing records are never overwritten. The upstream metadata is lossy -- author
names arrive with diacritics stripped ('Jan Guncaga' for 'Ján Gunčaga'),
affiliations truncated, and no emails -- so a record someone has already
corrected by hand beats anything this script can generate. Use --force only if
you mean to discard that work.

Usage:
    python scripts/apply_import_map.py --map import-map.yml --pdf-dir upstream/pdfs
    python scripts/apply_import_map.py --map import-map.yml --pdf-dir DIR --dry-run
"""

from __future__ import annotations

import argparse
import collections
import os
import shutil
import sys

try:
    import yaml
except ImportError:
    sys.exit("missing dependency: pyyaml. Install with: pip install pyyaml")

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def quote(value: str) -> str:
    """Double-quote a YAML scalar, escaping what must be escaped."""
    return '"' + str(value).replace("\\", "\\\\").replace('"', '\\"') + '"'


def block(text: str, indent: str = "  ") -> str:
    """Render text as a YAML literal block scalar.

    Abstracts run long and contain colons, quotes and hashes; a block scalar
    sidesteps every one of those quoting hazards.
    """
    words, lines, current = text.split(), [], ""
    for word in words:
        if len(current) + len(word) + 1 > 76:
            lines.append(current)
            current = word
        else:
            current = f"{current} {word}".strip()
    if current:
        lines.append(current)
    return "|\n" + "\n".join(f"{indent}{line}" for line in lines)


def record(entry: dict) -> str:
    out = ["---", "layout: article", ""]
    out.append(f"title: {quote(entry['title'])}")
    out.append(f"slug: {entry['slug']}")
    out.append("")
    out.append("authors:")
    for author in entry["authors"]:
        out.append(f"  - name: {quote(author['name'])}")
        affiliation = author.get("affiliation")
        out.append(f"    affiliation: {quote(affiliation) if affiliation else 'null'}")
        # Never invent an ORCID, and the legacy source has none.
        out.append("    orcid:")
        out.append("    email:")
    out.append("")
    out.append(f"volume: {entry['volume']}")
    out.append(f"issue: {entry['issue']}")
    out.append(f"year: {entry['year']}")
    # Quoted so YAML hands back a string, not a datetime.date, which would fail
    # the schema's "type": "string".
    out.append(f"date: {quote(entry['date'])}")
    out.append(f"pages: {quote(entry['pages']) if entry.get('pages') else 'null'}")
    out.append("")
    out.append(f"article_type: {quote(entry['article_type'])}")
    out.append("status: archived")
    out.append(f"license: {entry['license'] or 'null'}")
    out.append("")
    out.append("keywords:")
    for keyword in entry.get("keywords") or []:
        out.append(f"  - {quote(keyword)}")
    out.append("")
    out.append(f"abstract: {block(entry['abstract'])}")
    out.append("")
    out.append(f"pdf: /assets/papers/v{entry['volume']:02d}/n{entry['issue']}/{entry['slug']}.pdf")
    out.append("")
    out.append("geogebra:")
    out.append("")
    # Legacy articles predate the GitHub workflow; these stay empty by definition.
    out.append("doi:")
    out.append("review_issue:")
    out.append("source_repository:")
    out.append(f"citation_key: {entry['slug']}")
    out.append("---")
    return "\n".join(out) + "\n"


def main() -> int:
    parser = argparse.ArgumentParser(description="Apply a reviewed legacy import map.")
    parser.add_argument("--map", required=True, help="reviewed import-map.yml")
    parser.add_argument("--pdf-dir", required=True, help="directory of upstream PDFs")
    parser.add_argument("--root", default=REPO_ROOT, help="repository root to write into")
    parser.add_argument("--force", action="store_true", help="overwrite existing records (discards hand corrections)")
    parser.add_argument("--dry-run", action="store_true", help="report what would happen, write nothing")
    args = parser.parse_args()

    with open(args.map, encoding="utf-8") as handle:
        data = yaml.safe_load(handle)

    entries = data.get("articles") or []
    problems = data.get("problems") or []
    if not entries:
        sys.exit(f"{args.map} lists no articles")

    # A collision would have one PDF silently overwrite another. Refuse outright
    # rather than pick a winner.
    counts = collections.Counter(e["slug"] for e in entries)
    duplicates = {slug for slug, n in counts.items() if n > 1}
    if duplicates:
        print("refusing to apply: duplicate slugs would overwrite each other", file=sys.stderr)
        for slug in sorted(duplicates):
            print(f"  {slug}", file=sys.stderr)
            for e in entries:
                if e["slug"] == slug:
                    print(f"     {e['pdf']}  {e['title']}", file=sys.stderr)
        print("\nGive each a distinct keyword in the map, then re-run.", file=sys.stderr)
        return 1

    written = skipped = copied = 0
    missing: list[str] = []

    for entry in entries:
        slug = entry["slug"]
        record_path = os.path.join(args.root, "_articles", f"{slug}.md")
        pdf_src = os.path.join(args.pdf_dir, entry["pdf"])
        pdf_dst = os.path.join(
            args.root, "assets", "papers", f"v{entry['volume']:02d}", f"n{entry['issue']}", f"{slug}.pdf"
        )

        if not os.path.isfile(pdf_src):
            missing.append(entry["pdf"])
            continue

        # The PDF and the record are independent. A hand-written record must not
        # stop its PDF from being imported, or the record ends up pointing at a
        # file that never arrives.
        if not os.path.exists(pdf_dst):
            if args.dry_run:
                print(f"would copy  {os.path.relpath(pdf_dst, args.root)}")
            else:
                os.makedirs(os.path.dirname(pdf_dst), exist_ok=True)
                shutil.copy2(pdf_src, pdf_dst)
            copied += 1

        if os.path.exists(record_path) and not args.force:
            print(f"skip   _articles/{slug}.md (already exists; --force to overwrite)")
            skipped += 1
            continue

        if args.dry_run:
            print(f"would write _articles/{slug}.md")
            written += 1
            continue

        os.makedirs(os.path.dirname(record_path), exist_ok=True)
        with open(record_path, "w", encoding="utf-8") as handle:
            handle.write(record(entry))
        written += 1
        print(f"write  _articles/{slug}.md")

    print()
    print(f"records written : {written}")
    print(f"records skipped : {skipped}")
    print(f"PDFs copied     : {copied}")
    if missing:
        print(f"PDFs missing    : {len(missing)}")
        for name in missing:
            print(f"   {name}")
    if problems:
        print(f"\nnot imported (flagged in the map, needs a human): {len(problems)}")
        for p in problems:
            print(f"   {p['file']}: {p['reason']}")

    return 1 if missing else 0


if __name__ == "__main__":
    sys.exit(main())
