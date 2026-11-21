---
title: AI character prompts that stay consistent
date: 2026-11-21
category: image
description: Create an AI character with a reusable description and reference sheet, then place the same character in new scenes without it changing.
models: [ChatGPT, GPT Image, Gemini, Midjourney, Flux]
level: Intermediate
tags: [ai character prompts, character design, consistency, illustration]
---

The hardest part of AI character prompts is keeping the same character from image to image: the hair changes, the jacket gets a new color, the face ages. This prompt first writes a fixed "character bible" and a reference sheet, then gives you a scene template that repeats the locked details word for word. Works for mascots, comics, children's books and game concepts.

## Prompt

```prompt
Help me design an original character and keep it consistent across many AI images.

Character idea: [WHO THEY ARE, e.g. a retired lighthouse keeper who repairs radios]
Where the images will be used: [USE, e.g. picture book, brand mascot, comic]
Art style: [STYLE, e.g. warm gouache illustration / 3D animated film look / clean anime cel shading]
Image tool: [CHATGPT / GEMINI / MIDJOURNEY / FLUX]

Step 1 — Character bible (fixed wording I will reuse): age, build, height relative to others, face shape, eyes, hair (style and exact color), skin tone, 3 signature clothing items with colors, one unique accessory, typical expression. Max 70 words.
Step 2 — A reference-sheet prompt: front, side and back view plus 3 expressions, neutral background, same lighting.
Step 3 — A scene template: [CHARACTER BIBLE] + scene + action + camera + lighting + style, with a short example for 3 different scenes.
Step 4 — Tool-specific consistency tips (e.g. reference images or character reference parameters if my tool supports them; seed or style settings).
Step 5 — A checklist of details to compare after each image.

Make the character fully original — not based on any existing film, game or brand character.
```

## How to use it

1. **Generate the reference sheet first** and keep the best one as your reference image.
2. **Paste the character bible unchanged** into every scene prompt.
3. **Check each image** against the checklist and fix one detail at a time.

## Tips

- Fewer, bolder signature details (a yellow scarf) survive better than many small ones.
- For anime style sheets, see our [anime character design sheet prompt](/prompts/anime-character-design-sheet/).
