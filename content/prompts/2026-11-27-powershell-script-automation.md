---
title: PowerShell script prompt to automate Windows tasks
date: 2026-11-27
category: coding
description: Get a safe, commented PowerShell script for a repetitive Windows or admin task, with a dry-run mode, logging, error handling and test steps.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [powershell, automation, windows, scripting]
---

PowerShell can automate file clean-ups, user reports and server checks in minutes, but a script copied from a forum can just as quickly delete the wrong folder. This PowerShell ChatGPT prompt asks for a script built the careful way: parameters instead of hard-coded paths, a `-WhatIf` dry run, logging and clear error handling, plus instructions for testing it before it touches anything real.

## Prompt

```prompt
You are a senior Windows systems administrator who writes safe, readable PowerShell.

Task to automate: [DESCRIBE THE TASK, E.G. MOVE FILES OLDER THAN 90 DAYS FROM A SHARE TO AN ARCHIVE FOLDER AND REPORT SIZES]
Environment: PowerShell [VERSION, E.G. 5.1 / 7.X] on [WINDOWS 11 / WINDOWS SERVER 2022], run [MANUALLY / AS A SCHEDULED TASK] by [USER TYPE AND PERMISSIONS]
Inputs: [PATHS, CSV FILES, AD GROUPS, ETC.]
Expected output: [E.G. CSV REPORT, LOG FILE, EMAIL]
Modules available: [E.G. ACTIVEDIRECTORY / NONE]

Requirements:
1. Use a param() block with validation for all inputs; no hard-coded paths.
2. Support -WhatIf and -Confirm (SupportsShouldProcess) for anything that changes or deletes data.
3. Use try/catch with -ErrorAction Stop, and write a timestamped log to [LOG PATH].
4. Use approved verbs and comment-based help (synopsis, parameters, examples).
5. Avoid aliases; write full cmdlet names for readability.
6. Return objects, then export, rather than building text output.

After the script, give:
- A plain-English explanation of what each section does.
- How to test it safely (dry run, test folder, sample data).
- How to schedule it with Task Scheduler, including the execution policy and account to use.
- Any risks or edge cases (long paths, locked files, permissions).
```

## How to use it

1. **Describe the task precisely**, including what counts as success.
2. **Run the script with `-WhatIf` on test data** and read the log before using real paths.
3. **Store the script in version control** and note who owns it.

## Tips

- Ask for a rollback step if the script moves or renames files.
- Never paste real passwords into the prompt; use a credential store or prompt at runtime.
