---
title: Explain unfamiliar code line by line
date: 2026-11-20
category: coding
description: Get a clear walkthrough of code you didn't write, including what it does, how data flows, hidden assumptions and risky spots to check.
models: [ChatGPT, Claude, Gemini]
level: Beginner
tags: [code explanation, onboarding, learning to code]
---

Joining a new project or reading old code is slow when nothing is documented. Asking AI to "explain this" often gives a vague summary. This prompt asks for a structured walkthrough at your level: the big picture first, then the details, then the parts that could break.

## Prompt

```prompt
You are a patient senior developer. Explain this code to me.

My experience level: [E.G. JUNIOR, NEW TO THIS LANGUAGE]
Language and framework: [LANGUAGE AND FRAMEWORK]
What I know about where it's used: [CONTEXT]
Code: [CODE]

Explain:
1. Summary — what this code does in 2–3 sentences.
2. Big picture — main parts and how data flows through them, step by step.
3. Line-by-line or block-by-block walkthrough, in plain language.
4. Language features or libraries I might not know, with a short example.
5. Hidden assumptions (inputs it expects, environment, order of calls).
6. Risky spots: possible bugs, edge cases, performance or security concerns.
7. 3 questions I should ask the team about this code.

Don't rewrite the code unless I ask. If something depends on code I didn't paste, say what you'd need to see.
```

## How to use it

1. **Paste a focused chunk**, such as one function or file, not the whole repo.
2. **Ask follow-up questions** about any step you don't understand.
3. **Write a short comment or doc** from the explanation for the next person.

## Tips

- Ask for a diagram of the data flow in Mermaid format.
- Check risky spots by writing a small test for each.
