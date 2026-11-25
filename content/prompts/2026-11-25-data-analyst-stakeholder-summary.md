---
title: "ChatGPT prompts for data analysts: exec summaries"
date: 2026-11-25
category: data
description: Turn analysis results into a short stakeholder summary with the answer first, caveats, a recommended action and a chart suggestion for each finding.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [chatgpt prompts for data analysts, stakeholder communication, data storytelling, reporting]
---

Analysts often finish the hard part, the queries and the checks, and then lose the audience with a wall of numbers. ChatGPT prompts for data analysts are especially useful for that last step. This prompt turns your results into a short summary that leads with the answer to the business question, keeps the caveats honest and suggests one chart per finding.

## Prompt

```prompt
Act as a senior analytics lead who writes for busy executives.

Business question: [THE QUESTION STAKEHOLDERS ASKED]
Audience: [E.G. VP SALES, PRODUCT TEAM, CEO]
Results (paste tables, numbers and my notes): [RESULTS]
Data sources and time period: [DETAILS]
Known limitations: [E.G. MISSING DATA, SMALL SAMPLE, TRACKING CHANGE IN MARCH]
Decision they need to make: [DECISION]

Write:
1. A one-sentence answer to the business question.
2. 3–5 key findings, each with the number, the comparison that gives it meaning, and why it matters.
3. Caveats in plain language: what the data can and cannot tell us.
4. A recommended action and what would change our mind.
5. For each finding, the best chart type and its title written as a takeaway.
6. 3 questions the audience is likely to ask, with short answers based only on the results.

Use only the numbers I provided. Do not claim causation unless my notes say the analysis supports it.
```

## How to use it

1. **Paste the final, checked results**, not raw query output.
2. **Compare every number in the summary** with your tables before you send it.
3. **Trim to what the audience needs**; executives may only read the first two sections.

## Tips

- Ask for a Slack-length version (under 80 words) for quick updates.
- Keep a list of definitions for your metrics and paste it in so terms stay consistent.
