---
layout: default
title: Submit
---

<span class="eyebrow">Authors</span>

# Submit a Manuscript

<p class="page-lead">
The North American GeoGebra Journal welcomes work on the use of GeoGebra in
mathematics education, K&ndash;16. There are no submission fees and no
publication fees, at any stage.
</p>

<p>
<strong>How it works:</strong> you write your paper in Markdown from our
<a href="https://github.com/NorthAmericanGeoGebraJournal/article-template" target="_blank" rel="noopener">article template</a>,
then open a submission issue on our
<a href="https://github.com/NorthAmericanGeoGebraJournal/editorial/issues/new/choose" target="_blank" rel="noopener">editorial repository</a>.
Review happens there in the open &mdash; with named reviewers and a permanent,
citable record.
</p>

<p>
You can write your manuscript offline in any text editor. To submit, it needs to
live in a GitHub repository so the journal can build and review it &mdash; but
that does <em>not</em> require git or the command line: start from the template
in your browser and upload your <code>paper.md</code> and figures by drag and
drop. New to GitHub, or would rather not? Say so in the submission issue and
we'll set the repository up for you.
</p>

Submission and peer review happen on GitHub, in the open. Before you begin,
please know what that means:

- **Review is public and signed.** The review conversation takes place in a
  public GitHub issue, reviewers are named, and the thread is permanent and
  citable &mdash; whether the paper is accepted or not.
- **You write in Markdown.** You submit a `paper.md` file; the journal builds the
  typeset PDF for you, in the NAGJ house style.
- **A GeoGebra applet is welcome but not required.** A paper that gives the
  construction commands, or figures a reader can follow, is complete without one.
  Where a resource does exist, you host it (normally on geogebra.org) and we
  record its permanent URL. We do not host applets.

## How to submit

<div class="card">
<div class="card-title">Step 1 &middot; Start from the template</div>
<p>
Create your manuscript from the article template. Click <strong>Use this
template</strong> to get your own repository with <code>paper.md</code>,
a bibliography, a figures folder, and a workflow that builds your PDF.
</p>
<a class="btn primary" href="https://github.com/NorthAmericanGeoGebraJournal/article-template" target="_blank" rel="noopener">
Get the article template &nearr;
</a>
</div>

<div class="card">
<div class="card-title">Step 2 &middot; Write your paper</div>
<p>
Write in <code>paper.md</code> using Markdown for text and LaTeX for
mathematics. Push to your repository and the build workflow produces a PDF in
the journal's style, so you can see exactly how your article will look before
you submit. See the <a href="#preparation">preparation guidelines</a> below.
</p>
</div>

<div class="card">
<div class="card-title">Step 3 &middot; Open a submission issue</div>
<p>
When your manuscript is ready, open a submission issue in the editorial
repository. The form walks you through the author checklist and records your
consent to open review. An editor checks scope and conflicts, then assigns
reviewers.
</p>
<a class="btn primary" href="https://github.com/NorthAmericanGeoGebraJournal/editorial/issues/new/choose" target="_blank" rel="noopener">
Open a submission issue &nearr;
</a>
</div>

<h2 id="preparation">Manuscript preparation</h2>

Your `paper.md` front matter carries the article's metadata &mdash; it becomes
the PDF, the article page, and the citation record. Include:

- **Title**
- **Authors** &mdash; name, affiliation, ORCID and email where available; mark
  the corresponding author
- **Abstract** &mdash; roughly 200 words, one paragraph, no citations
- **Keywords**
- **Article type** &mdash; Research Article, Teaching Note, Classroom Activity,
  or Technical Note

The body then contains your text, mathematics, figures, and references. Do not
include volume, issue, or page numbers &mdash; the journal assigns those at
acceptance.

**The question reviewers care about most:** could a reader recreate what you
describe? Satisfy it with a linked GeoGebra resource, the construction commands,
or figures with a described procedure. Any one is enough; an applet is not
required.

## Review and publication

<a href="https://github.com/NorthAmericanGeoGebraJournal/editorial/blob/main/checklists/author.md" target="_blank" rel="noopener">Author checklist</a>
&nbsp;&middot;&nbsp;
<a href="https://github.com/NorthAmericanGeoGebraJournal/editorial/blob/main/checklists/reviewer.md" target="_blank" rel="noopener">Reviewer checklist</a>
&nbsp;&middot;&nbsp;
<a href="https://github.com/NorthAmericanGeoGebraJournal/editorial/blob/main/policies/review-process.md" target="_blank" rel="noopener">Review process</a>

Submitted manuscripts are reviewed openly by members of the NAGJ editorial
community. Accepted articles are published under
<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC BY 4.0</a>,
with a permanent link back to their review record.

<div class="notice">
<span class="notice-icon">&#9432;</span>
<div>
New to GitHub, or unable to use a repository? That's fine &mdash; open a
submission issue anyway and note it there, or
<a href="{{ '/contact.html' | relative_url }}">contact the editor</a>, and we'll
help you through it.
</div>
</div>
