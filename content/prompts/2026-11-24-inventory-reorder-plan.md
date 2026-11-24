---
title: Inventory reorder plan with safety stock
date: 2026-11-24
category: business
description: A ChatGPT prompt for an inventory reorder plan — reorder points, safety stock, order quantities and an ABC review so you avoid stockouts.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [inventory management, reorder point, safety stock, operations]
---

Small businesses often reorder by gut feel, then run out of best-sellers or tie up cash in slow stock. An inventory reorder plan uses your sales history and supplier lead times to set reorder points, safety stock and order quantities. This prompt does the math with your data and explains it clearly.

## Prompt

```prompt
Act as an operations and inventory analyst. Build an inventory reorder plan.

Business and type of products: [BUSINESS]
Product data (SKU, average daily or weekly sales, sales variability or best/worst week, unit cost, current stock): [PRODUCT DATA]
Supplier lead times and minimum order quantities: [SUPPLIER DATA]
Desired service level (how often I'm willing to run out): [SERVICE LEVEL]
Storage or cash limits: [CONSTRAINTS]
Seasonality or upcoming promotions: [SEASONALITY]

Deliver:
1. ABC classification of my products by sales value, and how much attention each class needs.
2. For each SKU: safety stock, reorder point and suggested order quantity, with the formulas and my numbers shown.
3. A reorder table I can paste into a spreadsheet: SKU, current stock, reorder point, order now? (yes/no), quantity.
4. Adjustments for seasonality and promotions.
5. Slow-moving stock to reduce and ideas to clear it.
6. A simple weekly routine to keep the plan current.
Explain any assumptions. Do not invent sales numbers; ask if data is missing.
```

## How to use it

1. **Export at least 3–6 months of sales** per SKU for reliable averages.
2. **Paste the reorder table into a spreadsheet** and update stock weekly.
3. **Recalculate when lead times or demand change.**

## Tips

- Clean messy exports first with the [clean messy data rules](/prompts/clean-messy-data-rules/) prompt.
- Plan cash for big orders with the [13-week cash flow forecast](/prompts/13-week-cash-flow-forecast/) prompt.
