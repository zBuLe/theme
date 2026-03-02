---
layout: default
title: Tags
permalink: /tags/
---

<div class="doc-content">
  <h1 style="margin-top: 0;">Tag Archive</h1>

  {% assign raw_tags = "" | split: "" %}
  
  {% for doc in site.documents %}
    {% if doc.tags %}
      {% assign raw_tags = raw_tags | concat: doc.tags %}
    {% endif %}
  {% endfor %}
  
  {% for page in site.pages %}
    {% if page.tags %}
      {% assign raw_tags = raw_tags | concat: page.tags %}
    {% endif %}
  {% endfor %}
  
  {% assign all_tags = raw_tags | uniq | sort %}

  <div class="meta-tags tag-cloud" style="margin-bottom: 2rem; padding-bottom: 2rem; border-bottom: 1px solid var(--border);">
    {% for tag in all_tags %}
      <a href="#{{ tag | slugify }}" class="tag">
        <i class="fas fa-hashtag" style="margin-right: 4px; opacity: 0.7;"></i>{{ tag }}
      </a>
    {% endfor %}
    <a href="#" class="tag clear-filter" style="display: none; background-color: var(--danger); border-color: var(--danger); color: var(--contrast);">
      <i class="fas fa-times" style="margin-right: 4px;"></i>Clear Filter
    </a>
  </div>

  <div id="tag-container">
    {% for tag in all_tags %}
      <div class="tag-section" id="{{ tag | slugify }}">
        <h2 style="border-bottom: none; color: var(--accent);">
          <i class="fas fa-hashtag" style="opacity: 0.5; margin-right: 8px;"></i>{{ tag }}
        </h2>
        
        <ul>
          {% for doc in site.documents %}
            {% if doc.tags contains tag %}
              <li><a href="{{ doc.url | relative_url }}">{{ doc.title | default: doc.name }}</a></li>
            {% endif %}
          {% endfor %}
          
          {% for page in site.pages %}
            {% if page.tags contains tag %}
              {% if page.url != '/tags/' %}
                <li><a href="{{ page.url | relative_url }}">{{ page.title | default: page.name }}</a></li>
              {% endif %}
            {% endif %}
          {% endfor %}
        </ul>
      </div>
    {% endfor %}
  </div>

</div>

<script>
  function filterTags() {
    const hash = window.location.hash;
    const sections = document.querySelectorAll('.tag-section');
    const cloudLinks = document.querySelectorAll('.tag-cloud .tag:not(.clear-filter)');
    const clearBtn = document.querySelector('.clear-filter');

    // Remove active state from all tag buttons in the cloud
    cloudLinks.forEach(link => link.classList.remove('active-tag'));

    if (hash && hash !== '#') {
      // Hide all sections
      sections.forEach(sec => sec.style.display = 'none');
      
      // Show only the targeted section
      const targetId = hash.substring(1); // Removes the '#'
      const activeSection = document.getElementById(targetId);
      if (activeSection) {
        activeSection.style.display = 'block';
      }

      // Highlight the active button in the cloud and show the "Clear" button
      const activeBtn = document.querySelector(`.tag-cloud .tag[href="${hash}"]`);
      if (activeBtn) activeBtn.classList.add('active-tag');
      if (clearBtn) clearBtn.style.display = 'inline-flex';

    } else {
      // If no hash is present, show all sections and hide the "Clear" button
      sections.forEach(sec => sec.style.display = 'block');
      if (clearBtn) clearBtn.style.display = 'none';
    }
  }

  // Run the filter when the page loads, and whenever the #hash changes in the URL
  window.addEventListener('DOMContentLoaded', filterTags);
  window.addEventListener('hashchange', filterTags);
</script>