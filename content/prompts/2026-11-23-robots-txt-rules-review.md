---
title: Robots.txt rules written and checked for SEO
date: 2026-11-23
category: seo
description: "A ChatGPT prompt for robots.txt: write or review rules for your site, catch lines that block important pages, and handle AI crawlers and sitemaps."
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [robots.txt, technical seo, crawling, ai crawlers]
---

One wrong line in robots.txt can stop search engines from crawling a whole section of your site. This ChatGPT prompt for robots.txt writes a clean file for your setup or reviews the one you have, explains each rule in plain English, flags risky lines, and covers sitemaps and AI crawler choices.

## Prompt

```prompt
Act as a technical SEO. Help me with my robots.txt file.

Site URL and platform: [SITE URL AND CMS]
Current robots.txt (paste it, or write "none"): [CURRENT FILE]
Sections that must be crawled: [IMPORTANT SECTIONS, e.g. /products/, /blog/]
Sections I want to keep crawlers out of: [SECTIONS TO BLOCK, e.g. cart, internal search, admin, staging paths]
Sitemap URL(s): [SITEMAP URLS]
My choice on AI crawlers: [AI CRAWLER POLICY, e.g. allow all, block training crawlers, undecided]

Do this:
1. Explain each existing rule in plain English and flag any that block important pages, CSS or JavaScript.
2. Write a recommended robots.txt with comments explaining each block.
3. Explain the difference between blocking crawling and keeping a page out of search results (noindex), and which pages need which.
4. If I'm undecided on AI crawlers, list the main options and trade-offs, and note that user-agent names change, so I should check each company's current documentation.
5. A test plan: what to check in Google Search Console after publishing.
```

## How to use it

1. **Paste the live file** from yoursite.com/robots.txt.
2. **Test changes** with the robots.txt report in Search Console before relying on them.
3. **Never block pages you want removed from search**; use noindex instead so crawlers can see it.

## Tips

- Check the rest of your setup with the [technical SEO audit checklist](/prompts/technical-seo-audit-checklist/).
- Moving domains? Robots.txt is one step in the [website migration SEO checklist](/prompts/website-migration-seo-checklist/).
