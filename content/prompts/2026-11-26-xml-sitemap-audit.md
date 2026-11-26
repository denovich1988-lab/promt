---
title: XML sitemap audit and fix plan
date: 2026-11-26
category: seo
description: Audit your XML sitemap for non-indexable URLs, redirects, missing pages and bad lastmod dates, and get a clear plan to fix it.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [xml sitemap, technical seo, indexing, crawling]
---

An XML sitemap full of redirects, noindexed pages and 404s sends search engines mixed signals, while important pages left out may get crawled less often. This XML sitemap audit prompt compares your sitemap with crawl and index data, sorts every problem by impact and gives you rules for a clean sitemap that stays clean as the site grows.

## Prompt

```prompt
Act as a technical SEO specialist. Audit my XML sitemap.

Site: [DOMAIN, CMS, APPROX NUMBER OF PAGES]
Sitemap structure: [E.G. SITEMAP INDEX WITH POSTS/PAGES/PRODUCTS SITEMAPS, HOW IT'S GENERATED]
Sitemap URLs sample or stats: [PASTE URLS OR COUNTS BY SITEMAP]
Crawl data for those URLs: [STATUS CODE, INDEXABLE Y/N, CANONICAL, NOINDEX — FROM A CRAWLER EXPORT]
Search Console data: [SUBMITTED VS INDEXED, "NOT INDEXED" REASONS]
Important pages I know are missing: [IF ANY]

Do this:
1. List problems found: non-200 URLs, redirects, noindexed or canonicalised URLs, duplicates (http/https, trailing slash, parameters), URLs blocked by robots.txt, missing important pages, inaccurate lastmod, files over size limits.
2. A table: issue, number of URLs, example, impact (high/medium/low), fix.
3. Rules for what should and shouldn't be in each sitemap for my site type.
4. Settings or code changes for my CMS to apply those rules automatically.
5. A monitoring checklist to run monthly.
Base findings only on the data I gave; say what extra data would help.
```

## How to use it

1. **Crawl the sitemap URLs** with an SEO crawler and export status, indexability and canonical.
2. **Add Search Console's page indexing report** so the audit sees what Google did with them.
3. **Fix generation rules**, not just individual URLs, so problems don't return.

## Tips

- Only canonical, indexable, 200-status URLs belong in a sitemap.
- Check the search engines' official documentation for current sitemap size limits.
