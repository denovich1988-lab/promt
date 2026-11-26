---
title: Supply chain risk plan prompt for small firms
date: 2026-11-26
category: business
description: Map your key suppliers and materials, score supply chain risks and build backup sources, stock buffers and early warning signs.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [supply chain risk, operations, supplier management, business continuity]
---

A single late shipment, a supplier going out of business or a sudden price jump can stop production or empty your shelves. Large companies have supply chain teams; small and mid-sized firms usually rely on memory and luck. This supply chain risk plan prompt helps you map what you depend on, score each risk by likelihood and impact, and decide on practical responses such as second suppliers, safety stock and contract terms.

## Prompt

```prompt
Act as a supply chain consultant for small and mid-sized businesses. Build a supply chain risk plan.

Business: [WHAT YOU MAKE OR SELL, ANNUAL REVENUE RANGE, LOCATIONS]
Key inputs and suppliers: [FOR EACH: ITEM, SUPPLIER, COUNTRY, % OF SPEND, LEAD TIME, SINGLE OR MULTIPLE SOURCE]
Current stock policy: [E.G. 3 WEEKS OF STOCK, JUST IN TIME]
Past disruptions: [WHAT HAPPENED AND THE IMPACT]
Constraints: [CASH, STORAGE SPACE, MINIMUM ORDER QUANTITIES]

Produce:
1. A dependency map table: item, supplier, single-source (yes/no), lead time, substitutes available.
2. A risk register: risk (supplier failure, shipping delay, price spike, quality issue, tariff or regulation change, natural event), likelihood 1–5, impact 1–5, score, and the items affected.
3. For the top 5 risks: preventive actions, a response plan if it happens, the owner and the cost or effort.
4. Safety stock suggestions for critical items, with the simple formula used and assumptions stated.
5. Questions to ask current suppliers (capacity, backup sites, financial health) and what to add to contracts.
6. Early warning signals to watch each month and who checks them.
7. A 90-day action plan.

State assumptions clearly and don't invent supplier data.
```

## How to use it

1. **List suppliers by spend** and include the small ones you can't easily replace.
2. **Score risks with your team**; purchasing and operations often see different risks.
3. **Review the register quarterly** and after any disruption.

## Tips

- A second supplier for your top two critical items often removes most of the risk.
- Safety stock costs cash; balance it against how much a stockout would cost.
