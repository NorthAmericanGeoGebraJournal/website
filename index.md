---
layout: default
title: North American GeoGebra Journal
---

<style>
/* ── HOME-SPECIFIC: above-the-fold grid ── */
.home-grid {
  display: grid;
  grid-template-columns: 1fr 340px;
  grid-template-rows: auto auto;
  gap: 1.5rem;
  margin-top: 0;
}

.current-issue-panel {
  grid-column: 1;
  grid-row: 1 / 3;
}

.quick-links-panel {
  grid-column: 2;
  grid-row: 1;
}

.about-panel {
  grid-column: 2;
  grid-row: 2;
}

.quick-links {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
}

.quick-tile {
  background: var(--white);
  border: 1px solid var(--gray-100);
  border-radius: 6px;
  padding: 1rem;
  text-decoration: none !important;
  transition: border-color 0.15s, box-shadow 0.15s, transform 0.1s;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
}

.quick-tile:hover {
  border-color: var(--blue);
  box-shadow: 0 4px 12px rgba(37,99,176,0.12);
  transform: translateY(-1px);
  text-decoration: none;
}

.tile-icon {
  font-size: 1.3rem;
  line-height: 1;
}

.tile-label {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--blue);
}

.tile-desc {
  font-size: 0.75rem;
  color: var(--gray-500);
  line-height: 1.4;
}

.current-issue-panel .issue-header {
  margin-bottom: 1rem;
}

.section-header-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
}

.section-header-row .eyebrow {
  margin-bottom: 0;
}

.section-header-row a {
  font-size: 0.75rem;
  color: var(--blue);
}

.about-panel .card {
  height: 100%;
}

.about-bullets {
  list-style: none;
  font-size: 0.8rem;
}

.about-bullets li {
  display: flex;
  justify-content: space-between;
  padding: 0.35rem 0;
  border-bottom: 1px solid var(--gray-100);
  color: var(--gray-700);
}

.about-bullets li:last-child {
  border-bottom: none;
}

.about-bullets .val {
  font-weight: 600;
  color: var(--navy);
}

.usm-logo-block {
  margin-top: 1.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--gray-100);
  text-align: center;
}

.usm-logo-block img {
  /* Fills the right-nav column (340px) so its edges align with the tile grid,
     and the cap keeps it that size when the column stacks full-width on mobile.
     To make the logo smaller, lower this max-width (e.g. 240px). */
  width: 100%;
  max-width: 340px;
  height: auto;
  opacity: 0.85;
  transition: opacity 0.15s;
}

.usm-logo-block a:hover img {
  opacity: 1;
}

.usm-logo-caption {
  font-size: 0.68rem;
  color: var(--gray-500);
  margin-top: 0.6rem;
  letter-spacing: 0.02em;
  line-height: 1.4;
}

.migration-banner {
  background: var(--amber-light);
  border: 1px solid #fcd34d;
  border-radius: 6px;
  padding: 0.7rem 1rem;
  font-size: 0.8rem;
  color: #78350f;
  margin-bottom: 1.25rem;
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
  line-height: 1.5;
}

.migration-banner a {
  color: #92400e;
  font-weight: 600;
  text-decoration: underline;
}

/* ── HOME-SPECIFIC: news / call-for-participation panel ── */
.news-panel {
  border: 1px solid var(--gray-100);
  border-left: 3px solid var(--blue);
  border-radius: 6px;
  background: var(--white);
  padding: 1.5rem 1.75rem;
  margin-bottom: 1.75rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
}

.news-panel .eyebrow {
  display: block;
  margin-bottom: 0.5rem;
}

.news-title {
  font-family: 'Lora', Georgia, serif;
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--navy);
  line-height: 1.25;
  margin-bottom: 0.85rem;
}

.news-panel p {
  font-size: 0.88rem;
  color: var(--gray-700);
  line-height: 1.75;
  margin-bottom: 0.8rem;
  max-width: 68ch;
}

.news-panel p:last-of-type {
  margin-bottom: 0;
}

.news-calls {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 0.9rem;
  margin-top: 1.4rem;
  padding-top: 1.4rem;
  border-top: 1px solid var(--gray-100);
}

.switch-date {
  display: inline-block;
  background: var(--blue-light);
  color: var(--navy);
  font-weight: 700;
  padding: 0.1rem 0.4rem;
  border-radius: 3px;
  white-space: nowrap;
}

.call-card {
  display: block;
  background: var(--gray-50);
  border: 1px solid var(--gray-100);
  border-radius: 6px;
  padding: 1rem 1.1rem;
  text-decoration: none !important;
  transition: border-color 0.15s, box-shadow 0.15s, transform 0.1s;
}

.call-card:hover {
  border-color: var(--blue);
  box-shadow: 0 4px 12px rgba(37,99,176,0.12);
  transform: translateY(-1px);
}

.call-title {
  display: block;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--blue);
  margin-bottom: 0.3rem;
}

.call-desc {
  display: block;
  font-size: 0.78rem;
  color: var(--gray-500);
  line-height: 1.55;
}

@media (max-width: 840px) {
  .news-calls {
    grid-template-columns: 1fr;
  }

  .home-grid {
    grid-template-columns: 1fr;
  }

  .current-issue-panel,
  .quick-links-panel,
  .about-panel {
    grid-column: 1;
    grid-row: auto;
  }
}
</style>


<div class="page-container">

<div class="migration-banner">
  <span>⚠</span>
  <span>
    <strong>Platform migration in progress.</strong>
    All back volumes remain available at the
    <a href="https://mathed.miamioh.edu/index.php/ggbj" target="_blank">
      legacy OJS site
    </a>.
    Questions?
    <a href="contact.html">Contact the editor</a>
  </span>
</div>


<div class="news-panel">

<span class="eyebrow">Announcement &nbsp;&middot;&nbsp; Effective 1 September 2026</span>

<div class="news-title">
NAGJ is moving to open peer review
</div>

<p>
Since its founding in 2012, the <em>North American GeoGebra Journal</em> has used
<strong>double-blind peer review</strong>, with the identities of authors and
reviewers concealed from one another. From
<span class="switch-date">1 September 2026</span>, NAGJ is switching to
<strong>open peer review</strong>.
</p>

<p>
Under the new model, submission and review take place in public on GitHub:
reviewers are <strong>named and credited</strong> for their work, the review
conversation is permanent and citable, and every published article links back to
the record of its own review. There are no submission or publication fees, and
there never have been.
</p>

<p>
The change accompanies the journal&rsquo;s move from Miami University to the
University of Southern Maine. The reasoning is straightforward: refereeing is
scholarly labor, and it should be visible and creditable. Open review also lets
a reader see how a paper&rsquo;s argument was tested, not merely that it passed.
</p>

<p>
We are also <strong>broadening our scope</strong>. GeoGebra remains at the heart of
this journal, but the questions our authors care about &mdash; visualization,
exploration, dynamic representation, and what happens when students build
mathematics rather than watch it &mdash; are not confined to a single program. We now
welcome work on interactive mathematics software generally: Desmos, CindyJS,
Sage and Jupyter, and web-native applets, alongside GeoGebra.
</p>

<p>
Because of that widening, the editorial board is <strong>considering a change of
name</strong> to reflect what the journal actually publishes. Nothing has been decided,
and we would rather hear from the community before it is. If you have a view,
<a href="contact.html">tell the editor</a>.
</p>

<p>
<strong>A new review model needs a bigger bench.</strong> We are actively recruiting
<strong>reviewers</strong> and <strong>editorial board members</strong> across dynamic
geometry, linear algebra, statistics education, teacher preparation, and
computational tools for mathematics teaching &mdash; and we welcome
<strong>submissions</strong> from anyone doing this work, from K&ndash;12 classrooms to
undergraduate instruction.
</p>

<div class="news-calls">

<a href="submit.html" class="call-card">
  <span class="call-title">Call for Authors &rarr;</span>
  <span class="call-desc">
    Write in Markdown from our template; we typeset it. Named reviewers, no fees
    at any stage.
  </span>
</a>

<a href="contact.html" class="call-card">
  <span class="call-title">Call for Reviewers &rarr;</span>
  <span class="call-desc">
    Tell us your areas and the software you know. Reviewers are publicly
    credited for every review they complete.
  </span>
</a>

<a href="contact.html" class="call-card">
  <span class="call-title">Editorial Board &rarr;</span>
  <span class="call-desc">
    Help shape policy and handle submissions in your specialism. Board members
    are listed on the Editorial Team page.
  </span>
</a>

</div>

</div>


<div class="home-grid">


<div class="current-issue-panel">

<div class="section-header-row">
<span class="eyebrow">Current Issue</span>
<a href="archives.html">View all archives →</a>
</div>


<div id="current-issue-render"></div>


<div style="margin-top:2rem;padding-top:1.5rem;border-top:1px solid var(--gray-100);">

<span class="eyebrow" style="margin-bottom:0.6rem;">
About the Journal
</span>


<p style="font-size:0.9rem;color:var(--gray-700);line-height:1.75;margin-bottom:0.75rem;">
The North American GeoGebra Journal (NAGJ) is a peer-reviewed academic publication
dedicated to disseminating high-quality articles focused on the innovative use of
GeoGebra in mathematics education across grades K to 16 (kindergarten to undergraduate levels).
</p>


<p style="font-size:0.9rem;color:var(--gray-700);line-height:1.75;margin-bottom:0.75rem;">
GeoGebra is a powerful dynamic mathematics software that combines geometry, algebra,
calculus, and other mathematical tools, making it an essential resource for teachers
and learners alike.
</p>


<p style="font-size:0.9rem;color:var(--gray-700);line-height:1.75;">
The journal aims to showcase cutting-edge research, best practices, and practical
applications in various educational settings, including primary schools,
secondary schools, and higher education institutions. As of 2026 our scope extends
beyond GeoGebra to interactive mathematics software generally.
</p>

</div>

</div>



<div class="quick-links-panel">

<span class="eyebrow" style="margin-bottom:0.6rem;display:block;">
Explore
</span>

<div class="quick-links" id="quick-links-render"></div>

<div class="usm-logo-block">
  <a href="https://usm.maine.edu/department-computer-science/" target="_blank" rel="noopener">
    <img src="{{ '/assets/images/usm-cs-logo.png' | relative_url }}"
         alt="University of Southern Maine — Department of Computer Science">
  </a>
  <div class="usm-logo-caption">
    Hosted by the Department of Computer Science<br>
    University of Southern Maine
  </div>
</div>

</div>



<div class="about-panel">

<div class="card">

<div class="card-title">About NAGJ</div>

<p style="font-size:0.82rem;margin-bottom:0.75rem;"
id="about-blurb"></p>

<ul class="about-bullets" id="about-stats"></ul>


<a href="submit.html"
class="btn primary"
style="margin-top:0.75rem;">
Submit a Manuscript
</a>


<a href="https://mathed.miamioh.edu/index.php/ggbj"
class="btn secondary"
target="_blank">
Legacy Site ↗
</a>


</div>

</div>


</div>
</div>



<script src="{{ '/assets/js/articles.js' | relative_url }}"></script>


<script>

const j = NAGJ_DATA.journal;
const cur = NAGJ_DATA.issues[0];

const totalArticles =
NAGJ_DATA.issues.reduce((s,i)=>s+i.articles.length,0);



document.getElementById('about-blurb').textContent =
`The NAGJ is a peer-reviewed, open-access journal on GeoGebra and other interactive mathematics software in education, K–16. Founded in 2012; published since 2026 by the University of Southern Maine.`;



document.getElementById('about-stats').innerHTML =
[
['Volumes published',
NAGJ_DATA.issues.filter(i=>!i.isProceedings).length],

['Total articles', totalArticles],

['Acceptance rate', j.acceptanceRate],

['Grade span', j.gradeSpan],

['Submission fees','None'],

['Review type','Open (from 1 Sep 2026)']

]
.map(([k,v]) =>
`<li><span>${k}</span><span class="val">${v}</span></li>`
)
.join('');



const tiles = [

{
href:'archives.html',
icon:'📚',
label:'Archives',
desc:`${NAGJ_DATA.issues.length} issues, ${totalArticles} articles`
},

{
href:'submit.html',
icon:'📝',
label:'Submit',
desc:'Author guidelines & checklist'
},

{
href:'team.html',
icon:'👥',
label:'Editorial Team',
desc:'Editors & reviewers'
},

{
href:'about.html',
icon:'ℹ️',
label:'About',
desc:'Scope, mission & history'
}

];


document.getElementById('quick-links-render').innerHTML =
tiles.map(t =>
`
<a href="${t.href}" class="quick-tile">
<span class="tile-icon">${t.icon}</span>
<span class="tile-label">${t.label}</span>
<span class="tile-desc">${t.desc}</span>
</a>
`
).join('');



const articles =
cur.articles.map(renderArticleRow).join('');


document.getElementById('current-issue-render').innerHTML =
`
<p style="font-size:0.8rem;color:var(--gray-400);margin-bottom:0.75rem;font-style:italic;">
Vol. ${cur.volume}, No. ${cur.number}
&nbsp;·&nbsp;
Published ${cur.published}
&nbsp;·&nbsp;
${cur.subtitle || ''}
</p>

<ul class="article-list">
${articles}
</ul>

<p style="margin-top:0.75rem;font-size:0.78rem;color:var(--gray-400);">
<a href="${j.legacyUrl}/issue/current" target="_blank">
View on legacy site ↗
</a>
</p>
`;

</script>
