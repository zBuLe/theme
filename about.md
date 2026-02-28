---
title: Text & Typography Playground
description: A compact style guide with examples of headings, lists, tables, math, diagrams, images, and video embeds.
author: your-name
permalink: /about/
date: 2026-02-28 11:33:00 -0500
categories: [Docs, Demo]
tags: [typography, style-guide]
pin: true
math: true
mermaid: true
image:
  path: /commons/devices-mockup.png
  lqip: data:image/webp;base64,UklGRpoAAABXRUJQVlA4WAoAAAAQAAAADwAABwAAQUxQSDIAAAARL0AmbZurmr57yyIiqE8oiG0bejIYEQTgqiDA9vqnsUSI6H+oAERp2HZ65qP/VIAWAFZQOCBCAAAA8AEAnQEqEAAIAAVAfCWkAALp8sF8rgRgAP7o9FDvMCkMde9PK7euH5M1m6VWoDXf2FkP3BqV0ZYbO6NA/VFIAAAA
  alt: Responsive layout preview on multiple devices.
---

## Headings

<!-- markdownlint-capture -->
<!-- markdownlint-disable -->
# H1 — page title
{: .mt-4 .mb-0 }

## H2 — section title
{: data-toc-skip='' .mt-4 .mb-0 }

### H3 — subsection title
{: data-toc-skip='' .mt-4 .mb-0 }

#### H4 — minor heading
{: data-toc-skip='' .mt-4 }
<!-- markdownlint-restore -->

## Paragraph

This paragraph is a readability sample. It’s long enough to show line length, spacing, and how the theme handles continuous prose. Use it to verify font size, contrast, and rhythm across light/dark modes. If you paste your own copy here, keep a mix of short and medium sentences to see how it scans. ✍️

## Lists

### Ordered list

1. Draft the outline
2. Write the first pass
3. Review and polish

### Unordered list

- Project
  - Milestone
    - Task

### ToDo list

- [ ] Release checklist
  - [x] Confirm scope
  - [x] Update documentation
  - [ ] Run final validation

### Description list

Primary environment
: the default runtime configuration used for production

Staging environment
: a pre-production space used to test changes safely before release

## Block Quote

> This line shows a **block quote** used for callouts or quoted text.

## Prompts

<!-- markdownlint-capture -->
<!-- markdownlint-disable -->
> Tip: Keep headings short so the table of contents stays readable.
{: .prompt-tip }

> Info: Inline code is ideal for commands, flags, and filenames.
{: .prompt-info }

> Warning: Don’t paste secrets or API keys into public docs.
{: .prompt-warning }

> Danger: Deleting a dataset is irreversible—verify backups first.
{: .prompt-danger }
<!-- markdownlint-restore -->

## Tables

| Service                | Owner            | Status |
| :--------------------- | :--------------- | -----: |
| Authentication         | Maria Anders     |  Stable |
| Billing & Invoicing    | Helen Bennett    |   Beta |
| Data Export            | Giovanni Rovelli |  Draft |

## Links

<http://127.0.0.1:4000>

## Footnote

Clicking the marker will jump to the footnote[^footnote], and here is a second note[^fn-nth-2]. 🧩

## Inline code

This is an example of `inline code` used within a sentence.

## Filepath

Here is the `/docs/guides/typography.md`{: .filepath}.

## Code blocks

### Common

```text
This is a plain code snippet with no syntax highlighting or line numbers.
Use it for logs, output samples, or quick notes.
````

### Specific Language

```bash
if [ $? -ne 0 ]; then
  echo "Command failed. Check logs and retry."
  # handle error / exit as needed
fi
```

### Specific filename

```sass
@import
  "colors/light-typography",
  "colors/dark-typography";
```

{: file='_sass/jekyll-theme-chirpy.scss'}

## Mathematics

The mathematics is rendered by [**MathJax**](https://www.mathjax.org/):

$$
\begin{equation}
\sum_{n=1}^\infty \frac{1}{n^2} = \frac{\pi^2}{6}
\label{eq:series}
\end{equation}
$$

We can reference the equation as \eqref{eq:series}.

When $a \ne 0$, there are two solutions to $ax^2 + bx + c = 0$:

$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

## Mermaid SVG

```mermaid
 gantt
  title  Documentation rollout plan
  outline :a, 2017-07-20, 1w
  draft   :crit, b, 2017-07-23, 1d
  review  :active, c, after b a, 1d
```

## Images

### Default (with caption)

![Desktop View](/posts/20190808/mockup.png){: width="972" height="589" }
*Centered image with a caption beneath*

### Left aligned

![Desktop View](/posts/20190808/mockup.png){: width="972" height="589" .w-75 .normal}

### Float to left

![Desktop View](/posts/20190808/mockup.png){: width="972" height="589" .w-50 .left}
This paragraph flows around the left-floated image. Use it to confirm spacing, margins, and how text wraps alongside media. If the layout feels cramped, adjust the image width utility class or add extra vertical spacing.

### Float to right

![Desktop View](/posts/20190808/mockup.png){: width="972" height="589" .w-50 .right}
This paragraph flows around the right-floated image. It’s useful for checking alignment and ensuring that long lines don’t collide with the image edge—especially on smaller screens.

### Dark/Light mode & Shadow

The images below will toggle based on theme preference, and include shadows for depth.

![light mode only](/posts/20190808/devtools-light.png){: .light .w-75 .shadow .rounded-10 w='1212' h='668' }
![dark mode only](/posts/20190808/devtools-dark.png){: .dark .w-75 .shadow .rounded-10 w='1212' h='668' }

## Video

{% include embed/youtube.html id='Balreaj8Yqs' %}

## Reverse Footnote

[^footnote]: Footnote example text (source or clarification).

[^fn-nth-2]: Second footnote example text (additional detail).


