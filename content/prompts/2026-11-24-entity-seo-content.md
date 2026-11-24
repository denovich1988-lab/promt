---
title: Entity SEO checklist for topic coverage
date: 2026-11-24
category: seo
description: A ChatGPT prompt for entity SEO — find the entities, attributes and relationships a page should cover so search engines and AI understand it.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [entity seo, semantic seo, topical authority, content optimization]
---

Search engines and AI assistants understand content through entities — people, places, products, concepts — and how they relate. A page that mentions the right entities and explains their connections looks more complete than one stuffed with one keyword. This entity SEO prompt maps the entities and attributes a page should cover and checks your draft for gaps.

## Prompt

```prompt
Act as a semantic SEO specialist. Build an entity coverage plan for a page.

Target topic and main keyword: [TOPIC / KEYWORD]
Audience and search intent: [AUDIENCE / INTENT]
My page draft or outline (optional): [DRAFT]
Top-ranking page headings I collected (optional): [SERP HEADINGS]

Deliver:
1. The main entity and its type (product, concept, organization, place, person).
2. Related entities grouped by type, with why each matters for this topic.
3. Key attributes of the main entity readers expect (e.g. cost, duration, steps, ingredients, specifications).
4. Relationships to explain in plain sentences (X is used for Y, X is a type of Z).
5. Questions the page should answer to cover the topic fully.
6. A gap check of my draft: entities and attributes missing or only mentioned without explanation.
7. Schema.org types and properties that fit the page, and where internal links to related entity pages belong.
Do not suggest adding entities just for keywords; each must help the reader.
```

## How to use it

1. **Add the headings from top pages** for a more accurate gap check.
2. **Explain relationships in full sentences**, not lists of terms.
3. **Link to your own pages** about the related entities.

## Tips

- Plan the cluster around it with the [topical map](/prompts/topical-map-for-niche/) prompt.
- Add structured data with the [schema markup JSON-LD](/prompts/schema-markup-json-ld/) prompt.
