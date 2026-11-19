---
title: Turn customer interview notes into insights
date: 2026-11-19
category: research
description: Synthesise several customer interview transcripts into themes, supporting quotes, opportunities and a clear list of what to do next.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [user research, interviews, insights]
---

After a round of customer interviews, teams often have pages of notes and no clear conclusions. Synthesis finds the patterns across conversations and separates strong signals from one-off comments. This prompt counts how many people said each thing and keeps quotes attached, so the findings are easy to trust.

## Prompt

```prompt
You are a user research lead. Synthesise these customer interviews.

Research goal: [WHAT WE WANTED TO LEARN]
Interviews (label each P1, P2, …; remove names):
[PASTE TRANSCRIPTS OR NOTES]

Deliver:
1. Key themes: for each, a one-line insight, how many participants mentioned it (e.g. 4 of 7), and 2–3 supporting quotes with participant labels.
2. Surprises: anything that contradicted our assumptions.
3. Differences between participant types, if any.
4. Opportunities: "How might we…" statements linked to the themes.
5. Recommended next steps, ranked by evidence strength and effort.
6. Gaps: questions the interviews didn't answer.

Separate what participants said from your interpretation. Don't treat one person's comment as a pattern.
```

## How to use it

1. **Label each interview** (P1, P2…) and add the participant type if relevant.
2. **Check quotes against transcripts** before sharing findings.
3. **Share the top 3 themes** with your team in a short meeting and agree next steps.

## Tips

- Very long transcripts? Summarise each one first, then synthesise the summaries.
- Get consent before recording interviews and keep personal data out of AI tools where required.
