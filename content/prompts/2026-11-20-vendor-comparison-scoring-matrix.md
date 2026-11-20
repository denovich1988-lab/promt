---
title: Compare tools or vendors with a scoring matrix
date: 2026-11-20
category: research
description: Compare software tools or vendors against weighted criteria, get a scored matrix and a recommendation, plus questions to ask on demos.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [vendor selection, software comparison, decision matrix]
---

Choosing between tools or vendors often comes down to whoever gave the best demo. A weighted scoring matrix makes the decision fairer by agreeing on what matters before looking at options. This prompt sets up the criteria and scores options using information you collect.

## Prompt

```prompt
You are a procurement analyst. Help me compare vendors.

What we need the tool or service for: [NEED]
Team size and users: [USERS]
Budget: [BUDGET]
Must-have requirements: [MUST-HAVES]
Nice-to-have requirements: [NICE-TO-HAVES]
Options and what I know about each (pricing, features, reviews, demo notes): [OPTIONS AND NOTES]

Do this:
1. Turn my requirements into 8–12 criteria with weights adding up to 100%. Explain the weights.
2. Flag any option that fails a must-have.
3. Score each remaining option 1–5 per criterion, with a short reason based only on my notes. Mark "unknown" where I have no data.
4. A weighted total table and a ranking.
5. A recommendation, plus the runner-up and when it would be the better choice.
6. Questions to ask each vendor to fill the unknowns.
7. Hidden costs to check (setup, training, integrations, contract terms).

Don't use outside claims about vendors' features or prices — features and pricing change, so rely on my notes.
```

## How to use it

1. **Agree on criteria and weights** with your team before demos.
2. **Collect notes** from demos, trials and pricing pages.
3. **Fill unknowns** with vendor questions and rescore.

## Tips

- Run a short trial with real users for the top two options.
- Read the contract terms on cancellation and data export.
