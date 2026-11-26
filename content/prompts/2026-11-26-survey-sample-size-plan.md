---
title: Survey sample size and sampling plan prompt
date: 2026-11-26
category: research
description: Work out how many survey responses you need, how to reach the right people and how to avoid common sampling biases before you launch.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [survey sample size, sampling plan, market research, survey design]
---

Before sending a survey, you need to know how many responses are enough and whether the people answering represent the group you care about. Too few responses and the results swing randomly; the wrong people and the results mislead. This prompt calculates a survey sample size from your population, margin of error and confidence level, explains the result in plain terms and builds a sampling plan with quotas, channels and checks for bias.

## Prompt

```prompt
Act as a survey methodologist. Help me plan the sample for a survey.

Survey goal: [WHAT DECISION THE RESULTS WILL INFORM]
Target population: [WHO, E.G. US SMALL BUSINESS OWNERS, OUR CUSTOMERS, STUDENTS AT MY SCHOOL]
Population size (if known): [NUMBER OR "LARGE/UNKNOWN"]
Margin of error and confidence I'm aiming for: [E.G. ±5% AT 95%, OR "ADVISE ME"]
Subgroups I need to compare: [E.G. NEW VS RETURNING CUSTOMERS, REGIONS]
How I can reach people: [EMAIL LIST, PANEL, SOCIAL MEDIA, IN PERSON]
Expected response rate: [IF KNOWN]
Budget/time: [LIMITS]

Provide:
1. The required number of completed responses, showing the formula, inputs and finite population correction if relevant, in plain language.
2. What that means for subgroups: the minimum per subgroup for useful comparisons, and the total if I need them.
3. How many invitations to send given the response rate.
4. A sampling approach (random, stratified, quota or convenience) with honest pros and cons for my situation.
5. Quotas or weights to keep the sample representative.
6. Biases to expect (non-response, self-selection, coverage) and how to reduce each.
7. Screening questions to make sure respondents qualify.
8. How I should describe the limitations when reporting results.
```

## How to use it

1. **Decide which subgroups you must compare**; they drive the sample size more than the total.
2. **Use a realistic response rate** from past surveys if you have one.
3. **Check the maths** with a second calculator before committing budget to a panel.

## Tips

- A smaller random sample is usually more trustworthy than a large self-selected one.
- Report the margin of error alongside the results.
