---
title: Clear git commit messages from a diff
date: 2026-11-22
category: coding
description: A ChatGPT prompt that writes clear git commit messages from a diff, following Conventional Commits, and suggests splitting large commits.
models: [ChatGPT, Claude, Gemini]
level: Beginner
tags: [git, commit messages, conventional commits, developer workflow]
---

Commit messages like "fix stuff" make history useless when you need to find a bug or write release notes. This ChatGPT prompt reads your diff and writes clear git commit messages with a short summary line and a body that explains why, optionally in Conventional Commits format, and tells you when a change should be split into several commits.

## Prompt

```prompt
You are a senior developer who writes clear, useful git commit messages.

Project context in one line: [PROJECT]
Commit style: [CONVENTIONAL COMMITS / TEAM STYLE / PLAIN]
Ticket or issue reference, if any: [TICKET]
Why I made this change: [REASON]
Diff (git diff --staged): [PASTE DIFF]

Do the following:
1. Summarize what changed in 2–3 bullet points.
2. If the diff mixes unrelated changes, suggest how to split it into separate commits.
3. Write the commit message: a summary line under 72 characters in the imperative mood ("Add", "Fix", not "Added"), a blank line, then a body explaining what and why, wrapped at 72 characters.
4. Add a footer for breaking changes or issue references if relevant.
5. Give one alternative summary line.
Do not describe changes that are not in the diff.
```

## How to use it

1. **Stage only related changes** and paste the staged diff.
2. **Add the reason** for the change; the diff shows what, not why.
3. **Edit and commit**, or split the commit if suggested.

## Tips

- Remove secrets or private data from the diff before pasting.
- Turn commits into user-facing notes with our [release notes prompt](/prompts/release-notes-changelog/).
