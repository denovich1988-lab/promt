---
title: Core Web Vitals fix plan from your report
date: 2026-11-23
category: seo
description: "A ChatGPT prompt for Core Web Vitals: turn PageSpeed or Search Console data into a prioritized LCP, INP and CLS fix plan for developers."
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [core web vitals, page speed, technical seo, lcp]
---

Core Web Vitals reports list failing URLs and metrics, but they rarely tell you what to fix first or how to explain it to a developer. This ChatGPT prompt for Core Web Vitals reads your PageSpeed Insights or Search Console data, groups problems by page template, names the likely causes of slow LCP, poor INP and layout shift, and turns them into a short, prioritized ticket list.

## Prompt

```prompt
Act as a technical SEO and web performance specialist.

Site and platform: [SITE URL AND CMS OR FRAMEWORK, e.g. Shopify, WordPress, Next.js]
Page templates affected: [TEMPLATES, e.g. product page, blog post, category]
Core Web Vitals data (paste PageSpeed Insights or Search Console output, field data first): [DATA]
Main third-party scripts we use: [SCRIPTS, e.g. chat widget, analytics, ads, reviews]
Developer time available: [TIME, e.g. 2 days per month]

Do this:
1. Summarize which metric fails (LCP, INP, CLS) on which template, using field data over lab data where both exist.
2. For each failing metric, list the 2–4 most likely causes based on the data, and say how to confirm each one.
3. Write a prioritized fix list as tickets: title, template, what to change, expected effect (high/medium/low), effort (S/M/L), how to verify.
4. Flag fixes that need a developer versus ones a marketer can do in the CMS.
5. Give a 4-week rollout order that fits the time available, and what to re-measure after each step.
Do not invent numbers that are not in my data. If the data is missing something important, say what to collect.
```

## How to use it

1. **Paste field data** (the "real users" section) first; lab scores alone can mislead.
2. **Group by template**, not by URL, so one fix helps hundreds of pages.
3. **Re-test after each ticket** and note that field data takes about 28 days to fully update.

## Tips

- Run the full [technical SEO audit checklist](/prompts/technical-seo-audit-checklist/) if speed is not the only problem.
- Planning a replatform? Use the [website migration SEO checklist](/prompts/website-migration-seo-checklist/) prompt.
