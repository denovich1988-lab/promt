---
title: Turn a user complaint into a clear bug report
date: 2026-11-23
category: coding
description: "Paste a user complaint and logs and get a clear bug report: steps to reproduce, expected vs actual result, severity and questions to ask."
models: [ChatGPT, Claude, Gemini]
level: Beginner
tags: [bug report, qa, issue tracking, software development]
---

User complaints like "it's broken again" don't help developers fix anything. A good bug report has steps to reproduce, expected versus actual behavior, environment details and severity. This prompt turns a support message, screenshots described in text and logs into a clear, ready-to-file bug report, plus the questions to ask the user if something is missing.

## Prompt

```prompt
You are a QA engineer. Turn this user complaint into a clear bug report.

Product and area of the app: [PRODUCT AND AREA]
User complaint (as written): [COMPLAINT]
Environment details we have (device, OS, browser, app version, account type): [ENVIRONMENT]
Logs, error messages or screenshot descriptions: [LOGS OR ERRORS]
Recent releases or changes: [RECENT CHANGES, or "unknown"]

Write:
1. A short, specific bug title.
2. Summary in one or two sentences.
3. Steps to reproduce (numbered), marking steps that are assumed.
4. Expected result and actual result.
5. Environment and frequency (always, sometimes, once).
6. Severity and priority suggestion with reasons (data loss, security, workaround available, number of users affected).
7. Possible causes to check first, based on the logs.
8. Questions to ask the user to fill gaps, written in friendly, non-technical language.
9. A short reply to the user confirming we are looking into it, with no promised fix date.
Format the report in Markdown for an issue tracker.
```

## How to use it

1. **Paste the complaint and any logs**, with personal data removed.
2. **Try the steps yourself** and update the report with what you see.
3. **File it** in your issue tracker and link the support ticket.

## Tips

- Once you can reproduce it, use the [debug an error step by step](/prompts/debug-error-step-by-step/) prompt.
- Stop it coming back with the [write unit tests](/prompts/write-unit-tests/) prompt.
