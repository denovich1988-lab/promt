---
title: Write unit tests that catch real bugs
date: 2026-11-19
category: coding
description: Generate focused unit tests for a function, covering normal cases, edge cases and errors, in your test framework and project style.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [unit testing, test coverage, programming]
---

AI-generated tests often just repeat the code's current behaviour or test trivial things. Useful tests start from what the function should do and probe the edges where bugs live. This prompt asks for a test plan first, then tests in your framework, and flags behaviour that looks like a bug.

## Prompt

```prompt
You are a senior engineer who writes careful tests. Write unit tests for the code below.

Language and test framework: [E.G. PYTHON + PYTEST, TYPESCRIPT + VITEST, JAVA + JUNIT]
Code to test:
[PASTE FUNCTION OR CLASS]
What it is supposed to do: [EXPECTED BEHAVIOUR, BUSINESS RULES]
Example of an existing test in my project (for style): [PASTE OR "NONE"]

Steps:
1. Test plan: list cases grouped as normal, edge (empty, zero, max, unicode, boundaries, time zones), and error cases.
2. Write the tests. One behaviour per test, descriptive names, arrange-act-assert layout.
3. Mock only external dependencies (network, database, clock, random), not the code under test.
4. List any behaviour in the code that seems to contradict the expected behaviour — likely bugs.
5. Note anything that would be hard to test and suggest a small refactor.

Use only APIs that exist in my framework version. Don't change the code under test unless I ask.
```

## How to use it

1. **Describe the intended behaviour,** not just the code; otherwise tests will lock in existing bugs.
2. **Run the tests** and read any failures carefully — they may reveal real bugs.
3. **Add the tests to CI** so they run on every change.

## Tips

- Ask for property-based tests for functions with many possible inputs.
- Paste a bug report and ask for a test that reproduces it before fixing.
