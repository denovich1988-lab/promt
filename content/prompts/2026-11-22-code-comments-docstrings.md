---
title: Add clear docstrings and comments to code
date: 2026-11-22
category: coding
description: A ChatGPT prompt that adds docstrings and useful comments to your code in your language's standard style without changing what the code does.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [docstrings, code comments, documentation, clean code]
---

Code without docstrings is slow to review and easy to misuse, but comments that repeat the code are noise. This prompt adds docstrings in your language's standard format (Google style, NumPy, JSDoc, Javadoc and so on) and only the inline comments that explain why, not what. It leaves the logic untouched and points out anything unclear it could not explain.

## Prompt

```prompt
You are a senior developer documenting code for teammates.

Language and framework: [LANGUAGE AND FRAMEWORK]
Docstring style to follow: [STYLE, e.g. Google style, NumPy, JSDoc, Javadoc]
Who will read it: [READERS, e.g. new team members]
Code: [PASTE CODE]

Do this:
1. Add a docstring to every public function, class and module: purpose, parameters with types, return value, exceptions raised, and a short example where helpful.
2. Add inline comments only where the reason is not obvious (business rules, workarounds, edge cases). Do not comment obvious lines.
3. Do not change any logic, names or formatting other than adding documentation.
4. After the code, list anything you could not explain from the code alone (magic numbers, unclear side effects) as questions for me.
Return the full documented code in one block.
```

## How to use it

1. **Paste one file or module at a time** so nothing is skipped.
2. **Diff the result** to confirm only comments and docstrings were added.
3. **Answer the questions** at the end and document those answers too.

## Tips

- Generate a project overview afterwards with the [README for a code project](/prompts/readme-for-code-project/) prompt.
- If your linter checks docstrings, mention its rules in the style field.
