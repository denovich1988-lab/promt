---
title: UTM naming convention for campaign tracking
date: 2026-11-23
category: data
description: "Create a UTM naming convention with ChatGPT: rules for source, medium, campaign and content, examples for your channels, and a builder sheet."
models: [ChatGPT, Claude, Gemini]
level: Beginner
tags: [utm parameters, analytics, campaign tracking, marketing data]
---

Messy UTM tags break your analytics: "Facebook", "facebook" and "fb" show up as three sources and your campaign reports never add up. This prompt creates a UTM naming convention for your team, with clear rules, examples for every channel you use and a simple spreadsheet layout to build links consistently.

## Prompt

```prompt
You are a marketing analytics specialist. Create a UTM naming convention for my team.

Business and analytics tool: [BUSINESS AND TOOL, e.g. GA4]
Channels we use: [CHANNELS, e.g. newsletter, Meta ads, LinkedIn organic, partners, QR codes]
Typical campaigns: [CAMPAIGN EXAMPLES]
Current messy tags we see (if any): [CURRENT TAGS, or "none"]

Create:
1. Rules for each parameter (utm_source, utm_medium, utm_campaign, utm_content, utm_term): allowed values, lowercase, separators, date format.
2. A table of approved source and medium pairs for each channel, matching default channel groupings where possible.
3. A campaign naming pattern with 5 examples.
4. 10 example full URLs for our channels.
5. Spreadsheet columns for a UTM builder with formulas that join the parts and force lowercase.
6. Common mistakes to avoid (tagging internal links, spaces, inconsistent casing) and how to clean up past data.
```

## How to use it

1. **List every channel** your team posts links on.
2. **Build the spreadsheet** and share it as the only place to create links.
3. **Check your source/medium report monthly** for tags that break the rules.

## Tips

- Decide which numbers to watch with the [weekly KPI dashboard metrics](/prompts/weekly-kpi-dashboard-metrics/) prompt.
- Compare channel results against spend with the [marketing budget allocation](/prompts/marketing-budget-allocation/) prompt.
