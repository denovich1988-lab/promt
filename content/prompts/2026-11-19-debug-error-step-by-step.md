---
title: Debug an error without guesswork
date: 2026-11-19
category: coding
description: Make the AI find the real cause of a bug from your error and code, list its assumptions and suggest a minimal fix instead of guessing.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [debugging, programming, code quality]
---

AI assistants often answer a bug report with confident fixes for problems you don't have. The cure is to make the model reason from evidence: the exact error, the relevant code and what you already tried, and to say when it needs more information. This prompt sets those rules up front.

## Prompt

```prompt
You are a senior [LANGUAGE/FRAMEWORK] developer helping me debug. Work from evidence only.

What I expected: [EXPECTED BEHAVIOUR]
What happens instead: [ACTUAL BEHAVIOUR]
Full error message and stack trace:
[PASTE ERROR]
Relevant code:
[PASTE CODE]
Environment: [VERSIONS, OS, RUNTIME]
What I already tried: [ATTEMPTS]

Rules:
1. First, explain in plain words what the error means.
2. List the 2–3 most likely causes, ranked, and for each point to the exact line or evidence that supports it.
3. If you need to see another file, a config or a log to be sure, ask for it instead of guessing.
4. Suggest the smallest change that fixes the most likely cause, as a diff.
5. Tell me how to confirm the fix worked and how to prevent the bug from coming back (a test or a check).
Do not invent functions, APIs or library options. If you are unsure whether something exists in my version, say so.
```

## How to use it

1. **Paste the full stack trace,** not just the last line; the cause is often a few frames up.
2. **Include only related code** — the failing function and what calls it — to keep the answer focused.
3. **Apply one fix at a time** and report back the new result if it still fails.

## Tips

- Add "Explain like I'm new to this codebase" if you're working on unfamiliar code.
- Ask for a regression test that fails before the fix and passes after it.
