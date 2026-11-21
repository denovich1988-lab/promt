---
title: ChatGPT prompt for nurses to write patient handouts
date: 2026-11-21
category: education
description: A ChatGPT prompt for nurses that turns approved care instructions into a plain-language patient handout with teach-back questions.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [nursing, patient education, health literacy, plain language]
---

Discharge and care instructions are often written at a reading level many patients struggle with. This ChatGPT prompt for nurses rewrites instructions you already have — from your unit, protocol or the care team — into a plain-language handout with clear steps, warning signs and teach-back questions. The clinical content comes from you; the AI handles readability and structure.

## Prompt

```prompt
You are a nurse educator who specialises in health literacy. Rewrite the instructions below into a patient handout.

Topic: [TOPIC, e.g. caring for a surgical wound at home]
Approved instructions from our care team or protocol (source of truth): [PASTE INSTRUCTIONS]
Patient group: [AGE GROUP AND CONTEXT]
Reading level target: [e.g. grade 5–6]
Language: [LANGUAGE]
Format: [ONE PAGE PRINT / TEXT MESSAGE / BOTH]

Rules:
- Use only the clinical information in the instructions I gave. Do not add doses, times or advice that isn't there. If something seems missing or unclear, list it as a question for the care team instead of filling it in.
- Short sentences, everyday words, active voice; explain any medical term once.
- Use headings: What this is for, What to do (numbered steps), What to avoid, When to call us, When to get emergency help.
- Put the "call" and "emergency" signs in a clear box with [PHONE NUMBER] placeholders.

Then add: 3 teach-back questions to check understanding, and a list of anything you were unsure about.
```

## How to use it

1. **Paste approved instructions** only — never ask the AI to supply clinical content.
2. **Have the handout reviewed** under your unit's normal process before use.
3. **Use the teach-back questions** during discharge conversations.

## Tips

- Never include patient names or identifiers in prompts.
- Check that translations are reviewed by a qualified translator or approved service.
