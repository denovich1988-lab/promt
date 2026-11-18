---
title: Pre-mortem for any plan
date: 2026-11-16
category: business
description: Ask the AI to imagine your plan has already failed, then work backwards to find the risks you haven't seen yet.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [strategy, risk, planning, decisions]
---

A pre-mortem is a technique used by project teams: before you start, you imagine it's a year later and the project has failed. Then you explain why. It surfaces risks people are too optimistic — or too polite — to raise. An AI is a good partner for this because it has no reason to be polite.

## Prompt

```prompt
I want to run a pre-mortem on a plan. Be direct and specific; do not reassure me.

The plan: [DESCRIBE THE PLAN IN 3–6 SENTENCES]
Goal and deadline: [WHAT SUCCESS LOOKS LIKE, BY WHEN]
Resources: [BUDGET, TEAM, TIME]
What I'm already worried about: [YOUR CONCERNS, OR "NOTHING YET"]

Step 1. Imagine it is [DATE 12 MONTHS FROM NOW] and the plan has clearly failed. Write a short, realistic story (about 150 words) of how it failed.

Step 2. List the 8 most likely causes of failure. For each, give:
- Cause
- Early warning sign I could notice in the first month
- Likelihood (low / medium / high) and impact (low / medium / high)
- One concrete action to prevent it or reduce the damage

Step 3. Which assumption in my plan is the riskiest? Suggest the cheapest, fastest test I could run this week to check it.

Step 4. Ask me 3 questions you would need answered to improve this analysis.
```

## How to use it

1. Describe the plan honestly, including the parts you're unsure about.
2. **Answer the 3 questions** from Step 4 in the same chat. The second round is usually much sharper.
3. Turn the early warning signs into a short checklist you review every week.

## Tips

- Works for anything: a product launch, a hire, a move to a new city, a marketing campaign.
- For a second opinion, start a new chat and ask: *"Argue that this plan will succeed. What am I underestimating on the upside?"* Compare both.
