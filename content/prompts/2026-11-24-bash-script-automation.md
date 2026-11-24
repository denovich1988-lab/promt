---
title: Write a safe Bash script for any task
date: 2026-11-24
category: coding
description: A ChatGPT prompt for Bash scripts — describe the task and get a commented script with safety flags, argument checks, logging and a dry-run mode.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [bash script, shell scripting, automation, linux]
---

Shell scripts automate backups, file cleanups and deployments, but a small mistake — an unquoted variable, a missing check — can delete the wrong files. This ChatGPT prompt for Bash scripts turns your task description into a commented script with strict mode, input validation, logging and a dry-run option, so you can test it before it touches real data.

## Prompt

```prompt
Act as a senior Linux engineer. Write a Bash script.

Task, step by step: [WHAT THE SCRIPT SHOULD DO]
Inputs (arguments, files, environment variables): [INPUTS]
Expected output and where it goes: [OUTPUT]
Operating system and shell version: [e.g. Ubuntu 24.04, bash 5 / macOS zsh]
How it will run (manually, cron, CI): [RUN CONTEXT]
Tools available (rsync, jq, curl…): [TOOLS]

Requirements:
1. Use set -euo pipefail, quote all variables, and use functions for each step.
2. Parse arguments with a --help message and a --dry-run flag that prints actions without changing anything.
3. Check that required tools, files and permissions exist before starting.
4. Log with timestamps to stdout and to a log file; exit with clear error codes.
5. Clean up temporary files with a trap.
6. Comment each section.
Then:
7. Show 3 example commands to run it.
8. Explain any destructive step and how to test it safely.
9. Note if Python or another tool would be a better fit.
```

## How to use it

1. **Run with --dry-run first** and read every planned action.
2. **Test in a temporary folder** with copies of real files.
3. **Run ShellCheck** on the script before scheduling it.

## Tips

- For bigger automation, compare with the [Python automation script](/prompts/python-automation-script/) prompt.
- Ask for an explanation of any line you do not understand with the [explain code line by line](/prompts/explain-code-line-by-line/) prompt.
