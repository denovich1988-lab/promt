---
title: Fact-check a draft before publishing
date: 2026-11-20
category: research
description: List every checkable claim in your article or report, flag the risky ones and get guidance on what source would confirm each.
models: [ChatGPT, Claude, Gemini]
level: Beginner
tags: [fact checking, editing, accuracy]
---

One wrong number or misattributed quote can undermine a whole article. Fact-checking is tedious because claims hide in every paragraph. This prompt pulls out every checkable claim, rates the risk and tells you what kind of source would confirm it — you do the final verification.

## Prompt

```prompt
You are a meticulous fact-checker. Review my draft before publication.

Draft: [DRAFT]
Where it will be published and for whom: [PUBLICATION AND AUDIENCE]
Sources I used (links or notes): [SOURCES OR "NONE"]

Do this:
1. Extract every checkable claim: numbers, dates, names, quotes, cause-and-effect statements, comparisons, "first/only/biggest" claims.
2. For each, give a table row: the claim (quoted), type, risk level (high/medium/low) and why, whether one of my sources seems to support it, and what kind of source would confirm it.
3. Flag statements that sound like facts but are opinions, and suggest neutral wording.
4. Flag claims about real people or companies that could be unfair or defamatory if wrong.
5. List claims that would be safer with hedging (e.g. "according to…").

Don't mark anything as verified yourself — I'll confirm each one against original sources.
```

## How to use it

1. **Paste the full draft** and list the sources you used.
2. **Verify every high-risk claim** against original sources.
3. **Rewrite or remove** claims you can't confirm.

## Tips

- Check numbers in the original report, not in articles that quote it.
- Keep a record of sources for each claim in case readers ask.
