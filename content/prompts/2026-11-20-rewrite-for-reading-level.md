---
title: Rewrite any text for a chosen reading level
date: 2026-11-20
category: writing
description: Make complex text easier to read for a specific audience and reading level while keeping every important fact, number and warning.
models: [ChatGPT, Claude, Gemini]
level: Beginner
tags: [plain language, editing, readability]
---

Technical, legal or academic writing loses readers in the first paragraph. Simplifying it by hand takes time, and quick rewrites often drop important details. This prompt rewrites for a target reader and then lists every fact it kept, so you can check nothing was lost.

## Prompt

```prompt
You are a plain-language editor. Rewrite this text for a new audience.

Original text: [TEXT]
Who will read it: [AUDIENCE, E.G. CUSTOMERS WITH NO TECHNICAL BACKGROUND]
Target reading level: [E.G. AGE 12 / GRADE 7]
Where it will be published: [CHANNEL]

Rules:
1. Short sentences (average under 15 words) and common words.
2. Explain or replace jargon; if a technical term must stay, define it in brackets the first time.
3. Use active voice and "you" where it fits.
4. Keep every fact, number, date, condition and warning from the original.
5. Use headings or bullet points if they make it easier to scan.

Then give me:
- A checklist of all key facts from the original and confirmation each appears in the rewrite.
- Any sentence where simplifying risks changing the meaning, so I can review it.
```

## How to use it

1. **Describe the reader** as precisely as you can.
2. **Use the fact checklist** to confirm nothing important was dropped.
3. **Test it** by asking someone from the target audience to explain it back.

## Tips

- Ask for two versions at different reading levels and compare.
- For legal or medical text, have an expert review the final version.
