---
title: A/B Test Plan With a Clear Hypothesis
date: 2026-11-25
category: marketing
description: Plan an A/B test before you launch it — hypothesis, primary metric, sample size inputs, run time and decision rules — to avoid misleading results.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [ab testing, experiment design, conversion optimization, hypothesis]
---

Many A/B tests fail before they start: no clear hypothesis, too many metrics, or stopping as soon as one version looks ahead. A short test plan written in advance prevents that. This prompt turns your idea into a testable hypothesis, picks one primary metric, explains the sample size inputs and sets decision rules, so the result is something you can act on.

## Prompt

```prompt
Write an A/B test plan.

What I want to change: [e.g. shorter signup form, new pricing page headline]
Page or channel: [WHERE]
Why I think it will work (evidence): [EVIDENCE, e.g. session recordings, survey answers]
Current traffic per week to this page: [VISITORS]
Current conversion rate for the main goal: [RATE]
Smallest improvement worth acting on: [e.g. +10% relative]
Testing tool: [TOOL OR "not chosen"]

Include:
1. Hypothesis in the format: Because [evidence], we believe [change] will cause [effect] for [audience]. We'll know when [metric] moves by [amount].
2. One primary metric, 2 guardrail metrics (things that must not get worse) and their definitions.
3. Sample size: explain the inputs (baseline rate, minimum detectable effect, significance, power), give a rough estimate per variant and the expected run time with my traffic. Show the formula or say which calculator to check it with.
4. Run rules: minimum full weeks, no peeking decisions, what to do with outliers.
5. Decision rules: ship, iterate or drop, based on outcomes.
6. Risks (seasonality, novelty effect, tracking issues) and how to check them before launch.

If my traffic is too low for a reliable test, say so and suggest alternatives.
```

## How to use it

1. **Write the plan before building the variant** and share it with the team.
2. **Verify the sample size** with a calculator before launching.
3. **Record the outcome** with the plan, even when the test loses.

## Tips

- Test bold changes on low-traffic pages; small tweaks need huge samples.
- Run tests for full weeks to cover weekday and weekend behavior.
