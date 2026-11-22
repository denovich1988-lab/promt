---
title: Content pruning plan for old blog posts
date: 2026-11-22
category: seo
description: This ChatGPT prompt sorts your old pages into keep, update, merge, redirect or remove, using traffic and backlink data, for a content pruning plan.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [content pruning, content audit, seo, redirects]
---

Hundreds of thin, outdated posts can drag down a site and confuse readers. Content pruning means deciding, page by page, whether to keep, update, merge, redirect or remove. This ChatGPT prompt for a content pruning plan sorts your page list using traffic, rankings, backlinks and business value, and gives redirect targets for anything that goes, so you do not lose links or visitors.

## Prompt

```prompt
You are an SEO strategist running a content audit to decide what to prune.

Website and main topics: [WEBSITE AND TOPICS]
Page data (URL, title, publish date, organic clicks last 12 months, impressions, referring domains, conversions): [PASTE DATA]
Pages that must never be removed (legal, key products): [PROTECTED PAGES]
Business priorities: [PRIORITIES]

For each page, choose one action and give a one-line reason:
- Keep (performing and current)
- Update (has impressions or links but is outdated or thin)
- Merge (overlaps another page; name the page to merge into)
- Redirect (no value on its own but has links; name the best target)
- Remove (no traffic, no links, no business value, off topic)

Then:
1. Summarize how many pages fall into each action.
2. List the 10 updates likely to have the biggest impact.
3. Give a redirect map (old URL → new URL) for merges and redirects.
4. Give a safe rollout order and what to monitor for 8 weeks after.
Be conservative: when data is unclear, choose Update over Remove.
```

## How to use it

1. **Export 12 months of data** so seasonal pages are not cut by mistake.
2. **Review every Remove decision by hand** before acting.
3. **Roll out in small batches** and watch traffic and indexing.

## Tips

- Rewrite the Update pages with the [content refresh](/prompts/content-refresh-old-post/) prompt.
- Merging pages often fixes [keyword cannibalization](/prompts/fix-keyword-cannibalization/) too.
