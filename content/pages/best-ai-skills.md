---
title: "Best Claude Skills: What Agent Skills Are and Which to Use"
h1: Best Claude skills (Agent Skills) to try
description: What Claude Agent Skills are, how they differ from prompts and MCP servers, useful skills to start with, and how to write your own SKILL.md.
updated: 2026-11-18
schemaType: CollectionPage
faq:
  - q: "What is a Claude skill?"
    a: "A skill is a folder of instructions, and optionally scripts and resources, that Claude loads when a task needs it. It teaches Claude how to do a specific job well, such as creating a spreadsheet or following your brand guidelines."
  - q: "How is a skill different from a prompt?"
    a: "A prompt is something you paste into one conversation. A skill is saved and reused: Claude reads its short description and only loads the full instructions when the task matches."
  - q: "How is a skill different from an MCP server?"
    a: "An MCP server gives Claude access to a tool or data source. A skill gives Claude know-how — the steps and standards for a task. They work well together."
---

**Agent Skills** are reusable packages of know-how for Claude. Each skill is a folder with a `SKILL.md` file — a short description plus detailed instructions — and optional scripts, templates or reference files. Claude reads the descriptions of the skills it has, and loads a skill's full instructions only when a task calls for it.

Think of a prompt as a note you hand over once, and a skill as a training manual Claude keeps on the shelf.

## Skills vs prompts vs MCP servers

| | Prompt | Skill | MCP server |
|---|---|---|---|
| What it is | Text you paste into a chat | A saved folder of instructions and files | A connector to a tool or data source |
| Gives Claude | Instructions for one task | Know-how for a type of task | Access to a system |
| Reused automatically | No | Yes, when the task matches | Yes, when a tool is needed |
| Example | "Write a cover letter for this job" | "How we write cover letters, with our template" | Access to your Google Drive |

## Useful skills to start with

Anthropic publishes example skills in its public [skills repository](https://github.com/anthropics/skills). Commonly used ones include:

- **Document skills** for Word, Excel, PowerPoint and PDF files — creating and editing real office files with proper formatting.
- **Skill creator** — helps you write and test your own skills.
- **Frontend design** — guidance for building good-looking web interfaces.
- **MCP builder** — guidance for creating MCP servers.
- **Web app testing** — testing local web apps with a browser.
- **Brand guidelines and internal comms** — examples of encoding a company's style so every output matches it.

What's available, and where you turn skills on, depends on your Claude app and plan. Check Anthropic's documentation for the current setup.

## Skills worth writing for yourself

The most valuable skills are usually your own, because they capture how *you* do things:

- **Your writing style** — tone, words to avoid, examples of good work.
- **Recurring reports** — the structure, data sources and checks for a weekly or monthly report.
- **Brand assets** — colours, fonts, logo rules and approved phrases.
- **Team processes** — how you write proposals, review code or answer support tickets.

## How to write a SKILL.md

A skill needs a clear name, a description that says *when* to use it, and step-by-step instructions. Here's a starting template:

```prompt
---
name: [SKILL-NAME-IN-LOWERCASE-WITH-HYPHENS]
description: Use this skill when [THE SITUATION OR REQUEST THAT SHOULD TRIGGER IT]. It [WHAT IT PRODUCES].
---

# [SKILL TITLE]

## When to use
- [TRIGGER 1]
- [TRIGGER 2]

## Steps
1. [FIRST STEP]
2. [SECOND STEP]
3. [CHECK BEFORE FINISHING]

## Standards
- [RULE ABOUT TONE, FORMAT OR QUALITY]
- [WHAT TO AVOID]

## Example of a good result
[PASTE A SHORT EXAMPLE]
```

Tips: keep the description specific so Claude picks the skill at the right time, keep instructions concrete, and include one good example — it does more than a page of rules.

Looking for one-off prompts instead? Browse our [Claude prompts](/claude-prompts/) or see [Claude custom instructions examples](/blog/chatgpt-custom-instructions-examples/).
