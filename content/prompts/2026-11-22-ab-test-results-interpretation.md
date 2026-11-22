---
title: Interpret A/B test results without mistakes
date: 2026-11-22
category: data
description: A ChatGPT prompt that interprets A/B test results, checks sample size and significance, and tells you whether to ship, stop or keep testing.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [ab testing, experiments, statistics, conversion]
---

A/B tests are easy to misread: stopping too early, ignoring sample size or celebrating random noise. This ChatGPT prompt interprets A/B test results step by step, checks whether the sample and confidence are enough, looks for problems like uneven traffic splits, and gives a plain-language recommendation you can share with your team.

## Prompt

```prompt
You are a data analyst who explains experiment results clearly.

What we tested and the hypothesis: [TEST AND HYPOTHESIS]
Primary metric and any secondary metrics: [METRICS]
Results per variant (visitors or users, conversions, revenue if relevant): [RESULTS]
Test dates and how traffic was split: [DATES AND SPLIT]
Minimum effect that would matter to the business: [MINIMUM EFFECT]

Do the following:
1. Calculate conversion rates, absolute and relative difference, and an approximate confidence interval and p-value. Show the formulas you used.
2. Check if the sample size is enough to detect the minimum effect; estimate how many more users are needed if not.
3. Flag possible problems: uneven split, too short a test, novelty effect, peeking, segment differences.
4. Review secondary metrics for side effects.
5. Recommendation: ship, do not ship, or keep testing, with the reason in plain language.
6. A three-sentence summary for non-technical stakeholders.
State clearly when results are inconclusive.
```

## How to use it

1. **Paste raw numbers per variant**, not just percentages.
2. **Double-check calculations** with your testing tool or a calculator.
3. **Record the decision and learning** so future tests build on it.

## Tips

- Decide the test length and minimum effect before launching, not after.
- Visualize results with our [choose the right chart prompt](/prompts/choose-the-right-chart/).
