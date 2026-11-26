---
title: Pull request description reviewers can act on
date: 2026-11-26
category: coding
description: Turn a git diff or commit list into a clear pull request description with context, changes, testing steps, risks and screenshots checklist.
models: [ChatGPT, Claude, Gemini]
level: Beginner
tags: [pull request, code review, git, developer workflow]
---

A vague pull request description slows reviews down: reviewers have to reverse-engineer why the change exists and how to test it. This prompt turns your diff or commit list into a pull request description with the problem, the approach, a summary of changes, testing steps and risks, so reviewers can approve faster and future readers understand the history.

## Prompt

```prompt
Act as a senior engineer writing a pull request description for teammates.

Repository / service: [NAME]
Linked ticket: [TICKET ID OR "NONE"]
Why this change is needed: [PROBLEM OR FEATURE IN 1–3 SENTENCES]
Diff or commit list: [PASTE git diff --stat AND KEY HUNKS, OR COMMIT MESSAGES]
How I tested it: [WHAT YOU RAN OR CHECKED]
Team PR template, if any: [PASTE OR "NONE"]

Write:
1. Title: under 70 characters, imperative mood ("Add retry to payment webhook").
2. Summary: what changes and why, in 2–4 sentences.
3. Changes: bullet list grouped by area (API, UI, database, config), describing behaviour, not every line.
4. How to test: numbered steps a reviewer can follow, including setup and expected result.
5. Risks and rollout: migrations, feature flags, backwards compatibility, rollback plan.
6. Reviewer notes: files that need the closest look and any decisions I'd like feedback on.
7. Checklist: tests added, docs updated, screenshots for UI changes.

If my team template is given, follow its headings. Don't claim tests exist that I didn't mention; mark gaps as {TODO}.
```

## How to use it

1. **Paste `git diff --stat` plus the important hunks**; whole diffs of big PRs can drown the summary.
2. **Edit the "why" yourself**; the model can only infer intent from code.
3. **Keep PRs small**: if the description needs more than five change groups, consider splitting the PR.

## Tips

- Add before-and-after screenshots for any visual change.
- Save the output format as a PR template so every description has the same sections.
