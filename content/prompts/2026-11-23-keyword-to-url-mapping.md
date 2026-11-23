---
title: Keyword mapping to pages on your site
date: 2026-11-23
category: seo
description: "A ChatGPT prompt for keyword mapping: assign each keyword group to one existing or new URL, spot gaps and conflicts, and plan on-page updates."
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [keyword mapping, on-page seo, site architecture, keyword research]
---

A keyword list is only useful once each keyword has a home. Keyword mapping assigns every keyword group to one page, so you know which pages to optimize, which to create, and where two pages compete for the same search. This prompt takes your keyword list and page list and returns a clear keyword map with actions.

## Prompt

```prompt
Act as an SEO strategist. Build a keyword map for my site.

Site and business: [SITE AND BUSINESS]
Keyword list (keyword, volume, difficulty if known): [KEYWORDS]
Existing pages (URL, title, main topic): [PAGES]
Pages that convert best: [KEY PAGES]

Do this:
1. Group keywords by search intent and topic, so each group can be served by one page.
2. Map each group to one existing URL, or mark it "new page needed" with a suggested URL and page type.
3. Flag conflicts where two existing pages target the same group, and suggest which to keep, merge or re-focus.
4. For each mapped page: primary keyword, 2–4 secondary keywords, and what to change (title, H1, sections to add).
5. Output the map as a table I can paste into a spreadsheet: group, primary keyword, secondary keywords, intent, URL, action, priority.
Base priority on intent and fit with the business, and explain briefly.
```

## How to use it

1. **Export your page list** from a crawl or your CMS first.
2. **Map one group to one page**; splitting intent across pages weakens both.
3. **Work through high-priority actions** before creating new pages.

## Tips

- Group raw keywords first with the [keyword cluster planner](/prompts/keyword-cluster-planner/).
- Fix pages that already compete using the [keyword cannibalization](/prompts/fix-keyword-cannibalization/) prompt.
