---
title: Write SQL queries from plain English
date: 2026-11-19
category: data
description: Describe the data you need in plain words and get a correct, commented SQL query for your database schema, plus a quick way to check it.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [sql, data analysis, queries]
---

Writing SQL is easy to get almost right: a wrong join or a missing filter can quietly double your numbers. Giving the AI your actual table structure and asking it to state its assumptions avoids most of these mistakes. This prompt also asks for checks you can run to trust the result.

## Prompt

```prompt
You are a careful data analyst. Write a SQL query.

Database: [POSTGRESQL, MYSQL, BIGQUERY, SNOWFLAKE, SQL SERVER, SQLITE]
Tables and columns (paste the schema or describe each table):
[SCHEMA]
What I need, in plain English: [QUESTION, E.G. "MONTHLY REVENUE BY COUNTRY FOR 2026, ONLY PAID ORDERS"]
Notes on the data (optional): [E.G. "ORDERS CAN BE REFUNDED", "TIMES ARE IN UTC"]

Respond with:
1. Assumptions: how you interpret the question, joins and filters. Ask me if anything is ambiguous.
2. The query, formatted, with a comment on each main step.
3. Possible pitfalls: duplicates from joins, NULLs, time zones, refunds.
4. 2 quick sanity-check queries (e.g. total count or sum to compare with).

Only use the tables and columns I listed. Do not invent column names.
```

## How to use it

1. **Paste the real schema** (for example from `\d table` or the information schema) for accurate column names.
2. **Run the sanity checks** and compare them with a number you already know.
3. **Ask for changes** in plain English, like "now split it by product category".

## Tips

- Never paste real customer data or passwords; the schema alone is enough.
- Ask the AI to explain a query you inherited, line by line, before you change it.
