---
title: Optimize a slow SQL query step by step
date: 2026-11-22
category: coding
description: A ChatGPT prompt to optimize a slow SQL query using the query plan, schema and indexes, with a rewritten query and index suggestions to test.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [sql optimization, database performance, indexes, query plan]
---

A slow query can drag down a whole application, and guessing at indexes often makes things worse. This ChatGPT prompt helps you optimize a slow SQL query the way a database engineer would: it reads the execution plan, schema and data sizes, explains where the time goes, then suggests a rewritten query and index changes, with the trade-offs and a way to test each one.

## Prompt

```prompt
You are a database performance engineer. Help me speed up this query.

Database and version (PostgreSQL, MySQL, SQL Server, etc.): [DATABASE]
The slow query:
[QUERY]
Execution plan (EXPLAIN / EXPLAIN ANALYZE output): [EXECUTION PLAN]
Table definitions and existing indexes: [SCHEMA AND INDEXES]
Approximate row counts and how often tables change: [DATA SIZE]
Current run time and target: [TIMING]
How the query is used (report, API endpoint, batch job): [USAGE]

Deliver:
1. A plain-language explanation of the plan: where most of the time goes and why.
2. Specific problems found (full scans, bad joins, functions on indexed columns, implicit casts, N+1 patterns, sorting large sets, missing filters).
3. A rewritten query with comments explaining each change; results must stay identical.
4. Index suggestions with the exact CREATE INDEX statements, and the write and storage cost of each.
5. Other options if needed (caching, pagination, materialized views, partitioning).
6. How to test: what to compare in the new plan and how to confirm results match.
Do not assume columns or indexes that are not in the schema.
```

## How to use it

1. **Include the real execution plan**; without it, suggestions are guesses.
2. **Test changes on a copy of production data** before deploying.
3. **Add one index at a time** and measure its effect on reads and writes.

## Tips

- Remove sensitive data from sample rows before pasting.
- Write new queries from scratch with the [SQL from plain English prompt](/prompts/sql-query-from-plain-english/).
- Get a second opinion with the [senior code review prompt](/prompts/senior-code-review/).
