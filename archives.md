---
layout: default
title: Archives
---

{%- comment -%}
Only published and archived records belong in the public archive. A draft or a
record still under review must not appear here -- the example article claims
volume 1, issue 1 and would otherwise be listed beside the journal's real first
paper from 2012.
{%- endcomment -%}
{%- assign live = site.articles | where_exp: "a", "a.status != 'draft' and a.status != 'submitted' and a.status != 'under-review' and a.status != 'revision' and a.status != 'accepted'" -%}

{%- assign total = 0 -%}
{%- for issue in site.data.issues -%}
  {%- assign arts = live | where: "volume", issue.volume | where: "issue", issue.issue -%}
  {%- assign total = total | plus: arts.size -%}
{%- endfor -%}

<div class="two-col">
<main>

<span class="eyebrow">Complete Publication Record</span>

<h1 class="page-title">Archives</h1>

<p class="page-lead">
{{ total }} article{% if total != 1 %}s{% endif %} across {{ site.data.issues.size }} issues, 2012&ndash;present.
</p>

<div class="search-row">
  <input type="text" id="q" placeholder="Search by title, author&hellip;" autocomplete="off">
  <span class="result-count" id="rc">{{ total }} articles</span>
</div>

<div id="archive-body">

{% for issue in site.data.issues %}
{%- assign arts = live | where: "volume", issue.volume | where: "issue", issue.issue -%}
{%- if arts.size > 0 %}
<section class="volume-section" id="{{ issue.id }}">

  <div class="volume-heading">
    {% if issue.proceedings %}
    <span class="volume-tag proc">Proceedings</span>
    {% else %}
    <span class="volume-tag">Vol. {{ issue.volume }} &middot; No. {{ issue.issue }}</span>
    {% endif %}
    <span class="volume-title-text">{{ issue.title }}</span>
    <span class="volume-year-tag">{{ issue.year }}</span>
  </div>

  {% if issue.subtitle and issue.proceedings == false %}
  <p style="font-size:0.82rem;color:var(--gray-400);font-style:italic;margin-bottom:0.5rem;">
    {{ issue.subtitle }}
  </p>
  {% endif %}

  {% if issue.full_issue_pdf %}
  <p style="font-size:0.78rem;margin-bottom:0.5rem;color:var(--gray-400);">
    Full issue: <a href="{{ issue.full_issue_pdf }}" target="_blank" rel="noopener">Download PDF &nearr;</a>
  </p>
  {% endif %}

  <ul class="article-list">
  {% for article in arts %}
    {%- capture author_names -%}
      {% for a in article.authors %}{{ a.name }}{% unless forloop.last %}; {% endunless %}{% endfor %}
    {%- endcapture -%}
    <li class="article-row" data-search="{{ article.title | append: ' ' | append: author_names | downcase | strip | escape }}">
      <div>
        <a href="{{ article.url | relative_url }}" class="article-title-link">{{ article.title }}</a>
        <div class="article-authors">{{ author_names | strip }}</div>
        <div class="pill-links">
          {% if article.pdf %}
          <a href="{{ article.pdf | relative_url }}" class="pill pdf-local">PDF</a>
          {% endif %}
          <a href="{{ article.url | relative_url }}" class="pill abstract">Details</a>
        </div>
      </div>
      <div>
        {% if article.pages %}<span class="article-pages">pp. {{ article.pages | replace: '--', '&ndash;' }}</span>{% endif %}
      </div>
    </li>
  {% endfor %}
  </ul>

</section>
{%- endif %}
{% endfor %}

</div>

</main>

<aside class="sidebar">

  <div class="card">
    <div class="card-title">Quick Stats</div>
    <div class="stat-row">
      <div class="stat-box"><span class="stat-val">{{ site.data.issues.size }}</span><span class="stat-lbl">Issues</span></div>
      <div class="stat-box"><span class="stat-val">{{ total }}</span><span class="stat-lbl">Articles</span></div>
      <div class="stat-box"><span class="stat-val">2012</span><span class="stat-lbl">Founded</span></div>
      <div class="stat-box"><span class="stat-val">2162-3856</span><span class="stat-lbl">ISSN</span></div>
    </div>
  </div>

  <div class="card">
    <div class="card-title">Jump to Issue</div>
    <ul>
      {% for issue in site.data.issues %}
      {%- assign arts = live | where: "volume", issue.volume | where: "issue", issue.issue -%}
      {%- if arts.size > 0 %}
      <li><a href="#{{ issue.id }}">Vol. {{ issue.volume }} No. {{ issue.issue }} ({{ issue.year }})</a></li>
      {%- endif %}
      {% endfor %}
    </ul>
  </div>

</aside>
</div>

<script>
// Progressive enhancement: the archive above is fully rendered server-side, so
// it remains readable and indexable with this script disabled or broken.
(function () {
  var box = document.getElementById('q');
  var count = document.getElementById('rc');
  if (!box) return;

  var rows = Array.prototype.slice.call(document.querySelectorAll('.article-row'));
  var sections = Array.prototype.slice.call(document.querySelectorAll('.volume-section'));
  var total = rows.length;

  box.addEventListener('input', function () {
    var q = this.value.trim().toLowerCase();
    var shown = 0;

    rows.forEach(function (row) {
      var match = !q || row.dataset.search.indexOf(q) !== -1;
      row.classList.toggle('hidden', !match);
      if (match) shown++;
    });

    sections.forEach(function (section) {
      var visible = section.querySelectorAll('.article-row:not(.hidden)').length;
      section.classList.toggle('hidden', Boolean(q) && visible === 0);
    });

    count.textContent = q
      ? shown + ' result' + (shown === 1 ? '' : 's')
      : total + ' articles';
  });
})();
</script>
