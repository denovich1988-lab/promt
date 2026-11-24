---
title: Kano model survey to prioritize features
date: 2026-11-24
category: research
description: A ChatGPT prompt for a Kano model survey — paired questions per feature, an analysis plan and a way to sort must-haves from delighters.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [kano model, feature prioritization, product research, survey design]
---

Customers rarely tell you which features they expect by default and which would surprise them. The Kano model asks two paired questions per feature — how would you feel if it were there, and if it were not — to sort features into must-haves, performance features, delighters and ones nobody cares about. This prompt writes the Kano model survey and the analysis plan.

## Prompt

```prompt
Act as a product researcher experienced with the Kano model. Design a Kano survey.

Product and target users: [PRODUCT / USERS]
Features to test (5–15, described in user terms): [FEATURE LIST]
Survey tool and expected number of respondents: [TOOL / SAMPLE SIZE]

Deliver:
1. For each feature: a functional question ("If the product had X, how would you feel?") and a dysfunctional question ("If it did not have X…"), using the standard 5 answers: I like it, I expect it, I am neutral, I can tolerate it, I dislike it.
2. An optional importance question per feature.
3. Screening and segmentation questions (role, usage frequency).
4. The Kano evaluation table to classify each answer pair (Must-be, Performance, Attractive, Indifferent, Reverse, Questionable).
5. An analysis plan: category counts, better/worse coefficients, and a chart to show results.
6. How to turn results into a roadmap decision.
7. Common mistakes (vague features, too many items) and how I avoid them.
```

## How to use it

1. **Describe each feature as a benefit** users can picture, not internal jargon.
2. **Keep it under 15 features** so respondents stay focused.
3. **Segment results** — a delighter for new users may be a must-have for power users.

## Tips

- Score the results against effort with the [feature request prioritization](/prompts/feature-request-prioritization/) prompt.
- Summarize open-ended answers with the [survey results insights](/prompts/survey-results-insights-summary/) prompt.
