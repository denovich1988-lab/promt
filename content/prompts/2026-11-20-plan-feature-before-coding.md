---
title: Plan a feature before the AI writes code
date: 2026-11-20
category: coding
description: Make the AI ask questions, map affected files and agree on a design before coding, which cuts hallucinated APIs and wasted rewrites.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [software design, ai coding, architecture]
---

When you ask an AI to "add feature X", it often guesses your stack, invents functions and writes code that doesn't fit. A short planning step fixes most of this. This prompt makes the AI clarify requirements, list assumptions and propose a design you approve before a single line is written.

## Prompt

```prompt
You are a senior software engineer. Before writing any code, help me plan this feature.

Feature request: [WHAT THE FEATURE SHOULD DO, FROM THE USER'S POINT OF VIEW]
Tech stack and versions: [LANGUAGES, FRAMEWORKS, DATABASE]
Relevant code (files, models, routes): [PASTE OR DESCRIBE]
Constraints: [PERFORMANCE, SECURITY, DEADLINES, CONVENTIONS]

Step 1 — Ask me up to 7 clarifying questions about requirements and edge cases. Wait for my answers.
Step 2 — After my answers, write:
  a) A short spec: user stories and acceptance criteria.
  b) Assumptions you're making, each one I can confirm or reject.
  c) The files and functions that need to change or be created, and why.
  d) Data model or API changes.
  e) Risks and edge cases (errors, permissions, empty states, concurrency).
  f) A step-by-step implementation plan in small commits, with tests for each.
Step 3 — Only after I approve the plan, implement step 1.

Rules: use only functions and libraries that exist in the code I shared or in the official docs of my stack versions. If you're not sure an API exists, say so instead of guessing.
```

## How to use it

1. **Paste the real models and routes involved,** not the whole repo.
2. **Answer every question** and reject wrong assumptions explicitly.
3. **Implement one step at a time** and run tests between steps.

## Tips

- Save the approved spec in your repo; it doubles as documentation.
- Start a fresh chat for implementation and paste the approved plan in first.
