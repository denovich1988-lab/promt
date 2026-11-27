---
title: JavaScript SEO audit for rendering and indexing
date: 2026-11-27
category: seo
description: Audit a JavaScript site for SEO rendering problems such as missing content, links, metadata and lazy loading, and get fixes ranked for developers.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [javascript seo, rendering, technical seo, indexing]
---

Sites built with React, Vue, Angular and similar frameworks can look perfect in a browser while search engines see an empty shell, missing links or the wrong title. The usual culprits are client-side rendering, links without real href attributes, content that loads only after a click, and metadata set too late. This JavaScript SEO audit prompt compares what's in the raw HTML with what renders, finds the gaps and ranks fixes your developers can act on.

## Prompt

```prompt
Act as a technical SEO specialist with front-end development experience. Audit this JavaScript site for SEO rendering and indexing problems.

Site and framework: [URL TYPE, E.G. REACT SPA / NEXT.JS / NUXT / ANGULAR]
Rendering method (if known): [CLIENT-SIDE / SERVER-SIDE / STATIC / HYBRID / DYNAMIC RENDERING]
Page type to audit: [E.G. PRODUCT PAGE, CATEGORY, BLOG POST]
Raw HTML (view-source) excerpt: [PASTE THE <HEAD> AND MAIN BODY OF THE RAW HTML]
Rendered HTML excerpt (from a URL inspection tool or headless browser): [PASTE]
Symptoms: [E.G. PAGES "CRAWLED – CURRENTLY NOT INDEXED", WRONG TITLES IN RESULTS, PRODUCTS MISSING FROM SEARCH]

Check and report on:
1. Content parity: main text, headings, product data and reviews present in raw vs. rendered HTML.
2. Links: internal links use <a href> with crawlable URLs (no onclick-only links, no # routes).
3. Metadata: title, meta description, canonical, robots meta, hreflang and structured data, and whether they exist before or only after JavaScript runs.
4. Status codes: soft 404s on missing pages, client-side redirects.
5. Lazy loading and infinite scroll: whether content and images are discoverable without user interaction.
6. Blocked resources: JS/CSS/API endpoints blocked by robots.txt.
7. Performance issues that delay rendering (bundle size, hydration, long tasks).
Output: a findings table (issue, evidence from my HTML, SEO impact, fix, effort) sorted by impact, then a recommended rendering approach for this site with trade-offs.
```

## How to use it

1. **Grab both versions of the page**: view-source for raw HTML and a URL inspection or headless render for the final HTML.
2. **Audit one template at a time**, since issues usually repeat across all pages of a type.
3. **Re-test after each fix** with the same comparison before rolling out site-wide.

## Tips

- Server-side or static rendering for key templates removes most JavaScript SEO risk.
- Search engines render JavaScript, but rendering can be delayed; don't rely on it for critical content and links.
