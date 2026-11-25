---
title: Safe database schema migration plan prompt
date: 2026-11-25
category: coding
description: Plan a safe database schema migration with zero-downtime steps, backfill strategy, rollback plan and checks before and after each deploy.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [database migration, schema change, zero downtime, backend development]
---

Renaming a column or splitting a table looks simple until it locks a big table in production or breaks the old version of the app during deploy. A safe database schema migration plan breaks the change into small, reversible steps. This prompt asks the AI to design an expand-and-contract plan for your database and stack, with backfills, rollbacks and checks at each step.

## Prompt

```prompt
Act as a senior backend engineer who has run many production database migrations.

Database and version: [E.G. POSTGRESQL 16, MYSQL 8]
ORM or migration tool: [E.G. RAILS, DJANGO, PRISMA, FLYWAY]
Current schema (relevant tables): [PASTE DDL]
Change I want: [E.G. RENAME COLUMN, SPLIT TABLE, CHANGE TYPE, ADD NOT NULL COLUMN]
Table size and traffic: [ROWS, WRITES PER SECOND, PEAK HOURS]
Deploy process: [E.G. ROLLING DEPLOYS, OLD AND NEW APP VERSIONS RUN TOGETHER]

1. Explain the risks of doing this change in one step (locks, downtime, app compatibility).
2. Design an expand-and-contract plan as numbered deploys, each with: migration SQL or code, app changes, and why it's safe while old and new versions run together.
3. Write a batched backfill approach with batch size, throttling and how to resume.
4. Give a rollback plan for each step.
5. List checks before and after each step (row counts, null checks, query plans, error rates).
6. Point out anything that depends on my database version and should be verified in the docs.

Show code in my migration tool's format where possible.
```

## How to use it

1. **Paste the real DDL and table sizes**; the safe approach depends on them.
2. **Test the full plan on a staging copy** with production-like data volume.
3. **Run one step per deploy** and check the metrics before the next.

## Tips

- Ask for lock timeout settings to add to each migration for safety.
- Keep the plan in your pull request so reviewers can follow the sequence.
