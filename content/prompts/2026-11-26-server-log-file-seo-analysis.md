---
title: Server log file analysis for SEO
date: 2026-11-26
category: seo
description: Analyse server log data to see how search engine bots crawl your site, find crawl waste and orphan pages, and prioritise technical fixes.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [log file analysis, crawl budget, technical seo, googlebot]
---

Server logs show what search engine bots actually request, not what a crawler tool guesses. On large sites they reveal crawl waste on parameters and redirects, important pages bots rarely visit, and errors only bots hit. This log file analysis prompt guides you through summarising the data, writing the queries and turning patterns into a prioritised technical SEO plan.

## Prompt

```prompt
Act as a technical SEO specialist experienced in log file analysis. Help me analyse my server logs.

Site: [DOMAIN, TYPE, APPROX NUMBER OF INDEXABLE PAGES]
Log period and format: [E.G. 30 DAYS, APACHE COMBINED / NGINX / CDN LOGS]
Tools I can use: [E.G. PYTHON, BIGQUERY, SPREADSHEET, A LOG ANALYSER]
Summary data or sample rows: [PASTE AGGREGATED STATS OR 20 SAMPLE LINES WITH IPS MASKED]
Known site sections and URL patterns: [E.G. /PRODUCT/, /CATEGORY/, ?SORT=, /SEARCH/]
Concerns: [E.G. NEW PAGES INDEXED SLOWLY, TRAFFIC DROP]

Give me:
1. Steps to isolate genuine search engine bot hits (user agent plus verification by reverse DNS or published IP ranges).
2. Ready-to-run code or queries for my tools to calculate: hits by section, status codes, top crawled URLs, parameter URLs, crawl frequency for key pages, pages in the sitemap never crawled, and crawled URLs not in the sitemap or site crawl.
3. How to interpret each result and what "bad" looks like.
4. Based on my data, the main crawl waste and missed pages, with fixes (robots rules, internal linking, canonical, parameter handling, redirects).
5. A prioritised action table: issue, evidence, fix, expected effect, effort.
Don't draw conclusions beyond the data I gave; say what extra data would confirm them.
```

## How to use it

1. **Mask or remove IP addresses** of real users before pasting any log lines.
2. **Run the queries** on the full log set, then paste the aggregated results back for interpretation.
3. **Repeat after fixes** to confirm bots shifted to the pages that matter.

## Tips

- Log analysis matters most on sites with many thousands of URLs; small sites rarely have crawl budget issues.
- Combine log data with a site crawl and Search Console for the full picture.
