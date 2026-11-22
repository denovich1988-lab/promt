---
title: Convert code to another programming language
date: 2026-11-22
category: coding
description: A ChatGPT prompt to convert code from one programming language to another, using idiomatic patterns, matching behavior and listing differences.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [code conversion, refactoring, programming, migration]
---

Line-by-line translation between languages produces code that works badly and reads worse. This ChatGPT prompt converts code from one programming language to another the way an experienced developer would: it keeps the behavior, uses the target language's idioms and libraries, flags differences in things like integer math, errors and concurrency, and adds tests to prove the result matches.

## Prompt

```prompt
You are a senior engineer fluent in both languages. Convert this code.

Source language and version: [SOURCE LANGUAGE]
Target language and version: [TARGET LANGUAGE]
Libraries or frameworks allowed in the target: [TARGET LIBRARIES]
What the code does and where it runs: [CONTEXT]
Code:
[CODE]

Requirements:
1. First, summarize what the code does in 3–5 bullets so I can confirm you understood it.
2. Convert it to idiomatic [TARGET LANGUAGE]: use its naming conventions, standard library and error-handling style, not a literal translation.
3. Keep the same inputs, outputs and edge-case behavior.
4. List every behavior difference or risk (number types, string encoding, null handling, exceptions, concurrency, library gaps) and how you handled it.
5. Add unit tests in the target language covering normal cases and edge cases.
6. Note any dependencies to install.
If something can't be converted exactly, say so instead of guessing.
```

## How to use it

1. **Convert one module at a time**, not a whole project.
2. **Run the original and converted code on the same inputs** and compare outputs.
3. **Review the risk list** before merging; that is where subtle bugs hide.

## Tips

- Write tests for the original code first if it has none; they become your safety net.
- Clean up afterward with the [refactor legacy code prompt](/prompts/refactor-legacy-code/).
- Ask for a review with the [senior code review prompt](/prompts/senior-code-review/).
