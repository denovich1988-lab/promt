---
title: SEO checklist for a website migration or redesign
date: 2026-11-21
category: seo
description: Plan a site move, redesign or domain change without losing rankings — with a redirect map method, pre-launch checks and post-launch monitoring.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [site migration, redirects, technical seo]
---

Redesigns and platform moves are a common reason for sudden traffic drops: URLs change, redirects are missed, content disappears or pages are accidentally blocked. A migration plan prevents most of this. This prompt builds a checklist for your specific type of migration, from inventory to the weeks after launch.

## Prompt

```prompt
You are a technical SEO lead. Create a migration plan for my website.

Type of change: [REDESIGN, NEW CMS, DOMAIN CHANGE, URL STRUCTURE CHANGE, HTTPS, MERGING SITES]
Current site, platform and size (number of pages): [CURRENT SITE]
New site or platform: [NEW SITE]
Pages that bring most traffic or revenue: [KEY PAGES]
Launch date and team involved: [DATE AND TEAM]

Create:
1. A pre-migration phase: crawl and inventory, benchmark traffic and rankings, list of backlinks to key pages, content that will be removed or merged.
2. A method for building the redirect map (old URL → new URL, 1:1 where possible) and rules for pages without an equivalent.
3. Staging checks: noindex on staging, internal links, canonical tags, titles and meta, structured data, hreflang if used, page speed, mobile.
4. Launch-day checklist in order, including robots.txt, XML sitemaps, redirect testing and Search Console steps.
5. Post-launch monitoring for 8 weeks: what to check daily, weekly and monthly, and which drops are normal vs a warning.
6. A rollback or fix plan for the most likely problems.

Present it as checklists with owners. Mark items that depend on my platform.
```

## How to use it

1. **Run the prompt early**, ideally before the design is final.
2. **Crawl the old site** and save the full URL list before anything changes.
3. **Test every redirect** for your top pages on launch day.

## Tips

- Avoid changing URLs, design and content all at once if you can; fewer changes means easier diagnosis.
- Keep the old sitemap available briefly after a domain change so search engines find the redirects.
