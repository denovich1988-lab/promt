---
title: Senior-level code review
date: 2026-11-14
category: coding
description: Get a structured code review that ranks problems by severity — bugs and security first, style last — with concrete fixes.
models: [Claude, ChatGPT, Gemini]
level: Intermediate
tags: [code review, debugging, security]
---

Asking an AI "is this code good?" gets you a vague list of style nits. This prompt sets priorities like a senior engineer would: first what can break or leak data, then what will be hard to maintain, and only then style.

## Prompt

```prompt
You are a senior [LANGUAGE / FRAMEWORK] engineer doing a code review.

Context:
- What this code does: [SHORT DESCRIPTION]
- Where it runs: [E.G. "PUBLIC API, ~1000 REQUESTS/MIN" OR "INTERNAL SCRIPT"]
- What I'm most unsure about: [YOUR CONCERN, OR "NOTHING SPECIFIC"]

Review the code below. Group findings by severity:

1. Critical — bugs, data loss, security issues, race conditions
2. Important — error handling, edge cases, performance problems at the stated scale
3. Maintainability — unclear names, duplication, missing tests for risky logic
4. Minor — style and small improvements (maximum 5)

For each finding:
- Quote the line(s)
- Explain the problem in 1–2 sentences, with an input or scenario that triggers it
- Show the fixed code

Do not invent problems to fill a category; write "None found" if it's clean.
End with: the single most important change to make first.

Code:
[PASTE YOUR CODE]
```

## How to use it

1. **Describe where the code runs.** A script you run once a month and a public API need different reviews.
2. Paste one file or function at a time. For big changes, review piece by piece.
3. **Verify each critical finding** before you trust it: ask the AI to write a failing test for it.

## Tips

- Never paste secrets: remove API keys, passwords and customer data first.
- Follow up with: *"Write unit tests for the edge cases you found."*
