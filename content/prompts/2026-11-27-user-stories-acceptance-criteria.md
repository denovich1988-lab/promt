---
title: User stories with acceptance criteria from a feature
date: 2026-11-27
category: coding
description: Break a feature idea into well-formed user stories with Given/When/Then acceptance criteria, edge cases and story splits ready for sprint planning.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [user stories, acceptance criteria, agile, product management]
---

Developers lose time when a ticket says "add export" and nothing else: which formats, who can use it, what happens with an empty list? Good user stories describe who needs what and why, and acceptance criteria make "done" testable. This prompt turns a feature description into small, independent user stories with Given/When/Then acceptance criteria, edge cases and open questions for the team.

## Prompt

```prompt
Act as an experienced product owner. Turn this feature into user stories ready for sprint planning.

Product: [WHAT THE PRODUCT IS, WHO USES IT]
Feature description: [WHAT YOU WANT TO BUILD AND WHY]
User roles involved: [E.G. ADMIN, MEMBER, GUEST]
Constraints: [PLATFORMS, PERMISSIONS, PERFORMANCE, COMPLIANCE, DEADLINE]
Out of scope: [WHAT THIS RELEASE WON'T DO]

Deliver:
1. An epic summary in 2 sentences.
2. 5–10 user stories in the format "As a {ROLE}, I want {ACTION}, so that {BENEFIT}". Each story should be small enough for one sprint and meet INVEST (independent, negotiable, valuable, estimable, small, testable).
3. For each story: acceptance criteria in Given/When/Then format, covering the happy path, validation errors, permissions and empty states.
4. Edge cases and non-functional requirements (performance, accessibility, security, analytics events).
5. Suggested order and dependencies between stories.
6. Stories that are too big, with a suggested split (by workflow step, user role or data type).
7. Open questions for design, engineering and stakeholders.
Don't add features I didn't ask for; list ideas separately as "later".
```

## How to use it

1. **Describe the problem as well as the feature**; the "so that" part comes from it.
2. **Review stories with engineering** in refinement and adjust splits to your architecture.
3. **Copy the acceptance criteria** into your tickets so QA can test against them.

## Tips

- If a story's acceptance criteria run past 8–10 items, it's probably two stories.
- Keep UI details in designs; acceptance criteria should describe behaviour.
