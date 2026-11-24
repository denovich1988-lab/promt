---
title: Get pandas code for a data analysis task
date: 2026-11-24
category: data
description: A ChatGPT prompt for pandas data analysis code — load, clean, group and chart your dataset with explained steps and checks for common errors.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [pandas, python, data analysis, code]
---

Writing pandas code from scratch is slow when you only need a quick answer from a spreadsheet. Generic snippets break on real column names and messy values. This prompt asks for pandas code built around your actual columns and question, with cleaning steps and checks that catch common mistakes.

## Prompt

```prompt
Act as a senior data analyst who writes clean pandas code.

My question: [QUESTION, e.g. which product category grew fastest month over month]
File type and how I load it: [FILE TYPE AND PATH]
Columns with example values:
[COLUMNS AND SAMPLE ROWS]
Known data issues (missing values, text numbers, mixed date formats): [DATA ISSUES]
Python environment (Jupyter, script, Google Colab): [ENVIRONMENT]

Write:
1. Code that loads the data, fixes types, and handles the issues listed.
2. The analysis steps (filters, groupby, pivots) with a short comment on each.
3. A simple chart with matplotlib that answers the question.
4. Sanity checks: row counts before and after cleaning, nulls, and duplicates.
5. A plain-English explanation of how to read the result.
Use only the column names I gave. If something is ambiguous, state your assumption at the top.
```

## How to use it

1. **Paste 5–10 real rows** (remove personal data first).
2. **Run the sanity checks** before you trust the chart.
3. **Ask a follow-up** if a number looks wrong; paste the error or output.

## Tips

- Clean the data first with the [clean messy data rules](/prompts/clean-messy-data-rules/) prompt.
- Look for patterns with the [dataset trends and outliers](/prompts/dataset-trends-outliers/) prompt.
