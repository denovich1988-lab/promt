---
title: Pivot table analysis plan for your spreadsheet
date: 2026-11-23
category: data
description: Tell ChatGPT your columns and question and get the pivot tables to build, the fields for each, steps in Excel or Sheets, and what to look for.
models: [ChatGPT, Claude, Gemini]
level: Beginner
tags: [pivot tables, excel, google sheets, data analysis]
---

Pivot tables answer most business questions in a spreadsheet, but it is hard to know which rows, columns and values to drag where. This prompt looks at your columns and your question, then tells you exactly which pivot tables to build, step by step in Excel or Google Sheets, and how to read the results.

## Prompt

```prompt
You are a data analyst who teaches spreadsheets. Plan the pivot tables for my data.

Tool: [EXCEL OR GOOGLE SHEETS]
Column names with example values (first 5 rows): [COLUMNS AND SAMPLE ROWS]
Number of rows: [ROW COUNT]
Business question I want answered: [QUESTION, e.g. which products and regions drive revenue growth]

Do this:
1. Check the data for problems that break pivot tables (blank headers, merged cells, text in number columns, inconsistent dates or names) and say how to fix each.
2. Suggest 3–5 pivot tables that answer my question. For each: rows, columns, values (with sum, count or average), filters, and why.
3. Give click-by-click steps for the first one in my tool.
4. Suggest calculated fields or grouping (by month, quarter, price band) where useful.
5. Explain what patterns to look for and which chart fits each pivot table.
6. Write a short summary template I can fill in with the results.
```

## How to use it

1. **Paste your headers and a few sample rows**, with private data removed.
2. **Clean the data** using the fixes before building pivots.
3. **Build the first pivot table**, then ask follow-up questions with the numbers you see.

## Tips

- Need a formula instead? Use the [Excel formulas in plain English](/prompts/excel-formulas-plain-english/) prompt.
- Pick the right visual with the [choose the right chart](/prompts/choose-the-right-chart/) prompt.
