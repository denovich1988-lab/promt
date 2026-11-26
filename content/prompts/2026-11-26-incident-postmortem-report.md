---
title: Blameless incident postmortem report
date: 2026-11-26
category: business
description: Write a blameless incident postmortem with a clear timeline, impact, root cause, contributing factors and owned action items from your raw notes.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [incident postmortem, root cause analysis, sre, operations]
---

After an outage or a serious mistake, the team needs a written incident postmortem that explains what happened without blaming individuals, so the same failure doesn't repeat. Writing one from scattered chat logs takes hours. This prompt turns your raw notes into a blameless postmortem report with a timeline, customer impact, root cause, contributing factors and action items with owners.

## Prompt

```prompt
Act as an experienced incident manager. Write a blameless postmortem from my notes.

Incident title: [SHORT NAME]
Date and duration: [START–END, TIMEZONE]
Severity: [E.G. SEV1/SEV2]
Systems or processes affected: [LIST]
Raw notes, chat logs and alerts: [PASTE]
Customer or business impact we know: [USERS AFFECTED, ORDERS LOST, SLA BREACH]
Fixes already applied: [LIST]

Structure:
1. Summary (4–5 sentences a non-technical executive can read).
2. Impact: who was affected, how, for how long; use only numbers from my notes.
3. Timeline in a table: time, event, source; include detection, escalation, mitigation and resolution.
4. Root cause, explained with the "5 whys", ending at a process or system cause, not a person.
5. Contributing factors (monitoring gaps, unclear ownership, missing runbooks, recent changes).
6. What went well and where we got lucky.
7. Action items table: action, type (prevent/detect/mitigate), owner role, due date, priority. Keep it to the 5–8 that matter most.
8. Open questions still to investigate.

Use neutral language ("the deploy was rolled out" not "John broke prod"). Mark missing facts as {UNKNOWN}.
```

## How to use it

1. **Paste everything**: alert messages, chat exports and the ticket history give the most accurate timeline.
2. **Review it with the people involved** before sharing; they will catch wrong timestamps and missing steps.
3. **Track the action items** in your normal backlog so they don't die in the document.

## Tips

- Publish within a week while details are fresh.
- Read postmortems from past incidents together once a quarter to spot repeating causes.
