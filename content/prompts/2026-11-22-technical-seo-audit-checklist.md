---
title: Technical SEO audit checklist with priorities
date: 2026-11-22
category: seo
description: A ChatGPT prompt for a technical SEO audit that reviews your crawl data, finds indexing, speed and structure issues and ranks fixes by impact.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [technical seo, seo audit, crawling, indexing]
---

Crawl tools produce long lists of warnings, and it's hard to know which ones actually hurt rankings. This ChatGPT prompt for a technical SEO audit reads the data you export from a crawler, Google Search Console and speed tests, groups the issues (crawling, indexing, site structure, performance, structured data), and ranks the fixes by impact and effort so your developers know where to start.

## Prompt

```prompt
You are a technical SEO consultant. Audit my site from the data below.

Site, CMS and size (number of pages): [SITE]
Main goals and important page types: [GOALS]
Crawl export summary (status codes, redirects, canonicals, duplicates, noindex, orphan pages, depth): [CRAWL DATA]
Search Console data (indexing report, page experience, sitemap status, errors): [GSC DATA]
Speed test results for key templates: [SPEED DATA]
robots.txt and sitemap details: [ROBOTS AND SITEMAP]
Recent changes (migration, redesign, new sections): [CHANGES]

Deliver:
1. Findings grouped by area: crawlability, indexing, duplicates and canonicals, redirects and broken links, site structure and internal links, mobile and performance, structured data, international (if relevant).
2. For each issue: what it is, evidence from my data, affected URLs or templates, why it matters, and the fix.
3. A priority table: issue, impact (high/medium/low), effort, owner (dev, content, SEO).
4. Quick wins for the next 2 weeks.
5. What to monitor after the fixes.
Only report issues supported by the data; list anything you need more data to judge.
```

## How to use it

1. **Export data from tools you trust** and paste summaries, not millions of rows.
2. **Fix by template**, not page by page; one template fix can repair thousands of URLs.
3. **Recrawl after fixes** and compare.

## Tips

- After a migration, also use the [website migration SEO checklist prompt](/prompts/website-migration-seo-checklist/).
- Check content-level issues with the [on-page SEO audit prompt](/prompts/on-page-seo-audit/).
- Strengthen structure with the [internal linking plan prompt](/prompts/internal-linking-plan/).
