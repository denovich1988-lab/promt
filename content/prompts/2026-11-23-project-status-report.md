---
title: ChatGPT prompt for project status reports
date: 2026-11-23
category: business
description: "One of the most useful ChatGPT prompts for project management: turn raw notes into a clear status report with RAG status, risks and decisions."
models: [ChatGPT, Claude, Gemini]
level: Beginner
tags: [project management, status report, stakeholders, risks]
---

Writing the weekly status report takes longer than it should, and stakeholders still skim past the important part. Of all ChatGPT prompts for project management, this is the one you will use every week: paste your messy notes and it returns a short status report with an honest red, amber or green rating, progress against milestones, risks, and the decisions you need from readers.

## Prompt

```prompt
You are an experienced project manager. Turn my notes into a weekly project status report.

Project name and goal: [PROJECT AND GOAL]
Audience (executives, client, team): [AUDIENCE]
Milestones with due dates and current state: [MILESTONES]
This week's notes (done, in progress, blocked): [RAW NOTES]
Budget or effort used vs plan: [BUDGET STATUS, or "not tracked"]
Known risks and issues: [RISKS AND ISSUES]

Write:
1. Overall status (Green, Amber or Red) with a one-sentence reason. Be honest; if a milestone is at risk, it is not Green.
2. Summary in 3 bullets: what moved, what is late, what is next.
3. Milestone table: milestone, due date, status, comment.
4. Top 3 risks or issues with owner and next step.
5. Decisions or help needed from the audience, each with a deadline.
6. Plan for next week (max 5 items).
Keep it under 300 words and use plain language. Do not invent progress that is not in my notes.
```

## How to use it

1. **Dump your notes as they are**: chat snippets, task lists and meeting notes all work.
2. **Check the status color** and the dates before you send it.
3. **Send the same format every week** so readers know where to look.

## Tips

- Keep risks up to date with the [project risk register](/prompts/project-risk-register/) prompt.
- Turn meeting notes into tasks first with [meeting notes to action items](/prompts/meeting-notes-to-action-items/).
