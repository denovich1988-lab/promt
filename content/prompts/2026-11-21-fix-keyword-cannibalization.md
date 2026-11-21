---
title: Fix keyword cannibalization between your pages
date: 2026-11-21
category: seo
description: Find pages competing for the same keyword and decide whether to merge, redirect, differentiate or re-link them, with a clear action list.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [keyword cannibalization, technical seo, content audit]
---

When two or more of your pages target the same search query, Google may switch between them or rank neither well. That is keyword cannibalization. Fixing it means deciding, page by page, which one should own the query and what to do with the others. This prompt works through your data and gives a specific action for every page involved.

## Prompt

```prompt
You are a technical SEO consultant. Help me resolve keyword cannibalization on my site.

Site and topic: [SITE]
Query or topic that is affected: [KEYWORD]
Competing pages — for each: URL, title, main purpose, clicks and impressions for the query, backlinks if known, and a short content summary:
[PAGE DATA]
Which page I would like to rank (if I know): [PREFERRED PAGE]

Do this:
1. Confirm whether this is real cannibalization or two pages serving different intents. Explain your reasoning.
2. Choose the page that should own the query, based on intent fit, performance and links.
3. For every other page, recommend one action: merge into the main page and 301 redirect; rewrite to target a different intent and keyword; keep but de-optimise; or noindex. Give the reason.
4. List exact changes: titles, H1s, sections to move, internal links and anchor text to update.
5. Explain how to check the result over the next 4–8 weeks in Search Console.

Do not guess data I didn't provide. If something is missing, say what to check.
```

## How to use it

1. **Export data from Search Console**: filter by the query and look at the Pages tab.
2. **Paste each page's numbers and summary** into the prompt.
3. **Make the changes in one go**, then monitor the query weekly.

## Tips

- Two pages ranking together is fine when they serve different intents — don't merge by reflex.
- After a merge, update internal links to point straight at the new URL, not the redirect.
