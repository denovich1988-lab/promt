---
title: Help center article from support tickets
date: 2026-11-20
category: customer-service
description: Turn repeated customer questions into a clear help article with steps, screenshot notes and troubleshooting, to cut repeat tickets.
models: [ChatGPT, Claude, Gemini]
level: Beginner
tags: [help center, knowledge base, support]
---

When the same question arrives every day, a good help article saves your team hours. Many articles fail because they're written by experts who skip steps. This prompt uses real customer wording from tickets to write a step-by-step article that customers can follow on their own.

## Prompt

```prompt
You are a technical writer for customer support. Write a help center article.

Product: [PRODUCT NAME AND TYPE]
Problem or task customers ask about: [TOPIC]
Example tickets (paste 3–5, remove personal data): [TICKETS]
Correct solution steps from the support team: [STEPS]
Known exceptions or edge cases: [EXCEPTIONS]

Write:
1. A title phrased the way customers ask it (e.g. "How do I…" or "Why can't I…").
2. A one-sentence summary of the answer.
3. Numbered steps, one action per step, with {SCREENSHOT: what to show} notes.
4. A "Troubleshooting" section: 3–5 common reasons it doesn't work and fixes.
5. "Still need help?" with what info to include when contacting support.
6. 5 search keywords and related article ideas.

Rules: use simple words, no internal jargon. Only use the steps provided; mark unclear steps {CHECK WITH SUPPORT}.
```

## How to use it

1. **Remove names, emails and order numbers** from the tickets before pasting.
2. **Follow the steps yourself** in the product to confirm they work.
3. **Link the article in saved replies** so agents can send it quickly.

## Tips

- Track tickets on this topic for a month to see if the article helps.
- Ask for a short version for an in-app tooltip.
