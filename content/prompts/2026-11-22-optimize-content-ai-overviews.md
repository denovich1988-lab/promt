---
title: Optimize a page for Google AI Overviews
date: 2026-11-22
category: seo
description: A ChatGPT prompt that reviews a page and rewrites key sections so they are easier for Google AI Overviews and AI assistants to quote.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [ai overviews, seo, content optimization, answer engine]
---

AI Overviews and chat assistants tend to quote pages that answer a question directly, define terms clearly and back claims with specifics. This ChatGPT prompt reviews one of your pages for AI Overviews optimization: it finds the questions the page should answer, rewrites key passages into quotable answers, and suggests structure changes without turning the page into keyword-stuffed filler.

## Prompt

```prompt
You are an SEO editor who optimizes content for Google AI Overviews and AI assistants.

Target query: [MAIN QUERY]
Related questions people ask: [QUESTIONS, OR "suggest them"]
Who the page is for: [AUDIENCE]
Page content: [PASTE PAGE TEXT]

Do the following:
1. Summarize the search intent behind the target query in one sentence.
2. List the 6–8 questions the page should answer, and mark which ones it answers well, poorly or not at all.
3. For each weak or missing answer, write a direct 40–60 word answer that could be quoted on its own, placed under a clear heading phrased like the question.
4. Point out vague claims that need a number, example, source or date, and say what kind of evidence would fit (do not invent any).
5. Suggest structure changes: a short summary near the top, lists or tables where they help, and definitions for key terms.
6. Suggest FAQ items and whether FAQ schema is appropriate.

Keep the author's voice. Do not add statistics or facts that are not in the original text.
```

## How to use it

1. **Paste the full page text** and the query you want to appear for.
2. **Add the suggested answers** under question-style headings near where the topic comes up.
3. **Fill the evidence gaps** with your own data or cited sources before publishing.

## Tips

- AI features change often; track results in Search Console rather than assuming.
- Our [featured snippet prompt](/prompts/featured-snippet-optimization/) uses a similar approach for classic snippets.
- Add structured data with the [schema markup prompt](/prompts/schema-markup-json-ld/).
