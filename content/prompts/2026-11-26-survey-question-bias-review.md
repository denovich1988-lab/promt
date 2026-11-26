---
title: Survey question bias review
date: 2026-11-26
category: research
description: Check a draft survey for leading, double-barrelled and loaded questions, unbalanced scales and order effects, with neutral rewrites.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [survey design, research bias, questionnaire, market research]
---

A survey can look fine and still produce misleading data because a question nudges people toward an answer or asks two things at once. Fixing that after launch is impossible. This survey question bias review prompt checks every question for common wording and structure problems, explains each issue and gives a neutral rewrite before you send it out.

## Prompt

```prompt
Act as a survey methodologist. Review my draft survey for bias and clarity.

Purpose of the survey: [WHAT DECISION IT WILL INFORM]
Audience: [WHO WILL ANSWER, HOW THEY'LL BE RECRUITED]
Mode: [ONLINE / PHONE / IN PERSON], estimated length: [MINUTES]
Draft questions with answer options:
[PASTE SURVEY]

For each question, check for:
- leading or loaded wording
- double-barrelled questions (two topics in one)
- unbalanced or overlapping answer scales, missing "not applicable" or "don't know"
- jargon or ambiguous terms
- assumptions the respondent may not share
- memory demands that are unrealistic
- sensitive topics that need softer wording or an opt-out

Output:
1. A table: question number, problem found, why it biases results, neutral rewrite.
2. Order effects: questions that may influence later answers, and a better order.
3. Questions to cut because they don't serve the stated purpose.
4. A short pilot test plan (who, how many, what to watch for).
Leave questions without problems marked "OK".
```

## How to use it

1. **State the decision the survey supports**, so the review can flag questions that don't serve it.
2. **Paste answer options too**; many biases hide in the scales.
3. **Pilot the revised survey** with 5–10 people before full launch.

## Tips

- Put general questions before specific ones, and satisfaction questions before product-feature questions.
- Use the same scale direction throughout to avoid accidental mis-clicks.
