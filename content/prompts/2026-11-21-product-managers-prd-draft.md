---
title: ChatGPT prompt for product managers to draft a PRD
date: 2026-11-21
category: business
description: A ChatGPT prompt for product managers that turns discovery notes into a lean PRD — problem, users, scope, success metrics and open questions.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [product management, prd, requirements, user stories]
---

A product requirements document should help engineering and design make decisions, not list every idea from the last meeting. This ChatGPT prompt for product managers turns raw discovery notes into a lean PRD: the problem and evidence, target users, what's in and out of scope, user stories with acceptance criteria, success metrics and the open questions to settle before building.

## Prompt

```prompt
You are a senior product manager. Draft a lean PRD from my notes.

Product and context: [PRODUCT AND CONTEXT]
Problem and evidence (customer quotes, data, support tickets): [EVIDENCE]
Target users and their job to be done: [USERS]
Business goal: [GOAL]
Constraints (deadline, tech, legal, team size): [CONSTRAINTS]
Ideas discussed so far: [IDEAS]
My raw notes: [NOTES]

Structure:
1. Summary (3 sentences)
2. Problem statement and evidence; mark any assumption as [ASSUMPTION]
3. Users and key scenarios
4. Goals and non-goals
5. Scope: must-have (MVP), later, and out of scope — with a reason for each cut
6. User stories with acceptance criteria (Given/When/Then)
7. Success metrics: one primary, two guardrails, and how to measure them
8. Risks and dependencies
9. Open questions with suggested owners
10. Rollout and feedback plan

Keep it under 1,200 words. Challenge any must-have that isn't supported by the evidence.
```

## How to use it

1. **Paste real evidence** — quotes and numbers make the scope debate easier.
2. **Review the cut list** with design and engineering leads.
3. **Resolve open questions** before sprint planning.

## Tips

- Start with our [problem statement prompt](/prompts/product-problem-statement/) if the problem is still fuzzy.
- Keep the PRD short; link to research instead of pasting it.
