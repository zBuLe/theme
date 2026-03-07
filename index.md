---
layout: default
title: Welcome to My Site
---

# Hello, World!

Welcome to your new minimalist website. This page is generated from `index.md` using the **{{ site.remote_theme | default: "custom" }}** Jekyll theme.

## Features of this Theme
* **Minimalist Design:** No heavy frameworks, just clean CSS.
* **Remote Ready:** Works instantly with GitHub Pages via `remote_theme`.
* **Responsive:** Scales beautifully from desktops to mobile devices.

---

### Getting Started

To customize this page, simply edit `index.md` in your repository. You can use standard Markdown to add content, images, or links.

#### A Simple Code Example
If you want to share snippets, the theme handles backticks automatically:

```javascript
function greet() {
  console.log("Welcome to my Jekyll site!");
}

```

> "Simplicity is the ultimate sophistication." — Leonardo da Vinci

---

### Recent Posts

{% for post in site.posts limit:5 %}

* [{{ post.date | date: "%b %d, %Y" }} — {{ post.title }}]({{ post.url | relative_url }})
{% endfor %}

---

## Implementation Instructions

1.  **Placement:** Save this file as `index.md` in the root directory of your Jekyll project.
2.  **Front Matter:** * `layout: default` tells Jekyll to wrap this content inside the `_layouts/default.html` file we created earlier.
    * `title: Welcome to My Site` provides the title that the `[% seo %}` tag and your `<header>` will use.
3.  **Liquid Logic:** The "Recent Posts" section at the bottom uses a Liquid `for` loop. If you haven't created any posts in a `_posts` folder yet, this section will simply remain empty until you do.

### Why this works:
By using the `{{ content }}` tag in our `default.html` layout, Jekyll takes everything below the second `---` in this `index.md` file, converts it from Markdown to HTML, and injects it right into the middle of your site's structure.

**Would you like me to create a `_posts/` example file so you can see how the blog functionality looks with this index?**
