---
title: Metric definitions glossary for your team
date: 2026-11-25
category: data
description: Write clear metric definitions with formulas, data sources, filters, owners and edge cases, so every report calculates the same number.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [metric definitions, data glossary, kpis, analytics]
---

When marketing, sales and finance each report a different number for "active customers" or "conversion rate", meetings turn into arguments about data instead of decisions. A metric definitions glossary fixes this by writing down, once, how each metric is calculated, from which source, with which filters and edge cases. This prompt turns your list of metrics and rough definitions into a consistent glossary and flags where your teams probably disagree.

## Prompt

```prompt
Act as an analytics lead creating a metric definitions glossary.

Business: [WHAT YOU DO]
Metrics to define (with any current definitions or formulas, and who uses them):
[LIST METRICS, E.G. ACTIVE USERS, MRR, CHURN RATE, CAC, CONVERSION RATE]
Data sources and tables: [TOOLS, DATABASES, KEY TABLES]
Known disagreements: [WHERE NUMBERS DIFFER BETWEEN TEAMS]

For each metric, write:
1. Name and a one-sentence plain-English definition.
2. Exact formula, with numerator and denominator.
3. Source table or tool and the fields used.
4. Filters and exclusions (test accounts, refunds, internal users, time zone).
5. Time grain (daily, weekly, monthly) and how to compare periods.
6. Edge cases and how they are handled.
7. Owner and where the official number lives.
8. Related metrics that people confuse it with.

Then list ambiguities you found in my definitions and questions to settle with the teams. Present the glossary as a table and give one example SQL snippet for the 2 most complex metrics, marked as a template to adapt.
```

## How to use it

1. **List the metrics that cause the most confusion** first.
2. **Answer the ambiguity questions** with the metric owners in one meeting.
3. **Publish the glossary** in your wiki and link it from every dashboard.

## Tips

- Version the glossary; when a definition changes, note the date so old reports make sense.
- Keep definitions in one place rather than in each dashboard's notes.
