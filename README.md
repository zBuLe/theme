---
layout: default
title: README
author: zBuLe
date: 2026-02-26
tags: [README]
---

# DocuTheme

A fast, responsive, and accessible documentation theme for Jekyll and GitHub Pages. 

DocuTheme is designed to get out of your way. It features automatic table of contents generation, real-time client-side search, intelligent dark mode, and multi-language syntax highlighting—all without needing a complex build pipeline.

## Features

* 🌓 **Adaptive Theming:** Seamless Light/Dark mode with automatic system-preference detection and persistence.
* 🔍 **Real-Time Search:** Client-side search powered by Simple-Jekyll-Search.
* 📖 **Auto-Generated TOC:** Right-panel Table of Contents dynamically generated from your Markdown headings.
* 📋 **Smart Code Blocks:** Multi-language syntax highlighting (Rouge) with dynamic language headers and "Copy to Clipboard" functionality.
* ♿ **Accessible:** Full keyboard navigation support, visible focus states, and ARIA-compliant accordions.
* 📱 **Responsive:** Clean, readable typography that perfectly adapts from ultra-wide desktop monitors to mobile screens.

---

## Installation (Remote Theme)

DocuTheme is built to be used as a `jekyll-remote-theme`, meaning you don't have to copy all the HTML/CSS files into every new project.

1. Add this line to your Jekyll site's `_config.yml`:
   ```yaml
   remote_theme: zbule/theme@v0.1.0