---
title: Van Westendorp pricing survey and analysis
date: 2026-11-23
category: research
description: "A ChatGPT prompt for a Van Westendorp pricing survey: the four price questions, screening, sample tips and how to read the acceptable price range."
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [pricing research, van westendorp, survey, willingness to pay]
---

The Van Westendorp price sensitivity method asks four simple questions to find a range of prices customers see as acceptable. It is quick and cheap, but easy to run badly. This prompt writes the full survey for your product, with screening and context questions, and explains how to analyze the answers and what the results can and cannot tell you.

## Prompt

```prompt
Act as a pricing researcher. Help me run a Van Westendorp price sensitivity survey.

Product or service and what's included: [PRODUCT AND WHAT'S INCLUDED]
Target customers: [TARGET CUSTOMERS]
Price unit: [UNIT, e.g. per month, per user per year, one-off]
Competing options customers know: [ALTERNATIVES, described generically]
How I'll reach respondents: [CHANNEL, e.g. customer list, panel, website]

Write:
1. A short product description to show before the price questions, neutral and clear.
2. Screening questions to make sure respondents are real potential buyers.
3. The four Van Westendorp questions (too expensive, expensive, cheap, too cheap) worded for this product and unit.
4. 2–3 optional follow-up questions (e.g. purchase likelihood at a given price).
5. Analysis steps: how to clean the data, plot the cumulative curves and read the acceptable range and key intersection points, in a spreadsheet.
6. Limits of the method and what other research would confirm the result.
Do not suggest a final price; help me collect and read the data.
```

## How to use it

1. **Show a clear description** before the questions so everyone prices the same thing.
2. **Remove illogical answers** (for example "cheap" higher than "expensive") before analysis.
3. **Treat the range as a guide** and test real prices on a landing page or with sales.

## Tips

- Turn the range into packages with the [pricing tiers strategy](/prompts/pricing-tiers-strategy/) prompt.
- Check how competitors price with the [competitor pricing research](/prompts/competitor-pricing-research/) prompt.
