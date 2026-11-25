---
title: Faceted Navigation SEO Plan for Ecommerce Filters
date: 2026-11-25
category: seo
description: Decide which ecommerce filter pages to index, canonicalize or block, with URL rules and internal links, so faceted navigation helps SEO.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [faceted navigation, ecommerce seo, technical seo, crawl budget]
---

Filters for size, color, brand and price can create thousands of near-identical URLs that waste crawl budget and split ranking signals. A few filter combinations, though, match real searches and deserve their own indexable pages. This prompt sorts your facets into index, canonicalize or block, based on search demand and inventory, and turns the decision into URL and internal linking rules your developers can implement.

## Prompt

```prompt
Create a faceted navigation SEO plan for my store.

Platform: [e.g. Shopify, WooCommerce, Magento, custom]
Main categories: [LIST]
Facets/filters available (with example values): [e.g. color: red, blue; size: S–XL; brand; price; material]
How filter URLs look now: [EXAMPLE URLS]
Known search demand for filter combos (keywords and volumes, if you have them): [DATA OR "none"]
Current problems: [e.g. index bloat, duplicate titles, crawl budget]

1. A decision table for each facet: index / canonical to parent / noindex,follow / block from crawling, with the reason.
2. Rules for multi-facet combinations (e.g. index max 1 facet + category, only if at least [N] products).
3. URL rules: parameter order, lowercase, static paths vs parameters, sorting and pagination handling.
4. On-page rules for indexable facet pages: title, H1, intro text and meta description templates.
5. Internal linking: which facet pages to link from category pages and menus.
6. A rollout and monitoring checklist (Search Console reports, log files, sitemaps).

Flag any step that depends on my platform's limits and say what to check. Be careful with robots.txt: explain when blocking prevents noindex from being seen.
```

## How to use it

1. **Gather keyword data** for filter combos (e.g. "red running shoes") before deciding.
2. **Share the decision table** with developers as the spec.
3. **Monitor indexed page counts** in Search Console for 6–8 weeks after the change.

## Tips

- Only index facet pages with enough products to be useful; thin filter pages hurt quality.
- Keep sort orders (price, newest) out of the index entirely.
