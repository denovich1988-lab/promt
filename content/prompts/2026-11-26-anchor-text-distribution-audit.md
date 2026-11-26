---
title: Anchor text audit for backlinks and internal links
date: 2026-11-26
category: seo
description: Run an anchor text audit on your backlink or internal link export to spot over-optimized, generic and missing anchors, with a fix plan by page.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [anchor text, link building, internal links, seo audit]
---

Anchor text tells search engines what a linked page is about, but too many exact-match anchors can look manipulative and too many "click here" links waste the signal. This anchor text audit prompt analyses your exported backlink or internal link data, groups anchors by type, flags risky patterns and gives a page-by-page plan for internal links you control and outreach you can influence.

## Prompt

```prompt
Act as a technical SEO specialist. Audit the anchor text in my link data.

Website and niche: [DOMAIN, NICHE]
Data type: [BACKLINKS / INTERNAL LINKS / BOTH]
Export (columns: source URL, target URL, anchor text): [PASTE CSV OR TABLE]
Brand name and variations: [BRAND NAMES]
Priority pages and their target keywords: [URL – KEYWORD, ONE PER LINE]

Do this:
1. Classify every anchor as branded, exact match, partial match, naked URL, generic ("click here", "read more"), image/empty, or other.
2. Give a distribution table overall and for each priority page (counts and shares).
3. Flag risks: pages where exact-match anchors dominate, sudden clusters of identical anchors from unrelated sites, empty image anchors, and anchors that don't match the target page's topic.
4. Flag missed opportunities: priority pages with few internal links or only generic anchors.
5. Internal links fix plan (things I control): source page, current anchor, suggested anchor, target page. Vary wording naturally.
6. External links plan: which anchors to request in future outreach, and which harmful-looking links to review (not automatically disavow).
7. A short summary of the 5 actions with the biggest likely impact.

Use only the data I pasted. State the counts you based each conclusion on; don't guess at numbers you can't see.
```

## How to use it

1. **Export links** from your SEO tool or crawler with source URL, target URL and anchor columns.
2. **Start with internal links**: you can fix them today, and they often matter more than you'd think.
3. **Recheck in a month** with a fresh export to see whether the distribution moved.

## Tips

- Natural link profiles are mostly branded and naked URLs; there's no magic percentage, so look for outliers instead.
- Large exports may need splitting into chunks of a few hundred rows.
