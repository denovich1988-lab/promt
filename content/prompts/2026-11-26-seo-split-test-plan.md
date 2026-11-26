---
title: SEO split test plan for title tags and templates
date: 2026-11-26
category: seo
description: Plan an SEO split test for title tags, meta descriptions or page templates, with a hypothesis, control and variant groups, timing and how to judge results.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [seo testing, split test, title tags, technical seo]
---

Changing every title tag on a site and hoping for the best makes it impossible to know what worked. An SEO split test changes a group of similar pages and compares them with a control group over the same period, so seasonality and algorithm updates affect both. This prompt plans the test: hypothesis, page groups, the change, run time and how to read the results honestly.

## Prompt

```prompt
Act as a technical SEO lead. Plan an SEO split test.

Website and page type: [E.G. ECOMMERCE CATEGORY PAGES, LOCAL LANDING PAGES, BLOG POSTS]
Number of similar pages available: [NUMBER]
Traffic to that page type: [MONTHLY ORGANIC CLICKS, ROUGHLY]
What I want to test: [E.G. ADDING PRICE TO TITLE TAGS, NEW META DESCRIPTION FORMAT, FAQ BLOCK, H1 CHANGE]
Data available: [GOOGLE SEARCH CONSOLE, GA4, SEO TESTING TOOL]
Constraints: [CMS LIMITS, DEV TIME]

Create:
1. A clear hypothesis: change, expected effect on which metric (clicks, CTR, impressions) and why.
2. Page selection: how to split pages into control and variant groups that are similar in traffic, template and intent; whether to use random or stratified assignment.
3. The exact change for the variant group, with 3 example before/after title tags or snippets.
4. Pre-test baseline period and test run time, with reasoning based on my traffic.
5. Measurement: metrics, how to compare groups (e.g. variant vs. control trend, difference-in-differences), and what counts as a meaningful result versus noise.
6. Risks and guardrails: when to stop the test early, how to roll back.
7. A results template and how to roll out winners.
8. Two follow-up test ideas.

If my traffic is too low for a reliable test, say so and suggest an alternative (like a before/after test with caveats).
```

## How to use it

1. **Pick a page type with many similar pages**; tests on a handful of pages are rarely conclusive.
2. **Record the baseline** in Search Console before changing anything.
3. **Don't change other things** on those pages during the test.

## Tips

- Log the exact date each change went live; Google may take days to recrawl.
- Share losing tests too; knowing what doesn't work saves future effort.
