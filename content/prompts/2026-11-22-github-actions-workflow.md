---
title: Write a GitHub Actions workflow for your project
date: 2026-11-22
category: coding
description: A ChatGPT prompt that writes a GitHub Actions workflow YAML to test, build and deploy your project, with caching, secrets and clear comments.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [github actions, ci cd, devops, yaml]
---

Setting up CI by trial and error means many red builds and confusing YAML errors. This prompt writes a GitHub Actions workflow for your project: triggers, jobs for testing, building and deploying, dependency caching, secrets handled safely and comments explaining each step. It also lists what you need to set up in the repository so the first run passes.

## Prompt

```prompt
You are a DevOps engineer who writes clean GitHub Actions workflows.

Project type, language and version: [PROJECT, e.g. Node 20 web app, Python 3.12 API]
Package manager and test command: [PACKAGE MANAGER AND TEST COMMAND]
Build command and output: [BUILD COMMAND]
Where it deploys (if anywhere) and how: [DEPLOY TARGET OR "NO DEPLOY"]
When it should run: [TRIGGERS, e.g. push to main, pull requests]
Secrets or environment variables needed: [SECRET NAMES ONLY, NEVER VALUES]
Other needs (lint, matrix of versions, database service): [EXTRAS]

Write:
1. A complete workflow file (.github/workflows/[FILE NAME].yml) with jobs for lint/test, build and deploy as needed.
2. Dependency caching, a sensible timeout, and concurrency so old runs on the same branch are cancelled.
3. Least-privilege permissions for the workflow token.
4. Comments explaining each step.
5. A list of repository settings, secrets and environments I must create.
6. How to debug the most likely failures.
Use only widely used official or well-known actions and pin them to a major version.
```

## How to use it

1. **List secret names only**; never paste real secret values into the chat.
2. **Commit the workflow on a branch** and open a pull request to test it.
3. **Read the first failed log carefully** and paste the error back if needed.

## Tips

- If a build fails with a confusing error, use the [debug error step by step](/prompts/debug-error-step-by-step/) prompt.
- Check the actions you use for current versions in their own documentation.
