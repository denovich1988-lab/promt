---
title: Orphan pages audit and internal link fixes
date: 2026-11-27
category: seo
description: Find orphan pages from crawl, sitemap and analytics exports, decide which to link, merge or remove, and get exact internal link placements.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [orphan pages, internal linking, technical seo, site audit]
---

Orphan pages are pages with no internal links pointing to them. Search engines may still find them through sitemaps or old backlinks, but they get little authority and visitors can't reach them by browsing. Some deserve links; others should be merged or removed. This orphan pages audit prompt compares your crawl, sitemap and analytics lists, sorts every orphan into a clear action, and suggests exactly where to add links.

## Prompt

```prompt
Act as a technical SEO consultant. Audit orphan pages on my site and plan fixes.

Site: [DOMAIN, SITE TYPE, ROUGH PAGE COUNT]
URLs found by crawling from the homepage: [PASTE OR SUMMARISE THE CRAWL LIST]
URLs in XML sitemaps: [PASTE OR SUMMARISE]
URLs with organic traffic or impressions (last 3–12 months): [PASTE FROM ANALYTICS / SEARCH CONSOLE WITH CLICKS]
URLs with external backlinks: [OPTIONAL]
Main hub and category pages: [LIST]

Do this:
1. Identify orphan candidates: URLs in sitemaps, analytics or backlink data that the crawl didn't find. Explain any that could be false positives (e.g. JavaScript links, noindex pages, parameter versions).
2. Sort each orphan into one action: (a) link it, (b) merge and 301 redirect into a stronger page, (c) noindex/keep for users only, (d) remove with 404/410. Give the reason for each.
3. For pages to link: suggest 2–3 specific source pages each, the anchor text, and where on the page the link fits naturally.
4. Pages to merge: the target URL and what content to carry over.
5. Root causes (e.g. old campaign pages, CMS tags, pagination, removed menu items) and how to stop new orphans appearing.
6. An action table: URL, action, target/source pages, priority (based on traffic, backlinks and business value).
```

## How to use it

1. **Export three lists**: a crawl from the homepage, your sitemap URLs and pages with traffic or impressions.
2. **Paste them in** (or a sample, for big sites) and review the false-positive notes first.
3. **Add links from relevant pages**, not just a footer list, and recrawl to confirm.

## Tips

- An orphan page with backlinks is usually worth linking or redirecting, not deleting.
- Run the check after every redesign or migration, when menus and templates change.
