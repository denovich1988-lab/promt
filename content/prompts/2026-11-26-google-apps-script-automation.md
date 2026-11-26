---
title: Google Apps Script automation for Sheets
date: 2026-11-26
category: coding
description: Get a working Google Apps Script to automate a Sheets task, with setup steps, triggers, error handling and a safe way to test it.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [google apps script, google sheets, automation, javascript]
---

Many repetitive spreadsheet chores — sending emails from rows, copying data between tabs, cleaning imports every morning — can be automated with Google Apps Script, but most people don't know where to start. This prompt describes your sheet and the task precisely so the AI writes a script that fits your columns, explains how to install it and adds triggers and error handling.

## Prompt

```prompt
Act as an experienced Google Apps Script developer. Write a script to automate this task.

What I want automated: [E.G. EMAIL EACH CLIENT THEIR ROW WHEN STATUS = "READY" / COPY NEW FORM RESPONSES TO A CLEAN TAB / CREATE A WEEKLY SUMMARY]
Spreadsheet structure: [TAB NAMES, COLUMN HEADERS AND WHAT EACH HOLDS, HEADER ROW NUMBER]
Example rows: [2–3 ROWS WITH FAKE DATA]
When it should run: [ON EDIT / ON FORM SUBMIT / DAILY AT 7AM / MANUALLY FROM A MENU]
Other services involved: [E.G. GMAIL, GOOGLE CALENDAR, GOOGLE DRIVE]
Things to avoid: [E.G. SENDING DUPLICATE EMAILS, OVERWRITING DATA]

Provide:
1. The complete script with clear comments, using column names from my headers (not hard-coded letters where avoidable).
2. A "processed" flag or timestamp column so rows are never handled twice.
3. Error handling and logging.
4. Step-by-step install instructions: open the editor, paste, save, authorise, set the trigger.
5. A safe test plan using a copy of the sheet.
6. Any quotas or limits that might affect this, phrased as "check current limits in Google's documentation".
```

## How to use it

1. **Use fake example rows**; don't paste customer emails or personal data.
2. **Test on a copy of the spreadsheet** before pointing the script at the real one.
3. **Paste any error message back** into the chat to get a fix.

## Tips

- Ask for a custom menu item so non-technical teammates can run the script with a click.
- Batch reads and writes (getValues/setValues) to keep scripts fast on big sheets.
