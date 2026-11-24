---
title: Explain regression results in plain English
date: 2026-11-24
category: data
description: A ChatGPT prompt to explain regression results — coefficients, p-values, R-squared and assumptions in plain English, with caveats and next steps.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [regression analysis, statistics, data analysis, interpretation]
---

Regression output is full of numbers — coefficients, standard errors, p-values, R-squared — and it is easy to over-claim, for example reading correlation as cause. This prompt explains your regression results in plain English, checks whether the model's assumptions look reasonable and writes a summary you can share with non-technical colleagues without misleading them.

## Prompt

```prompt
Act as a careful statistician. Explain my regression results.

Question I am trying to answer: [QUESTION]
Data: what each row is, sample size, time period: [DATA DESCRIPTION]
Model type and variables (dependent and independent, units): [MODEL]
Regression output (paste the table): [OUTPUT]
Diagnostics I have (residual plots, VIF, etc.): [DIAGNOSTICS OR "NONE"]
Audience for the summary: [AUDIENCE]

Deliver:
1. What each coefficient means in plain words and in real units ("each extra $1,000 in ad spend is associated with…").
2. Which effects are statistically significant and how big they are in practical terms.
3. What R-squared (or other fit measures) does and does not tell us here.
4. Assumptions to check (linearity, independence, equal variance, normality of residuals, multicollinearity) and what my diagnostics suggest.
5. Why this shows association, not causation, and what could confound it.
6. Next steps: other variables, transformations or models to try.
7. A 5-sentence summary for my audience with appropriate caveats.
```

## How to use it

1. **Paste the full output table**, not just the numbers you like.
2. **Include units** for every variable so explanations are concrete.
3. **Share the caveats** along with the headline result.

## Tips

- Plan tests before you run them with the [statistical analysis plan](/prompts/statistical-analysis-plan/) prompt.
- For experiments, use the [A/B test results](/prompts/ab-test-results-interpretation/) prompt.
