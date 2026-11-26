---
title: TOWS matrix prompt to turn SWOT into strategy
date: 2026-11-26
category: business
description: Turn a SWOT analysis into a TOWS matrix with SO, WO, ST and WT strategies, then prioritize them into an action plan with owners.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [tows matrix, swot analysis, strategic planning, business strategy]
---

A SWOT analysis lists strengths, weaknesses, opportunities and threats, but it doesn't tell you what to do. The TOWS matrix is the next step: it pairs internal factors with external ones to generate strategies, such as using a strength to capture an opportunity or fixing a weakness that exposes you to a threat. This TOWS matrix prompt builds the four strategy quadrants from your SWOT and turns the best ideas into a prioritized plan.

## Prompt

```prompt
Act as a strategy consultant. Build a TOWS matrix from my SWOT analysis.

Business: [WHAT YOU DO, MARKET, SIZE]
Strengths: [LIST]
Weaknesses: [LIST]
Opportunities: [LIST]
Threats: [LIST]
Planning horizon and constraints: [E.G. NEXT 12 MONTHS, LIMITED BUDGET, SMALL TEAM]

Do this:
1. Check the SWOT: move anything misplaced (internal vs external), merge duplicates and make vague points specific.
2. Build the TOWS matrix with 2–4 strategies per quadrant:
   - SO (strengths to use opportunities)
   - WO (fix weaknesses to use opportunities)
   - ST (strengths to reduce threats)
   - WT (defensive moves to reduce weaknesses and avoid threats)
   Reference the specific S/W/O/T items each strategy combines (e.g. S2 + O1).
3. Score every strategy on impact, feasibility and cost (1–5) in a table.
4. Choose the top 4–5 strategies and explain why.
5. Turn them into an action plan: actions, owner, timeline, budget, and a KPI for each.
6. List the assumptions behind the plan and what would make me change course.
```

## How to use it

1. **Do a careful SWOT first**; vague inputs produce vague strategies.
2. **Score the strategies with your team** rather than accepting the AI's scores.
3. **Review the plan quarterly** as threats and opportunities change.

## Tips

- WT strategies are often ignored but can prevent the biggest losses.
- Limit yourself to a few strategies you can actually resource.
