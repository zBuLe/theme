---
layout: default
title: Updates & Devlog
---

Welcome to the development log. Here you will find the latest updates, lore additions, and system changes.

<div class="post-feed" style="margin-top: 2em; display: flex; flex-direction: column; gap: 20px;">
  {% for post in site.posts %}
    <article class="post-card" style="padding: 20px; background-color: var(--bg-dark); border: 1px solid var(--border); border-radius: var(--radius); box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
      
      <h2 style="margin-top: 0; border-bottom: none; padding-bottom: 0;">
        <a href="{{ post.url | relative_url }}" style="color: var(--text); text-decoration: none;">{{ post.title }}</a>
      </h2>
      
      <div class="post-meta" style="font-size: 0.85em; color: var(--text-muted); margin-bottom: 15px;">
        {{ post.date | date: "%B %-d, %Y" }} 
        {% if post.author %} • {{ post.author }}{% endif %}
      </div>
      
      <p style="margin-bottom: 15px; color: var(--text-muted);">
        {{ post.excerpt | strip_html | truncatewords: 35 }}
      </p>
      
      <a href="{{ post.url | relative_url }}" style="font-weight: bold; font-size: 0.9em; text-transform: uppercase; letter-spacing: 0.05em;">Read Post &rarr;</a>
    </article>
  {% endfor %}
</div>