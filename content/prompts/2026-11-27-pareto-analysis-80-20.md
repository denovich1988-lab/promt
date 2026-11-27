---
title: Pareto analysis prompt to find the vital few
date: 2026-11-27
category: business
description: Run a Pareto (80/20) analysis on complaints, defects, costs or sales data, with a ranked table, cumulative percentages, chart steps and actions.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [pareto analysis, 80/20 rule, data analysis, process improvement]
---

When you have dozens of problems or cost lines, it's hard to know where to start. A Pareto analysis ranks categories by how much they contribute and shows the "vital few" that cause most of the impact, often roughly the 80/20 pattern, though not always. This prompt runs the analysis on your data, builds the table and chart instructions, and turns the top categories into actions.

## Prompt

```prompt
Act as a process improvement analyst.

What I'm analysing: [E.G. CUSTOMER COMPLAINTS BY REASON / PRODUCT DEFECTS BY TYPE / SUPPORT TICKETS BY CATEGORY / COSTS BY SUPPLIER / REVENUE BY CUSTOMER]
Time period: [E.G. LAST 6 MONTHS]
Data (paste category and count or value):
[CATEGORY | COUNT OR VALUE]
Measure that matters most: [FREQUENCY / COST / TIME LOST / REVENUE]
Goal: [E.G. CUT COMPLAINTS BY A THIRD THIS QUARTER]

Please:
1. Check the data for problems (overlapping categories, a large "other" bucket, missing data) and suggest fixes.
2. Build a Pareto table: category, count/value, percentage, cumulative percentage, sorted from largest to smallest.
3. Identify the vital few categories and say what share of the total they cover (whatever the real split is; don't force 80/20).
4. Give steps to make a Pareto chart in Excel or Google Sheets (bars plus cumulative line).
5. Suggest whether to weight by cost or impact instead of count, and show how the ranking might change.
6. For the top 3 categories, suggest likely causes to investigate and one action each.
7. Explain how to re-run the analysis after changes to measure improvement.

Calculate from my numbers only and show the arithmetic.
```

## How to use it

1. **Clean your categories first** so each item fits one bucket.
2. **Check the AI's arithmetic** in a spreadsheet before you share results.
3. **Re-run the analysis** after a month of fixes to see if the top bars shrink.

## Tips

- Frequency and cost can tell different stories; a rare problem can still be the most expensive.
- Follow up the top category with a root cause analysis before choosing a fix.
