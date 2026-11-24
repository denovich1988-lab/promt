---
title: Diagnose a sudden organic traffic drop
date: 2026-11-24
category: seo
description: An AI prompt to diagnose a sudden organic traffic drop — separate tracking issues, technical problems, algorithm updates and lost rankings, then plan fixes.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [traffic drop, seo audit, google updates, search console]
---

When organic traffic falls suddenly, teams often panic and change things at random. A calm diagnosis checks the likely causes in order: tracking errors, technical problems, seasonality, a search engine update, lost rankings on key pages or changes in the search results themselves. This prompt walks through an organic traffic drop diagnosis with your data and ends with a prioritized fix plan.

## Prompt

```prompt
Act as a senior technical SEO consultant. Help me diagnose an organic traffic drop.

Site and type (blog, ecommerce, SaaS, local): [SITE]
When the drop started and how big it is: [DROP DETAILS]
Search Console data (clicks, impressions, average position before vs after; top pages and queries that lost the most): [GSC DATA]
Analytics data, if different: [ANALYTICS DATA]
Recent changes on the site (redesign, migration, CMS update, robots.txt, new content, removed pages): [RECENT CHANGES]
Known search engine updates around that date, if any: [UPDATES]

Work through:
1. Is it real? Check for tracking or reporting issues first (impressions vs clicks, analytics vs Search Console).
2. Pattern: sitewide or specific sections, page types, devices, countries, query types.
3. Likely causes ranked by evidence: technical (indexing, noindex, canonicals, redirects, speed), content quality, update impact, competitor gains, SERP changes (AI answers, new features), seasonality.
4. For each likely cause, the exact checks to confirm or rule it out.
5. A prioritized action plan: quick fixes this week, deeper work this month.
6. What not to do while diagnosing.
Separate what the data shows from hypotheses.
```

## How to use it

1. **Export comparison data** for equal periods before and after the drop.
2. **Run the confirm/rule-out checks in order** before changing anything.
3. **Annotate the date of every fix** so you can measure recovery.

## Tips

- Dig into queries with the [Search Console query analysis](/prompts/search-console-query-analysis/) prompt.
- If a migration caused it, check the [website migration SEO checklist](/prompts/website-migration-seo-checklist/) prompt.
