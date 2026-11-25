---
title: Improve error handling in your code
date: 2026-11-25
category: coding
description: Review code for missing or weak error handling and get fixes for retries, clear messages, logging and failure paths, with tests for each case.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [error handling, code quality, exceptions, testing]
---

Most bugs that reach users show up in the failure paths: a network call times out, a file is missing, input is empty, a third-party API returns something unexpected. Code often handles the happy path well and swallows or ignores the rest. This prompt reviews a piece of code specifically for error handling, lists each failure point and returns fixed code with clear messages, sensible retries and tests for the error cases.

## Prompt

```prompt
Act as a senior engineer reviewing error handling.

Language and framework: [E.G. PYTHON 3.12 / NODE.JS / GO]
What this code does and who calls it: [CONTEXT]
How errors should surface: [E.G. HTTP STATUS CODES, EXCEPTIONS TO CALLER, USER MESSAGES, LOGS]
Code:
[PASTE CODE]

1. List every place this code can fail (I/O, network, parsing, nulls, invalid input, timeouts, external APIs), with what happens today.
2. Flag anti-patterns: swallowed exceptions, catching everything, losing the original error, unclear messages, leaking sensitive data in errors, missing cleanup.
3. Rewrite the code with: input validation, specific error types, helpful messages, retries with backoff only where safe (idempotent operations), timeouts, cleanup, and structured logging with context but no secrets.
4. Explain each change in one line.
5. Write unit tests for the main failure cases.

Keep the public behaviour and function signatures the same unless a change is necessary; if so, say why.
```

## How to use it

1. **Paste one module or function at a time** with a sentence about how it's used.
2. **State how errors should reach callers** so the fixes fit your conventions.
3. **Run the new tests** and review retry logic carefully before merging.

## Tips

- Don't paste API keys, passwords or customer data into the prompt.
- Retries on non-idempotent actions (like payments) can cause duplicates; check those by hand.
