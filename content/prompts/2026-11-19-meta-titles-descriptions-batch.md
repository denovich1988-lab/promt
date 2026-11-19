---
title: SEO meta titles and descriptions in bulk
date: 2026-11-19
category: seo
description: Write click-worthy meta titles and descriptions for a list of pages, within length limits and with the main keyword placed naturally.
models: [ChatGPT, Claude, Gemini]
level: Beginner
tags: [meta description, title tags, on-page seo]
---

Title tags and meta descriptions are what searchers see before they click. Many sites leave them blank or duplicate them across pages. This prompt handles a whole list of pages at once and keeps each one unique and within the lengths that usually display fully in search results.

## Prompt

```prompt
You are an on-page SEO specialist. Write meta titles and meta descriptions for these pages.

Brand name: [BRAND]
Pages (URL | main keyword | what the page offers):
[PAGE LIST]

Rules:
- Title: 50–60 characters, main keyword near the start, brand at the end only if it fits.
- Description: 140–155 characters, includes the keyword naturally, states a specific benefit and ends with a soft call to action.
- Every title and description must be unique.
- Match search intent: product pages sound like products, guides sound like guides.
- No clickbait, no ALL CAPS, no claims that aren't on the page.

Output a table: URL | title | title length | description | description length.
Flag any pages where the keywords overlap so much that they may compete with each other.
```

## How to use it

1. **Export your pages** from your CMS or an SEO crawler with their target keywords.
2. **Check the length columns** and adjust anything the AI miscounted.
3. **Update the pages** and watch click-through rate in Google Search Console over the next few weeks.

## Tips

- Search engines can rewrite your snippets, but a clear, accurate description still helps.
- Start with pages that have many impressions but a low click-through rate.
