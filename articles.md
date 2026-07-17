---
layout: default
title: Articles
---

<div class="page-container">

<span class="eyebrow">Research Articles</span>

<h1 class="page-title">Articles</h1>

<p class="page-lead">
Browse peer-reviewed articles published by the North American GeoGebra Journal.
</p>

{% assign articles_sorted = site.articles | sort: "year" | reverse %}

{% for article in articles_sorted %}

<div class="card" style="margin-bottom:1rem;">

<h3 style="margin-bottom:0.4rem;">

<a href="{{ article.url | relative_url }}">
{{ article.title }}
</a>

</h3>

<p>

{% for author in article.authors %}
{{ author.name }}{% unless forloop.last %}, {% endunless %}
{% endfor %}

</p>

<p>

Volume {{ article.volume }},
Issue {{ article.issue }},
{{ article.year }}

</p>

{% if article.abstract %}

<p>
{{ article.abstract | truncate: 250 }}
</p>

{% endif %}

<a class="btn primary"
   href="{{ article.url | relative_url }}">
View Article
</a>

</div>

{% endfor %}

</div>