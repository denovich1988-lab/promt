---
title: Build a support ticket tagging system
date: 2026-11-24
category: customer-service
description: A ChatGPT prompt for support ticket categories and tags — a clean taxonomy from real tickets, tagging rules, examples and reports it unlocks.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [ticket tagging, support operations, help desk, customer service]
---

Messy ticket tags make support reports useless: "billing", "Billing issue" and "payment" all mean the same thing. A clear tagging system shows what customers struggle with and where to fix the product. This prompt builds support ticket categories and tags from a sample of your real tickets.

## Prompt

```prompt
Act as a support operations manager. Build a ticket tagging system.

Product or service: [PRODUCT]
Help desk tool: [TOOL]
Current tags or categories (if any): [CURRENT TAGS]
Sample of recent tickets (subject + first line, personal data removed):
[TICKET SAMPLE]
Reports we want (top contact reasons, bugs, feature requests, refunds): [REPORTS]

Produce:
1. A two-level taxonomy: 6–10 main categories, each with 3–6 sub-tags, with a one-line definition each.
2. Separate fields for things that are not topics (priority, channel, sentiment, customer tier).
3. Tagging rules: one main category per ticket, what to do with mixed tickets, and an "other" policy.
4. Each sample ticket tagged, to test the taxonomy, with any that do not fit.
5. A mapping from current tags to new ones.
6. Three reports the new tags make possible.
Keep names short and unambiguous.
```

## How to use it

1. **Paste 50–100 recent tickets** with personal data removed.
2. **Test the tags with your team** for a week before switching.
3. **Review the "other" tag monthly** and add categories when patterns appear.

## Tips

- Draft replies for the top categories with the [customer service macros](/prompts/customer-service-macros/) prompt.
- Turn bug tickets into reports with the [bug report from user complaint](/prompts/bug-report-from-user-complaint/) prompt.
