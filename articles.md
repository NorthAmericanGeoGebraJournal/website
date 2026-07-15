---
layout: default
title: Articles
---

# Articles

{% for article in site.articles %}

<div class="card">

<h2>
<a href="{{ article.url | relative_url }}">
{{ article.title }}
</a>
</h2>

<p>
{{ article.authors | map: "name" | join: ", " }}
</p>

<p>
Volume {{ article.volume }},
Issue {{ article.issue }},
{{ article.year }}
</p>

</div>

{% endfor %}
