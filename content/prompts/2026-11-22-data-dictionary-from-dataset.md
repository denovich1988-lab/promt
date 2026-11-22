---
title: Data dictionary for a dataset or table
date: 2026-11-22
category: data
description: This ChatGPT prompt writes a data dictionary from your column list or sample rows, with definitions, types, allowed values and quality notes.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [data dictionary, data documentation, data quality, analytics]
---

When nobody knows what "status_cd" or "rev_adj" means, reports go wrong. A data dictionary explains every field: what it means, its type, allowed values and where it comes from. This ChatGPT prompt drafts a data dictionary from your column names and a few sample rows, flags fields it cannot interpret, and notes possible data quality problems to check.

## Prompt

```prompt
You are a data analyst documenting a dataset.

Dataset or table name and purpose: [DATASET AND PURPOSE]
Source system: [SOURCE]
Column names (and types, if known): [COLUMNS]
10–20 sample rows (remove personal data first): [SAMPLE ROWS]
Business context and known rules: [CONTEXT]

Create a data dictionary as a table with these columns:
- Field name
- Plain-English definition
- Data type and format (e.g. date YYYY-MM-DD)
- Allowed values or range (from the sample, marked "observed")
- Example value
- Nullable (yes/no/unknown)
- Likely source or calculation
- Notes and quality concerns (blanks, odd values, mixed formats)

Then:
1. List fields whose meaning you are guessing, with a question for the data owner about each.
2. Suggest a primary key and any relationships to other tables you can infer.
3. Suggest 5 data quality checks to run regularly.
```

## How to use it

1. **Remove names, emails and other personal data** from the sample rows.
2. **Send the guessed fields to the data owner** to confirm.
3. **Store the dictionary next to the data** and update it when columns change.

## Tips

- Fix the problems it finds with the [clean messy data rules](/prompts/clean-messy-data-rules/) prompt.
- Then explore the data with [dataset trends and outliers](/prompts/dataset-trends-outliers/).
