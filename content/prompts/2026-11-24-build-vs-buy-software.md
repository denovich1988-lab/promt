---
title: Build vs buy software decision analysis
date: 2026-11-24
category: business
description: A ChatGPT prompt for a build vs buy software decision — compare cost, time, risk and fit over three years and get a clear recommendation.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [build vs buy, software decision, total cost of ownership, strategy]
---

Teams often choose to build internal software because it looks cheaper, then discover the real cost is years of maintenance. Others buy a tool that never fits their process. This build vs buy software prompt compares both paths on total cost of ownership, time to value, risk and strategic fit, so the decision is based on numbers and clear criteria.

## Prompt

```prompt
Act as a CTO and finance partner. Help me decide whether to build or buy.

What we need the software to do: [REQUIREMENTS]
Why it matters to the business: [BUSINESS GOAL]
Vendor options and their pricing: [VENDORS / PRICING]
Our team: developers available, skills, day rate or salary cost: [TEAM / COSTS]
Estimated build effort (if known): [ESTIMATE OR "UNKNOWN"]
Integrations and security or compliance needs: [INTEGRATIONS / COMPLIANCE]
Timeline: [DEADLINE]

Deliver:
1. A 3-year total cost of ownership for build and for each buy option: initial cost, licenses, hosting, maintenance (assume a stated % of build cost per year), support, training and switching cost. Show formulas and assumptions.
2. Time to value for each option.
3. A scoring matrix: fit to requirements, strategic differentiation, risk, control, vendor stability, scalability.
4. A hybrid option (buy and extend, or build on a platform).
5. A recommendation with the 3 conditions that would change it.
6. Questions to ask vendors and questions to ask engineering before deciding.
Use only the numbers I give; mark every estimate as an assumption.
```

## How to use it

1. **Get real vendor quotes**, including implementation fees.
2. **Ask engineering for a range**, not one number, and include maintenance.
3. **Ask whether it differentiates you** — build only what makes you different.

## Tips

- Score the shortlisted vendors with the [vendor comparison scoring matrix](/prompts/vendor-comparison-scoring-matrix/) prompt.
- Share the result using the [decision memo](/prompts/decision-memo-compare-options/) format.
