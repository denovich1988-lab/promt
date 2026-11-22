---
title: Boolean search strings for recruiters
date: 2026-11-22
category: hr
description: A ChatGPT prompt that builds Boolean search strings for sourcing candidates on LinkedIn, job boards and Google, with variations to widen or narrow results.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [boolean search, sourcing, recruiting, talent acquisition]
---

Good sourcing starts with a good search, but Boolean strings get long and fiddly fast. This ChatGPT prompt builds Boolean search strings for recruiters from a job description, with synonyms for titles and skills, exclusions for wrong matches, and versions for different platforms, plus tighter and broader variations so you can adjust the number of results.

## Prompt

```prompt
You are an expert technical sourcer. Build Boolean search strings for this role.

Job title and level: [ROLE]
Must-have skills and experience: [MUST HAVES]
Nice-to-have skills: [NICE TO HAVES]
Location or remote rules: [LOCATION]
Titles or profiles to exclude (e.g., recruiters, interns, sales roles): [EXCLUDE]
Where I'll search (LinkedIn, a job board's resume database, Google X-ray): [PLATFORMS]

Deliver:
1. Lists of synonyms: alternative job titles, skill spellings and abbreviations, related tools.
2. A main Boolean string using AND, OR, NOT (or -), quotation marks and parentheses.
3. A narrow version (fewer, closer matches) and a broad version (more results).
4. Platform versions, adjusted for each platform's syntax and any length limits I should check.
5. A Google X-ray search for public profiles, if I listed Google.
6. Tips for refining if results are too many, too few or off-target.
Avoid search terms that filter by age, gender, ethnicity or other protected characteristics.
```

## How to use it

1. **Paste the real must-haves**, not the whole wish list, so the string isn't too narrow.
2. **Test the narrow and broad versions** and note the result counts.
3. **Check each platform's current search syntax and limits**; they differ and can change.

## Tips

- Save strings that work for roles you hire often.
- Write the posting itself with the [job description prompt](/prompts/job-description-that-attracts/).
- Reach out to candidates with the [prompts for recruiters page](/prompts/chatgpt-prompts-for-recruiters/).
