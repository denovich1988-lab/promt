---
title: Amazon product listing title, bullets and description
date: 2026-11-25
category: marketing
description: Write an Amazon product listing with a keyword-led title, five benefit bullets, a description and backend search terms from your product facts.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [amazon listing, product description, ecommerce copy, amazon seo]
---

An Amazon product listing has to do two jobs: match what shoppers type into search and answer their questions fast enough that they add to cart. Copy written straight from a spec sheet usually misses both. This prompt turns your product facts and keyword list into a title, five benefit-led bullet points, a description and backend search terms, while flagging anything that might break marketplace rules so you can check before publishing.

## Prompt

```prompt
Act as an ecommerce copywriter who writes Amazon listings.

Product: [PRODUCT NAME AND TYPE]
Key facts: [MATERIALS, SIZE, CAPACITY, WHAT'S IN THE BOX, CERTIFICATIONS]
Who buys it and why: [BUYER AND MAIN USE]
Main keywords (most important first): [KEYWORD LIST]
Competitor weaknesses from reviews (optional): [COMPLAINTS ABOUT SIMILAR PRODUCTS]
Brand name: [BRAND]

Write:
1. Product title: brand, main keyword, key attributes (size, colour, quantity). Keep it within [CHARACTER LIMIT FOR YOUR CATEGORY] characters and readable, not a keyword list.
2. Five bullet points: start each with a short benefit in capitals of 2–4 words, then the feature that proves it. Cover the top buyer questions (size/fit, material, use, care, what's included).
3. Product description of 150–250 words in short paragraphs.
4. Backend search terms: synonyms and related words not already in the title or bullets, no brand names of other companies, no repeats.

Then list any claims in my facts that may need proof or may break marketplace rules (health claims, "best", guarantees, competitor names) so I can check them.
Use only the facts I gave you.
```

## How to use it

1. **Gather facts and keywords first**; the copy can only be as accurate as your input.
2. **Check your category's current title and bullet limits** in Seller Central before you paste.
3. **Review the flagged claims** and remove anything you can't support.

## Tips

- Read 1- and 2-star reviews of similar products and answer those worries in your bullets.
- Keep the same keyword order in the title and first bullet for consistency.
