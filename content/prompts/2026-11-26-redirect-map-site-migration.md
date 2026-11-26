---
title: 301 redirect map for a site migration
date: 2026-11-26
category: seo
description: Match old URLs to the best new URLs for a site migration or redesign, flag pages with no match and output a ready-to-import 301 redirect map.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [301 redirects, site migration, technical seo, redesign]
---

During a redesign or domain move, the redirect map decides whether rankings and backlinks carry over. Matching hundreds of old URLs to new ones by hand is slow, and redirecting everything to the homepage throws value away. This 301 redirect map prompt matches old URLs to the closest new page by topic, flags orphans and outputs a table you can import into your server or CMS.

## Prompt

```prompt
Act as a technical SEO specialist handling a site migration. Build a 301 redirect map.

Migration type: [REDESIGN / NEW CMS / NEW DOMAIN / HTTPS / MERGING SITES]
Old URLs with titles (and traffic/backlinks if known):
[PASTE LIST — URL, TITLE, SESSIONS, REFERRING DOMAINS]
New URLs with titles:
[PASTE LIST — URL, TITLE]
Pages intentionally removed: [LIST OR "NONE"]
Redirect format needed: [E.G. CSV FOR A PLUGIN / APACHE .HTACCESS / NGINX / CLOUDFLARE BULK REDIRECTS]

Do this:
1. Match each old URL to the most relevant new URL by topic and intent (not just similar words). Give a confidence level: high / medium / low.
2. For old URLs with no good match, suggest the closest parent category or recommend 410 if the content is truly gone — never mass-redirect to the homepage.
3. Flag high-value old URLs (traffic or backlinks) with low-confidence matches for manual review.
4. Spot redirect chains and loops, and patterns that can be handled with one rule (e.g. /blog/YYYY/MM/slug → /blog/slug).
5. Output: a review table (old URL, new URL, confidence, note) and the final map in my requested format.
6. A post-launch check list: crawl old URLs, confirm 301 status and single hop, update internal links and sitemaps.
```

## How to use it

1. **Export every old URL** from a crawl, analytics and backlink tool, not just the sitemap.
2. **Review all medium and low matches** yourself before launch.
3. **Test the redirects on staging** with a crawler, then again right after launch.

## Tips

- Keep redirects in place long term; removing them later can lose backlink value.
- Update internal links to point straight at new URLs instead of relying on redirects.
