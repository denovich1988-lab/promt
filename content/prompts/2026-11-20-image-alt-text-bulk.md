---
title: Image alt text in bulk for SEO and accessibility
date: 2026-11-20
category: seo
description: Write descriptive, concise alt text for many images at once that helps screen reader users and gives search engines useful context.
models: [ChatGPT, Claude, Gemini]
level: Beginner
tags: [alt text, accessibility, image seo]
---

Alt text describes images for people using screen readers and gives search engines context. Many sites leave it empty or stuff it with keywords. This prompt writes short, accurate descriptions for a batch of images based on what each shows and how it's used on the page.

## Prompt

```prompt
You are an accessibility and SEO specialist. Write alt text for these images.

Page topic and purpose: [PAGE TOPIC]
Main keyword (use only where it naturally fits): [KEYWORD]
Images — for each: file name, what it shows, and its role on the page (product, decorative, chart, step in a tutorial): [IMAGE LIST]

Rules:
1. Describe what matters in the image for this page, in under 125 characters.
2. Don't start with "image of" or "picture of".
3. For decorative images, recommend empty alt text (alt="") and say why.
4. For charts or infographics, give a short alt text plus a longer description to put in the page text.
5. Include the keyword in no more than a few images, only where accurate.
6. For products, include brand, product type and key visible feature such as colour.

Output a table: file name | alt text | notes.
```

## How to use it

1. **List each image** with a short description of what it shows.
2. **Paste the alt text** into your CMS image fields.
3. **Test with a screen reader** on one page to hear how it sounds.

## Tips

- Use descriptive file names too, like blue-running-shoe-side.jpg.
- Ask for alt text in other languages for translated pages.
