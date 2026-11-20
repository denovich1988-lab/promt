---
title: Refactor legacy code without breaking it
date: 2026-11-20
category: coding
description: Get a step-by-step refactoring plan for messy code, with safety tests first and small changes you can review and ship one at a time.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [refactoring, legacy code, clean code]
---

Rewriting old code in one go is how working features break. Safe refactoring means pinning current behaviour with tests, then making small changes that each keep the tests green. This prompt makes the AI work that way and stops it from quietly changing what the code does.

## Prompt

```prompt
You are a senior engineer who specialises in legacy code. Help me refactor this code safely.

Language and framework: [LANGUAGE / FRAMEWORK AND VERSION]
What the code does: [SHORT DESCRIPTION]
Main problems I see: [E.G. LONG FUNCTION, DUPLICATION, HARD TO TEST]
Constraints: [PUBLIC API MUST NOT CHANGE, NO NEW DEPENDENCIES, ETC.]
Code:
[PASTE CODE]

Work in this order:
1. Explain what the code currently does, including edge cases and odd behaviour. Flag anything that looks like a bug but don't fix it yet — list it separately.
2. Write characterisation tests that capture the current behaviour, including the odd parts.
3. Propose a sequence of 4–8 small refactoring steps (extract function, rename, remove duplication, etc.). Each step must keep behaviour identical.
4. Show the code after each step, with a one-line reason.
5. Finish with the final version and a list of the possible bugs from step 1 for me to decide on.

Do not change behaviour, invent APIs or add libraries. If something is unclear, ask instead of assuming.
```

## How to use it

1. **Include the callers or tests** if the function's use isn't obvious from the code alone.
2. **Run the characterisation tests on the original code first;** they must pass before you refactor.
3. **Commit after each step** so any break is easy to find and undo.

## Tips

- For large files, refactor one function per conversation.
- Fix the flagged bugs in separate commits after the refactor, not during it.
