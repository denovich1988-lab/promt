---
title: Design REST API endpoints the clean way
date: 2026-11-24
category: coding
description: An AI prompt for REST API endpoint design — resources, routes, request and response shapes, errors, pagination, auth and versioning.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [rest api, api design, backend, endpoints]
---

APIs are hard to change once clients depend on them, so early design decisions about naming, errors and pagination matter. Inconsistent endpoints and ad-hoc error formats cause bugs for years. This prompt turns your feature requirements into a REST API endpoint design with consistent conventions you can review before writing code.

## Prompt

```prompt
Act as a senior backend engineer and API designer. Design REST API endpoints.

Product and feature: [FEATURE]
Main entities and relationships: [ENTITIES]
Who calls the API (web app, mobile, third parties): [CLIENTS]
Actions users need: [USE CASES]
Auth method: [AUTH, e.g. OAuth 2, API keys, session]
Existing conventions to follow: [CONVENTIONS OR "NONE"]

Deliver:
1. Resource list and URL structure.
2. Endpoint table: method, path, purpose, auth/permissions.
3. Request and response JSON examples for the main endpoints.
4. A consistent error format with example error codes and HTTP status codes.
5. Pagination, filtering and sorting approach.
6. Idempotency, rate limiting and versioning recommendations.
7. An OpenAPI 3 snippet for two endpoints.
8. Design trade-offs I should decide on and open questions.
Prefer standard REST conventions; explain any place you deviate.
```

## How to use it

1. **List real use cases**, not just entities, so endpoints match how clients work.
2. **Review the open questions** with frontend and mobile developers.
3. **Generate the full OpenAPI spec** once the design is agreed.

## Tips

- Plan the storage with the [database schema design](/prompts/database-schema-design/) prompt.
- Document the finished API with the [API documentation from code](/prompts/api-documentation-from-code/) prompt.
