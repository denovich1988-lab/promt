---
title: Sales forecast from your pipeline data
date: 2026-11-22
category: sales
description: A ChatGPT prompt for a sales forecast that weighs pipeline by stage and deal health, shows commit, best case and worst case, and flags risky deals.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [sales forecast, pipeline, revenue forecasting, sales management]
---

A forecast built on gut feel or stage percentages alone is often wrong in the same direction every quarter. This ChatGPT prompt builds a sales forecast from your pipeline export, weights deals by stage and real health signals, separates commit, best case and worst case, and lists the deals that most change the number.

## Prompt

```prompt
You are a revenue operations analyst. Build a sales forecast for this period.

Period and target: [PERIOD AND TARGET]
Closed so far: [CLOSED REVENUE]
Pipeline export (deal, amount, stage, close date, last activity, next step, owner, notes): [PIPELINE DATA]
Historical win rates by stage and average slippage, if known: [HISTORY]
Known risks (budget freezes, holidays, competitor activity): [RISKS]

Deliver:
1. Deal-by-deal review: flag deals with stale activity, no next step, close dates already pushed or in the past, or amounts that look unusual.
2. Three numbers: commit (deals very likely to close), most likely (weighted), and best case, with the method shown.
3. Gap to target and the deals that could close it.
4. The 5 deals with the biggest effect on the forecast and the action needed on each this week.
5. Questions for each rep about their riskiest deals.
6. A short summary for leadership.
Use the data provided; show calculations; mark assumptions about win rates if I gave none.
```

## How to use it

1. **Export fresh pipeline data** with last activity dates; stale data hides risk.
2. **Use your own historical win rates** if you have them.
3. **Compare the forecast to actual results** each period to improve your method.

## Tips

- Remove names of contacts and customers if your policy requires it.
- Run deal reviews with the [pipeline review prompt](/prompts/sales-managers-pipeline-review/).
- Log calls consistently with the [sales call notes to CRM prompt](/prompts/sales-call-notes-to-crm/).
