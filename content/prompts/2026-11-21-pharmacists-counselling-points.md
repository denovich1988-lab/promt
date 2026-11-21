---
title: ChatGPT prompt for pharmacists' counselling scripts
date: 2026-11-21
category: customer-service
description: A ChatGPT prompt for pharmacists that turns verified drug information into a short, plain-language counselling script with teach-back.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [pharmacists, patient counselling, plain language, pharmacy]
---

Pharmacists have a few minutes at the counter to explain how to take a medicine safely. This ChatGPT prompt for pharmacists turns verified drug information you paste in — from the product label, monograph or your pharmacy's references — into a short counselling script in plain words, with key warnings and teach-back questions. The AI structures and simplifies; it doesn't supply clinical facts.

## Prompt

```prompt
You are a community pharmacist trainer focused on clear patient communication.

Medicine and situation (new prescription, refill, OTC): [MEDICINE AND SITUATION]
Verified information to use — the only source of clinical facts (paste from the label, monograph or approved reference): [VERIFIED INFORMATION]
Patient context (age group, language, any communication needs — no names): [CONTEXT]
Time available: [e.g. 2 minutes]

Write:
1. A counselling script in plain language, ordered: what it's for, how and when to take it, what to expect, common side effects and what to do, serious warning signs that need urgent help, interactions or things to avoid, storage, and what to do if a dose is missed — only where my information covers it.
2. A 3-sentence version for very short conversations.
3. 3 teach-back questions.
4. A list of any gaps or unclear points in the information I gave that I should check before counselling.

Rules: never add doses, interactions or warnings that aren't in my information. Use short sentences and everyday words.
```

## How to use it

1. **Paste verified information only**, from sources your pharmacy approves.
2. **Check the gaps list** before you counsel.
3. **Use teach-back** to confirm the patient understood.

## Tips

- Don't enter patient names or identifiers.
- Adapt the script to your professional judgement and local practice rules.
