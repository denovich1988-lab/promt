---
title: GA4 traffic report analysis prompt
date: 2026-11-26
category: data
description: Paste a Google Analytics 4 export and get a plain-English traffic analysis with trends, channel changes, landing page insights and next steps.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [ga4, google analytics, traffic analysis, marketing reports]
---

Google Analytics 4 has plenty of data but few clear answers: why did traffic drop, which channel is growing and which landing pages are wasting visits? This GA4 traffic report analysis prompt takes the tables you export (or copy) from GA4 and turns them into a short, plain-English report with what changed, the likely reasons and what to check next. It treats the numbers carefully and tells you when the data isn't enough to draw a conclusion.

## Prompt

```prompt
Act as a senior web analyst. Analyse this Google Analytics 4 data and write a short report for [AUDIENCE, E.G. MY MANAGER / A CLIENT / MYSELF].

Website and business goal: [SITE, WHAT COUNTS AS A CONVERSION]
Period compared: [E.G. LAST 28 DAYS VS PREVIOUS 28 DAYS / NOV VS OCT]
Known events in the period: [E.G. SITE REDESIGN, SALE, TRACKING CHANGE, ALGORITHM UPDATE]
Data (paste tables): [TRAFFIC ACQUISITION BY SESSION DEFAULT CHANNEL GROUP, LANDING PAGES, DEVICES, COUNTRIES, KEY EVENTS]

Write:
1. Headline summary: 3 bullets on what changed most, with the numbers and % change.
2. Channel breakdown: which channels grew or fell, by how much, and the share of conversions each drives.
3. Landing pages: top 5 gainers and top 5 losers, and pages with high traffic but low engagement or conversion.
4. Device and country notes, only if something stands out.
5. Likely explanations for the biggest changes, labelled as hypotheses, and how to confirm each one (e.g. check Search Console, check tagging).
6. Data quality warnings: sampling, (not set) values, sudden drops that look like tracking issues.
7. 3–5 prioritised next steps.

Compute % changes yourself from the numbers, show your working in a small table, and don't state anything the data doesn't support.
```

## How to use it

1. **Export the same reports for both periods** so the comparison is like for like.
2. **List known events** (launches, tracking changes); they explain many sudden shifts.
3. **Check the calculations** in the table before sharing the report.

## Tips

- Compare year over year for seasonal businesses, not only month over month.
- Remove personal data before pasting anything into an AI tool.
