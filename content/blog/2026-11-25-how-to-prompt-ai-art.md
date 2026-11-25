---
title: "How to Prompt AI Art: A 6-Part Formula With Templates"
seoTitle: "How to Prompt AI Art: A Simple 6-Part Formula"
date: 2026-11-25
description: Learn how to prompt AI art with a simple 6-part formula, fill-in templates and fixes for common problems in Midjourney, GPT Image, Flux and more.
related: [ai-art-prompt-builder, art-style-picker-ai-images, fix-weak-ai-image-prompt, midjourney-fantasy-concept-art]
summary:
- A strong AI art prompt names six things - subject, action or setting, style, composition, light and colour, and mood.
- Be concrete and visual - describe what the viewer would actually see rather than abstract qualities like "amazing" or "beautiful".
- Change one part of the prompt at a time between generations so you learn which words cause which result.
- Each image tool reads prompts a little differently, so keep a core description and adapt the extras, such as parameters or negative prompts, per tool.
faq:
- q: How long should an AI art prompt be?
  a: Long enough to describe the subject, style, composition, light and mood, which is often one to three sentences. Very long prompts can dilute the main idea, so put the most important details first and cut words that don't change the picture.
- q: Should I use artist names in AI art prompts?
  a: It is better to describe the qualities you want - medium, brushwork, palette, era, lighting - than to copy a living artist's name. Descriptions are more precise, travel better between tools and avoid imitating a specific person's work.
- q: Why does my AI image look different from my prompt?
  a: Usually because the prompt is vague, has conflicting details, or packs in too many subjects. Simplify to one main subject, state the most important element first, and change one thing at a time. Some tools also handle text, hands and exact counts less reliably.
---

Typing "a cool dragon" into an image generator will give you *something*. Typing a clear description of what you want to see will give you something you actually want to keep. Learning **how to prompt AI art** is less about secret keywords and more about describing a picture the way a director or art director would.

This guide gives you a simple 6-part formula, fill-in templates you can copy, and fixes for the problems people hit most often. It works across tools such as Midjourney, GPT Image, Flux, DALL·E and Ideogram, with small adjustments for each.

## The 6-part AI art prompt formula

Good AI art prompts answer six questions. Not every image needs all six, but checking each one stops you from leaving the model to guess.

1. **Subject** — what is the picture of? Be specific: "an elderly fisherman mending a net" beats "a man".
2. **Action and setting** — what is happening, and where? "on a foggy harbour pier at dawn".
3. **Style and medium** — what should it look like it was made with? "loose watercolour", "35mm film photograph", "flat vector illustration", "oil painting with thick brushstrokes".
4. **Composition and camera** — how is it framed? "close-up", "wide shot", "low angle", "centred, symmetrical", "lots of empty space on the left for text".
5. **Light and colour** — "soft overcast light", "golden hour backlight", "muted teal and orange palette", "high contrast black and white".
6. **Mood and detail** — the feeling and finishing touches: "quiet and nostalgic", "playful", "intricate detail on the net".

Put together:

> An elderly fisherman mending a net on a foggy harbour pier at dawn, loose watercolour on textured paper, medium shot from a low angle, soft grey-blue light with warm touches on his hands, quiet and nostalgic mood.

That single sentence covers all six parts and leaves little for the model to invent.

## Template 1: The all-purpose AI art prompt

Fill in the blanks, then delete any part you don't need.

```prompt
[SUBJECT, WITH 2-3 SPECIFIC DETAILS], [ACTION OR POSE], in [SETTING AND TIME OF DAY].
Style: [MEDIUM OR ART STYLE, e.g. gouache illustration, cinematic photo, 3D clay render].
Composition: [SHOT TYPE AND ANGLE], [WHERE THE SUBJECT SITS IN THE FRAME].
Lighting and colour: [LIGHT SOURCE AND QUALITY], [PALETTE].
Mood: [2-3 MOOD WORDS].
Aspect ratio: [e.g. 16:9, 1:1, 9:16].
```

Most tools accept this as plain text. In Midjourney you would usually turn the aspect ratio into a parameter such as `--ar 16:9`; other tools have a size or ratio setting in their interface. Settings and syntax change over time, so check the current options in the tool you use.

## Write what the viewer would see

The biggest upgrade most people can make is swapping abstract words for visible ones.

| Vague | Visual |
|---|---|
| beautiful landscape | rolling green hills under a pale morning sky, a single stone cottage in the distance |
| scary | a long, dim corridor, one flickering bulb, a door left slightly open |
| high quality | sharp focus, fine texture on the fabric, clean edges |
| futuristic city | glass towers with hanging gardens, elevated trains, light rain, neon reflections on wet streets |
| cute animal | a round, fluffy kitten with oversized paws, head tilted, big glossy eyes |

Words like "amazing", "stunning" or "masterpiece" add little because they don't describe anything. Spend those words on details instead.

## Choosing a style

Style has a huge effect on the result, and it's where many prompts stay vague. Instead of "artistic", name the medium and one or two qualities:

- **Painting:** oil, watercolour, gouache, acrylic, ink wash — plus brushwork (thick, loose, precise) and surface (canvas, rough paper).
- **Photography:** film type or look, lens feel (wide-angle, telephoto, macro), depth of field (shallow, deep), lighting setup (studio softbox, natural window light).
- **Illustration:** flat vector, line art, children's book, retro poster, comic panel, isometric.
- **3D:** clay render, low-poly, glossy toy-like, realistic product render.

It's usually better to describe the qualities you like than to name a living artist. Descriptions are more precise and work more consistently across tools. If you're unsure which style fits your idea, the [art style picker for AI images](/prompts/art-style-picker-ai-images/) prompt suggests options with reasons.

## Template 2: Turn a rough idea into a full prompt

If you have an idea but not the words, let a chat model expand it. Use ChatGPT, Claude or Gemini, then paste the result into your image tool.

```prompt
I want to make an AI image. My rough idea: [YOUR IDEA IN ONE SENTENCE].
It is for: [USE, e.g. a blog header, a poster, a phone wallpaper].
Image tool: [TOOL NAME].

Write 3 different prompts for this idea. Each should cover subject, setting,
style and medium, composition, light and colour, and mood, in under 60 words.
Make the 3 versions clearly different in style. After each prompt, add one line
on what kind of result to expect.
```

Three contrasting versions show you directions you might not have considered. Pick the closest and refine it. For a structured version with more options, see the [AI art prompt builder](/prompts/ai-art-prompt-builder/).

## Iterate one change at a time

Your first image is a draft. The fastest way to improve is to change **one** thing per generation:

1. Keep the prompt and generate a few variations to see what is stable.
2. If the subject is right but the feel is off, change only the light or palette.
3. If the feel is right but the framing is off, change only the composition.
4. Save prompts that work, so you build your own library.

Changing five things at once makes it impossible to know what helped.

## Template 3: Diagnose and fix a disappointing image

When an image misses, describe the gap and ask for a targeted rewrite.

```prompt
Here is my AI image prompt:
"[PASTE YOUR PROMPT]"

What I got: [DESCRIBE THE IMAGE YOU GOT].
What I wanted instead: [DESCRIBE THE DIFFERENCE].
Image tool: [TOOL NAME].

Explain in 2-3 bullets which words likely caused the problem. Then give me a
revised prompt that changes as little as possible to fix it. If the tool has a
negative prompt or parameter that would help, suggest it separately.
```

The [weak AI image prompt fixer](/prompts/fix-weak-ai-image-prompt/) does the same job in more depth.

## Common problems and quick fixes

- **Too busy.** You listed too many subjects. Keep one main subject and one or two supporting elements.
- **Wrong focus.** The model emphasised a minor detail. Move the main subject to the start of the prompt and describe it most fully.
- **Conflicting style.** "Photorealistic watercolour" pulls in two directions. Choose one, or describe the blend precisely ("watercolour with realistic proportions").
- **Unwanted elements.** Some tools support negative prompts or "no" parameters to exclude things. Our guide to [negative prompts](/blog/negative-prompts-explained/) explains how and when to use them.
- **Text and hands.** Many image models have improved at lettering and anatomy, but results still vary. Keep text short, put it in quotation marks, and generate several options.
- **Exact counts.** "Seven birds" may come out as five or nine. If the number matters, expect to retry or edit afterwards.

## Adapting prompts to different tools

The core description — subject, setting, style, composition, light, mood — travels well. The extras don't:

- **Midjourney** tends to respond well to concise, descriptive phrases and uses parameters for things like aspect ratio and stylisation.
- **GPT Image and DALL·E** inside chat apps handle full sentences and follow-up edits in conversation ("make the sky darker").
- **Flux** and other open models are often used with detailed natural-language prompts and, depending on the interface, separate settings.
- **Ideogram** is often chosen for images that include readable text.

These are general tendencies, and tools update frequently, so test your prompt and check each tool's current documentation.

## Template 4: Build a consistent series

For a set of images that look like they belong together — a slide deck, a story, social posts — fix the style block and change only the scene.

```prompt
Style block (keep identical for every image):
[MEDIUM], [PALETTE], [LIGHTING], [LINE OR TEXTURE QUALITY], [ASPECT RATIO].

Image 1: [SCENE 1 SUBJECT AND ACTION], [SETTING]. + style block
Image 2: [SCENE 2 SUBJECT AND ACTION], [SETTING]. + style block
Image 3: [SCENE 3 SUBJECT AND ACTION], [SETTING]. + style block
```

Paste the full style block into every prompt rather than writing "same style as before". If your tool supports style or character references, use those as well.

## Next steps

Start with Template 1 for your next image and change one part at a time. When you want a ready-made starting point, try the [fantasy concept art prompt](/prompts/midjourney-fantasy-concept-art/) or browse the [Midjourney prompts hub](/midjourney-prompts/) for more templates by subject and style.
