---
title: Negative keyword list for Google Ads
date: 2026-11-23
category: marketing
description: Build a negative keyword list for Google Ads from your search terms report, grouped by theme with match types, to stop wasted clicks.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [google ads, ppc, negative keywords, paid search]
---

Wasted ad spend usually hides in the search terms report: job seekers, free-tool hunters and people looking for a different product. This prompt reads your search terms and builds a negative keyword list grouped by theme, with suggested match types and the level to add them at, so you cut irrelevant clicks without blocking good traffic.

## Prompt

```prompt
You are a paid search specialist. Build a negative keyword list for my Google Ads account.

Business and what we sell: [BUSINESS AND PRODUCTS]
Who our customer is and who is NOT: [IDEAL CUSTOMER AND EXCLUSIONS]
Campaigns and their target keywords: [CAMPAIGNS AND KEYWORDS]
Search terms report (term, clicks, cost, conversions): [PASTE SEARCH TERMS]

Do this:
1. Mark every search term as relevant, irrelevant or unsure, with a short reason.
2. Turn the irrelevant ones into negative keywords grouped by theme (jobs, free, DIY, wrong product, wrong location, competitors' support queries, and so on).
3. Suggest a match type for each (exact, phrase or broad) and whether to add it at account, campaign or ad group level.
4. Warn me about any negative that could block a converting term.
5. List common negative themes for my industry that are not in the report yet, marked as "consider".
Output as a table I can paste into Google Ads Editor.
```

## How to use it

1. **Export the last 30–90 days** of search terms with cost and conversions.
2. **Review the "unsure" rows** yourself before adding anything.
3. **Repeat monthly**, since new irrelevant terms show up over time.

## Tips

- Pair it with the [Google search ads copy](/prompts/google-search-ads-copy/) prompt to tighten ads for the terms you keep.
- Never add a negative that matched a term with conversions without checking it first.
