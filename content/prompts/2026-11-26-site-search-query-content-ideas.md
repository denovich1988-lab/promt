---
title: Turn site search queries into content ideas
date: 2026-11-26
category: seo
description: Analyse your internal site search queries to find content gaps, navigation problems and new page ideas, prioritised by how often visitors search for them.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [site search, content gaps, content strategy, ux]
---

What visitors type into your own site's search box is one of the most honest data sources you have: it shows what they expected to find and couldn't. This prompt analyses an export of internal site search queries, groups them by intent, separates content gaps from navigation problems and turns them into a prioritised list of new pages, updates and quick fixes.

## Prompt

```prompt
Act as a content strategist and SEO analyst. Analyse my internal site search data.

Website and audience: [SITE, WHO VISITS]
Export of site search terms (term, searches, exits or refinements if available): [PASTE TABLE]
Main sections of the site: [LIST NAV ITEMS OR CATEGORIES]
Existing pages that might match common searches: [LIST OR "UNKNOWN"]
Period covered: [DATES]

Do this:
1. Clean the data: merge spelling variants, plurals and synonyms; show the merged groups.
2. Group queries by intent (product/service, how-to, pricing, support, company info, other) with total searches per group.
3. For the top 30 query groups, classify each as: content exists but hard to find (navigation issue), content exists but doesn't answer well (update), or no content (gap).
4. A prioritised action table: query group, searches, issue type, recommended action (new page, update, add to nav, add synonym to search, FAQ entry), and suggested page title.
5. Five new content ideas with a one-paragraph brief each, and the related keyword to check for organic demand.
6. Quick wins for the search tool itself (synonyms, zero-result redirects, featured results).

Base counts only on my data and say when the sample is too small to draw a conclusion.
```

## How to use it

1. **Export site search terms** from GA4 (search term report), your CMS or your search tool for the last 3–6 months.
2. **Fix navigation issues first**; they're often quick and help every visitor.
3. **Check organic demand** for gap topics before writing new pages.

## Tips

- Zero-result searches are the clearest signal of missing content.
- Repeat the analysis quarterly to see whether fixes reduced the searches.
