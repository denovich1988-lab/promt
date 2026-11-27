---
title: Cron expressions explained and written for you
date: 2026-11-27
category: coding
description: Describe a schedule in plain English and get the correct cron expression, an explanation of each field, the next run times and time zone pitfalls.
models: [ChatGPT, Claude, Gemini]
level: Beginner
tags: [cron, scheduling, devops, linux]
---

Cron syntax is short but easy to get wrong: is it minute or hour first, does day-of-week start at 0 or 1, and why did the job run every minute instead of once a day? Different systems (Linux crontab, Kubernetes, cloud schedulers, Quartz) also use slightly different formats. This cron expression prompt turns a plain-English schedule into the right expression for your system, explains each field and lists the next run times so you can check it before deploying.

## Prompt

```prompt
Act as a DevOps engineer. Write and explain a cron expression.

Schedule in plain English: [E.G. EVERY WEEKDAY AT 7:30 AM, AND ON THE 1ST OF EACH MONTH AT MIDNIGHT]
System or scheduler: [LINUX CRONTAB / KUBERNETES CRONJOB / GITHUB ACTIONS / AWS EVENTBRIDGE / QUARTZ / OTHER]
Time zone the schedule should follow: [E.G. AMERICA/NEW_YORK]
Time zone the server or scheduler uses: [E.G. UTC / NOT SURE]
Existing expression to check (optional): [PASTE]

Give me:
1. The cron expression in the exact format my system uses (5, 6 or 7 fields), or two expressions if one can't express the schedule.
2. A field-by-field table explaining each value.
3. The next 5 run times in my time zone, showing the conversion if the scheduler runs in UTC.
4. Daylight saving time effects and how to handle them.
5. Common mistakes for this schedule (e.g. day-of-month and day-of-week both set) and how my system treats them.
6. A ready-to-paste config snippet for my system.
If I gave an existing expression, explain what it really does and whether it matches my plain-English schedule.
```

## How to use it

1. **Name your scheduler**; syntax differs between crontab, Quartz and cloud services.
2. **Check the next run times** against what you expect before deploying.
3. **Paste existing expressions** from old jobs to find out what they actually do.

## Tips

- Many cloud schedulers run in UTC by default; set the time zone explicitly where the platform allows it.
- Avoid scheduling jobs during the daylight saving change hour if they must run exactly once.
