---
title: Google Sheets QUERY formula prompt with explanations
date: 2026-11-27
category: data
description: Get a working Google Sheets QUERY formula for filtering, grouping and summarising your data, explained clause by clause with fixes for common errors.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [google sheets, query function, formulas, spreadsheets]
---

The QUERY function is the most powerful formula in Google Sheets: it can filter, sort, group and pivot data with one line. It is also easy to break, because column letters, quotes around text and date formats all have strict rules. This Google Sheets formula prompt describes your sheet and the result you want, and returns a working QUERY formula with each clause explained and the usual errors fixed in advance.

## Prompt

```prompt
You are a Google Sheets expert who writes and explains QUERY formulas.

My data:
- Sheet/tab name: [TAB NAME]
- Range: [E.G. A1:F500], header row: [YES / NO]
- Columns: [LETTER | HEADER | TYPE, E.G. A | DATE | DATE; B | REGION | TEXT; C | REVENUE | NUMBER]
- A few sample rows: [PASTE 3-5 ROWS]

What I want: [DESCRIBE THE RESULT, E.G. TOTAL REVENUE BY REGION FOR THE LAST 30 DAYS, SORTED HIGHEST FIRST, ONLY WHERE STATUS IS "PAID"]
Where the result goes: [SAME TAB / NEW TAB]
Filter values that change: [E.G. REGION CHOSEN IN CELL H1, DATE RANGE IN H2:H3 — OR "NONE"]

Please:
1. Write the QUERY formula. If filters come from cells, build the query string with & and handle text quotes and dates (date 'yyyy-mm-dd' via TEXT()).
2. Explain each clause (SELECT, WHERE, GROUP BY, PIVOT, ORDER BY, LABEL, FORMAT) in one line.
3. Show what the first rows of the output will look like.
4. List common errors for this formula (mixed data types in a column, wrong column letters, missing quotes, #VALUE from dates) and how to fix them.
5. If data is on another tab or file, show the IMPORTRANGE or Col1 notation version.
6. Suggest a simpler alternative (FILTER, SUMIFS or a pivot table) if it would be easier to maintain.
```

## How to use it

1. **Describe columns exactly as they appear**, including the column letters.
2. **Paste the formula into an empty area** with nothing below or beside it, so the results can spill.
3. **Test with a known total** to confirm the formula counts what you expect.

## Tips

- QUERY treats each column as a single type; mixed text and numbers cause blank results.
- Wrap the formula in IFERROR only after it works, or you will hide useful error messages.
