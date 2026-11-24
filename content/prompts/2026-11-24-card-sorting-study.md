---
title: Card sorting study to organize content
date: 2026-11-24
category: research
description: A ChatGPT prompt for a card sorting study — card list, open or closed method, participant tasks and analysis to build menus users understand.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [card sorting, information architecture, ux research, navigation]
---

Teams often organize websites and apps the way their company is organized, not the way users think. Card sorting asks real users to group topics and name the groups, which reveals their mental model. This card sorting study prompt prepares the card list, chooses between open and closed sorting, writes participant instructions and plans the analysis.

## Prompt

```prompt
Act as a UX researcher specialized in information architecture. Plan a card sorting study.

Product or website: [PRODUCT]
What we want to organize (pages, features, help topics, products): [CONTENT]
Content list (paste titles or descriptions): [ITEMS]
Users and their main goals: [USERS / GOALS]
Current categories, if any: [CURRENT CATEGORIES OR "NONE"]
Tool and number of participants: [TOOL / PARTICIPANTS]

Deliver:
1. Recommended method (open, closed or hybrid) and why.
2. A cleaned card list of 30–60 items with clear, jargon-free labels and no category words that bias grouping.
3. Participant instructions and a short pre-study and post-study questionnaire.
4. Recruitment criteria.
5. Analysis plan: similarity matrix, dendrogram, common group names, and how to handle items that people place inconsistently.
6. How to turn results into a draft navigation, and a follow-up tree test with 5–8 tasks.
```

## How to use it

1. **Write card labels carefully**; matching words in labels lead to biased groupings.
2. **Run a pilot** with two people to catch confusing cards.
3. **Validate the new menu** with a tree test before building it.

## Tips

- Use the findings in the [website navigation and site structure](/prompts/website-navigation-structure/) prompt.
- Aim for at least 15–20 participants for clearer patterns in open sorts.
