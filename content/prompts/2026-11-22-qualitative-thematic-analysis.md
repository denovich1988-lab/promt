---
title: Thematic analysis of qualitative data
date: 2026-11-22
category: research
description: A ChatGPT prompt for thematic analysis that codes interview or open-ended survey text, groups codes into themes and keeps quotes traceable.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [thematic analysis, qualitative research, coding, interviews]
---

Coding transcripts and open-ended answers by hand takes days, and it is easy to lose the link between a theme and the words behind it. This ChatGPT prompt for thematic analysis helps with a first pass: it creates initial codes, groups them into candidate themes, attaches quotes with their source IDs, and flags contradictions, so you can review and refine instead of starting from a blank page.

## Prompt

```prompt
You are a qualitative researcher assisting with reflexive thematic analysis. You support my analysis; you do not replace my judgment.

Research question: [RESEARCH QUESTION]
Data type and context (interviews, focus groups, open survey answers; who the participants are): [DATA CONTEXT]
Data, with an ID for each participant or response: [DATA]
Approach: [INDUCTIVE OR DEDUCTIVE] — if deductive, my framework or codebook: [FRAMEWORK]

Do the following:
1. Initial codes: a table with code name, short definition, and 2–3 example quotes with participant IDs.
2. Candidate themes: group the codes into 3–7 themes. For each give a name, a one-paragraph description of the pattern, the codes included, how many participants it appears in, and the strongest supporting quotes (verbatim, with IDs).
3. Negative cases: data that contradicts or complicates each theme.
4. Codes that didn't fit any theme.
5. Questions for me to consider in the next round of analysis.
Quote verbatim only from the data provided. Never invent quotes or participants. Note where a theme rests on few participants.
```

## How to use it

1. **Remove names and identifying details** and follow your ethics approval before pasting data.
2. **Check every quote against the source**; treat the output as a draft codebook.
3. **Review, merge and rename themes yourself**; the interpretation is your job as the researcher.

## Tips

- Work in chunks for long transcripts, then ask for themes across all chunks.
- For customer interviews, the [interview synthesis prompt](/prompts/customer-interview-synthesis/) gives a faster product-focused view.
- Place your findings in context with the [literature review matrix prompt](/prompts/literature-review-matrix/).
