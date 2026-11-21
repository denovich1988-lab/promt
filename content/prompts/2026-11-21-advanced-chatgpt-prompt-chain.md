---
title: Advanced ChatGPT prompt that plans, drafts and self-checks
date: 2026-11-21
category: productivity
description: An advanced ChatGPT prompt that makes the AI clarify, plan, draft, critique against your criteria and revise before giving a final answer.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [advanced prompts, prompt engineering, self-critique, quality control]
---

Advanced ChatGPT prompts aren't longer — they control the process. The biggest quality gains come from making the model ask what's missing, plan before writing, check its draft against explicit criteria and fix what fails. This prompt packages that loop into one reusable template for any serious task: reports, strategies, analyses or complex emails.

## Prompt

```prompt
You will complete a task in stages. Do not skip stages.

Task: [TASK]
Audience and purpose: [AUDIENCE AND PURPOSE]
Material to use (notes, data, drafts): [MATERIAL]
Constraints (length, format, tone, deadline, must include/avoid): [CONSTRAINTS]
Quality criteria — how I will judge the result: [CRITERIA, e.g. accurate to the material, actionable, under 600 words, no jargon]

Stage 1 — Clarify: list up to 5 questions whose answers would change the result. Then stop and wait for my answers. If I say "proceed", make reasonable assumptions and list them.
Stage 2 — Plan: give a short outline and the approach you'll take, in under 120 words.
Stage 3 — Draft: write the full output.
Stage 4 — Critique: score the draft 1–5 on each of my criteria, quote the weakest parts and explain why they fall short. Check every factual claim against my material and flag anything not supported.
Stage 5 — Revise: produce the final version fixing every issue found. Then list what changed in 3 bullets.

Only the Stage 5 output is the final answer; keep earlier stages brief.
```

## How to use it

1. **Write sharp quality criteria** — the critique is only as good as them.
2. **Answer the clarifying questions**; they prevent most rework.
3. **Save it as a template** for recurring high-stakes tasks.

## Tips

- For quick tasks this is overkill; use it when quality matters more than speed.
- Build simpler everyday templates with our [ChatGPT prompt templates cheat sheet](/prompts/chatgpt-prompt-template-cheat-sheet/).
