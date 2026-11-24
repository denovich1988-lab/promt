---
title: Draft a data protection impact assessment
date: 2026-11-24
category: legal
description: A ChatGPT prompt to draft a data protection impact assessment (DPIA) — processing description, necessity, risks to people and mitigations.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [dpia, gdpr, privacy, data protection]
---

Under the GDPR and similar laws, processing that is likely to create a high risk for people, such as large-scale tracking, sensitive data or new technology, needs a data protection impact assessment before it starts. Starting from a blank template is slow. This prompt turns a description of your project into a structured DPIA draft for your privacy lead or lawyer to review.

## Prompt

```prompt
Act as a privacy specialist. Draft a data protection impact assessment (DPIA).

Organization and role (controller or processor): [ORGANIZATION]
Project or system: [PROJECT]
Purpose of the processing: [PURPOSE]
Personal data involved and whose (customers, staff, children): [DATA AND PEOPLE]
Data sources, storage location, retention period: [DATA FLOW]
Third parties and vendors with access: [THIRD PARTIES]
Legal basis we plan to rely on: [LEGAL BASIS]
Laws that apply (GDPR, UK GDPR, other): [LAWS]
Security measures in place: [SECURITY MEASURES]

Draft:
1. Description of the processing: nature, scope, context and purposes.
2. Why a DPIA is needed here.
3. Necessity and proportionality: legal basis, data minimization, retention, transparency, rights handling.
4. Risk register: risks to individuals, likelihood, severity, overall risk.
5. Measures to reduce each risk and the residual risk.
6. Open questions and items that need a decision.
7. Sign-off section (DPO advice, approver, review date).
Use only the facts I gave you and mark gaps with {INFO NEEDED}. This is a draft for review by our DPO or legal counsel, not legal advice.
```

## How to use it

1. **Describe the data flow in detail**, including vendors and where data is stored.
2. **Fill every {INFO NEEDED} gap** with the project team.
3. **Have your DPO or lawyer review** and keep the signed DPIA on file.

## Tips

- Answer access requests with the [data subject access request reply](/prompts/data-subject-access-request-reply/) prompt.
- Update your public notice with the [privacy policy draft](/prompts/privacy-policy-draft-website/) prompt.
