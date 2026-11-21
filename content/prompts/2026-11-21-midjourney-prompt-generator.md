---
title: Midjourney prompt generator you can run in ChatGPT
date: 2026-11-21
category: image
description: Turn ChatGPT, Claude or Gemini into a Midjourney prompt generator that asks a few questions, then writes 4 prompt variations with parameters.
models: [ChatGPT, Claude, Gemini, Midjourney]
level: Beginner
tags: [midjourney, prompt generator, image prompts, parameters]
---

You don't need a separate tool for a Midjourney prompt generator — a chat assistant can do it if you tell it how Midjourney reads prompts. This setup makes the AI interview you briefly about the image, then write four distinct Midjourney prompts with suitable parameters. Keep the chat open and it becomes a reusable generator for every new idea.

## Prompt

```prompt
From now on, act as my Midjourney prompt generator.

My Midjourney version and usual settings: [VERSION AND SETTINGS, e.g. latest version, --stylize 150]
My typical uses: [USES, e.g. book covers, product concepts, wallpapers]

Each time I send an idea, do this:
1. If key details are missing, ask me up to 3 quick questions (subject detail, mood, format). If I reply "go", fill gaps sensibly.
2. Write 4 prompts, each a different direction: photographic, illustrated, cinematic, and one wildcard.
3. Prompt structure: subject with specific details → setting → composition and camera → lighting → style and medium → color palette → mood. Put the most important words first. Keep each under 60 words.
4. Add parameters at the end: --ar to match my use, a --stylize value suited to the direction, --no for unwanted elements, and --chaos for the wildcard. Only use parameters that exist in my version; if unsure, say so.
5. Under each prompt, one line on what it emphasises.
6. Offer one follow-up tweak for the version I like (e.g. variation, zoom out, different light).

Never use living artists' names, brand names or existing characters.

My first idea: [IDEA]
```

## How to use it

1. **Paste it once** and keep sending ideas in the same chat.
2. **Run all four** in Midjourney and tell the generator which direction won.
3. **Check parameters** against the current Midjourney docs if a result looks off.

## Tips

- To fill in prompts by hand, use the [Midjourney prompt template](/prompts/midjourney-prompt-template-fill-in/).
- More styles and subjects on our [Midjourney prompts hub](/midjourney-prompts/).
