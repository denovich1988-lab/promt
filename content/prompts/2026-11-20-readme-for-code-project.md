---
title: README file for your code project
date: 2026-11-20
category: coding
description: Write a clear README with setup steps, usage examples, configuration and contributing notes, based on your project's real files.
models: [ChatGPT, Claude, Gemini]
level: Beginner
tags: [documentation, readme, open source]
---

A project without a good README gets skipped, even if the code is great — and your future self forgets the setup steps too. This prompt builds a README from your actual files and commands, so the instructions work instead of describing an imaginary setup.

## Prompt

```prompt
You are a technical writer for developers. Write a README.md for my project.

Project name and one-line purpose: [NAME AND PURPOSE]
Who it's for: [AUDIENCE]
Language, framework and key dependencies: [STACK]
File tree (top two levels): [FILE TREE]
Package file / build config (e.g. package.json, pyproject.toml): [CONFIG FILE CONTENT]
How I run it locally and any environment variables: [COMMANDS AND ENV VARS]
License: [LICENSE]

Include these sections: title and short description, features, requirements, installation, quick start with a working example, configuration (table of env vars with defaults), project structure, running tests, contributing, license.

Use only commands and file names that appear in my input. If something needed is missing (e.g. how to run tests), add a TODO note instead of inventing it. Use fenced code blocks with language tags.
```

## How to use it

1. **Paste your real config and commands** so the setup steps are accurate.
2. **Follow the README yourself** on a clean machine or container.
3. **Fill in any TODO notes** the AI left.

## Tips

- Add a screenshot or GIF of the project in action near the top.
- Ask for a shorter version if it's an internal tool.
