---
title: Statistical analysis plan for your study
date: 2026-11-23
category: research
description: "A ChatGPT prompt for a statistical analysis plan: match each research question to a test, list assumptions, handle missing data and pre-plan reporting."
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [statistics, research methods, data analysis, study design]
---

Choosing statistical tests after seeing the data invites errors and cherry-picking. A short statistical analysis plan written before analysis keeps you honest and makes the methods section easy. This prompt matches each research question to a suitable test, lists the assumptions to check, and plans how you will handle missing data, multiple comparisons and reporting.

## Prompt

```prompt
Act as a research statistician. Help me write a statistical analysis plan.

Study design: [DESIGN, e.g. randomized trial, cross-sectional survey, pre-post, observational cohort]
Research questions or hypotheses: [QUESTIONS]
Outcome variables and their type (continuous, binary, count, ordinal, time-to-event): [OUTCOMES]
Predictors, groups and covariates: [PREDICTORS AND COVARIATES]
Sample size and how data were collected: [SAMPLE]
Software I will use: [SOFTWARE, e.g. R, SPSS, Python, Stata]

Write:
1. A table: research question → outcome → suitable test or model → why it fits → assumptions to check → what to do if assumptions fail.
2. Descriptive statistics to report for each variable type.
3. Plan for missing data, outliers and multiple comparisons.
4. Effect sizes and confidence intervals to report for each analysis.
5. Any sensitivity analyses worth pre-planning.
6. A short methods paragraph I can adapt.
Say clearly where the right choice depends on details I have not given, and recommend checking the plan with a statistician for high-stakes work.
```

## How to use it

1. **Write the plan before you open the data**, and date it.
2. **Check each assumption** in the table and note what you found.
3. **Report deviations** from the plan honestly in your paper or report.

## Tips

- Turn your topic into testable ideas first with the [research hypothesis generator](/prompts/research-hypothesis-generator/).
- Interpret experiment results with the [A/B test results](/prompts/ab-test-results-interpretation/) prompt.
