---
title: Claude prompt engineering to improve any prompt
date: 2026-11-21
category: coding
description: Use Claude prompt engineering basics to rewrite any prompt with clear structure, XML-tagged context, examples and output checks.
models: [Claude, ChatGPT]
level: Advanced
tags: [claude, prompt engineering, xml tags]
---

Claude prompt engineering mostly comes down to clarity: say what the task is and why, separate instructions from material with tags such as <document>, give an example of the output, and say how to handle uncertainty. This prompt asks Claude to rewrite your existing prompt using those habits and explain each change.

## Prompt

```prompt
You are an expert in prompt engineering for Claude. Improve my prompt.

What the prompt is for: [TASK AND WHO USES THE OUTPUT]
Current prompt:
<current_prompt>
[PASTE PROMPT]
</current_prompt>
Problems I see in the outputs: [PROBLEMS]
An example of a good output (optional):
<good_example>
[EXAMPLE]
</good_example>

Rewrite it so that it:
1. States the goal, the audience and why the task matters, in plain sentences.
2. Puts long inputs in clearly named XML tags and refers to them by name.
3. Gives step-by-step instructions only where order matters.
4. Includes 1–2 short examples of the desired output, if useful.
5. Specifies format, length and what to do when information is missing.
6. Removes vague words ("good", "detailed") in favour of concrete criteria.

Return: the improved prompt in a code block, a table of changes with the reason for each, and 3 test inputs to check it.
```

## How to use it

1. **Paste your real prompt** and describe what goes wrong.
2. **Test the new version** on the 3 test inputs and on a real case.
3. **Keep both versions** and compare outputs side by side.

## Tips

- Explaining why a rule exists often helps more than writing it in capitals.
- Check Anthropic's prompt engineering docs for current guidance.
