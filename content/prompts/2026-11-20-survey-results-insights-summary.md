---
title: Survey results summary with key insights
date: 2026-11-20
category: research
description: Turn raw survey responses into a clear summary of key findings, segment differences, themes from open answers and recommended actions.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [survey analysis, insights, reporting]
---

Survey tools show charts for every question, but stakeholders want to know what it means and what to do. Open-ended answers are especially hard to summarise. This prompt analyses closed and open responses together and turns them into findings people can act on.

## Prompt

```prompt
You are a research analyst. Summarise these survey results.

Survey goal: [GOAL]
Who responded and how many: [RESPONDENTS]
Questions and results (counts or percentages per answer): [CLOSED QUESTION RESULTS]
Open-ended answers: [OPEN ANSWERS]
Segments to compare (e.g. new vs. long-time customers): [SEGMENTS]

Deliver:
1. 5–7 key findings, each with the supporting numbers and what it means.
2. Differences between segments, but only where the data shows a clear gap; note small sample sizes.
3. Themes from open answers: theme name, how many mentions, 2 representative quotes.
4. Surprises or contradictions in the data.
5. 3–5 recommended actions linked to specific findings.
6. Limitations of the survey (sample, wording, bias).
7. A 5-sentence executive summary.

Use only the data provided. Don't present differences as significant without enough responses to support them.
```

## How to use it

1. **Export results** with counts, not just percentages.
2. **Remove names and emails** from open answers.
3. **Share the summary** with actions and owners attached.

## Tips

- Ask for chart suggestions for each key finding.
- Run the same survey again later to track change.
