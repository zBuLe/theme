---
title: Theme
author: zBuLe
date: 2026-03-19
tags: [jekyll, theme, docs, dark-mode]
---

## Getting Started

Welcome to the **Theme** documentation site — a fast, responsive, and accessible Jekyll theme built for GitHub Pages. This page demonstrates all the core features and markdown elements supported by the theme.

> This is a standard blockquote. It uses the accent color for its left border and a subtle background to set it apart from body text.

## Features

The theme comes with a robust set of features out of the box:

- **Three-panel layout** — Site nav, document content, and table of contents
- **Dark mode** — Toggle between light and dark with persistent state
- **Nested navigation** — Up to 4 levels of accordion menus via `navigation.yml`
- **Auto-generated TOC** — Built from your headings with live ScrollSpy
- **Full-text search** — Powered by SimpleJekyllSearch
- **Customizable theming** — Override every color token via `theme.yml`
- **Code blocks** — Language labels, copy buttons, and Rouge syntax highlighting
- **Keyboard shortcuts** — Press `[` for site nav, `]` for TOC, `\` for theme, `/` to focus search

## Callout Blocks

Four semantic callout styles are available for drawing attention to important information:

> **Info:** This is an informational callout. Use it for tips, notes, or supplementary context that helps the reader.
{: .info}

> **Success:** This callout indicates something positive — a completed step, a best practice, or a confirmed result.
{: .success}

> **Warning:** Proceed with caution. This highlights potential pitfalls or things the reader should be aware of before continuing.
{: .warning}

> **Danger:** Critical warning. Something here could cause data loss, breaking changes, or other serious consequences.
{: .danger}

## Code Examples

Code blocks automatically receive a language label and a copy button. Here is an example in JavaScript:

```javascript
// Toggle dark mode with persistent state
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}
```

And a YAML configuration example:

```yaml
# Site Configuration
title: "My Documentation"
description: "A fast, responsive docs theme."
logo: /assets/images/logo.svg
toc_icon: "📖"
theme_icon_dark: "🌙"
```

## Tables

Tables are fully styled and scroll horizontally on small screens:

| File | Purpose | Location |
|------|---------|----------|
| `_config.yml` | Site-wide settings, title, logo path | Root |
| `navigation.yml` | Left panel menu structure (up to 4 levels) | `_data/` |
| `theme.yml` | Color token overrides for light & dark mode | `_data/` |
| `contact.yml` | Social icons displayed in the site footer | `_data/` |
| `style.css` | Core layout, components, and responsive rules | `assets/css/` |
| `markdown.css` | Content element styles and syntax highlighting | `assets/css/` |

## Typography

The theme uses the **Lato** font family with a system-ui fallback stack. Body text is set at `16px` with a `1.6` line height for comfortable reading.

### Heading Levels

Headings from `h2` through `h4` are automatically picked up by the table of contents generator. The `h2` level gets a subtle bottom border for visual separation.

#### Inline Elements

You can use **bold text**, *italic text*, `inline code`, and [links](#) throughout your content. All of these inherit the theme color system automatically.

### Ordered Lists

1. Clone the repository or add the remote theme to your `_config.yml`
2. Configure your site settings and navigation structure
3. Customize the color palette via `theme.yml`
4. Write your documentation in Markdown and push to GitHub

## Theme System

The entire color system is built on three base tokens — `--bg`, `--text`, and `--accent`. Every other color variable derives automatically via `color-mix()`:

- `--bg-dark` — recessed surfaces (code blocks, blockquotes)
- `--bg-light` — elevated surfaces (panels, header)
- `--text-muted` — secondary text, metadata
- `--border` / `--border-muted` — structural dividers
- `--accent-muted` — hover states, soft highlights

The `theme.yml` data file can override any token. If you only set the three base tokens, everything recalculates. If you also set `--border` explicitly, that one stops deriving but everything else still does:

```yaml
# theme.yml — minimal (3 tokens, rest derives)
colors:
  light:
    bg: "hsl(145, 30%, 98%)"
    text: "hsl(145, 40%, 12%)"
    accent: "hsl(145, 65%, 35%)"
    # Optional: override any derived token
    bg_light: "hsl(0, 0%, 100%)"
  dark:
    bg: "hsl(145, 30%, 10%)"
    text: "hsl(145, 20%, 95%)"
    accent: "hsl(145, 55%, 45%)"
```

> **Cascade order:** Fallback defaults in `style.css` → `color-mix()` derivations → explicit overrides from `theme.yml`. Source order wins, so any token you set explicitly takes precedence over the derived value.
{: .info}

## Responsive Design

The layout adapts across three breakpoints. On desktop (769px+), side panels push the content area. On tablet (768px and below), panels overlay the content with a backdrop scrim — tap outside to close. On very small screens (450px and below), panels expand to full viewport width for easy touch navigation.

Panel state is persisted in `localStorage` so your preferred layout survives page reloads — but only on desktop to avoid blocking content on mobile.

## Accessibility

Keyboard navigation, ARIA attributes, focus indicators, `prefers-reduced-motion` support, and semantic HTML are all baked in. The accordion system tracks `aria-expanded` state, and the ScrollSpy highlights the current section in the TOC for wayfinding.

### Keyboard Shortcuts

The following shortcuts are available when no input field is focused:

| Key | Action |
|-----|--------|
| `[` | Toggle site navigation panel |
| `]` | Toggle table of contents panel |
| `\` | Toggle dark/light mode |
| `/` | Focus the search input |
| `Escape` | Clear search / close panels |
