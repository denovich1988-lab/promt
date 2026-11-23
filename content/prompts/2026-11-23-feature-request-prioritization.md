---
title: Prioritize customer feature requests
date: 2026-11-23
category: business
description: A ChatGPT prompt that groups customer feature requests, scores them on impact, reach and effort, and gives you a ranked list with reasons.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [feature requests, product management, prioritization, customer feedback]
---

Feature requests pile up from support tickets, sales calls and surveys, and the loudest customer often wins. This prompt turns that pile into a ranked list: it groups similar requests, finds the real problem behind them, scores each one on reach, impact, confidence and effort, and explains what to build now, later or never, plus how to reply to customers.

## Prompt

```prompt
You are a product manager. Help me prioritize customer feature requests.

Product and target customers: [PRODUCT AND CUSTOMERS]
Company goals this quarter: [GOALS]
Feature requests (with source, customer type and how often asked): [REQUESTS]
Rough effort estimates from the team, if any: [EFFORT, or "unknown"]
Constraints (team size, tech limits, deadlines): [CONSTRAINTS]

Do this:
1. Group similar requests and name the underlying customer problem for each group.
2. Score each group using RICE (reach, impact, confidence, effort). Show the numbers and mark assumptions.
3. Rank them and sort into: build now, plan for later, research more, decline.
4. For each "build now" item, write a one-paragraph problem statement and how we will know it worked.
5. Point out requests that come from one big customer only, and the risk of building for them.
6. Write short replies to customers for each category (planned, not planned, need more info) that are honest and do not promise dates.
```

## How to use it

1. **Collect requests in one list** with the source and customer type.
2. **Check the effort scores** with your engineering team.
3. **Close the loop** with customers using the reply templates.

## Tips

- Turn top items into specs with the [product manager PRD draft](/prompts/product-managers-prd-draft/) prompt.
- Place them on the timeline with the [product roadmap outline](/prompts/product-roadmap-outline/).
