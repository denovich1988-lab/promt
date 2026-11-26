---
title: Looker Studio dashboard plan
date: 2026-11-26
category: data
description: Plan a Looker Studio dashboard with the right KPIs, data sources, calculated fields, filters and page layout before you start building.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [looker studio, dashboards, data visualization, reporting]
---

Dashboards built without a plan end up as crowded pages of charts nobody checks. Before opening Looker Studio, decide who the dashboard is for, which questions it answers and which data supports each chart. This Looker Studio dashboard prompt produces that plan, including calculated field formulas, filters and a page-by-page layout.

## Prompt

```prompt
Act as a BI analyst. Plan a Looker Studio dashboard.

Audience and how often they'll look: [E.G. MARKETING TEAM, WEEKLY]
Decisions it should support: [E.G. WHERE TO SHIFT AD BUDGET, WHICH PAGES NEED WORK]
Data sources available: [E.G. GA4, GOOGLE ADS, SEARCH CONSOLE, GOOGLE SHEETS CRM EXPORT, BIGQUERY]
Fields in each source: [KEY DIMENSIONS AND METRICS]
KPIs wanted: [LIST, OR "SUGGEST"]
Date ranges and comparisons: [E.G. LAST 28 DAYS VS PREVIOUS PERIOD]

Give me:
1. 5–8 key questions the dashboard answers, each mapped to one KPI.
2. A page plan (2–4 pages): purpose, charts on each page (chart type, dimension, metric, why this chart), and layout from top to bottom.
3. Calculated fields with formulas (e.g. conversion rate, CPA, channel grouping with CASE).
4. Data blending needs and their pitfalls (join keys, date granularity, sampling).
5. Controls: date range, filters, drop-downs.
6. Design rules: scorecards first, consistent colours, labels, no more than ~8 charts per page.
7. A QA checklist to confirm numbers match the source platforms.
Mention where connector features may differ and should be checked in the current product.
```

## How to use it

1. **List real field names** from your sources so formulas work as written.
2. **Sketch the first page on paper** using the plan, then build.
3. **Run the QA checklist** and compare totals with each platform before sharing.

## Tips

- Put scorecards with comparisons at the top; most viewers only look there.
- Blending data from different platforms is where numbers usually go wrong; test joins carefully.
