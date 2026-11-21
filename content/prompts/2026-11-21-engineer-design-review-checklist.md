---
title: ChatGPT prompts for engineers' design reviews
date: 2026-11-21
category: research
description: ChatGPT prompts for engineers to prepare a design review with requirements traceability, failure modes, open risks and questions for reviewers.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [engineers, design review, risk]
---

Design reviews go better when the author has already asked the hard questions. These ChatGPT prompts for engineers take your design summary and requirements and produce a review pack: a requirements check, possible failure modes, risks and the questions reviewers are likely to ask. Engineering judgement and calculations stay with you.

## Prompt

```prompt
You are a senior engineer preparing a design review. Use only what I provide and mark assumptions.

Discipline and system: [E.G. "MECHANICAL, BRACKET FOR OUTDOOR SENSOR", "ELECTRONICS, POWER BOARD"]
Requirements (numbered): [REQUIREMENTS]
Design summary: [DESIGN]
Key calculations or test results so far (my numbers): [RESULTS]
Standards or constraints that apply: [STANDARDS]

Create:
1. Requirements table: requirement, how the design meets it, evidence, status (met / partly / not shown).
2. A simple failure mode list: component or function, failure mode, effect, likely cause, current control, suggested check.
3. Top 5 risks with mitigation ideas.
4. 10 questions reviewers are likely to ask, and what evidence would answer each.
5. Missing information I should add before the review.

Do not produce calculations or standard values from memory; mark anything that needs checking against the actual standard or data.
```

## How to use it

1. **Paste requirements and design notes** without confidential IP if your company forbids it.
2. **Fill the gaps** the prompt finds before the meeting.
3. **Bring the questions list** to the review and record answers.

## Tips

- Use the requirements table as a living traceability document.
- Verify all values against the standard or datasheet, not the AI.
