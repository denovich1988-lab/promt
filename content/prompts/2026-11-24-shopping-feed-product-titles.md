---
title: Optimize Google Shopping product titles in bulk
date: 2026-11-24
category: seo
description: A ChatGPT prompt to rewrite product feed titles for Google Shopping — brand, product type and key attributes in the right order, within length limits.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [google shopping, product feed, ecommerce seo, product titles]
---

Product titles are one of the strongest signals in a Google Shopping feed, yet many stores just copy their website names, which miss size, color or material. This prompt rewrites product feed titles in bulk using a consistent attribute order, so shoppers and search engines see what matters first.

## Prompt

```prompt
Act as a product feed specialist. Rewrite my Google Shopping product titles.

Store and category: [STORE AND CATEGORY]
Attributes shoppers search for in this category (brand, type, size, color, material, model, gender, quantity): [KEY ATTRIBUTES]
Preferred title order (or ask you to suggest one): [TITLE ORDER]
Words to avoid (promotional text, ALL CAPS, prices): [AVOID]
Product data (current title + attributes, one product per line):
[PRODUCT DATA]

For each product:
1. A new title, most important words in the first 70 characters, total under 150 characters.
2. The attribute pattern you used.
3. Any attribute that is missing from my data and would improve the title.
Then give me the title formula for this category so I can apply it in my feed rules.
Use only attributes present in my data. No claims like "best" or "free shipping".
```

## How to use it

1. **Export 20–50 products** with their attributes from your feed.
2. **Check the formula** against what shoppers type, then apply it with feed rules.
3. **Compare clicks** for the rewritten products after a few weeks.

## Tips

- Improve the product pages too with the [ecommerce product page copy](/prompts/ecommerce-product-page-copy/) prompt.
- Keep titles factual; Google's current feed policies can change, so check them before a big update.
