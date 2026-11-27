---
title: Fishbone diagram root cause analysis
date: 2026-11-27
category: business
description: Run a fishbone (Ishikawa) root cause analysis on any problem, with causes grouped by category, 5 Whys on the top suspects and a plan to test each one.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [root cause analysis, fishbone diagram, problem solving, process improvement]
---

When a problem keeps coming back, teams often fix the most visible symptom and move on. A fishbone diagram (also called an Ishikawa diagram) spreads out every possible cause by category so you can see the whole picture before choosing what to fix. This root cause analysis prompt builds the diagram as text, digs deeper on the likeliest causes with 5 Whys, and ends with checks to confirm the real cause using data.

## Prompt

```prompt
Act as a process improvement facilitator.

Problem statement: [DESCRIBE THE PROBLEM: WHAT, WHERE, WHEN, HOW OFTEN, SINCE WHEN]
Impact: [E.G. 12% OF ORDERS SHIP LATE, CUSTOMER COMPLAINTS UP]
Context: [TEAM, PROCESS, TOOLS, RECENT CHANGES]
What we already know or suspect: [NOTES, DATA, OBSERVATIONS]
Category set: [6M FOR MANUFACTURING: METHODS, MACHINES, MATERIALS, MEASUREMENT, MANPOWER, MOTHER NATURE / 4P FOR SERVICES: POLICIES, PROCEDURES, PEOPLE, PLANT / OR SUGGEST ONE]

Please:
1. Rewrite the problem statement so it is specific and free of assumed causes.
2. Build a fishbone diagram as an indented text outline: categories, then possible causes, then sub-causes.
3. Mark each cause as "supported by evidence", "plausible" or "unlikely", based on what I gave you.
4. Pick the top 3 likely root causes and run a 5 Whys chain on each.
5. For each top cause, say what data or test would confirm or rule it out.
6. Suggest a fix for each cause if confirmed, with an owner role and a way to measure success.
7. List questions I should ask the people closest to the process.

Don't treat guesses as facts. Separate what we know from what we suspect.
```

## How to use it

1. **Run the prompt before a team session** to get a starting diagram, then add causes people raise in the room.
2. **Collect the data the AI suggests** to confirm or rule out the top causes.
3. **Fix confirmed causes only**, and track the measure for a few weeks to check the problem doesn't return.

## Tips

- Invite people who do the work every day; they know causes no report shows.
- If many causes look equally likely, follow up with a Pareto count of how often each one happens.
