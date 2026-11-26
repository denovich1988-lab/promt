---
title: Email deliverability checklist and fix plan
date: 2026-11-26
category: marketing
description: Diagnose why marketing emails land in spam with a deliverability checklist covering authentication, list hygiene, content and sending habits.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [email deliverability, email marketing, spam, list hygiene]
---

When open rates suddenly drop or customers say your emails are in spam, the cause is usually a mix of authentication gaps, old contacts and sending habits. This email deliverability checklist prompt walks through each area with your real setup and numbers, ranks the likely causes and gives you a step-by-step fix plan instead of generic advice.

## Prompt

```prompt
Act as an email deliverability specialist. Audit my email program and build a fix plan.

Email platform: [E.G. YOUR ESP NAME]
Sending domain and from address: [DOMAIN, FROM NAME]
Authentication status (if known): [SPF / DKIM / DMARC SET UP? DMARC POLICY?]
List size and source: [HOW CONTACTS WERE COLLECTED, DOUBLE OPT-IN Y/N]
Last time the list was cleaned: [DATE OR "NEVER"]
Sending frequency and volume: [E.G. 3 EMAILS/WEEK, 40K PER SEND]
Recent metrics: [OPEN RATE, CLICK RATE, BOUNCE RATE, SPAM COMPLAINTS, UNSUBSCRIBES, AND HOW THEY CHANGED]
Symptoms: [E.G. GMAIL TO SPAM, SUDDEN DROP AFTER A BIG SEND]

Give me:
1. A checklist table by area — authentication, sender reputation, list hygiene, consent, content and design, sending pattern, unsubscribe handling — with status (OK / risk / unknown) based on my inputs.
2. The 3 most likely causes of my problem, with reasoning.
3. A 30-day fix plan in order: what to change first, how to re-engage or remove inactive contacts, and how to warm volume back up.
4. Metrics to watch each week and the thresholds that signal trouble.
5. Questions I should ask my email platform's support.

Don't guess numbers I didn't give; mark them "unknown" and tell me how to find them.
```

## How to use it

1. **Pull 8–12 weeks of metrics** from your platform so the trend is visible.
2. **Check authentication** with your domain host or a DNS lookup tool before running the prompt.
3. **Work through the plan in order**; fixing content won't help if authentication is broken.

## Tips

- Mailbox providers' sender rules change; confirm current requirements in their official help pages.
- Sending only to engaged contacts for a few weeks often helps more than any copy change.
