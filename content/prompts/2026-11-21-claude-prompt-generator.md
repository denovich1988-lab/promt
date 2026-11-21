---
title: Claude prompt generator for new tasks and system prompts
date: 2026-11-21
category: productivity
description: A Claude prompt generator that turns your task description into a structured Claude prompt with XML tags, examples and output format.
models: [Claude, ChatGPT, Gemini]
level: Intermediate
tags: [claude prompts, prompt generator, system prompts, prompt engineering]
---

Claude follows clear, well-structured instructions very closely, which is why people look for a Claude prompt generator: they know what they want done but not how to phrase it. This prompt interviews you about the task, then writes a complete Claude prompt — role, context, instructions, XML-tagged inputs, examples and an output format — ready to use in a chat, a Project or an API system prompt.

## Prompt

```prompt
You are an expert prompt engineer for Claude. Write a new prompt for the task I describe.

Task in my own words: [TASK]
Where the prompt will run: [CLAUDE CHAT / CLAUDE PROJECT INSTRUCTIONS / API SYSTEM PROMPT]
Who the output is for: [AUDIENCE]
Inputs the prompt will receive each time: [INPUTS, e.g. a customer email, a CSV, meeting notes]
What a great output looks like: [GOOD OUTPUT]
Common mistakes to prevent: [MISTAKES]
Example input and ideal output, if I have one: [EXAMPLE OR "NONE"]

First, ask up to 3 questions if something essential is unclear. Then write the prompt with:
1. A role and the goal in 1–2 sentences, including why the task matters.
2. Context Claude needs (audience, standards, background).
3. Step-by-step instructions, phrased as what to do rather than only what not to do.
4. Input placeholders wrapped in XML tags, e.g. <document>{DOCUMENT}</document>.
5. 1–2 examples in <example> tags if helpful.
6. An exact output format (headings, length, or a JSON shape).
7. What to do when the input is missing or unclear.

Then explain in 3 bullets why the prompt is built this way, and give one test input to try it on.
```

## How to use it

1. **Describe the task as you'd explain it to a new colleague.**
2. **Test the generated prompt** on 3–5 real inputs, including a messy one.
3. **Refine** with the [Claude prompt engineering prompt](/prompts/claude-prompt-engineering-improve/).

## Tips

- Put long documents before your instructions in the final prompt.
- More ready prompts on our [Claude prompts hub](/claude-prompts/).
