---
title: Find waste in a process and fix it (lean)
date: 2026-11-22
category: business
description: A ChatGPT prompt for process improvement that maps your workflow, finds the eight lean wastes and suggests fixes with quick wins first.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [process improvement, lean, workflow, operations]
---

Slow processes usually hide waste: waiting, rework, handoffs and steps nobody needs. This ChatGPT prompt for process improvement maps your workflow step by step, flags the eight lean wastes (defects, overproduction, waiting, unused talent, transport, inventory, motion, extra processing), and suggests fixes ranked so you can start with quick wins that need no budget.

## Prompt

```prompt
You are a lean process improvement consultant.

Process name and purpose: [PROCESS]
Steps as they happen today (who does what, tools used, rough time per step): [CURRENT STEPS]
Total time from start to finish and how often it runs: [CYCLE TIME AND VOLUME]
Problems people complain about: [PAIN POINTS]
Constraints (budget, systems, regulations): [CONSTRAINTS]

Do this:
1. Rewrite the process as a numbered map, marking each step as value-adding, necessary but non-value-adding, or waste.
2. For each waste found, name the lean waste type and explain it in one line.
3. Estimate where most of the waiting time sits (mark as an estimate).
4. Suggest fixes: remove, combine, simplify, automate or standardize, with who owns each.
5. Rank fixes into quick wins (this week, no budget), medium (this quarter) and larger projects.
6. Draw the improved process map.
7. Give 3 measures to track before and after the change.
```

## How to use it

1. **Walk the real process** with the people who do it before you write the steps.
2. **Start with the quick wins** and measure the effect.
3. **Write the new process down** so it does not slide back.

## Tips

- Document the improved version with the [SOP from a messy process](/prompts/sop-from-messy-process/) prompt.
- If the problem keeps coming back, dig deeper with [business problem root cause](/prompts/business-problem-root-cause/).
