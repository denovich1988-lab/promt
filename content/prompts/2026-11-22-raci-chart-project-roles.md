---
title: RACI chart that settles who owns what
date: 2026-11-22
category: business
description: A ChatGPT prompt for a RACI chart that maps tasks to roles, keeps one accountable owner per task and flags overloaded people and gaps.
models: [ChatGPT, Claude, Gemini]
level: Beginner
tags: [raci chart, responsibility matrix, project roles, team management]
---

"I thought you were doing that" is a sign a project needs a RACI chart. This ChatGPT prompt builds a RACI chart (Responsible, Accountable, Consulted, Informed) from your task list and team, checks that every task has exactly one accountable owner, and flags gaps, overloaded people and too many cooks before they slow the work down.

## Prompt

```prompt
You are a project manager. Build a RACI chart for my project.

Project and goal: [PROJECT]
Team members or roles (with their main job): [ROLES]
Main tasks, deliverables or decisions: [TASKS]
Known ownership questions or disagreements: [OPEN QUESTIONS]

Deliver:
1. A RACI table: tasks as rows, roles as columns, each cell R, A, C, I or blank.
2. Rules applied: exactly one A per task; at least one R per task; keep C to people whose input is really needed.
3. A check: tasks with no clear owner, roles with too many R or A (overload), tasks with too many C (slow decisions), and roles that appear nowhere.
4. Suggested fixes for each problem.
5. A short explanation of each letter in plain language that I can share with the team.
6. The 3 ownership questions the team should settle in the kickoff meeting.
If a task is too broad to assign, split it and say so.
```

## How to use it

1. **List tasks at a useful level**, deliverables or decisions rather than tiny to-dos.
2. **Review the draft with the team** in the kickoff; agreement matters more than the table.
3. **Revisit the chart** when people join or leave the project.

## Tips

- If two people insist on being accountable, escalate to the project sponsor.
- Break the work down first with the [project plan WBS prompt](/prompts/project-plan-wbs-milestones/).
- Map wider interests with the [stakeholder analysis prompt](/prompts/stakeholder-analysis-map/).
