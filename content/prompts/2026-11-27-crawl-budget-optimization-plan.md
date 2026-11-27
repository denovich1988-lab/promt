---
title: Crawl budget optimization plan for large sites
date: 2026-11-27
category: seo
description: Find where search bots waste crawls on large sites and get a ranked crawl budget optimization plan covering parameters, redirects, sitemaps and server speed.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [technical seo, crawl budget, log files, indexing]
---

Crawl budget only becomes a real problem on large or fast-changing sites: online stores with filters, marketplaces, news sites and big content libraries. When bots spend their time on parameter URLs, redirect chains and thin pages, new and updated pages get discovered late. This crawl budget optimization prompt turns your crawl stats, log samples and site structure into a ranked list of fixes, so you work on the waste that actually matters instead of guessing.

## Prompt

```prompt
Act as a senior technical SEO who specialises in large websites. Build a crawl budget optimization plan for my site.

Site type and size: [E.G. ECOMMERCE, 400,000 URLS, 20,000 PRODUCTS]
CMS / platform: [PLATFORM]
Crawl stats (from Search Console or logs): [PAGES CRAWLED PER DAY, AVERAGE RESPONSE TIME, % BY RESPONSE CODE, % BY FILE TYPE]
Log file or crawler sample: [PASTE A SAMPLE OF URLS BOTS HIT MOST, OR A CRAWLER EXPORT SUMMARY]
Known URL patterns: [FACETED FILTERS, SORT/PARAMETER URLS, SESSION IDS, INTERNAL SEARCH, PAGINATION, CALENDAR PAGES]
Pages that are slow to get indexed: [EXAMPLES]
Current robots.txt and sitemap setup: [PASTE OR DESCRIBE]

Do this:
1. Say whether crawl budget is likely a real issue for this site or not, and why. If it isn't, tell me what to focus on instead.
2. Group the wasted crawl activity into buckets (parameters, duplicates, redirects, errors, low-value pages, heavy resources) and estimate which buckets are largest from the data I gave. Mark anything that is an assumption.
3. For each bucket, recommend the right fix and explain the trade-off: robots.txt disallow, noindex, canonical, removing internal links, returning 404/410, consolidating pages, or fixing the redirect at the source. Warn me where a fix could block pages I need indexed.
4. Sitemap clean-up: what should and shouldn't be in XML sitemaps, and how to use lastmod honestly.
5. Server side: response time, caching and error rates that affect how much bots crawl.
6. A prioritised action table: fix, URLs affected, effort (low/medium/high), expected impact, owner (SEO, dev, content).
7. How to measure progress over the next 4–8 weeks (which crawl stats and log metrics to compare).
```

## How to use it

1. **Pull 30 days of crawl stats** from Search Console's Crawl stats report and, if you can, a log file sample filtered to search bot user agents.
2. **Paste real URL patterns**, not just descriptions; the plan gets much more specific.
3. **Hand the action table to your developers** and test risky robots.txt changes on a staging copy first.

## Tips

- On small sites (a few thousand pages), crawl budget is rarely the bottleneck; fix content and internal links first.
- Never block a URL in robots.txt that you also want deindexed with noindex; bots can't see the tag if they can't crawl the page.
