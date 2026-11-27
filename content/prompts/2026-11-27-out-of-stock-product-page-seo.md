---
title: Out-of-stock product pages SEO plan
date: 2026-11-27
category: seo
description: Decide what to do with out-of-stock and discontinued product pages for SEO (keep, redirect or remove), with page copy, schema and internal link fixes.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [ecommerce seo, out of stock, product pages, redirects]
---

When products sell out or get discontinued, many stores delete the page, show a dead end, or leave it ranking with no way to buy. Each choice can waste traffic and links you already earned. This out-of-stock products SEO prompt sorts your affected URLs into clear actions, writes the on-page messaging, and lists the technical changes so your developer and merchandiser know exactly what to do.

## Prompt

```prompt
Act as an ecommerce SEO specialist.

I have product pages that are out of stock or discontinued. Help me decide what to do with each one.

Store type and platform: [E.G. OUTDOOR GEAR STORE ON A CUSTOM CMS]
Product list (paste a table if you can): [URL | STATUS: TEMPORARILY OUT / DISCONTINUED / SEASONAL | EXPECTED RESTOCK DATE | MONTHLY ORGANIC CLICKS | BACKLINKS | CLOSEST REPLACEMENT URL]
Current behaviour: [E.G. PAGE STAYS LIVE WITH "SOLD OUT" BUTTON / PAGE IS DELETED AND RETURNS 404]

Please:
1. Give me a decision rule for each situation: temporarily out of stock, seasonal, discontinued with a close replacement, discontinued with no replacement, low-value pages with no traffic or links.
2. Apply it to my list in a table: URL, recommended action (keep live / 301 to replacement / 301 to category / 410 / noindex), reason.
3. Write on-page copy for a temporarily out-of-stock page: status message, restock email signup text, and a "similar products" block intro.
4. Write a short message for a discontinued product page that stays live (for example, one with many links or support content).
5. Explain how to set product structured data availability (InStock, OutOfStock, BackOrder, Discontinued) and what to update in the product feed.
6. List internal linking and sitemap changes.
7. Give a monitoring checklist for the next 60 days.

Flag any step where I should confirm with my developer or platform documentation.
```

## How to use it

1. **Export affected URLs with clicks and backlinks** from your analytics and link tool.
2. **Paste them into the prompt** and review every redirect target by hand before it goes live.
3. **Monitor Search Console** coverage and clicks for the changed URLs for two months.

## Tips

- Keep temporarily out-of-stock pages live; deleting and re-creating them throws away their history.
- Redirect only to a genuinely close replacement; a redirect to the home page can be treated like a soft 404.
