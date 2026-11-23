---
title: Inclusion and exclusion criteria for a systematic review
date: 2026-11-23
category: research
description: Draft inclusion and exclusion criteria for a systematic review with ChatGPT, using PICO, with screening questions and edge cases to agree on.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [systematic review, inclusion criteria, pico, research methods]
---

Clear inclusion and exclusion criteria decide which studies make it into a systematic review, and vague criteria lead to inconsistent screening between reviewers. This prompt turns your research question into structured criteria using PICO (or a similar framework), writes screening questions and lists the edge cases your team should agree on before screening starts.

## Prompt

```prompt
You are a research methods advisor. Help me define inclusion and exclusion criteria for a systematic review.

Research question: [QUESTION]
Field and type of review (systematic, scoping, rapid): [FIELD AND TYPE]
Framework to use: [PICO, PEO, SPIDER, or "suggest one"]
Study designs I expect: [DESIGNS]
Practical limits (languages, date range, databases): [LIMITS]

Create:
1. The question broken into the framework elements.
2. A table of inclusion and exclusion criteria for each element, plus study design, setting, language, date and publication type, with a reason for each.
3. Title-and-abstract screening questions answerable with yes / no / unsure.
4. Full-text screening criteria with exclusion reasons to record (for a PRISMA flow diagram).
5. 8 edge cases (for example, mixed populations, conference abstracts, preprints) and options for handling each.
6. A short pilot screening plan to check agreement between reviewers.
Note where choices should be justified in the protocol.
```

## How to use it

1. **Draft the criteria** before searching, and register or record your protocol if your field expects it.
2. **Pilot screen 20–50 records** with a second reviewer and refine unclear criteria.
3. **Log exclusion reasons** consistently for your flow diagram.

## Tips

- Build the search with the [literature search strategy](/prompts/literature-search-strategy/) prompt.
- Extract data from included studies with the [literature review matrix](/prompts/literature-review-matrix/) prompt.
