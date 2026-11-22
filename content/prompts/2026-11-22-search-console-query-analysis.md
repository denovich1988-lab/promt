---
title: Find SEO wins in Google Search Console data
date: 2026-11-22
category: seo
description: A ChatGPT prompt for Google Search Console data that finds low-CTR pages, near-page-one keywords and declining queries in your export.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [google search console, seo analysis, ctr, keywords]
---

Google Search Console shows which queries already bring impressions, but the raw table is hard to act on. This ChatGPT prompt for Google Search Console data analysis reads your export and sorts it into clear opportunities: pages with high impressions and low click-through rate, keywords sitting just off page one, and queries that are slipping. You get a short, prioritized task list instead of a spreadsheet.

## Prompt

```prompt
You are an SEO analyst. Analyze my Google Search Console export.

Website and topic: [WEBSITE AND NICHE]
Date range of the export: [DATE RANGE]
Data (columns: query or page, clicks, impressions, CTR, position): [PASTE CSV OR TABLE]
Previous period data, if available: [PASTE OR "NONE"]
Business goal: [GOAL, e.g. more leads from service pages]

Do this:
1. List queries in positions 8–20 with the most impressions; suggest which page should target each and one on-page change.
2. List pages or queries with high impressions but CTR well below others at a similar position; write two new title tag ideas and one meta description for each.
3. If previous period data is given, list queries that lost the most clicks and the likely reasons to check.
4. Spot queries where two or more pages seem to compete (possible cannibalization).
5. Finish with the 10 tasks I should do first, ranked by likely impact and effort.
Only use the numbers in the data. Say when the sample is too small to draw a conclusion.
```

## How to use it

1. **Export Queries and Pages** from the Performance report for the last 3 months.
2. **Paste no more than a few hundred rows** at a time; filter out branded queries first.
3. **Make the top five changes**, note the date, and compare in four weeks.

## Tips

- If the analysis finds competing pages, use the [keyword cannibalization fix](/prompts/fix-keyword-cannibalization/) prompt.
- Compare positions over the same weekdays to avoid day-of-week noise.
