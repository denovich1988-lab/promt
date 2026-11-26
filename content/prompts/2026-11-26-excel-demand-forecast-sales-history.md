---
title: Excel demand forecast prompt from sales history
date: 2026-11-26
category: data
description: Build a simple demand forecast in Excel or Google Sheets from your sales history, with seasonality, formulas, accuracy checks and reorder needs.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [demand forecasting, excel forecast, inventory planning, sales data]
---

Small businesses often order stock or schedule staff on gut feel, then end up with shortages in busy months and excess in quiet ones. You don't need special software to do better: a spreadsheet forecast built from your past sales, with seasonality and a simple accuracy check, goes a long way. This Excel demand forecast prompt walks you through the method and gives you the exact formulas for Excel or Google Sheets.

## Prompt

```prompt
Act as a demand planning analyst. Help me build a demand forecast in [EXCEL / GOOGLE SHEETS].

What I'm forecasting: [E.G. UNITS PER PRODUCT, ORDERS PER WEEK, COVERS PER DAY]
Sales history (paste date and quantity, ideally 2+ years, monthly or weekly): [PASTE OR DESCRIBE THE LAYOUT, E.G. COLUMN A DATE, COLUMN B UNITS]
Known events: [PROMOTIONS, STOCKOUTS, PRICE CHANGES, NEW CHANNELS]
Forecast horizon: [E.G. NEXT 6 MONTHS]
How I'll use it: [E.G. REORDERING, STAFFING, BUDGETING]

Provide:
1. A quick look at the data: trend, seasonality, outliers and periods to clean (e.g. stockouts).
2. A recommended method for my data (moving average, seasonal index, or FORECAST.ETS) with a plain explanation.
3. Step-by-step spreadsheet setup: columns to add and exact formulas, including seasonal indexes and FORECAST.ETS / FORECAST.LINEAR where relevant.
4. A holdout accuracy test (forecast the last 3 months from earlier data) with MAPE or MAE formulas.
5. Forecast output table for the horizon with a low/high range.
6. If for reordering: safety stock and reorder point formulas using lead time.
7. How to update the forecast each month.

If I pasted data, compute the main figures and show them; otherwise give a template with sample formulas.
```

## How to use it

1. **Clean stockout periods** first; they make demand look lower than it was.
2. **Test accuracy on recent months** before trusting the forecast.
3. **Update monthly** with new actuals and compare them with the forecast.

## Tips

- Forecast at the level you make decisions (e.g. product family), not always per SKU.
- Add a manual adjustment column for promotions you know are coming.
