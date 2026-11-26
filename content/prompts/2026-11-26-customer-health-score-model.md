---
title: Customer health score model for SaaS accounts
date: 2026-11-26
category: business
description: Design a customer health score with weighted signals, thresholds and playbooks so your team spots churn risk and expansion chances early.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [customer health score, customer success, churn, saas]
---

A customer health score is only useful if it predicts something and tells the team what to do next. Many scores are a pile of metrics nobody trusts. This prompt helps customer success leaders build a customer health score model from the data they actually have: a few weighted signals, clear red, yellow and green thresholds, and a playbook for each band.

## Prompt

```prompt
Act as a customer success operations lead. Help me design a customer health score.

Product and business model: [PRODUCT, B2B/B2C, PRICING MODEL]
Customer segments: [E.G. SMB, MID-MARKET, ENTERPRISE]
Data we can track today: [E.G. LOGINS, SEATS USED, FEATURE ADOPTION, SUPPORT TICKETS, NPS, INVOICES PAID LATE, EXEC SPONSOR]
What we know about churned customers: [PATTERNS YOU'VE SEEN]
Team size and tools: [CSMS, CRM/CS PLATFORM]

Create:
1. 5–7 health signals grouped into usage, relationship, outcomes and commercial; for each, how to measure it and why it predicts churn or growth.
2. A weighting table that adds up to 100, with a different weighting per segment if that makes sense.
3. Scoring rules for each signal (what counts as good, okay, poor) and the formula for the total.
4. Red/yellow/green thresholds and what share of accounts I'd expect in each, stated as a check rather than a fact.
5. A playbook per band: owner, first action within 48 hours, and follow-ups.
6. A plan to validate the score against the last 6–12 months of renewals and churn, and when to reweight.
7. Common mistakes to avoid (vanity usage metrics, too many signals, scores nobody acts on).

Only use the data sources I listed; mark anything that needs new tracking as {NEW DATA}.
```

## How to use it

1. **List only the data you can pull today**; a simple score you can run beats a perfect one you can't.
2. **Back-test it** on accounts that renewed and churned last year before rolling it out.
3. **Review the weights each quarter** with the CSMs who use the score daily.

## Tips

- Add a manual "CSM gut check" field; it often catches risk the data misses.
- Track how often a red account gets a touch within 48 hours; that's the real measure of the score's value.
