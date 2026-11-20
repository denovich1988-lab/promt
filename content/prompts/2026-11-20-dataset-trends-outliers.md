---
title: Find trends and outliers in your dataset
date: 2026-11-20
category: data
description: Get a structured first look at any table of data — quality checks, key trends, outliers and the next questions worth answering.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [data analysis, exploratory analysis, spreadsheets]
---

When you open a new dataset, it's easy to jump to charts before checking whether the data is even clean. A short exploratory pass catches errors and points to the questions that matter. This prompt runs that pass in a fixed order and tells you how confident each finding is.

## Prompt

```prompt
You are a data analyst. Do an exploratory analysis of my data.

What the data is: [E.G. MONTHLY SALES BY STORE, 2023–2025]
Business question: [WHAT I WANT TO KNOW]
Columns and their meaning: [COLUMN DESCRIPTIONS]
Data (paste or upload): [DATA]

Work in this order:
1. Data quality: row count, missing values, duplicates, odd formats, impossible values. Suggest fixes.
2. Summary statistics for key columns.
3. Trends over time or across groups related to my question.
4. Outliers: list them, possible reasons, and whether to keep or exclude them.
5. 3–5 key findings, each with the evidence and a confidence level (high/medium/low).
6. Suggested charts (type, axes) to show each finding.
7. Next questions and what extra data would answer them.

If you can run code, show it. If not, say which calculations are estimates. Don't claim causes from correlations.
```

## How to use it

1. **Describe each column clearly;** guessed meanings cause wrong conclusions.
2. **Fix the quality issues first,** then rerun the analysis.
3. **Verify key numbers** in your spreadsheet before sharing them.

## Tips

- Use a tool with code execution for large files so calculations are exact.
- Ask for a one-paragraph summary for a manager at the end.
