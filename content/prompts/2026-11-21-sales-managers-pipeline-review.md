---
title: ChatGPT prompt for sales managers' pipeline reviews
date: 2026-11-21
category: sales
description: A ChatGPT prompt for sales managers that reviews a pipeline export, flags stalled deals and prepares coaching questions for each rep.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [sales management, pipeline review, forecasting, sales coaching]
---

Weekly pipeline reviews often become status updates where reps read out their deals. This ChatGPT prompt for sales managers prepares you beforehand: it scans a pipeline export for stalled, slipping or thinly qualified deals, checks forecast risk, and gives you specific coaching questions per rep so the meeting moves deals forward instead of just reporting on them.

## Prompt

```prompt
You are a sales leader preparing for a weekly pipeline review.

Sales motion and typical cycle length: [MOTION AND CYCLE]
Stages and what each requires to enter: [STAGE DEFINITIONS]
Qualification framework we use: [e.g. MEDDIC, BANT, our own]
This quarter's target and current closed amount: [TARGET AND CLOSED]
Pipeline export (deal, rep, stage, amount, close date, last activity, next step, days in stage) — remove customer names if needed: [PASTE DATA]

Deliver:
1. Pipeline health: coverage vs remaining target, stage distribution, and where volume is thin.
2. Risk flags, as a table: deals with close dates in the past or this month but no recent activity; deals stuck in stage longer than usual; no next step or a vague one; big amount but early stage.
3. Forecast view: commit, best case, and at-risk lists with a one-line reason each.
4. Per rep: 2 strengths, 2 risks, and 3 coaching questions about their specific deals (open questions, not accusations).
5. An agenda for a 30-minute review meeting.

Base everything on the data; say where data is missing instead of guessing.
```

## How to use it

1. **Export fresh data** right before the meeting.
2. **Share the risk table** with reps a few hours ahead so they come prepared.
3. **Track the flagged deals** next week to see what moved.

## Tips

- Clean pipeline data starts with clear stage entry rules.
- For deal-level help, use our [mutual action plan prompt](/prompts/mutual-action-plan-b2b/).
