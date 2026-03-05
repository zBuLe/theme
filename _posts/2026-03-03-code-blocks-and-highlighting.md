---
layout: post
title: "Code Blocks + Highlighting"
date: 2026-03-03 08:15:00 -0800
categories: [dev, code]
tags: [test, syntax]
---

If you use Rouge (default in Jekyll), fenced blocks should highlight.

```ruby
def hello(name)
  "Hello, #{name}!"
end

```

```yaml
puts hello("Jekyll")

site: demo
features:
  - posts
  - pages
  - collections
```

Inline: `bundle exec jekyll serve`.