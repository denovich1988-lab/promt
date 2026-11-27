---
title: Data quality checks for any dataset
date: 2026-11-27
category: data
description: Define data quality checks for a dataset with rules for completeness, validity, duplicates and freshness, plus SQL or Python code and an alert plan.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [data quality, sql, data engineering, analytics]
---

Bad data rarely announces itself: a column quietly fills with nulls, an upstream system starts sending duplicates, or yesterday's load never arrives, and someone spots it in a dashboard a week later. A short set of automated checks catches most of this early. This data quality prompt turns a table description into specific rules for completeness, validity, uniqueness, consistency and freshness, with code you can run and a plan for who gets alerted.

## Prompt

```prompt
Act as a data engineer focused on data quality. Define checks for this dataset.

Dataset / table: [NAME, WHAT ONE ROW REPRESENTS]
Schema: [PASTE COLUMNS WITH TYPES, OR A SAMPLE OF ROWS]
How it's loaded: [SOURCE, FREQUENCY, BATCH OR STREAMING]
Who uses it and for what: [DASHBOARDS, MODELS, FINANCE REPORTS]
Known problems: [E.G. DUPLICATE ORDERS, MISSING COUNTRY, LATE LOADS]
Tools: [SQL DIALECT E.G. POSTGRES / BIGQUERY / SNOWFLAKE, OR PYTHON/PANDAS, OR A DATA QUALITY FRAMEWORK]

Deliver:
1. A check list grouped by dimension: completeness, validity (types, ranges, allowed values, formats), uniqueness, referential integrity, consistency across columns or tables, freshness and volume.
2. For each check: the rule in plain English, why it matters for the users, severity (block / warn), and threshold.
3. Code for each check in my tool, returning failing rows or a count.
4. Volume and freshness checks that compare against recent history rather than fixed numbers.
5. An alert plan: who is notified for which severity, and what they should do first.
6. The 5 checks to implement first if I only have an hour.
Base the rules on my schema; mark any assumed business rule for me to confirm.
```

## How to use it

1. **Paste a real sample of rows**; it helps the model spot formats and edge cases.
2. **Confirm the assumed business rules** with the data owner before turning checks on.
3. **Start with the top 5 checks** and add more after the first false alarms are tuned.

## Tips

- Checks that warn too often get ignored; set thresholds from recent history.
- Run checks right after each load, before dashboards refresh.
