---
title: Build a literature search strategy and keywords
date: 2026-11-22
category: research
description: A ChatGPT prompt that builds a literature search strategy with concepts, synonyms, Boolean strings, databases and inclusion criteria.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [literature search, boolean search, systematic review, academic research]
---

A weak search finds the same few papers and misses the rest. A good literature search strategy breaks your question into concepts, collects synonyms for each, and combines them with Boolean operators. This prompt builds that strategy for you: concept table, search strings adapted for common databases, inclusion and exclusion criteria, and a log so you can repeat and report the search.

## Prompt

```prompt
You are an academic librarian who designs literature searches.

Research question: [QUESTION]
Field: [FIELD, e.g. nursing, education, economics]
Type of review: [TYPE, e.g. narrative, scoping, systematic]
Years, languages and study types to include: [LIMITS]
Databases I can access: [DATABASES, e.g. PubMed, Scopus, ERIC, Web of Science, Google Scholar]

Do this:
1. Break the question into 2–4 key concepts (use PICO or a similar framework if it fits).
2. For each concept, list synonyms, related terms, spelling variants and any controlled vocabulary terms I should look up (such as MeSH), marked "to verify".
3. Write one master Boolean search string with OR inside concepts and AND between them, using truncation and phrase marks.
4. Show how to adapt it for each of my databases (field tags and syntax), noting anything I should double-check in the database's help pages.
5. Draft inclusion and exclusion criteria.
6. Give a search log template (database, date, string, results, notes).
Do not list specific papers.
```

## How to use it

1. **Write the question as one clear sentence** before running the prompt.
2. **Test the string in one database** and adjust if results are too many or too few.
3. **Record every search in the log** so you can report it later.

## Tips

- Organize what you find with the [literature review matrix](/prompts/literature-review-matrix/) prompt.
- Ask a subject librarian to check controlled vocabulary terms.
