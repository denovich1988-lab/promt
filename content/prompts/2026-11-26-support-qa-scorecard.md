---
title: Support QA scorecard for tickets and calls
date: 2026-11-26
category: customer-service
description: Build a customer support QA scorecard with weighted criteria, clear rating definitions, auto-fail rules and a calibration routine reviewers agree on.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [qa scorecard, quality assurance, customer support, call center]
---

Quality reviews only help agents improve if every reviewer scores the same ticket the same way. Vague criteria like "good tone" lead to arguments, not coaching. This prompt builds a support QA scorecard with weighted criteria, clear definitions of what each score looks like, auto-fail rules and a calibration routine, tailored to your channels and policies.

## Prompt

```prompt
Act as a customer support quality manager. Build a QA scorecard.

Company and product: [COMPANY, PRODUCT]
Channels reviewed: [EMAIL, CHAT, PHONE, SOCIAL]
Team size and reviews per agent per month: [NUMBERS]
What matters most to us: [E.G. RESOLVING ON FIRST CONTACT, EMPATHY, POLICY ACCURACY, SPEED]
Policies that must never be broken: [E.G. IDENTITY VERIFICATION, REFUND LIMITS, DATA PRIVACY]
Brand tone: [3 WORDS]

Create:
1. 6–9 criteria grouped into resolution, accuracy, communication and process, with weights adding up to 100.
2. For each criterion: a definition, and what a 0, 1, 2 and 3 look like with a short example phrase or behaviour.
3. Auto-fail rules for critical policy breaches.
4. Channel differences (what changes for phone vs. chat vs. email).
5. The scorecard as a table I can paste into a spreadsheet, with a formula for the final score.
6. A calibration routine: how often, how many tickets, how to handle disagreements, target agreement.
7. How to turn scores into coaching: a feedback template with one strength, one improvement and an example rewrite.
8. Metrics to track over time and how to avoid scoring that punishes agents for policy or product problems.

Keep definitions specific enough that two reviewers would agree.
```

## How to use it

1. **Score 10 past tickets together** with your reviewers before rolling it out.
2. **Adjust definitions** wherever reviewers disagreed most.
3. **Share the scorecard with agents**; they should know exactly how they're measured.

## Tips

- Tag failures caused by unclear policy or product bugs separately so they go to the right team.
- Review a mix of random and flagged tickets so scores reflect normal work.
