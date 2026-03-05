---
layout: default
title: Blog
permalink: /blog/
pagination: 
  enabled: true
---

{% for post in paginator.posts %}
  <article class="post-entry">
    <h3>
      <a href="{{ post.url | relative_url }}?from_page={{ paginator.page }}">
        {{ post.title }}
      </a>
    </h3>
    <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
  </article>
{% endfor %}

<hr>

<section class="pagination-status">
  <p>Page {{ page.pagination_info.curr_page }} of {{ page.pagination_info.total_pages }}</p>
</section>

{% if paginator.total_pages > 1 %}
<nav class="pagination-nav">
  <ul class="pagination-list">
    
    <li class="nav-arrow">
      {% if paginator.previous_page %}
        <a href="{{ paginator.previous_page_path | relative_url }}" title="Previous Page">‹</a>
      {% else %}
        <a class="disabled" title="No Previous Page">‹</a>
      {% endif %}
    </li>

    {% if paginator.page_trail %}
      {% for trail in paginator.page_trail %}
        <li class="nav-number {% if paginator.page == trail.num %}active{% endif %}">
            <a href="{{ trail.path | relative_url }}">{{ trail.num }}</a>
        </li>
      {% endfor %}
    {% endif %}

    <li class="nav-arrow">
      {% if paginator.next_page %}
        <a href="{{ paginator.next_page_path | relative_url }}" title="Next Page">›</a>
      {% else %}
        <a class="disabled" title="No Next Page">›</a>
      {% endif %}
    </li>

  </ul>
</nav>
{% endif %}