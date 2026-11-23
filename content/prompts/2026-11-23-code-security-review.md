---
title: Security code review for common vulnerabilities
date: 2026-11-23
category: coding
description: "A ChatGPT prompt for a security code review: find injection, auth, secrets and input-handling issues in your code, ranked by risk with fixes."
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [security review, secure coding, owasp, code review]
---

Security problems often hide in ordinary code: a query built from user input, a missing permission check, a secret in a config file. This prompt reviews your own code for common vulnerability types (based on categories like the OWASP Top 10), ranks findings by risk, and suggests fixes with code, so you can catch issues before they ship.

## Prompt

```prompt
Act as an application security engineer. Review my code for security issues.

Language and framework: [LANGUAGE AND FRAMEWORK]
What this code does and who can reach it: [CONTEXT, e.g. public API endpoint, admin-only page, internal script]
How users are authenticated and authorized: [AUTH SETUP]
Code (remove real secrets first): [CODE]

Do this:
1. Check for: injection (SQL, command, template), broken access control, authentication and session issues, hard-coded secrets, unsafe input handling and output encoding (XSS), insecure deserialization, file upload and path issues, SSRF, weak cryptography, sensitive data in logs, and risky dependencies if visible.
2. For each finding: location, issue, how it could be exploited (in general terms), severity (critical/high/medium/low) with reasoning, and a fixed code example.
3. List things you can't judge from this code alone (configuration, infrastructure) that I should check.
4. Suggest 3 automated checks or tests to prevent these issues in future.
Don't report style problems as security issues. Say if you find nothing serious.
```

## How to use it

1. **Review your own code only**, and strip real keys and passwords before pasting.
2. **Fix critical and high findings first** and add a test for each.
3. **Use automated scanners too**; an AI review does not replace a professional security audit.

## Tips

- Run a general review with the [senior code review](/prompts/senior-code-review/) prompt.
- Add tests for each fix with the [write unit tests](/prompts/write-unit-tests/) prompt.
