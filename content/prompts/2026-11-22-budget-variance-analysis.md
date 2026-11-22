---
title: Budget vs actual variance analysis
date: 2026-11-22
category: finance
description: A ChatGPT prompt for budget variance analysis that explains the biggest gaps between budget and actuals and suggests what to do next.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [variance analysis, budget vs actual, fp&a, financial reporting]
---

A budget-versus-actual table shows the numbers but not the story behind them. This ChatGPT prompt for budget variance analysis calculates the variances, ranks the ones that matter, separates timing from real changes, and writes a short commentary with next steps you can share with managers or the board.

## Prompt

```prompt
You are an FP&A analyst. Analyze the variance between budget and actuals.

Period and business: [PERIOD AND BUSINESS]
Budget vs actual by line item (paste the table): [BUDGET VS ACTUAL DATA]
Known events this period (price changes, hires, delays, one-off costs): [KNOWN EVENTS]
Materiality threshold (e.g., over 5% and over $5,000): [THRESHOLD]
Audience for the commentary: [AUDIENCE]

Deliver:
1. A table with each line: budget, actual, variance in amount and %, and favorable or unfavorable.
2. The material variances only, ranked by size, each with the likely driver (volume, price, mix, timing, one-off, error) based on my notes; mark where the cause is unknown.
3. Which variances are timing (will reverse) versus permanent.
4. Effect on the full-year outlook if the trend continues.
5. A 150-word commentary for the audience in plain language.
6. Questions to ask budget owners and actions to consider.
Check your arithmetic and show any formulas you use. Do not invent causes.
```

## How to use it

1. **Paste the table with consistent signs** (costs as positive numbers is fine; just be consistent).
2. **Add what you already know** about the period so the drivers are grounded.
3. **Confirm unknown causes with budget owners** before the commentary goes out.

## Tips

- Recheck key totals in your spreadsheet; treat the AI's math as a draft.
- Build next quarter's view with the [13-week cash flow forecast prompt](/prompts/week-cash-flow-forecast/).
- Track the drivers ongoing with the [weekly KPI dashboard prompt](/prompts/weekly-kpi-dashboard-metrics/).
