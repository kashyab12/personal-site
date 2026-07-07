# kashyab.com

Personal site + blog, built with [Astro](https://astro.build). Fully static, zero client-side JS.

## Writing a blog post

Add a markdown file to `src/content/blog/`:

```md
---
title: My post title
description: Optional one-liner for SEO/social.
date: 2026-07-10
---

Post content in markdown.
```

Push to `main` and GitHub Actions builds and deploys to GitHub Pages automatically. Add `draft: true` to the frontmatter to keep a post out of the published site.

## Adding a project

Add a markdown file to `src/content/projects/` with `title`, `description`, `date`, `link`, and `weight` (lower = listed first) in the frontmatter.

## Development

```sh
npm install
npm run dev      # local dev server at localhost:4321
npm run build    # production build to ./dist
```

Requires Node 22+.
