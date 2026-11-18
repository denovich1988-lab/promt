# Promt — instructions for adding content

Static site of AI prompts. Built with `npm run build` (scripts/build.mjs) from `content/prompts/*.md`.
Every push to `main` is built by GitHub Actions (.github/workflows/deploy.yml) and published to the `site` branch; the server pulls that branch every 5 minutes.
Site language: **English**.

## Daily prompt — how to add one

1. Create `content/prompts/YYYY-MM-DD-short-slug.md` (date = publish date, slug = 3–6 lowercase words with hyphens).
2. Front matter (all required except `level` and `tags`):

```yaml
---
title: Short, benefit-led title (max ~60 chars)
date: YYYY-MM-DD
category: writing | marketing | business | productivity | coding | image | video
description: One sentence (max ~160 chars) — what the reader gets.
models: [ChatGPT, Claude, Gemini]
level: Beginner | Intermediate | Advanced
tags: [3-4, lowercase, tags]
---
```

3. Body structure:
   - 1 short intro paragraph: the problem and why this prompt works.
   - `## Prompt` followed by ONE fenced block with the language `prompt` (```prompt). Placeholders in `[UPPERCASE IN SQUARE BRACKETS]`.
   - `## How to use it` — 3 numbered steps.
   - `## Tips` — 2–3 bullets.
   - Optional: a short example section.
4. Run `npm run build` — it must finish with no errors (it validates front matter and the prompt block).
5. Commit: `Add prompt: <title>` and push to `main`.

## Quality rules

- Solve one real, specific task. Prompt must be copy-ready and genuinely useful.
- Check `content/prompts/` first: do not repeat a topic already covered in the last 60 prompts.
- Rotate categories: do not use the same category as the previous 2 prompts. Keep image + video at about 2 of every 7 days.
- No made-up statistics, testimonials, quotes or claims about real people/companies. No "tested by 10,000 users".
- Model names for image/video: Midjourney, Flux, DALL·E, Ideogram / Seedance, Veo, Kling, Runway — only list tools the prompt really suits.
- Plain, clear English. No hype words ("revolutionary", "game-changer", "unlock").
- Do not edit published prompts, site design or config unless asked.
