---
title: Cohort retention analysis from your user data
date: 2026-11-24
category: data
description: An AI prompt for cohort retention analysis — build the cohort table, read retention curves, compare cohorts and find what drives users to stay.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [cohort analysis, retention, product analytics, data analysis]
---

Average retention hides the story; a cohort retention analysis shows whether users who joined in March stay longer than those who joined in January, and whether a product change or campaign made a difference. This prompt helps you structure the data, build the cohort table, read the curves and turn patterns into questions worth testing.

## Prompt

```prompt
Act as a product data analyst. Help me run a cohort retention analysis.

Product and what "active" means: [PRODUCT AND ACTIVE DEFINITION]
Data available (columns, e.g. user_id, signup_date, activity_date, plan, channel): [DATA DESCRIPTION]
Sample rows or summary numbers: [DATA SAMPLE]
Tool I use (Excel, Google Sheets, SQL, Python): [TOOL]
Events to compare (launches, pricing changes, campaigns) with dates: [EVENTS]

Deliver:
1. How to define cohorts (signup week or month) and retention periods for my product.
2. Step-by-step instructions or code in my tool to build the cohort retention table.
3. If I gave numbers: the cohort table, retention curves described in words, and where curves flatten.
4. Comparisons by segment (channel, plan, country) and around my listed events.
5. 5 insights with the evidence for each, and 3 hypotheses about what drives retention.
6. Suggested experiments or follow-up analyses.
7. Common mistakes (incomplete recent cohorts, survivorship) to avoid.
Do not invent numbers; if data is missing, say what is needed.
```

## How to use it

1. **Agree on the "active" definition first**; it changes every result.
2. **Ignore the newest, incomplete cohorts** when comparing long-term retention.
3. **Test the hypotheses** rather than treating correlations as causes.

## Tips

- Get help writing the queries with the [SQL query from plain English](/prompts/sql-query-from-plain-english/) prompt.
- Turn findings into action with the [customer churn retention plan](/prompts/customer-churn-retention-plan/) prompt.
