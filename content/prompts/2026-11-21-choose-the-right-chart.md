---
title: Choose the right chart for your data
date: 2026-11-21
category: data
description: Get a recommended chart type for your data and message, with layout, labels and colour advice — and the charts you should avoid.
models: [ChatGPT, Claude, Gemini]
level: Beginner
tags: [data visualization, charts, reporting]
---

The same numbers can be clear or confusing depending on the chart. Pie charts with ten slices, 3D bars and double axes are common ways to hide the point. This prompt starts from the message you want people to take away, then recommends a chart, how to set it up, and a title that states the finding.

## Prompt

```prompt
You are a data visualisation expert. Recommend the best way to chart my data.

What the data contains (columns, units, time range, number of rows): [DATA DESCRIPTION]
A sample of the data: [SAMPLE ROWS]
The message I want the audience to understand: [KEY MESSAGE]
Audience and where it will be shown (slide, report, dashboard): [AUDIENCE AND FORMAT]
Tool I'll use: [TOOL, E.G. EXCEL, GOOGLE SHEETS, POWER BI]

Do this:
1. Name the type of comparison (change over time, ranking, part-to-whole, distribution, relationship, geography).
2. Recommend the best chart type and one alternative, with reasons.
3. Explain the setup: what goes on each axis, sorting, scale (start at zero or not, and why), and any grouping or filtering.
4. Write a title that states the finding, plus axis labels and one annotation that points to the key insight.
5. Give colour advice: one highlight colour for what matters, grey for the rest, colour-blind friendly.
6. Name charts to avoid for this data and why.
7. Give step-by-step instructions to build it in my tool.

If the message isn't supported by the sample data, tell me.
```

## How to use it

1. **Write the key message first** in one sentence.
2. **Paste 10–20 sample rows**, not the whole file.
3. **Build the chart** and show it to someone for five seconds: can they repeat the message?

## Tips

- A clear table beats a chart when people need exact values.
- Remove gridlines, borders and legends you don't need; label lines directly.
