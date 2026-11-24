---
title: Generate TypeScript types from JSON data
date: 2026-11-24
category: coding
description: An AI prompt to generate TypeScript types from JSON — interfaces, optional fields, unions, enums and a runtime validation schema if needed.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [typescript, json, types, api]
---

Writing TypeScript types by hand for a large API response is slow and easy to get wrong, especially with nullable fields, mixed arrays and nested objects. This prompt turns sample JSON into clean TypeScript types, points out fields it can't be sure about and can add a runtime validation schema so bad data fails loudly.

## Prompt

```prompt
Act as a senior TypeScript developer. Generate types from this JSON.

Sample JSON (one or more responses): [JSON SAMPLES]
What the data represents and where it comes from: [CONTEXT, e.g. REST API order endpoint]
Naming style: [NAMING, e.g. PascalCase interfaces, camelCase fields]
Validation library, if any: [LIBRARY, e.g. Zod, none]

Produce:
1. TypeScript interfaces or types for every object, with nested types named clearly.
2. Optional and nullable fields marked correctly; explain which ones you inferred from comparing samples.
3. String literal unions or enums where values look like a fixed set (and say they are a guess).
4. Date strings, IDs and money fields noted with comments.
5. If a library is given, a matching validation schema and the inferred type from it.
6. A list of assumptions I should confirm against the API documentation.
Return code in one block, then the assumptions list.
```

## How to use it

1. **Paste several real responses**, including edge cases, so optional fields are detected.
2. **Confirm the assumptions** against the API docs before relying on unions.
3. **Validate at the boundary** where data enters your app if you added a schema.

## Tips

- Document the endpoint afterwards with the [API documentation from code](/prompts/api-documentation-from-code/) prompt.
- Remove secrets and personal data from samples before pasting them.
