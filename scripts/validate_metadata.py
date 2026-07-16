#!/usr/bin/env python3
"""Validate NAGJ article metadata records.

Structural validation is delegated to schemas/metadata.schema.json. This script
adds the journal-specific consistency checks that JSON Schema cannot express
conveniently -- the ones that catch real drift between a record, its filename,
and its PDF on disk.

Usage:
    python scripts/validate_metadata.py                 # every _articles/*.md
    python scripts/validate_metadata.py FILE [FILE...]  # specific records
    python scripts/validate_metadata.py --format github # annotations for CI

Exits 0 if every record is valid, 1 otherwise.
"""

from __future__ import annotations

import argparse
import datetime
import glob
import json
import os
import re
import sys

try:
    import yaml
    from jsonschema import Draft202012Validator, FormatChecker
except ImportError as exc:
    sys.exit(f"missing dependency: {exc.name}. Install with: pip install pyyaml jsonschema")


REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEFAULT_SCHEMA = os.path.join(REPO_ROOT, "schemas", "metadata.schema.json")

# Front matter is the block between the first two lines that are exactly '---'.
# Splitting on a bare '---' would truncate any abstract containing a horizontal
# rule or an em-dash line.
FRONT_MATTER = re.compile(r"\A---\s*\n(.*?)\n---\s*(?:\n|\Z)", re.DOTALL)


class Problem:
    """One validation failure, tied to a field where we can name one."""

    def __init__(self, field: str, message: str):
        self.field = field
        self.message = message

    def __str__(self) -> str:
        return f"{self.field}: {self.message}" if self.field else self.message


def read_front_matter(path: str) -> dict:
    """Return the parsed front matter, raising ValueError if it isn't usable."""
    with open(path, encoding="utf-8") as handle:
        text = handle.read()

    match = FRONT_MATTER.match(text)
    if not match:
        raise ValueError("no YAML front matter found (expected a '---' delimited block at the top)")

    try:
        data = yaml.safe_load(match.group(1))
    except yaml.YAMLError as exc:
        raise ValueError(f"front matter is not valid YAML -- {exc}") from exc

    if not isinstance(data, dict):
        raise ValueError("front matter did not parse to a mapping")

    return data


def normalize(value):
    """Coerce YAML-native types into their JSON equivalents.

    YAML turns an unquoted `date: 2012-01-01` into a datetime.date, which is not
    a JSON string and would fail the schema. Records should quote their dates,
    but authors won't always remember.
    """
    if isinstance(value, (datetime.date, datetime.datetime)):
        return value.isoformat()
    if isinstance(value, dict):
        return {k: normalize(v) for k, v in value.items()}
    if isinstance(value, list):
        return [normalize(v) for v in value]
    return value


def check_schema(data: dict, validator: Draft202012Validator) -> list[Problem]:
    problems = []
    for error in sorted(validator.iter_errors(data), key=lambda e: list(e.path)):
        field = "/".join(str(p) for p in error.path)
        problems.append(Problem(field, error.message))
    return problems


def check_consistency(data: dict, path: str, root: str) -> list[Problem]:
    """Journal rules that span fields, the filename, and the filesystem."""
    problems = []
    slug = data.get("slug")
    status = data.get("status")

    stem = os.path.splitext(os.path.basename(path))[0]
    if slug and stem != slug:
        problems.append(Problem("slug", f"does not match the filename stem '{stem}'"))

    citation_key = data.get("citation_key")
    if citation_key and slug and citation_key != slug:
        problems.append(Problem("citation_key", f"'{citation_key}' does not match slug '{slug}'"))

    # `year` is the VOLUME year and `date` is when the issue actually appeared;
    # they legitimately differ. Volume 3, No. 1 is the 2014 volume but was
    # published 2013-11-15, as are all of v3n1's articles. Do not check them
    # against each other -- the disagreement is the journal's convention, not an
    # error.

    pdf = data.get("pdf")
    if pdf:
        pdf_stem = os.path.splitext(os.path.basename(pdf))[0]
        if slug and pdf_stem != slug:
            problems.append(Problem("pdf", f"filename stem '{pdf_stem}' does not match slug '{slug}'"))

        on_disk = os.path.join(root, pdf.lstrip("/"))
        if not os.path.isfile(on_disk):
            problems.append(Problem("pdf", f"file does not exist at {pdf}"))

        volume, issue = data.get("volume"), data.get("issue")
        if isinstance(volume, int) and isinstance(issue, int):
            expected = f"/assets/papers/v{volume:02d}/n{issue}/"
            if not pdf.startswith(expected):
                problems.append(
                    Problem("pdf", f"path disagrees with volume {volume}, issue {issue} (expected {expected}...)")
                )

    authors = data.get("authors")
    if status == "published" and isinstance(authors, list):
        # Legacy records predate the field, so this applies to new articles only.
        if not any(a.get("corresponding") for a in authors if isinstance(a, dict)):
            problems.append(Problem("authors", "no author is marked corresponding: true"))

    return problems


def validate(path: str, validator: Draft202012Validator, root: str) -> list[Problem]:
    try:
        data = normalize(read_front_matter(path))
    except (OSError, ValueError) as exc:
        return [Problem("", str(exc))]

    problems = check_schema(data, validator)
    problems += check_consistency(data, path, root)
    return problems


def main() -> int:
    parser = argparse.ArgumentParser(description="Validate NAGJ article metadata records.")
    parser.add_argument("files", nargs="*", help="records to check (default: every _articles/*.md)")
    parser.add_argument("--schema", default=DEFAULT_SCHEMA, help="path to metadata.schema.json")
    parser.add_argument("--root", default=REPO_ROOT, help="repository root, for resolving PDF paths")
    parser.add_argument(
        "--format",
        choices=["text", "github"],
        default="text",
        help="'github' emits ::error annotations for Actions",
    )
    args = parser.parse_args()

    paths = args.files or sorted(glob.glob(os.path.join(args.root, "_articles", "*.md")))
    if not paths:
        print("no article records found")
        return 0

    try:
        with open(args.schema, encoding="utf-8") as handle:
            schema = json.load(handle)
    except (OSError, json.JSONDecodeError) as exc:
        sys.exit(f"could not load schema {args.schema}: {exc}")

    validator = Draft202012Validator(schema, format_checker=FormatChecker())

    failed = 0
    for path in paths:
        problems = validate(path, validator, args.root)
        rel = os.path.relpath(path, args.root)

        if not problems:
            print(f"ok    {rel}")
            continue

        failed += 1
        print(f"FAIL  {rel}")
        for problem in problems:
            print(f"      {problem}")
            if args.format == "github":
                print(f"::error file={rel}::{problem}")

    print()
    checked = len(paths)
    if failed:
        print(f"{failed} of {checked} record{'s' if checked != 1 else ''} invalid")
        return 1

    print(f"{checked} record{'s' if checked != 1 else ''} valid")
    return 0


if __name__ == "__main__":
    sys.exit(main())
