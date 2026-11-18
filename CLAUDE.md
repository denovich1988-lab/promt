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

## Blog posts

- File: `content/blog/YYYY-MM-DD-slug.md`. Front matter: `title`, `seoTitle` (optional, ≤60 chars, contains the target keyword), `date`, `description` (≤160 chars), `related` (list of existing prompt slugs; the build fails if one is missing).
- Target one keyword per article (check volume/difficulty in Ahrefs when available). Original writing only — never copy competitor text.
- Use ```prompt blocks for any prompt in an article; they become fill-in editors on the page.
- Link to relevant prompt pages (`/prompts/<slug>/`) and hubs (`/chatgpt-prompts/`, `/claude-prompts/`, `/gemini-prompts/`, `/midjourney-prompts/`, `/ai-video-prompts/`).

## SEO notes

- Hubs are defined in `site.config.json` → `hubs`; a prompt appears on a hub when its `models` list includes one of the hub's models. Use these exact model names: ChatGPT, Claude, Gemini, Midjourney, Flux, DALL·E, Ideogram, Seedance, Veo, Kling, Runway.
- Good target keywords found so far (US volume / difficulty): gemini prompts 1900/8, best chatgpt prompts 1400/0, midjourney prompts 1400/16, claude prompts 1000/24, prompt to make chatgpt write like a human 800/0, chatgpt custom instructions 600/4, negative prompt 350/5, chatgpt prompts for resume 200/2, midjourney logo prompts 200/0, chatgpt prompts for marketing 150/12, chatgpt prompts for seo 100/1.
- Inside a ```prompt block, only `[UPPERCASE]` text becomes a fill-in blank. For markers the AI should output (not the user), use `{CURLY BRACES}`.

## Quality rules

- Solve one real, specific task. Prompt must be copy-ready and genuinely useful.
- Check `content/prompts/` first: do not repeat a topic already covered in the last 60 prompts.
- Rotate categories: do not use the same category as the previous 2 prompts. Keep image + video at about 2 of every 7 days.
- No made-up statistics, testimonials, quotes or claims about real people/companies. No "tested by 10,000 users".
- Model names for image/video: Midjourney, Flux, DALL·E, Ideogram / Seedance, Veo, Kling, Runway — only list tools the prompt really suits.
- Plain, clear English. No hype words ("revolutionary", "game-changer", "unlock").
- Do not edit published prompts, site design or config unless asked.
