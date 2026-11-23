---
title: Database schema design from app requirements
date: 2026-11-23
category: coding
description: "A ChatGPT prompt for database schema design: tables, keys, relationships, indexes and SQL DDL from plain-English requirements, with trade-offs explained."
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [database design, sql, schema, backend]
---

A weak database schema causes slow queries, messy data and painful migrations later. This prompt turns plain-English app requirements into a relational schema: entities, keys, relationships, constraints and indexes, with the SQL to create it and the trade-offs explained, so you can review the design before writing any code.

## Prompt

```prompt
Act as a senior backend engineer. Design a database schema.

What the app does: [APP DESCRIPTION]
Main things it stores and how they relate: [ENTITIES AND RELATIONSHIPS, e.g. users have many orders, orders have many items]
Most common queries and writes: [KEY QUERIES]
Expected scale: [SCALE, e.g. 10k users, 1M rows per month]
Database: [DATABASE, e.g. PostgreSQL, MySQL, SQLite]
Special needs: [NEEDS, e.g. soft deletes, multi-tenant, audit history, time zones]

Give me:
1. An entity list with fields, types, nullability and constraints.
2. Relationships with cardinality, and an ER diagram in Mermaid syntax.
3. CREATE TABLE statements with primary keys, foreign keys, unique constraints and sensible defaults.
4. Indexes based on the key queries, with why each one is needed.
5. Design trade-offs (normalization vs. speed, enums vs. lookup tables, IDs) and what I'd change at 10× scale.
6. Example queries for the 3 most common operations.
Ask about anything ambiguous before assuming.
```

## How to use it

1. **List your real queries**; indexes should follow how the app reads data.
2. **Review the ER diagram** with your team before writing migrations.
3. **Test with realistic data volumes** before launch.

## Tips

- Write queries against it with the [SQL query from plain English](/prompts/sql-query-from-plain-english/) prompt.
- Plan the whole system with the [software architecture plan](/prompts/software-architecture-plan/) prompt.
