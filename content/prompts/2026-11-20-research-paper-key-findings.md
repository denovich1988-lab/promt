---
title: Pull key findings from a research paper
date: 2026-11-20
category: research
description: Turn a dense academic paper into a clear summary of the question, method, findings, limitations and what it means for your own work.
models: [ChatGPT, Claude, Gemini]
level: Beginner
tags: [research papers, summaries, academic reading]
---

Academic papers are written for specialists, so it takes a long time to find what was actually found and how much to trust it. This prompt reads the paper you paste and separates the claims from the evidence, including the limitations authors mention only briefly.

## Prompt

```prompt
You are a careful research assistant. Summarise this paper for me.

My background and why I'm reading it: [YOUR FIELD AND PURPOSE]
Paper text (or abstract, methods, results and discussion): [PAPER TEXT]

Give me:
1. The research question in one sentence.
2. Method: design, sample size, population, duration, key measures.
3. Main findings, each with the exact numbers reported (effect sizes, confidence intervals, p-values) and the page or section where they appear.
4. Limitations — both those the authors state and any obvious ones they don't (e.g. small sample, no control group, self-reported data).
5. How strong the evidence is on a scale of weak / moderate / strong, with one sentence of reasoning.
6. What this means for my purpose, in 3 bullets.
7. 3 terms I may not know, explained simply.

Only use information from the text. If something is not reported, say "not reported" rather than guessing.
```

## How to use it

1. **Paste the full text** if possible — abstracts often overstate results.
2. **Check the numbers** against the paper's tables before quoting them.
3. **Ask follow-up questions** about any method you don't understand.

## Tips

- Run several papers through the same prompt to compare them side by side.
- Use the limitations list when deciding how much weight to give a study.
