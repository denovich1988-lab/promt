---
title: Make ChatGPT write like a human
date: 2026-11-18
category: writing
description: A prompt that rewrites stiff AI text so it sounds like a real person wrote it — plainer words, varied rhythm, no filler.
models: [ChatGPT, Claude, Gemini]
level: Beginner
tags: [humanize, rewriting, tone, editing]
---

AI text gives itself away: the same sentence length again and again, words like "delve" and "elevate", and a tidy summary at the end of every paragraph. Telling the model to "sound human" rarely helps. This prompt names the exact habits to remove and the ones to add, so the rewrite reads like a person talking.

## Prompt

```prompt
Rewrite the text below so it sounds like it was written by a real person, not an AI.

Who is writing it: [WHO YOU ARE, E.G. "A FREELANCE DESIGNER"]
Who will read it: [AUDIENCE]
Tone: [E.G. "FRIENDLY AND DIRECT", "CALM AND PROFESSIONAL"]

Do:
- Use plain, everyday words. If a simpler word works, use it.
- Mix short and long sentences. A few very short ones are fine.
- Keep concrete details and numbers; cut vague claims.
- Write the way this person would explain it out loud.
- Keep the meaning and all facts exactly the same.

Do not:
- Use these words: delve, elevate, leverage, seamless, robust, unlock, tapestry, landscape, game-changer, in today's fast-paced world.
- Start with "In conclusion", "Overall" or "Ultimately", or end paragraphs with a summary line.
- Use more than one dash per paragraph or any emojis.
- Add new facts, opinions or examples that are not in the original.

Return only the rewritten text. Then, under a line, list the 3 biggest changes you made.

Text:
[PASTE YOUR TEXT]
```

## How to use it

1. **Fill in who is writing and who will read it.** "A nurse writing to new parents" produces a very different voice from "a SaaS founder writing to investors".
2. **Paste one section at a time** if the text is longer than about 800 words. Long inputs drift back toward the AI style.
3. **Read the result out loud.** If a sentence still sounds stiff, ask: *"Rewrite paragraph 2 as if you were telling a friend."*

## Tips

- Add a sample of your own writing under the text and say: *"Match the style of my sample."* This is the single biggest improvement.
- Banned-word lists work best when short and specific. Add the words you personally see too often.
- Always check facts after a rewrite. The rules say to keep them, but read numbers and names twice.
