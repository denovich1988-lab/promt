---
title: Wardley map for business strategy
date: 2026-11-26
category: business
description: Build a Wardley map of your value chain in text, place each component by evolution, and find where to build, buy or outsource.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [wardley mapping, strategy, value chain, build vs buy]
---

Strategy discussions often go in circles because each person pictures the business differently. A Wardley map lays out what your customers need, the components that deliver it and how mature each component is, which makes build-buy-outsource choices and competitive moves easier to see. This prompt guides you through a text-based Wardley map for your business and turns it into strategic options.

## Prompt

```prompt
Act as a strategy consultant experienced in Wardley mapping. Help me map my business.

Business / product: [WHAT IT DOES]
Main user and their need: [WHO, WHAT THEY'RE TRYING TO ACHIEVE]
Components I know of: [E.G. ONBOARDING, PAYMENTS, DATA PLATFORM, CUSTOMER SUPPORT, RECOMMENDATION ENGINE, CLOUD HOSTING]
Competitors and market context: [BRIEF]
Strategic question: [E.G. WHAT SHOULD WE BUILD IN-HOUSE? WHERE CAN WE DIFFERENTIATE?]

Do this:
1. Build the value chain: user → need → components, ordered from visible to the user down to invisible infrastructure. Add obvious components I missed and mark them as suggestions.
2. Place each component on the evolution axis (genesis, custom-built, product/rental, commodity/utility) with a one-line reason.
3. Present the map as a table (component, depends on, visibility rank, evolution stage) and as a simple text/ASCII sketch.
4. Point out inertia, components we custom-build that are already commodities, and components likely to evolve in the next 2–3 years.
5. Give strategic options: where to build, buy or outsource, where to differentiate, and possible moves by competitors.
6. List assumptions I should test with my team.
```

## How to use it

1. **Start from the user need**, not from your org chart or product features.
2. **Debate the evolution placements** with your team; disagreement there is useful.
3. **Redraw the map** in a whiteboard tool and revisit it every quarter.

## Tips

- Components you spend most engineering time on but users never notice are a common outsourcing candidate.
- The map is a thinking tool; precise positions matter less than shared understanding.
