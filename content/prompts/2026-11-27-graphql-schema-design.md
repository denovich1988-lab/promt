---
title: GraphQL schema design prompt
date: 2026-11-27
category: coding
description: Design a GraphQL schema from your app requirements, with types, queries, mutations, pagination, error handling and notes on N+1 and auth.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [graphql, api design, schema, backend]
---

A GraphQL schema is the contract between your frontend and backend, and early mistakes (vague nullability, no pagination, mutations that return nothing useful) are painful to change later. This GraphQL schema design prompt turns your requirements into a typed SDL schema with clear naming, cursor pagination and error handling, and points out performance and security issues to handle in your resolvers.

## Prompt

```prompt
Act as a senior backend engineer experienced in GraphQL API design.

App description: [WHAT THE APP DOES AND WHO USES IT]
Main entities and relationships: [E.G. USERS HAVE MANY PROJECTS; PROJECTS HAVE TASKS; TASKS HAVE COMMENTS AND ASSIGNEES]
Key screens or use cases: [E.G. DASHBOARD LISTING PROJECTS, TASK DETAIL PAGE, CREATE AND ASSIGN TASK]
Server stack: [E.G. NODE WITH APOLLO SERVER, PYTHON WITH STRAWBERRY, GO WITH GQLGEN]
Auth model: [E.G. JWT, ROLES: ADMIN, MEMBER, VIEWER]
Existing data store: [E.G. POSTGRES TABLES — PASTE IF AVAILABLE]

Please produce:
1. The full schema in SDL: object types, enums, input types, queries, mutations and (if useful) subscriptions.
2. Careful nullability: explain any field you made nullable.
3. Cursor-based pagination using the connection pattern for list fields that can grow.
4. Mutation payload types that return the changed object plus user-facing errors.
5. A short naming conventions list used in the schema.
6. Notes on resolvers: where N+1 queries will happen and how to batch them (for example with a DataLoader pattern).
7. Security notes: field-level authorization, query depth and complexity limits, input validation.
8. Three example queries and one mutation the frontend would send for my use cases.
9. Things to decide before shipping, and how to evolve the schema without breaking clients.
```

## How to use it

1. **Describe real screens**, not just tables, so the schema fits how the frontend reads data.
2. **Review nullability and auth notes** with your team before writing resolvers.
3. **Load the SDL into your server** and run the example queries to check it works.

## Tips

- Add new fields and deprecate old ones instead of renaming; clients may still use the old names.
- Check exact syntax against your GraphQL server library's documentation.
