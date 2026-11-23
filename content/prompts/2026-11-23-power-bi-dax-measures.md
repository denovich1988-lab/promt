---
title: Power BI DAX measures from plain English
date: 2026-11-23
category: data
description: "A ChatGPT prompt for Power BI DAX: describe the metric in plain English and get measures with explanations, test steps and common pitfalls."
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [power bi, dax, business intelligence, data analysis]
---

DAX is powerful but easy to get subtly wrong, especially with filter context, time intelligence and totals. This ChatGPT prompt for Power BI DAX takes a metric described in plain English plus your table structure and returns measures with a line-by-line explanation, how to test them against known numbers, and the traps to watch for.

## Prompt

```prompt
Act as a Power BI and DAX expert.

Tables and key columns (and relationships): [TABLES, e.g. Sales[Date, ProductID, Amount], Products[ProductID, Category], Date[Date, Year, Month] with Date marked as date table]
Metric I need, in plain English: [METRIC, e.g. year-to-date revenue vs same period last year, % change]
How it will be shown: [VISUAL, e.g. matrix by category and month, card]
Any filters or business rules: [RULES, e.g. exclude returns, fiscal year starts in July]

Give me:
1. The DAX measure(s), using variables and clear names.
2. A plain-English explanation of each line, including how filter context affects the result.
3. How the measure behaves in totals and when a filter is cleared, and a fix if totals look wrong.
4. A quick test: what to compare it with to confirm it's right.
5. Common mistakes for this kind of measure and performance tips.
If my model is missing something the measure needs (like a proper date table), say so first.
```

## How to use it

1. **List relationships** accurately; most DAX errors come from the model, not the formula.
2. **Test against a number you trust**, such as a monthly total from finance.
3. **Keep measures in a dedicated table** with consistent names.

## Tips

- Working in spreadsheets instead? Use the [Excel formulas in plain English](/prompts/excel-formulas-plain-english/) prompt.
- Pick the right visual with the [choose the right chart](/prompts/choose-the-right-chart/) prompt.
