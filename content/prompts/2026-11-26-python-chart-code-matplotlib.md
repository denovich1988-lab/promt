---
title: Python chart code with matplotlib from your data
date: 2026-11-26
category: data
description: Get clean, labelled matplotlib chart code from a description of your data, with the right chart type, readable styling and export settings.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [matplotlib, python charts, data visualization, pandas]
---

Writing matplotlib code from memory means looking up the same settings for titles, axes, colours and figure size every time, and default charts rarely look good enough to share. This prompt turns a description of your data and the point you want to make into complete, commented matplotlib code with the right chart type, readable labels and export settings.

## Prompt

```prompt
Act as a data visualization engineer. Write Python code that makes a chart with matplotlib (and pandas for loading).

Data source: [E.G. CSV FILE "sales.csv" / A PANDAS DATAFRAME CALLED df]
Columns and types: [COLUMN NAME – TYPE – EXAMPLE VALUE, ONE PER LINE]
Sample rows: [PASTE 5–10 ROWS]
The message the chart should show: [E.G. "MONTHLY REVENUE GREW IN Q3 FOR REGION A ONLY"]
Audience and where it will appear: [E.G. SLIDE DECK, REPORT, DASHBOARD IMAGE]
Preferences: [E.G. COLOUR-BLIND SAFE, BRAND COLOUR #1F6FEB, NO GRIDLINES]

Do this:
1. Recommend the chart type for the message and say why in one sentence (and which type to avoid).
2. Write complete, runnable code: imports, loading, any cleaning or grouping needed, the chart, a clear title stating the takeaway, axis labels with units, readable tick formatting (thousands separators, dates), a legend only if needed, and direct labels where they help.
3. Save as PNG at 200 dpi and as SVG, with tight layout.
4. Comment each block briefly.
5. List 2 variations (e.g. highlight one series, small multiples) with the lines to change.

Use only columns I listed. If the data needs a step you're unsure about (like date formats), add a clear comment marked TODO.
```

## How to use it

1. **Paste real column names and a few rows** so the code runs without edits.
2. **Run it in a notebook first** and adjust figure size for your slide or page.
3. **Keep the code** as a reusable function for the next report.

## Tips

- A title that states the finding ("Q3 growth came from Region A") beats a label ("Revenue by month").
- Highlight one series in colour and keep the rest grey to focus attention.
