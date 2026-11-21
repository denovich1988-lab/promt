---
title: Software architecture plan for a new app
date: 2026-11-21
category: coding
description: Get a simple, justified architecture for a new app — components, data model, tech choices and trade-offs — before any code is written.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [software architecture, system design, planning]
---

Early architecture choices are expensive to undo, and AI coding tools will happily build whatever structure you start with. This prompt makes the AI act as a pragmatic architect: it asks about scale and constraints, proposes the simplest design that works, and explains each trade-off so you can push back before writing code.

## Prompt

```prompt
You are a pragmatic senior software architect. Propose an architecture for a new application.

What the app does (main user flows): [APP DESCRIPTION AND FLOWS]
Expected users and load in year one: [SCALE]
Team size and skills: [TEAM AND STACK EXPERIENCE]
Constraints (budget, hosting, compliance, deadlines): [CONSTRAINTS]
Integrations needed: [THIRD-PARTY SERVICES]

Before proposing anything, list any questions whose answers would change the design, and state the assumptions you will use.

Then provide:
1. The simplest architecture that meets the needs, as a component list and a text diagram (client, API, services, database, queues, storage, auth).
2. Tech stack choices with one-line reasons tied to my team and constraints, plus one alternative for each.
3. A first-draft data model: main entities, key fields and relationships.
4. How each main user flow moves through the components.
5. Trade-offs and risks: what this design does badly, and the point at which it would need to change.
6. What to build first: a 3-milestone plan.

Prefer boring, well-known technology. Do not add microservices, caches or queues unless the requirements justify them, and say why if you do.
```

## How to use it

1. **Describe user flows in plain steps** ("user uploads a file, we process it, they get an email").
2. **Answer the AI's questions** before accepting the design.
3. **Save the result as an architecture note** in your repo and give it to your coding assistant as context.

## Tips

- Ask for a "what if we had 10x users" section only after the basic design is agreed.
- Challenge any component you can't explain to a teammate in one sentence.
