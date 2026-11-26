---
title: Keyword prioritization scoring for SEO
date: 2026-11-26
category: seo
description: Score and rank a keyword list by volume, difficulty, intent and business value, then turn the top targets into a content queue.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [keyword research, keyword prioritization, seo strategy, content planning]
---

A keyword export with hundreds of rows doesn't tell you what to write first. Sorting by volume picks terms you can't rank for; sorting by difficulty picks terms nobody needs. This keyword prioritization prompt scores every keyword on volume, difficulty, intent and business value against your site's real authority, then hands you an ordered content queue.

## Prompt

```prompt
Act as an SEO strategist. Prioritise this keyword list for my site.

Site and what it sells: [DOMAIN, PRODUCT OR SERVICE]
Site strength: [E.G. NEW SITE / DOMAIN RATING 25 / RANKS FOR 300 KEYWORDS]
Main conversion: [E.G. DEMO REQUEST, PURCHASE, SIGNUP]
Pages that already exist: [LIST OR "NONE"]
Keywords (keyword, volume, difficulty, current position if any):
[PASTE LIST]

Do this:
1. Classify each keyword's intent (informational, commercial, transactional, navigational) and its funnel stage.
2. Give business value 1–3 (how close it is to what I sell) and ranking feasibility 1–3 given my site strength.
3. Calculate a priority score with a simple, stated formula and sort the list.
4. Group keywords that one page can target together and note the primary keyword per group.
5. Mark quick wins: keywords where I already rank 8–30 or have a page that could be improved.
6. Output a table: group, primary keyword, secondary keywords, intent, score, existing page or "new", page type.
7. Recommend the first 10 pages to create or update, in order, with a one-line reason each.
```

## How to use it

1. **Export keywords with volume and difficulty** from your SEO tool and paste them as a table.
2. **Be honest about site strength**; it changes which keywords are realistic.
3. **Review the business value scores** yourself — you know your customers better than the AI.

## Tips

- Re-score every quarter; rankings and priorities shift.
- Low-volume keywords with strong buying intent often convert better than big informational terms.
