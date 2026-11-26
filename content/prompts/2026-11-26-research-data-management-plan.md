---
title: Research data management plan
date: 2026-11-26
category: research
description: Draft a data management plan for a research project or grant, covering data types, storage, backup, documentation, sharing and preservation.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [data management plan, research data, grant writing, open science]
---

Many funders now require a data management plan (DMP), and it's often written in a rush the night before a deadline. A good DMP is specific: what data you'll create, where it's stored, how it's protected, and how and when it will be shared. This research data management plan prompt drafts each section from your project details and flags what to check with your institution.

## Prompt

```prompt
Act as a research data management specialist. Draft a data management plan.

Funder and template (if any): [E.G. FUNDER NAME, REQUIRED SECTIONS]
Project summary: [AIM, DURATION, TEAM AND INSTITUTIONS]
Data to be collected or created: [TYPES, FORMATS, ESTIMATED VOLUME, SOURCES]
Existing data reused: [DATASETS, LICENCES]
Sensitive data: [PERSONAL, HEALTH, COMMERCIAL, LOCATION — OR NONE]
Storage options available: [E.G. UNIVERSITY SERVER, APPROVED CLOUD, LAB DRIVES]
Sharing intentions: [WHAT, WHEN, WHERE — E.G. A DISCIPLINE REPOSITORY]

Write sections on:
1. Data description: types, formats (prefer open formats), volume.
2. Documentation and metadata: standards, README files, file naming and versioning.
3. Storage and backup during the project: locations, backup frequency, who has access.
4. Ethics, legal and security: consent for sharing, anonymisation, data protection, licences.
5. Sharing and access: what will be shared, repository, timing, licence, persistent identifiers, any restrictions with reasons.
6. Long-term preservation: what's kept, for how long, where.
7. Responsibilities and resources: roles and any costs.
Use the funder's headings if given. Mark institutional details I need to confirm with {CHECK WITH RDM TEAM}.
```

## How to use it

1. **Paste the funder's DMP template** so the output follows its headings.
2. **Ask your library or research data team** to confirm storage and repository details.
3. **Keep the DMP updated** as the project changes.

## Tips

- Name specific file formats and repositories; reviewers mark down generic plans.
- Plan consent wording for data sharing before you collect any personal data.
