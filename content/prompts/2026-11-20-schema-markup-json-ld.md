---
title: Schema markup in JSON-LD for any page
date: 2026-11-20
category: seo
description: Generate valid JSON-LD structured data for articles, products, FAQs, local businesses or events, using only the details on your page.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [schema markup, structured data, technical seo]
---

Structured data helps search engines understand your page and can make it eligible for rich results. Writing JSON-LD by hand is fiddly and errors are easy to miss. This prompt picks the right schema type, fills it from your page content and lists the fields you still need.

## Prompt

```prompt
You are a technical SEO specialist. Write JSON-LD structured data for this page.

Page URL: [URL]
Page type (article, product, local business, FAQ, event, recipe, course, etc.): [PAGE TYPE]
Page content or key details (title, author, dates, prices, address, opening hours, FAQs…): [PAGE DETAILS]
Organisation name and logo URL: [ORGANISATION AND LOGO]

Do this:
1. Choose the most fitting schema.org type(s) and explain why in one sentence.
2. Write complete JSON-LD in a single <script type="application/ld+json"> block, using @graph if several types are needed.
3. Include only information that is visible on the page or that I provided — no invented ratings or reviews.
4. List required and recommended properties I haven't supplied.
5. Explain how to test it.

Output valid JSON with no comments inside the code.
```

## How to use it

1. **Paste the page's real details**, especially prices, dates and addresses.
2. **Test the code** with Google's Rich Results Test and the Schema Markup Validator.
3. **Add it to the page head** or through your CMS's structured data field.

## Tips

- Structured data must match what users see on the page.
- Rich results aren't guaranteed even with valid markup.
