---
title: Canonical tag audit prompt for duplicate content
date: 2026-11-26
category: seo
description: Find duplicate and near-duplicate URLs, decide the right canonical for each group and fix canonical tags, redirects and internal links.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [canonical tags, duplicate content, technical seo, site audit]
---

Duplicate content usually isn't a penalty problem, but it does split signals between URLs, wastes crawling and lets the wrong version show up in search. It creeps in through URL parameters, HTTP/HTTPS and www variants, trailing slashes, print pages and products in several categories. This canonical tag audit prompt analyses a crawl export, groups duplicate URLs, picks the canonical for each group and tells you whether to use a canonical tag, a redirect or a noindex.

## Prompt

```prompt
Act as a technical SEO consultant. Audit duplicate content and canonical tags.

Website and CMS: [DOMAIN, PLATFORM E.G. SHOPIFY / WORDPRESS / CUSTOM]
Crawl export (paste columns: URL, status code, canonical URL, title, meta robots, word count or content hash, inlinks): [PASTE]
Search Console notes (optional): ["DUPLICATE, GOOGLE CHOSE DIFFERENT CANONICAL" URLS, ETC.]
Known URL patterns: [E.G. ?SORT=, ?COLOR=, /PAGE/2/, /AMP/, UTM PARAMETERS]

Deliver:
1. Groups of duplicate or near-duplicate URLs, with the cause of each group (parameters, protocol/host, trailing slash, pagination, faceted navigation, syndicated content, similar product variants).
2. The recommended canonical URL for each group, with the reason.
3. The right fix for each group: rel=canonical, 301 redirect, noindex, parameter handling, or consolidating the content, and why.
4. Problems with existing canonicals: pointing to redirects, 404s, non-indexable pages, chains, cross-domain mistakes, canonicals that conflict with hreflang or the sitemap.
5. Internal links that should be updated to point at the canonical.
6. A prioritized fix list (impact vs effort) and implementation notes for my CMS.
7. How to verify the fixes after deployment.

Base conclusions only on the data provided; mark guesses as hypotheses.
```

## How to use it

1. **Export a full crawl** with the canonical column from your crawler of choice.
2. **Add Search Console's indexing report** notes for URLs Google treats differently.
3. **Fix in priority order** and recrawl to confirm.

## Tips

- A canonical tag is a hint, not a directive; consistent internal links and sitemaps support it.
- Use redirects when the duplicate URL has no reason to exist for users.
