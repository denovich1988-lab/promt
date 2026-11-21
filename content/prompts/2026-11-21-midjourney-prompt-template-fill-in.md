---
title: Midjourney prompt template you can fill in
date: 2026-11-21
category: image
description: A Midjourney prompt template with slots for subject, scene, style, light and parameters, plus a helper prompt that fills it from your idea.
models: [Midjourney]
level: Beginner
tags: [midjourney, prompt template, image prompts]
---

A reusable Midjourney prompt template keeps your images consistent and your prompts quick to write. Instead of starting fresh every time, you fill in the same slots — subject, scene, composition, style, light, colour, parameters. This page gives you the template inside a helper prompt that fills it from a rough idea. Check Midjourney's docs for current parameter names.

## Prompt

```prompt
Fill in my Midjourney prompt template from my idea.

My idea: [ROUGH IDEA]
Use and aspect ratio: [USE, RATIO]
Series style to keep consistent (if any): [STYLE NOTES]

Template:
{SUBJECT AND ACTION}, {SETTING AND TIME}, {COMPOSITION AND CAMERA ANGLE}, {MEDIUM OR STYLE DESCRIBED IN WORDS}, {LIGHT}, {COLOUR PALETTE}, {MOOD} --ar {RATIO} --s {STYLIZE} --no {EXCLUSIONS}

Rules:
- Fill each slot with short, concrete visual words.
- Describe style by look (texture, line, colour), not by naming living artists.
- Choose stylize low (more literal) or high (more artistic) and say why.
- Keep exclusions to 3–5 items.

Return: the filled prompt, a table of each slot's value, and 2 variants that change only the light or only the composition.
```

## How to use it

1. **Keep the template** in your notes and fill it by hand or with this helper.
2. **Reuse the same style slot** across a series for consistency.
3. **Change one slot per test** to learn what moves the result.

## Tips

- For a series, save the style, light and palette slots as fixed text.
- Use the same seed when you want closer comparisons between variants.
