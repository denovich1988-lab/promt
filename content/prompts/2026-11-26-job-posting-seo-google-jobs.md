---
title: Job posting SEO prompt for Google job search
date: 2026-11-26
category: seo
description: Optimize a job posting for Google's job search results with a clear title, structured description and JobPosting schema markup.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [job posting seo, jobposting schema, recruitment marketing, google jobs]
---

Many candidates start their search on Google, which can show job listings in a special job search experience when the careers page uses JobPosting structured data. Creative titles like "Code Ninja" and vague descriptions make postings hard to find. This job posting SEO prompt rewrites your listing with a searchable title, a well-structured description and valid JobPosting schema markup, so your careers page has a better chance of appearing when people search for roles like yours.

## Prompt

```prompt
Act as a recruitment marketing and technical SEO specialist. Optimize this job posting for search.

Current job posting: [PASTE]
Company and careers page URL: [COMPANY, URL]
Location and work type: [CITY, STATE/COUNTRY, ON-SITE / HYBRID / REMOTE, ELIGIBLE COUNTRIES IF REMOTE]
Employment type and salary range: [FULL-TIME / PART-TIME / CONTRACT, PAY RANGE AND UNIT]
Date posted and closing date: [DATES]

Deliver:
1. 3 job title options using the terms candidates actually search for (no internal jargon), with the recommended one.
2. A rewritten description with clear sections: summary, responsibilities, requirements, nice-to-haves, pay and benefits, how to apply. Mention the job title and location naturally.
3. Complete JobPosting JSON-LD: title, description (HTML allowed), datePosted, validThrough, employmentType, hiringOrganization, jobLocation or applicantLocationRequirements and jobLocationType for remote, baseSalary, directApply if true.
4. A checklist: one job per page, schema matches visible content, expired jobs removed or marked, page indexable, included in the sitemap.
5. Tips to improve click-through from the listing (pay transparency, clear location).

Only use information I gave; leave missing fields out of the schema rather than inventing them.
```

## How to use it

1. **Paste the full current posting** and confirm salary and location details.
2. **Test the JSON-LD** with Google's Rich Results Test before publishing.
3. **Remove or update the schema** when the job closes.

## Tips

- Google's documentation lists the required and recommended JobPosting properties; check it, as rules change.
- Pay-range transparency may be required by law in some locations.
