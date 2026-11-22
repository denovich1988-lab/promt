---
title: How-to guide article that ranks and actually helps
date: 2026-11-22
category: seo
description: "A ChatGPT prompt for SEO how-to articles: clear numbered steps, prerequisites, troubleshooting and FAQs built around one search query."
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [how-to article, seo writing, tutorial, content writing]
---

People searching "how to…" want to finish a task, not read a long introduction. This ChatGPT prompt writes an SEO how-to guide article that answers the query in the first lines, lists what the reader needs, walks through numbered steps with expected results, and adds troubleshooting and FAQs, the structure that tends to win featured snippets and keeps readers on the page.

## Prompt

```prompt
You are an expert writer of practical tutorials. Write a how-to guide.

Target query: [TARGET QUERY, e.g., how to ...]
Reader and skill level: [READER]
Tools, versions or materials involved: [TOOLS]
My notes or the real steps I follow (use them as the source of truth): [MY STEPS]
Common mistakes I have seen: [MISTAKES]
Length: [WORD COUNT]

Structure:
1. Title with the query, and a 2-sentence answer at the top: what the reader will do and how long it takes.
2. "What you need" list.
3. Numbered steps: one action per step, starting with a verb, each with the expected result ("You should now see…"). Add {SCREENSHOT: description} where an image would help.
4. Troubleshooting: 3–5 problems with causes and fixes.
5. Tips or variations for advanced readers.
6. FAQ: 4 related questions people search, answered in 2–3 sentences each.
Also give a meta title (under 60 characters) and meta description (under 155 characters).
Do not invent menu names, settings or numbers that are not in my notes; mark anything I should verify.
```

## How to use it

1. **Paste the real steps you follow**; the article should be your expertise, not a guess.
2. **Do the task yourself while reading the draft** and fix any step that doesn't match.
3. **Add your own screenshots** where the draft marks them.

## Tips

- Check related questions first with the [People Also Ask outline prompt](/prompts/people-also-ask-content-outline/).
- Tune the opening answer for snippets with the [featured snippet prompt](/prompts/featured-snippet-optimization/).
- Add FAQ markup using the [schema markup prompt](/prompts/schema-markup-json-ld/).
