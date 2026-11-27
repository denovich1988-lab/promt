---
title: Request for quotation (RFQ) document writer
date: 2026-11-27
category: business
description: Write a clear request for quotation that gets comparable supplier prices, with specs, quantities, delivery terms, deadlines and a quote comparison table.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [procurement, rfq, suppliers, purchasing]
---

A request for quotation works when every supplier prices exactly the same thing. Vague specs lead to quotes you can't compare, follow-up emails and hidden extras after the order. This RFQ prompt writes a structured request with specifications, quantities, delivery and payment terms, a fixed response format and a deadline, plus a comparison table you can use when the quotes come in.

## Prompt

```prompt
Act as a procurement specialist. Write a request for quotation (RFQ) I can send to suppliers.

Our company: [NAME, INDUSTRY, LOCATION]
What we're buying: [PRODUCT OR SERVICE]
Specifications: [SIZES, MATERIALS, STANDARDS, CERTIFICATIONS, BRAND-EQUIVALENT ALLOWED OR NOT]
Quantities: [QUANTITY, OR TIERS E.G. 500 / 1,000 / 5,000]
Delivery: [ADDRESS, INCOTERMS IF INTERNATIONAL, REQUIRED DATE]
Payment terms we prefer: [E.G. NET 30]
Other requirements: [SAMPLES, WARRANTY, PACKAGING, INSURANCE, SUSTAINABILITY]
Deadline for quotes: [DATE AND TIME, TIME ZONE]
Contact: [NAME, EMAIL]

Write:
1. A short cover email inviting suppliers to quote.
2. The RFQ document: background, scope, detailed specifications, quantities, delivery terms, quality and compliance requirements, commercial terms, response deadline and how to submit.
3. A required quote format (table) suppliers must fill in: unit price per tier, setup or tooling costs, delivery cost, lead time, validity period, payment terms, warranty.
4. Questions suppliers must answer (capacity, references, certifications).
5. A note on how quotes will be evaluated, without promising to accept the lowest price.
6. A comparison table template for me with a total landed cost column.
Flag any spec I gave that is too vague to price.
```

## How to use it

1. **List specs as precisely as you can**; the prompt flags anything suppliers could interpret differently.
2. **Send the same RFQ to at least three suppliers** with the same deadline.
3. **Paste the quotes back in** and ask for the comparison table filled in, including total landed cost.

## Tips

- Use an RFQ when you know exactly what you want; when you need suppliers to propose a solution, write an RFP instead.
- Ask for quote validity dates so prices don't change between quote and order.
