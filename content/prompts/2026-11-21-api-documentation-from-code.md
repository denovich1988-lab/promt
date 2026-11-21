---
title: API documentation from your code
date: 2026-11-21
category: coding
description: Generate clear API reference docs from route handlers or code — endpoints, parameters, responses, errors and examples — ready for developers.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [api documentation, developer docs, rest api]
---

APIs without good documentation create support tickets and slow integrations. Writing docs by hand is tedious, so they fall behind the code. This prompt reads your route handlers, schemas or controllers and produces reference documentation in a consistent format, and lists anything unclear rather than guessing how the API behaves.

## Prompt

```prompt
You are a technical writer for developer tools. Write API reference documentation from this code.

API purpose and audience: [API PURPOSE AND USERS]
Base URL and authentication method: [BASE URL AND AUTH]
Framework and language: [FRAMEWORK]
Code (routes, handlers, schemas, validation):
[CODE]

For each endpoint write:
1. Method, path and a one-line description of what it does.
2. Authentication and permissions required.
3. Path, query and body parameters in a table: name, type, required, description, constraints and defaults.
4. Example request (curl) and example success response (JSON).
5. Error responses: status code, when it happens, example body.
6. Notes: pagination, rate limits, idempotency or side effects, only if visible in the code.

Then add:
- A short getting-started section with an authentication example.
- An OpenAPI 3 YAML snippet for the endpoints.
- A list of behaviours that are unclear from the code (for example, missing validation or undocumented error cases).

Document only what the code shows. Use realistic but obviously fake example values.
```

## How to use it

1. **Paste one resource at a time** (for example, all /users routes) for the most accurate result.
2. **Review the unclear behaviours list** — it often reveals bugs or missing validation.
3. **Keep docs next to the code** and regenerate them when endpoints change.

## Tips

- Never paste real API keys, secrets or customer data into the prompt.
- Test every example request against a staging environment before publishing.
