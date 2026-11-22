---
title: Python automation script from a plain description
date: 2026-11-22
category: coding
description: A ChatGPT prompt that writes a safe Python automation script for repetitive file, spreadsheet or web tasks, with setup steps and a dry run.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [python, automation, scripting, productivity]
---

Renaming files, merging spreadsheets or sorting downloads by hand wastes hours every month. This ChatGPT prompt turns a plain description of a repetitive task into a Python automation script with clear setup steps, a dry-run mode so you can check what will happen first, and error handling so nothing is lost.

## Prompt

```prompt
You are a senior Python developer writing an automation script for someone with basic coding skills.

Task to automate: [DESCRIBE THE TASK STEP BY STEP]
Input files or sources (format, location, example names): [INPUTS]
Desired output: [OUTPUT]
Operating system: [WINDOWS / MAC / LINUX]
Python version and libraries I can install: [VERSION AND LIBRARIES]
How often it will run: [FREQUENCY]

Write:
1. A short plan of the approach.
2. A complete, commented Python script with: settings at the top, a --dry-run flag that only prints planned actions, logging, error handling, and no deleting or overwriting without a backup.
3. Setup steps: installing packages and running the script.
4. Three test cases to try with sample files.
5. How to schedule it on my operating system.
Ask me up to 3 questions first if anything in the task is unclear.
```

## How to use it

1. **Describe the task as if teaching a new colleague**, with example file names.
2. **Run the dry run** on a copy of your files first.
3. **Schedule it** only after a few clean manual runs.

## Tips

- Keep secrets like API keys in environment variables, not in the script.
- Ask for tests with our [unit tests prompt](/prompts/write-unit-tests/).
