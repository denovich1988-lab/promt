---
title: Write an Excel VBA macro from plain English
date: 2026-11-24
category: coding
description: A ChatGPT prompt for Excel VBA macros — describe the task in plain English and get commented code, setup steps and safety checks.
models: [ChatGPT, Claude, Gemini]
level: Beginner
tags: [excel vba, macros, excel automation, spreadsheets]
---

Repetitive Excel work — copying data between sheets, formatting reports, splitting files — is a good fit for a VBA macro, but writing one from scratch is slow if you rarely code. This ChatGPT prompt for Excel VBA macros turns a plain-English description of your workbook and task into commented code, with steps to install it and checks so it does not damage your data.

## Prompt

```prompt
Act as an Excel VBA expert. Write a macro for this task.

What the macro should do, step by step: [TASK IN PLAIN ENGLISH]
Workbook structure: sheet names, header row, columns and what they contain: [STRUCTURE]
Approximate number of rows: [ROWS]
When it should run (button, on open, manually): [TRIGGER]
Excel version: [VERSION, e.g. Microsoft 365 Windows / Mac]

Deliver:
1. Complete VBA code with Option Explicit, clear variable names and a comment on every block.
2. Error handling with a friendly message, and a check that the expected sheets and headers exist.
3. Performance settings (screen updating, calculation) that are restored at the end.
4. Step-by-step instructions to add the macro, save as .xlsm and assign it to a button.
5. How to test it safely on a copy of the file.
6. Settings I can change at the top of the code (sheet names, columns).
7. Limitations, and whether a formula, Power Query or Office Script would be a better choice.
```

## How to use it

1. **Describe the columns exactly**, including the header text, so the code finds the right data.
2. **Run it on a copy first**; macros cannot be undone with Ctrl+Z.
3. **Paste any error message back** with the line it stopped on to get a fix.

## Tips

- For simpler jobs, try the [Excel formulas in plain English](/prompts/excel-formulas-plain-english/) prompt first.
- Only enable macros in files you trust.
