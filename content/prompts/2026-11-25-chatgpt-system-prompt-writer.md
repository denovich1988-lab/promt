---
title: ChatGPT System Prompt Writer for Custom Assistants
date: 2026-11-25
category: coding
description: Write a ChatGPT system prompt for a custom assistant or GPT — role, rules, tone, refusals, output format and test questions in one draft.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [chatgpt system prompt, custom gpt, ai assistant, instructions]
---

A ChatGPT system prompt sets the standing rules for an assistant: who it is, what it should and shouldn't do, and how its answers look. When it's vague, the assistant drifts, over-answers or ignores edge cases. This prompt interviews your use case into a structured system prompt and adds test questions, so you can check the assistant behaves before you share it.

## Prompt

```prompt
Write a system prompt for an AI assistant.

What the assistant is for: [PURPOSE, e.g. answer customer questions about our booking policy]
Who will use it: [USERS]
Knowledge it can rely on: [DOCUMENTS OR FACTS IT WILL HAVE]
Tone and voice: [TONE]
Things it must never do: [LIMITS, e.g. give legal advice, promise refunds]
When it should hand off to a human: [HANDOFF RULE]
Preferred answer format: [FORMAT, e.g. short paragraphs, max 120 words]

Structure the system prompt with these sections: Role, Goals, Knowledge and sources, Rules (numbered), Tone, Output format, What to do when unsure, Handoff.
Write rules as clear instructions, not wishes. Explain the reason behind any rule that might seem arbitrary.

Then give me:
- 8 test questions, including 3 tricky ones (off-topic, out-of-scope, a request it must refuse), with the ideal response for each.
- 3 likely failure modes and the line I'd add to fix each.
```

## How to use it

1. **Fill in the limits and handoff rule** carefully — they prevent most problems.
2. **Paste the system prompt** into your custom GPT, project instructions or API call.
3. **Run the test questions** and tighten any rule the assistant breaks.

## Tips

- Keep facts that change often (prices, dates) in an attached document, not in the system prompt.
- Re-run the same test questions every time you edit the prompt.
