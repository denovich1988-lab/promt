---
title: Weighted decision matrix prompt to compare options
date: 2026-11-27
category: business
description: Build a weighted decision matrix that scores options against criteria you choose, tests how sensitive the result is and explains the trade-offs.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [decision matrix, decision making, prioritization, strategy]
---

When a team argues over vendors, locations or projects, the loudest opinion often wins. A weighted decision matrix makes the trade-offs visible: you agree on criteria and their importance first, then score each option. This decision matrix ChatGPT prompt builds the table, does the arithmetic, checks whether the winner changes when weights shift, and points out where your scores rest on guesses.

## Prompt

```prompt
You are a strategy consultant who facilitates structured decisions.

Decision: [WHAT WE ARE DECIDING, E.G. WHICH CRM TO ADOPT]
Options: [OPTION A, OPTION B, OPTION C...]
Who is affected: [TEAMS OR PEOPLE]
Deadline and constraints: [BUDGET, MUST-HAVES, TIMING]

Criteria and weights (total 100), or write "suggest" and I will review:
[CRITERION | WEIGHT, E.G. TOTAL COST | 25]

What we know about each option:
[PASTE FACTS, QUOTES, DEMO NOTES, TEAM OPINIONS]

Please:
1. If I wrote "suggest", propose 5–7 criteria with weights and a one-line reason for each, then stop and wait for my approval.
2. Separate must-haves (pass/fail) from weighted criteria. Remove any option that fails a must-have and say why.
3. Score each remaining option 1–5 per criterion, with a short justification and a confidence level (high/medium/low) based on the facts I gave.
4. Show the matrix as a table with weighted scores and totals (show the arithmetic).
5. Sensitivity check: would the winner change if any single weight moved by 10 points? Which criterion decides the outcome?
6. List the 3 low-confidence scores worth verifying before deciding.
7. Write a 5-sentence recommendation I can share with stakeholders, including the main risk of the chosen option.
```

## How to use it

1. **Agree on criteria and weights with your team** before anyone looks at scores.
2. **Paste real facts** (quotes, trial results) rather than impressions wherever possible.
3. **Verify the low-confidence scores**, update them and rerun the table before deciding.

## Tips

- If two options finish within a few points, treat them as a tie and decide on the deciding criterion.
- Keep the final matrix with the decision record so you can review it later.
