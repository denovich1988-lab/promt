---
title: Analyse NPS survey comments into themes and fixes
date: 2026-11-25
category: research
description: Turn open-ended NPS comments into themes split by promoters, passives and detractors, with quotes, counts and the fixes worth testing first.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [nps, customer feedback, survey analysis, voice of customer]
---

The NPS score tells you how many customers would recommend you; the comments tell you why. Reading hundreds of free-text answers by hand is slow, and skimming tends to remember the loudest complaints rather than the most common ones. This prompt groups NPS comments into themes for each segment, counts them, keeps real quotes as evidence and ends with a short list of fixes, so the survey leads to action instead of a slide with one number.

## Prompt

```prompt
Act as a customer insights analyst.

Product or service: [WHAT YOU SELL]
Survey question asked after the score: [E.G. "WHAT IS THE MAIN REASON FOR YOUR SCORE?"]
Responses (score | comment), one per line:
[PASTE RESPONSES]

1. Split responses into promoters (9–10), passives (7–8) and detractors (0–6) and count each group.
2. For each group, find the 4–6 main themes. For each theme give a short label, a one-line description, the number of comments that mention it, and 2 exact quotes.
3. Show which themes appear in both promoters and detractors (things people love and hate about the same feature).
4. List comments that mention a bug, billing problem or cancellation risk so someone can follow up.
5. Recommend 3 fixes or experiments, ordered by how many detractors and passives they could affect, with a way to measure each.

Count only what is in the data. If a comment is unclear, put it under "unclear" instead of guessing.
```

## How to use it

1. **Remove names and emails** from the export before pasting.
2. **Paste up to a few hundred rows** at a time; for more, run it per month or per segment.
3. **Check the counts on a sample** and share the theme table with the product team.

## Tips

- Run it again next quarter with the same theme labels to see what moved.
- Close the loop: reply to detractors flagged in step 4 within a few days.
