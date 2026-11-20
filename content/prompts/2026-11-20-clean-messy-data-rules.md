---
title: Clean messy data with clear step-by-step rules
date: 2026-11-20
category: data
description: Get a cleaning plan for a messy spreadsheet or CSV, covering duplicates, formats, missing values and typos, plus a script or formulas to apply it.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [data cleaning, csv, spreadsheets]
---

Messy data — duplicate rows, mixed date formats, misspelled city names, blank cells — breaks every analysis that follows. Cleaning by hand is slow and hard to repeat. This prompt inspects a sample and writes clear cleaning rules plus code or formulas you can run on the full file.

## Prompt

```prompt
You are a data analyst. Help me clean this dataset.

What the data is and what I'll use it for: [DATA AND PURPOSE]
Column list with a short description of each: [COLUMNS]
A sample of 20–50 rows (including messy ones): [SAMPLE ROWS]
Tool I'll use: [EXCEL, GOOGLE SHEETS, PYTHON PANDAS, SQL]

Do this:
1. List every data quality problem you see in the sample, by column (duplicates, formats, missing values, typos, outliers, mixed units).
2. Propose a cleaning rule for each, and note any rule that needs my decision (e.g. drop or fill missing values).
3. Write the code or formulas for my tool to apply all rules, with comments.
4. Add checks to run after cleaning (row counts, unique values, ranges).
5. Suggest how to stop the same problems at the source (form validation, drop-down lists).

Never delete data without telling me which rule removes it and how many rows it affects in the sample.
```

## How to use it

1. **Include messy rows** in the sample, not just clean ones.
2. **Run the code on a copy** of your data first.
3. **Compare row counts** before and after cleaning.

## Tips

- Keep the original raw file unchanged.
- Save the cleaning script so you can rerun it on next month's data.
