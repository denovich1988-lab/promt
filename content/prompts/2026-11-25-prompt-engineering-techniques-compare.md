---
title: Prompt Engineering Examples With 5 Techniques
date: 2026-11-25
category: productivity
description: See ChatGPT prompt engineering examples on your own task — zero-shot, few-shot, role, step-by-step and structured output — and compare the results.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [prompt engineering examples, few-shot prompting, prompting techniques, chatgpt]
---

Prompt engineering techniques are easier to understand when you see them applied to a task you care about. This prompt rewrites your task five ways (zero-shot, few-shot, role prompting, step-by-step reasoning and structured output), explains what each one changes, and helps you test which works best. It's a quick hands-on way to learn which technique to reach for next time.

## Prompt

```prompt
Show me prompt engineering examples using my task.

My task: [e.g. classify customer emails by urgency, write product descriptions, summarize meeting notes]
Sample input I'll test with: [PASTE ONE REAL EXAMPLE]
What a good output looks like: [DESCRIPTION OR EXAMPLE]

Write 5 versions of a prompt for this task:
1. Zero-shot: a clear direct instruction.
2. Few-shot: the instruction plus 2–3 example input/output pairs (create realistic examples marked as samples).
3. Role prompting: assign a relevant expert role with standards to follow.
4. Step-by-step: ask the model to work through defined steps and check its answer before giving the final output.
5. Structured output: a strict format (JSON or table) with field definitions.

For each version: the full prompt in a code block, what it improves, when it's worth the extra length, and its weak spot.
Then combine the best parts into one final prompt, and give me a 3-question checklist to compare the outputs when I test them.
```

## How to use it

1. **Use a real example input** so you can compare results on actual work.
2. **Run each version** in a fresh chat with the same input.
3. **Keep the combined prompt** and save the winning technique for similar tasks.

## Tips

- Few-shot examples shape output strongly; make sure they show exactly what you want.
- Structured output is the best choice when the result feeds a spreadsheet or code.
