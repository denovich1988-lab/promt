---
title: Regex pattern from examples you provide
date: 2026-11-20
category: coding
description: Get a regular expression that matches your examples and rejects your counter-examples, with an explanation and test cases for your language.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [regex, regular expressions, text parsing]
---

Regular expressions are powerful and hard to read, and a pattern that looks right often matches things it shouldn't. Giving clear examples of what should and shouldn't match is the best way to get a correct one. This prompt builds the pattern from those examples and tests it.

## Prompt

```prompt
You are a regex expert. Write a regular expression for me.

Language or tool where it will run: [E.G. JAVASCRIPT, PYTHON, POSTGRESQL, VS CODE SEARCH]
What I want to match or extract, in plain words: [GOAL]
Strings that SHOULD match (and what to capture): [MATCH EXAMPLES]
Strings that should NOT match: [NON-MATCH EXAMPLES]

Give me:
1. The regex, with the flags needed.
2. A part-by-part explanation.
3. A table testing it against every example I gave: string, expected, actual result, captured groups.
4. 5 edge cases I didn't think of and how the pattern handles them.
5. A code snippet in my language that uses it.
6. Warnings about performance (e.g. catastrophic backtracking) or cases where a parser would be better than regex.

Use syntax supported by my language only.
```

## How to use it

1. **Give at least 5 matching and 5 non-matching examples.**
2. **Test the pattern** in your code or on a regex testing site.
3. **Add the test cases** to your unit tests.

## Tips

- Ask for a version with named groups for readability.
- Don't use regex to parse HTML or nested structures.
