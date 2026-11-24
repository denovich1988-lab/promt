---
title: Chargeback dispute response with evidence summary
date: 2026-11-24
category: customer-service
description: A ChatGPT prompt for a chargeback dispute response — decide whether to fight it, organize evidence and write a clear rebuttal letter.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [chargebacks, payment disputes, ecommerce, customer service]
---

When a customer files a chargeback, you usually have a short window to respond, and a rambling reply with missing evidence often loses. A good chargeback dispute response matches the dispute reason code, presents evidence in order and stays factual. This prompt helps you decide whether to contest, organizes your evidence and drafts the rebuttal.

## Prompt

```prompt
Act as a payments and disputes specialist for an online business. Help me respond to a chargeback.

Business and what was sold: [BUSINESS AND PRODUCT]
Dispute reason given by the bank or processor: [REASON CODE OR DESCRIPTION]
Order details (date, amount, delivery method): [ORDER DETAILS]
Evidence I have (receipts, tracking, delivery confirmation, emails, logins, refund policy, usage logs): [EVIDENCE]
Customer contact history: [CONTACT HISTORY]
Deadline to respond: [DEADLINE]

Deliver:
1. A recommendation: contest or accept, with reasons, based on the reason code and my evidence.
2. Which evidence matters most for this reason code, and what is missing.
3. A rebuttal letter: short summary, timeline of events, each piece of evidence with what it proves, reference to the policy the customer agreed to, clear request.
4. An evidence checklist with suggested file names in the order to upload.
5. Steps to reduce similar disputes in future.
Keep the tone factual and polite. Do not overstate what the evidence shows. Payment network rules differ, so remind me to check my processor's requirements.
```

## How to use it

1. **Gather all evidence before writing**, including any customer emails.
2. **Follow your processor's format and file limits** when submitting.
3. **Track outcomes by reason code** to see which disputes are worth fighting.

## Tips

- Prevent disputes by handling refund requests quickly with the [refund request reply](/prompts/refund-request-reply/) prompt.
- If an order was delayed, send the [shipping delay apology email](/prompts/shipping-delay-apology-email/) early.
