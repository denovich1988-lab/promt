---
title: North Star metric and KPI tree for your product
date: 2026-11-23
category: business
description: "A ChatGPT prompt to choose a North Star metric and build a KPI tree: input metrics teams can move, guardrails and how to track them."
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [north star metric, kpis, product strategy, metrics]
---

Teams pulling in different directions often track different numbers. A North Star metric captures the value customers get from your product, and a KPI tree breaks it into input metrics each team can actually influence. This prompt helps you choose the metric, test it, and map the tree with guardrails so you do not grow one number at the expense of everything else.

## Prompt

```prompt
Act as a product strategy advisor. Help me define a North Star metric and KPI tree.

Product and business model: [PRODUCT AND MODEL, e.g. B2B SaaS per seat, marketplace, subscription app]
Who the customer is and the core value they get: [CUSTOMER AND VALUE]
How we make money: [REVENUE MODEL]
Metrics we track today: [CURRENT METRICS]
Teams that would use this: [TEAMS]

Do this:
1. Suggest 3 candidate North Star metrics, and test each one: does it reflect customer value, lead to revenue, and can teams influence it?
2. Recommend one and explain why.
3. Build a KPI tree: North Star → 3–5 input metrics → team-level drivers, as an indented list.
4. Add 2–3 guardrail metrics that stop us from gaming the North Star.
5. For each metric: a precise definition, data source, review frequency and owning team.
Point out where data we may not have yet would be needed.
```

## How to use it

1. **Write precise definitions**; "active user" means different things to different teams.
2. **Assign each input metric to one team** so someone owns it.
3. **Review the tree yearly** as the product and business model change.

## Tips

- Turn the inputs into goals with the [OKRs from strategy](/prompts/okrs-from-strategy/) prompt.
- Show them on one page with the [weekly KPI dashboard](/prompts/weekly-kpi-dashboard-metrics/) prompt.
