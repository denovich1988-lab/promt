---
title: Excel and Google Sheets formulas from plain English
date: 2026-11-20
category: data
description: Describe what you need in plain words and get the right Excel or Google Sheets formula, explained step by step with an example.
models: [ChatGPT, Claude, Gemini]
level: Beginner
tags: [excel formulas, google sheets, spreadsheets]
---

Spreadsheet formulas are easy to describe and hard to write: "sum sales for the north region in March, but only for paid invoices". This prompt turns that description into a working formula based on your actual column layout, with an explanation so you can adjust it later.

## Prompt

```prompt
You are a spreadsheet expert. Write a formula for me.

App and version: [EXCEL 365, EXCEL 2019, GOOGLE SHEETS]
My columns (letter, header, example value): [COLUMNS]
Data range (first and last row): [RANGE]
What I want the formula to do, in plain words: [GOAL]
Where the formula will go: [CELL]

Give me:
1. The formula, ready to paste.
2. A step-by-step explanation of each part.
3. A worked example with 3 sample rows showing the expected result.
4. A simpler alternative, if one exists, and when to prefer it.
5. Common errors this formula might show (e.g. #N/A, #VALUE!) and how to fix them.

Use functions available in my version only. If my request is ambiguous, state the assumption you made.
```

## How to use it

1. **Describe your columns exactly**, including headers and an example value.
2. **Paste the formula** into one cell and check it against a value you know.
3. **Copy it down** or across once it works.

## Tips

- Ask for the formula with absolute references ($A$2) if you'll copy it.
- For complex tasks, ask whether a pivot table would be easier.
