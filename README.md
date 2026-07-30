# North American GeoGebra Journal — website

![Open Access](https://img.shields.io/badge/Open%20Access-Yes-brightgreen)
![Peer Review](https://img.shields.io/badge/Peer%20Review-Open-blue)
![ISSN](https://img.shields.io/badge/ISSN-2162--3856-lightgrey)
![Built with Jekyll](https://img.shields.io/badge/Built%20with-Jekyll-CC0000?logo=jekyll&logoColor=white)
![Validate](https://github.com/NorthAmericanGeoGebraJournal/website/actions/workflows/validate.yml/badge.svg)

The public website of the **North American GeoGebra Journal (NAGJ)** — a
peer-reviewed, open-access journal on GeoGebra and other interactive
mathematics software in education, K–16. Published continuously since 2012.
ISSN 2162-3856.

**Live site:** https://northamericangeogebrajournal.github.io/website/
**Legacy OJS archive (2012–2026):** https://mathed.miamioh.edu/index.php/ggbj

> The journal moved from Miami University to the University of Southern Maine in
> 2026 and adopted open peer review. The full back catalogue has been migrated
> here; the legacy OJS site remains available but is no longer updated.

## The three repositories

This repo is one part of a GitHub-native, JOSS-like publishing system:

| Repo | Role |
| --- | --- |
| [**website**](https://github.com/NorthAmericanGeoGebraJournal/website) (this one) | The public Jekyll site: published articles, archives, editorial pages. |
| [**editorial**](https://github.com/NorthAmericanGeoGebraJournal/editorial) | Submissions and open peer review, conducted as GitHub Issues. Holds the manuscript LaTeX template and review checklists. |
| [**article-template**](https://github.com/NorthAmericanGeoGebraJournal/article-template) | What authors "Use this template" from — `paper.md`, `paper.bib`, and a build workflow that produces a journal-styled PDF. |

**Authors start at `article-template`, not here.** See
[submit](https://northamericangeogebrajournal.github.io/website/submit.html)
for the full process.

## How the site is built

A [Jekyll](https://jekyllrb.com/) static site, deployed by GitHub Pages. There
is no application server and no database.

```
_articles/          One Markdown record per published article — the source of truth.
_data/issues.yml    Issue-level metadata (volumes, proceedings, publication dates).
_layouts/           default.html (chrome) and article.html (article pages).
_includes/          header, footer, and citation-meta.html (Highwire tags).
_config.yml         Site + masthead metadata.
assets/papers/      Article PDFs, at vXX/nY/<slug>.pdf.
assets/css/         shared.css — the whole design system.
schemas/            JSON Schema every article record is validated against.
scripts/            Metadata validator and the legacy-archive importer.
```

An article lives at `/articles/<slug>/`, generated from
`_articles/<slug>.md`. Each article page emits Highwire `citation_*` meta tags,
which is what makes the corpus indexable by Google Scholar.

### Running it locally

```bash
gem install bundler jekyll
jekyll serve            # http://localhost:4000/website/
```

Note the `/website/` path — `_config.yml` sets `baseurl: "/website"` to match
the GitHub Pages project URL. Always link with Jekyll's `relative_url` filter so
links survive the eventual cutover to a custom domain.

### Validating article metadata

```bash
python3 scripts/validate_metadata.py
```

Checks every record in `_articles/` against `schemas/metadata.schema.json`:
slug/filename agreement, PDF existence, whether the PDF path matches the
declared volume and issue, and the extra fields that `status: published`
requires. It runs automatically on any pull request touching `_articles/`.

## Workflows

| Workflow | Trigger | What it does |
| --- | --- | --- |
| `validate.yml` | PR touching `_articles/**` | Runs the metadata validator. |
| `build-paper.yml` | Manual | Builds a manuscript PDF in the journal style. |
| `import-archive.yml` | Manual | Proposes an import map from the legacy archive. |
| `apply-archive.yml` | Manual | Applies a reviewed import map, creating records. |

## Contributing

- **Submitting an article?** Don't open a PR here. Start from
  [article-template](https://github.com/NorthAmericanGeoGebraJournal/article-template)
  and open a submission issue on
  [editorial](https://github.com/NorthAmericanGeoGebraJournal/editorial/issues/new/choose).
  Accepted articles are added to this repo by the editors.
- **Found an error in a published record?** A typo, a mangled author name, a
  missing page range — open an issue or a PR against the relevant
  `_articles/<slug>.md`. Corrections are welcome; author names imported from the
  legacy platform lost their diacritics and we are still repairing them.
- **Site bug or design fix?** Issues and PRs welcome.

## Licence

Site code and templates: **MIT** (see `LICENSE`).

Article content is licensed per article — the field is recorded in each record's
front matter. The legacy corpus is almost entirely **CC BY-NC-SA 4.0**.

## Contact

geogebrajournal@gmail.com
