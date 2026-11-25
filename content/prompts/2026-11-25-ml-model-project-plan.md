---
title: ChatGPT Prompts for Data Science Model Planning
date: 2026-11-25
category: data
description: Plan a machine learning project with ChatGPT — problem framing, baseline, features, validation, metrics and risks — before you write any model code.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [chatgpt prompts for data science, machine learning, model planning, data science]
---

Many data science projects fail before modeling starts: the wrong target, a leaky feature, a metric the business doesn't care about or no baseline to beat. These ChatGPT prompts for data science focus on that planning stage. You describe the business problem and data; it frames the prediction task, proposes a baseline and features, designs validation and lists risks such as leakage and bias.

## Prompt

```prompt
Help me plan a machine learning project before coding.

Business problem and decision the model will support: [e.g. which customers to contact to reduce churn]
Who uses the output and how: [USERS + ACTION]
Data available (tables, key columns, rows, time span): [DATA DESCRIPTION]
Label or outcome, if defined: [TARGET]
Constraints: [e.g. must be explainable, real-time scoring, privacy rules]

1. Problem framing: prediction task type, exact target definition, prediction time point and horizon. Point out ambiguities.
2. Success metrics: a model metric and a business metric, and how they connect. Explain the cost of false positives vs false negatives.
3. A simple baseline to beat (rule-based or simple model).
4. Feature ideas grouped by source, and a leakage check: features that wouldn't be known at prediction time.
5. Validation design: split strategy (time-based if relevant), cross-validation, and how to avoid leakage across splits.
6. Candidate models from simple to complex, with trade-offs.
7. Risks: data quality, class imbalance, bias against groups, drift; and how to monitor after launch.
8. A 4-week plan with checkpoints.
```

## How to use it

1. **Define the decision first** — what someone will do with each prediction.
2. **Build the baseline** before any complex model.
3. **Review the leakage list** with someone who knows how the data is produced.

## Tips

- Paste column names and a few anonymized sample rows for more specific feature ideas.
- Re-run the prompt after exploring the data; the plan should change with what you find.
