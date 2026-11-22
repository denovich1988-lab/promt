---
title: Product roadmap built around outcomes
date: 2026-11-22
category: business
description: A ChatGPT prompt for a product roadmap that turns goals and requests into Now, Next and Later themes with priorities, outcomes and trade-offs.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [product roadmap, product management, prioritization, planning]
---

A roadmap that is just a list of features with dates breaks the first time plans change. This ChatGPT prompt for a product roadmap groups your ideas and requests into outcome-based themes, scores them, places them in Now, Next and Later columns, and writes versions for leadership, the team and customers, with the trade-offs made clear.

## Prompt

```prompt
You are a senior product manager. Build a product roadmap.

Product and stage (new, growing, mature): [PRODUCT]
Company goals for the next 6–12 months: [COMPANY GOALS]
User problems and requests (with how often we hear them): [USER NEEDS]
Ideas and features on the backlog: [BACKLOG]
Team capacity (people, time) and known constraints: [CAPACITY]
Commitments already made (deals, deadlines, compliance): [COMMITMENTS]

Deliver:
1. 3–5 themes, each tied to a goal and a measurable outcome.
2. A prioritization table for backlog items: reach, impact, confidence, effort (RICE score), theme. Show the math and mark guesses.
3. A Now / Next / Later roadmap: items under each theme, with the outcome each should move.
4. What we are deliberately not doing and why.
5. Dependencies and risks.
6. Three versions: a one-page leadership summary, a team view with more detail, and a customer-facing version without dates or internal details.
7. How and when to review the roadmap.
Base scores on the data given; ask me about anything critical that's missing.
```

## How to use it

1. **Start from goals, not features**; themes keep the roadmap stable as details change.
2. **Challenge the scores with your team**; the conversation matters more than the number.
3. **Share the customer version** only after checking nothing sensitive is in it.

## Tips

- Avoid exact dates in Later; they become promises.
- Write detailed specs for Now items with the [PRD draft prompt](/prompts/product-managers-prd-draft/).
- Frame the problems first with the [product problem statement prompt](/prompts/product-problem-statement/).
