---
title: SEO-friendly URL slugs for your pages
date: 2026-11-22
category: seo
description: A ChatGPT prompt that writes short, readable, SEO-friendly URL slugs for a list of pages and flags slugs that should not change after publishing.
models: [ChatGPT, Claude, Gemini]
level: Beginner
tags: [url slugs, seo, site structure, on-page seo]
---

Long, messy URLs with dates, numbers and stop words are harder to read, share and maintain. This ChatGPT prompt writes SEO-friendly URL slugs for a batch of pages: short, lowercase, hyphenated and built around each page's main keyword, consistent with your site structure, and with a warning about changing URLs that are already live.

## Prompt

```prompt
You are an SEO specialist. Write URL slugs for these pages.

Site and URL structure (e.g., /blog/slug/, /products/category/slug/): [URL STRUCTURE]
Pages, each with its title and main keyword, and whether it is new or already published: [PAGES]
Style rules we already use (if any): [STYLE RULES]

For each page give:
1. A recommended slug: lowercase, words separated by hyphens, usually 2–5 words, includes the main keyword naturally, no stop words unless needed for meaning, no dates or numbers that will go out of date, no special characters.
2. One alternative.
3. A note if two pages are too similar (risk of competing for the same keyword).
For already published pages: recommend keeping the current URL unless there's a strong reason, and if changing it, list the 301 redirect needed and the places to update internal links.
Present the result as a table: title, keyword, current URL, recommended slug, alternative, notes.
```

## How to use it

1. **Decide the slug before publishing**; changing it later needs redirects.
2. **Keep the folder structure consistent** across the site.
3. **Set up 301 redirects** for any live URL you do change, and update internal links.

## Tips

- Shorter isn't always better; the slug should still describe the page.
- Write matching titles with the [meta titles and descriptions prompt](/prompts/meta-titles-descriptions-batch/).
- Avoid overlapping pages with the [keyword cannibalization prompt](/prompts/fix-keyword-cannibalization/).
