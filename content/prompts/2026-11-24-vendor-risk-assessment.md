---
title: Vendor risk assessment questionnaire and scoring
date: 2026-11-24
category: business
description: A ChatGPT prompt for vendor risk assessment — a tiered questionnaire on security, privacy, finance and continuity, with scoring and follow-ups.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [vendor risk assessment, third-party risk, procurement, security review]
---

Every new supplier with access to your data, systems or operations adds risk. A vendor risk assessment checks security, privacy, financial health and business continuity before you sign — scaled to how critical the vendor is. This prompt builds a tiered questionnaire, a scoring method and follow-up actions you can reuse for every new vendor.

## Prompt

```prompt
Act as a third-party risk manager. Build a vendor risk assessment.

Our company, industry and regulations we follow: [CONTEXT]
Vendor and service: [VENDOR / SERVICE]
What they will access (data types, systems, physical sites): [ACCESS]
How critical the service is to operations: [CRITICALITY]
Documents the vendor can provide (certifications, reports, policies): [DOCUMENTS]

Deliver:
1. A tiering rule (low / medium / high risk) based on data access and criticality, and the tier for this vendor.
2. A questionnaire for that tier grouped by: information security, data privacy, access control, incident response, business continuity, subcontractors, financial stability, legal and compliance. Keep questions specific and answerable.
3. Evidence to request for each section.
4. A scoring method and what score triggers approval, conditions, or rejection.
5. Contract clauses to consider (data protection, breach notification, audit rights, exit plan) to review with legal.
6. A reassessment schedule and monitoring triggers.
```

## How to use it

1. **Tier vendors first** so low-risk tools do not get a 200-question review.
2. **Ask for evidence**, not just yes/no answers.
3. **Track conditions** you agreed and check them at renewal.

## Tips

- Compare shortlisted suppliers with the [vendor comparison scoring matrix](/prompts/vendor-comparison-scoring-matrix/) prompt.
- For personal data processing, also complete a [data protection impact assessment](/prompts/data-protection-impact-assessment/).
