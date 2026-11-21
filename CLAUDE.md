# Promt — instructions for adding content

Static site of AI prompts. Built with `npm run build` (scripts/build.mjs) from `content/prompts/*.md`.
Every push to `main` is built by GitHub Actions (.github/workflows/deploy.yml) and published to the `site` branch; the server pulls that branch every 5 minutes.
Site language: **English**.

## Daily prompts — 150 every morning

Three scheduled runs each morning (07:00, 07:41 and 08:17 Tashkent) each add **50 new prompts**, 150 a day in total. Later runs must `git pull --rebase` before every batch and re-check titles, because earlier runs the same day already added prompts. Work in 5 batches of 10: write 10, build, check, commit and push, then the next 10. Never ask for confirmation; just publish.

1. Look at what already exists: `ls content/prompts` and the titles (`grep -h "^title:" content/prompts/*.md`). Never repeat a topic or a near-duplicate title.
2. **Topics come from `keywords.md`** (competitor keyword research from Ahrefs). Take the first unchecked rows top to bottom: one prompt per row, with the keyword (or its natural variant) in the title, description and intro. Skip a row if an existing page already covers that intent and tick it with that slug. After publishing, tick each used row and add the slug, and commit `keywords.md` with the batch.
   - **Refreshing the list:** when fewer than 60 unchecked rows remain, add new rows before writing. With the Ahrefs connector: one `keywords-explorer-matching-terms` call (country us, limit 100, KD ≤ 15, volume ≥ 50, ordered by volume) on 3–5 seed phrases not used before (record used seeds at the top of `keywords.md`), e.g. "chatgpt prompts for" + a profession or task, "midjourney prompts" + a style or subject, "gemini prompts", "claude prompts", "ai video prompts"; once a week also `site-explorer-organic-keywords` for godofprompt.ai and similar prompt sites. Keep Ahrefs use to these calls (they cost API units). Exclude NSFW, jailbreak/bypass, "avoid AI detection", other sites' brand names and tool keywords.
   - If the list still runs short, fill the rest of the 50 with long-tail tasks people search for (a profession or situation + "chatgpt prompt"), checked with a web search for real demand. godofprompt.ai can be used for topic ideas only; never copy their titles, text or structure.
3. Mix each batch of 10 across categories: about 5 business/marketing/sales/SEO/strategy/research, 2 image or video, 3 from the others (writing, careers, education, data, finance, hr, customer-service, real-estate, legal, productivity, coding). Prefer topics with search demand ("chatgpt prompts for …", "midjourney prompts for …").
4. File: `content/prompts/YYYY-MM-DD-short-slug.md` (date = today in Asia/Tashkent, slug = 3–6 lowercase words, unique). Front matter (all required except `level`, `tags`):

```yaml
---
title: Short, benefit-led title (max ~55 chars)
date: YYYY-MM-DD
category: writing | marketing | seo | sales | business | productivity | education | research | data | finance | hr | customer-service | real-estate | careers | legal | coding | image | video
description: One unique sentence, 70–155 chars — what the reader gets.
models: [ChatGPT, Claude, Gemini]
level: Beginner | Intermediate | Advanced
tags: [3-4, lowercase, tags]
---
```

5. Body: 1 short intro paragraph (the problem and why this prompt works) → `## Prompt` with ONE ```prompt block (blanks in `[UPPERCASE IN SQUARE BRACKETS]`) → `## How to use it` (3 numbered steps) → `## Tips` (2–3 bullets).
6. Run `npm run build` and `python3 scripts/check-seo.py` — both must pass (unique titles and descriptions, lengths, one H1, valid schema). Fix and rerun until clean.
7. One commit per batch of 10: `Add 10 prompts: <short theme list>`, push to `main` (pull --rebase first if the push is rejected).

## Daily blog — 2 articles every morning

A separate scheduled run adds **2 new blog posts** each morning. Never ask for confirmation; just publish.

- Topics: the kind of articles https://godofprompt.ai/blog publishes — "N ChatGPT prompts for <task/audience>", prompting techniques (chain of thought, few-shot, role prompting…), guides to AI tools and features, image and video prompting. Use it only for topic ideas; write everything from scratch.
- Pick one target keyword per article. When the Ahrefs connector is available, check volume and difficulty (prefer KD ≤ 20 with real volume); otherwise prefer specific long-tail phrases.
- Don't repeat a topic already in `content/blog/` (check titles first).
- 900–1600 words, practical, with ```prompt blocks people can fill in, links to 2–4 related prompt pages and one hub. No invented statistics, quotes or claims about real people; hedge features of third-party tools that may change.
- Commit: `Add blog post: <title>`.

## Blog posts

- File: `content/blog/YYYY-MM-DD-slug.md`. Front matter: `title`, `seoTitle` (optional, ≤60 chars, contains the target keyword), `date`, `description` (≤160 chars), `related` (list of existing prompt slugs; the build fails if one is missing).
- Target one keyword per article (check volume/difficulty in Ahrefs when available). Original writing only — never copy competitor text.
- Use ```prompt blocks for any prompt in an article; they become fill-in editors on the page.
- Add `summary` (3–4 key takeaways, one sentence each) and `faq` (3 items with `q` and `a`) to every post. They render visibly and as FAQPage schema, which helps Google AI Overviews and AI assistants quote the page.
- Static pages (about, contact, privacy, cookies, terms, disclaimer) live in `content/pages/`.
- Link to relevant prompt pages (`/prompts/<slug>/`) and hubs (`/chatgpt-prompts/`, `/claude-prompts/`, `/gemini-prompts/`, `/midjourney-prompts/`, `/ai-video-prompts/`).

## SEO notes

- Hubs are defined in `site.config.json` → `hubs`; a prompt appears on a hub when its `models` list includes one of the hub's models. Use these exact model names: ChatGPT, Claude, Gemini, Grok, GPT Image, Midjourney, Flux, DALL·E, Ideogram, Seedance, Veo, Kling, Runway.
- Good target keywords found so far (US volume / difficulty): gemini prompts 1900/8, best chatgpt prompts 1400/0, midjourney prompts 1400/16, claude prompts 1000/24, prompt to make chatgpt write like a human 800/0, chatgpt custom instructions 600/4, negative prompt 350/5, chatgpt prompts for resume 200/2, midjourney logo prompts 200/0, chatgpt prompts for marketing 150/12, chatgpt prompts for seo 100/1.
- Inside a ```prompt block, only `[UPPERCASE]` text becomes a fill-in blank. For markers the AI should output (not the user), use `{CURLY BRACES}`.

## Quality rules

- Solve one real, specific task. Prompt must be copy-ready and genuinely useful.
- Check `content/prompts/` first: never repeat a topic already covered.
- Keep variety: no more than 3 prompts from one category in a batch of 10.
- No made-up statistics, testimonials, quotes or claims about real people/companies. No "tested by 10,000 users".
- Model names for image/video: Midjourney, Flux, DALL·E, Ideogram / Seedance, Veo, Kling, Runway — only list tools the prompt really suits.
- Plain, clear English. No hype words ("revolutionary", "game-changer", "unlock").
- Do not edit published prompts, site design or config unless asked.
