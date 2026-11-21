---
title: AI image prompts from a rough idea, ready to paste
date: 2026-11-21
category: image
description: Turn a one-line idea into detailed text-to-image AI prompts — subject, style, light, lens and ratio — tuned for the generator you use.
models: [ChatGPT, Claude, Gemini, Midjourney, Flux, GPT Image]
level: Beginner
tags: [ai image prompts, text to image, prompt writing, image generators]
---

Good AI image prompts describe more than a subject: they set the style, composition, light and format. Most people type five words and get a generic picture. This prompt asks a chat assistant to expand your rough idea into three text-to-image prompts in the format your generator reads best, so you can test them side by side and keep the winner.

## Prompt

```prompt
You are an expert at writing text-to-image prompts. Turn my rough idea into prompts for the best results in my AI image generator.

Rough idea: [YOUR IDEA, e.g. a fox reading in a library]
Image generator: [MIDJOURNEY / FLUX / GPT IMAGE / GEMINI / IDEOGRAM / OTHER]
What the image is for: [USE, e.g. blog header, poster, phone wallpaper]
Aspect ratio: [RATIO]
Must include: [MUST-HAVES]
Must avoid: [THINGS TO AVOID]

Write 3 prompts that take different directions (e.g. photographic, illustrated, cinematic). Each prompt must cover, in this order:
1. Subject and action (specific: age, material, color, expression)
2. Setting and background
3. Composition and camera (shot type, angle, lens)
4. Lighting and time of day
5. Style or medium and color palette
6. Mood
7. Generator-specific syntax (e.g. --ar and --style for Midjourney; plain sentences for GPT Image and Gemini; exact text in quotes for Ideogram)

Then give: a one-line explanation of each direction, and 3 small edits I can try if the first result is close but not right.
Keep each prompt under 80 words.
```

## How to use it

1. **Name your generator** — the syntax that works in Midjourney differs from GPT Image or Flux.
2. **Run all three prompts** and keep the direction you like best.
3. **Iterate with the suggested edits** instead of rewriting from scratch.

## Tips

- Concrete nouns and lighting words change results more than adjectives like "beautiful".
- Keep a file of your best prompts as reusable templates.
- See our [Midjourney prompts hub](/midjourney-prompts/) for more style-specific ideas.
