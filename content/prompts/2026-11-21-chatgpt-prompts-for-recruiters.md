---
title: ChatGPT prompt for recruiters to source and message
date: 2026-11-21
category: hr
description: A ChatGPT prompt for recruiters that turns a job brief into Boolean searches, a candidate profile and personal outreach messages.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [recruiting, sourcing, boolean search, candidate outreach]
---

Sourcing eats a recruiter's week: decoding the hiring manager's brief, building search strings and writing messages candidates actually answer. This ChatGPT prompt for recruiters does the first draft of all three from one job brief — a clear candidate profile, Boolean strings with synonyms, and outreach messages that mention what's specific about the role instead of "exciting opportunity".

## Prompt

```prompt
You are an experienced technical and corporate recruiter. Help me source for this role.

Job title and level: [ROLE]
Job description or hiring manager notes: [JD OR NOTES]
Must-have skills: [MUST-HAVES]
Nice-to-have skills: [NICE-TO-HAVES]
Location / remote / visa rules: [LOCATION]
Salary range: [RANGE]
What makes this role attractive (team, product, growth, flexibility): [SELLING POINTS]

Deliver:
1. Candidate profile: likely current titles, companies or industries they'd come from, and adjacent backgrounds worth considering.
2. Boolean search strings: one for LinkedIn-style search, one for Google X-ray, one broader version. Include title and skill synonyms.
3. Screening questions: 5 short questions for a first call, each mapped to a must-have.
4. Outreach: a first message (max 90 words), a follow-up after 4 days, and a final note. Personalisation slots in [BRACKETS]. Mention the salary range if I gave one.
5. Red flags and green flags to look for in profiles, avoiding anything related to age, gender, ethnicity, disability, family status or other protected traits.
```

## How to use it

1. **Paste the hiring manager's raw notes**, not only the polished job ad.
2. **Test each Boolean string** and tighten it if results are too broad.
3. **Personalise line one** of every message with something real from the profile.

## Tips

- Share the candidate profile with the hiring manager to align before you source.
- Pair it with our [structured interview questions prompt](/prompts/structured-interview-scorecard/).
- Check sourcing practices against your local privacy rules.
