---
layout: base.njk
date: 2024-10-20
---

{% assign currentYear = 0 %}
{% for post in collections.postsByYear %}
    {% if post.data.year != currentYear %}        
    <h3>{{ post.data.year }}</h3>
    {% assign currentYear = post.data.year %}{% endif %}<a href="{{ post.url }}" title="{{ post.data.title }}">{{ post.data.title | trimYear }}</a>{% unless forloop.last %}<br>{% endunless %}{% endfor %}