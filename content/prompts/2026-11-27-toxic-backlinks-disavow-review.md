---
title: Toxic backlinks review before you disavow
date: 2026-11-27
category: seo
description: Review a suspicious backlink profile, separate harmless spam from real risk, and decide whether a disavow file is needed, with a correctly formatted file.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [backlinks, disavow, link audit, technical seo]
---

Every site collects spammy links from scraper sites and directories, and most of them are simply ignored by search engines. Disavowing too aggressively can throw away links that help. A disavow file is mainly for sites with a manual action for unnatural links, or a clear history of paid or manipulative link building. This toxic backlinks prompt reviews your link export with that in mind, explains each decision and only builds a disavow file when it's justified.

## Prompt

```prompt
Act as a senior SEO specialising in link audits. Review my backlink profile and decide whether to disavow.

Site: [DOMAIN, NICHE]
Manual action in Search Console: [YES — PASTE MESSAGE / NO]
History: [ANY PAID LINKS, PBNS, LINK SCHEMES, OLD SEO AGENCY WORK, NEGATIVE SEO SUSPECTED]
Traffic changes: [DATES OF DROPS, IF ANY, AND KNOWN ALGORITHM UPDATES AROUND THEM]
Backlink export: [PASTE REFERRING DOMAINS WITH ANCHOR TEXT, LINK TYPE, FIRST SEEN DATE, AND ANY TOOL SCORES]
Existing disavow file: [PASTE OR NONE]

Do this:
1. Say whether a disavow is likely needed at all, based on manual action status and history. If not, explain why and what to do instead.
2. Group referring domains: natural/good, low-quality but harmless (scrapers, auto-generated directories), and risky (paid links, link networks, exact-match anchor patterns, hacked pages). Give the evidence for each group.
3. Anchor text analysis: commercial exact-match anchors as a share of the profile and whether it looks manipulated.
4. Links I should try to get removed first (with an outreach email template).
5. If a disavow is justified: a correctly formatted disavow file (domain: lines for whole domains, URLs for single pages, comments with #), only for the risky group.
6. If there's a manual action: a reconsideration request outline documenting the clean-up.
Don't rely only on third-party "toxicity" scores; explain the reasoning.
```

## How to use it

1. **Export links from Search Console** plus any SEO tool you use, and combine them.
2. **Review the risky group by hand** before uploading anything.
3. **Keep a copy of every disavow file version** and the reasons behind each entry.

## Tips

- If you have no manual action and never built manipulative links, disavowing is usually unnecessary.
- Uploading a new disavow file replaces the old one, so always include the entries you want to keep.
