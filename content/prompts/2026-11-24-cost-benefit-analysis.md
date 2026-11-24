---
title: Run a clear cost-benefit analysis for a decision
date: 2026-11-24
category: business
description: A ChatGPT prompt for a cost-benefit analysis — costs, benefits, payback period, risks and a recommendation, laid out in a table you can share.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [cost-benefit analysis, decision making, roi, business case]
---

A cost-benefit analysis turns "should we do this?" into numbers and trade-offs people can discuss. Without structure, hidden costs get missed and soft benefits get overstated. This prompt lays out a cost-benefit analysis with one-time and ongoing costs, benefits, payback and the risks that could change the answer.

## Prompt

```prompt
Act as a business analyst. Run a cost-benefit analysis.

Decision or project: [DECISION]
Options to compare (including "do nothing"): [OPTIONS]
Known costs (one-time and ongoing, with amounts): [COSTS]
Expected benefits (savings, revenue, time, risk reduction): [BENEFITS]
Time horizon: [YEARS OR MONTHS]
Currency: [CURRENCY]

Produce:
1. A table per option: one-time costs, ongoing costs, quantified benefits, and benefits I cannot easily quantify.
2. Net benefit, simple ROI and payback period, showing the calculation.
3. Hidden or often-forgotten costs I should check (training, maintenance, switching, staff time).
4. Key assumptions and a simple sensitivity check: what if benefits are 30% lower or costs 30% higher?
5. Risks for each option.
6. A recommendation in three sentences, with the condition that would change it.
Use my figures only; label every estimate you add as an estimate.
```

## How to use it

1. **List costs with real quotes** wherever possible.
2. **Check the sensitivity row**: if the answer flips easily, gather better data first.
3. **Share the table** with the decision makers, not just the recommendation.

## Tips

- Turn the result into a proposal with the [decision memo](/prompts/decision-memo-compare-options/) prompt.
- For buying software, also try the [build vs buy](/prompts/build-vs-buy-software/) prompt.
