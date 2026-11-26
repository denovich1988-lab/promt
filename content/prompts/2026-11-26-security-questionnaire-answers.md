---
title: Security questionnaire answers for B2B sales
date: 2026-11-26
category: sales
description: Draft accurate security questionnaire answers from your existing policies, flag gaps honestly and build a reusable answer library that speeds up B2B deals.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [security questionnaire, b2b sales, vendor assessment, compliance]
---

Enterprise deals often stall at the security questionnaire: hundreds of questions about encryption, access control and incident response, due yesterday. This prompt drafts security questionnaire answers using only your own policies and documentation, flags questions you can't answer truthfully yet and turns the result into a reusable answer library for the next deal.

## Prompt

```prompt
Act as a security and compliance specialist supporting a sales team. Draft answers to a customer security questionnaire.

Our company and product: [COMPANY, PRODUCT, HOSTING (E.G. AWS EU-WEST)]
Certifications and reports: [E.G. SOC 2 TYPE II DATE, ISO 27001, NONE]
Our security documentation: [PASTE POLICIES, SECURITY PAGE, PREVIOUS ANSWERS]
Questionnaire questions: [PASTE QUESTIONS, NUMBERED]
Customer context: [INDUSTRY, DATA THEY'LL SHARE]

For each question:
1. A concise, accurate answer based only on my documentation (Yes / No / Partial plus 1–3 sentences of detail).
2. The source in my docs that supports it.
3. A confidence label: Confirmed by docs / Needs owner check / No information.
4. For "No" or "Partial" answers, an honest explanation and any compensating control or roadmap item I listed.

Then provide:
- A list of questions needing input from engineering, legal or IT, grouped by owner.
- A short cover note to the customer summarising our security posture and offering a call with our security lead.
- A reusable answer library table (category, standard question, approved answer, last reviewed date) for future questionnaires.

Never claim a control, certification or practice that isn't in my documentation. Mark those as {NO INFO – CHECK}.
```

## How to use it

1. **Paste your real policies and past approved answers**; accuracy matters more than speed here.
2. **Have the security or IT owner review every answer** before it goes to the customer.
3. **Save approved answers** in the library and update them when policies change.

## Tips

- An honest "partial, here's our plan" builds more trust than an overstated "yes".
- Offer your SOC 2 report or security overview under NDA to answer many questions at once.
