---
title: Group keywords into topic clusters
date: 2026-11-19
category: seo
description: Sort a messy keyword list into topic clusters with one pillar page and supporting articles, so you know exactly which pages to create.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [keyword research, topic clusters, content plan]
---

A keyword export with hundreds of rows doesn't tell you what pages to build. Clustering groups keywords that one page can rank for, so you avoid writing five articles that compete with each other. This prompt turns a raw list into a page plan you can act on.

## Prompt

```prompt
You are an SEO strategist. Group these keywords into topic clusters.

My site: [WHAT YOUR SITE OFFERS AND WHO IT SERVES]
Keywords (one per line, optionally with volume and difficulty):
[PASTE KEYWORD LIST]

Rules:
- Put keywords with the same search intent on the same page, even if the wording differs.
- Separate keywords with different intent (for example "what is X" vs "best X tools" vs "X pricing").

Output:
1. Clusters as a table: cluster name, page type (guide, list, comparison, tool, product page), primary keyword, secondary keywords, total volume if given.
2. For each topic area, mark one cluster as the pillar page and the rest as supporting pages, and show which should link to which.
3. Keywords that don't fit my site — list them separately.
4. A suggested order to publish the pages, starting with the easiest wins.

Do not invent volume or difficulty numbers. Leave them blank if I didn't provide them.
```

## How to use it

1. **Export keywords** from your SEO tool with volume and difficulty columns if possible.
2. **Check unclear groupings** by searching both keywords on Google: if the same pages rank, they belong together.
3. **Turn each cluster** into a content brief and publish in the suggested order.

## Tips

- Keep each batch under about 300 keywords for cleaner grouping.
- Ask for a short title suggestion for every page in the plan.
