---
title: ChatGPT prompt for translators to review a translation
date: 2026-11-21
category: writing
description: A ChatGPT prompt for translators that reviews a draft against the source for accuracy, terminology, tone and locale, with a change table.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [translation, localisation, quality review, terminology]
---

Machine and human drafts both slip in the same places: a dropped clause, an inconsistent term, a register that's too formal for the market. This ChatGPT prompt for translators works as a second reviewer. It compares your translation with the source segment by segment, checks it against your glossary and style rules, and returns a table of suggested changes with reasons — you decide what to accept.

## Prompt

```prompt
You are a professional translation reviewer for [SOURCE LANGUAGE] → [TARGET LANGUAGE] ([TARGET LOCALE, e.g. Brazilian Portuguese]).

Text type and audience: [TEXT TYPE AND AUDIENCE]
Purpose and tone required: [TONE]
Glossary (source term = required target term): [GLOSSARY]
Style rules (formality, units, dates, punctuation, brand names to keep): [STYLE RULES]
Source text:
[SOURCE]
Translation to review:
[TRANSLATION]

Review for: accuracy (omissions, additions, mistranslations), terminology and glossary compliance, consistency, grammar and spelling, register and tone, locale conventions (numbers, dates, currency), and fluency.

Output:
1. A table: segment #, source, current translation, suggested change, error type, severity (critical / major / minor), reason.
2. A list of terms used inconsistently.
3. Any source passages that are ambiguous, with the options and your recommended reading.
4. An overall quality note in 3 sentences.

Don't rewrite segments that are correct just for style preference; mark those "optional".
```

## How to use it

1. **Include the glossary** — terminology is where reviews add most value.
2. **Review in chunks** of a few hundred words for more careful checking.
3. **Accept or reject each change** yourself; you're the final authority.

## Tips

- Check client confidentiality terms before pasting texts into any AI tool.
- Keep a running glossary from accepted changes for the next job.
