---
title: Write a Dockerfile for your app
date: 2026-11-23
category: coding
description: A ChatGPT prompt that writes a production-ready Dockerfile for your app, with multi-stage builds, small images and an explained line-by-line setup.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [docker, dockerfile, devops, containers]
---

A working Dockerfile is easy; a good one is small, secure and fast to rebuild. This prompt writes a Dockerfile for your stack using multi-stage builds, a non-root user and good layer caching, then explains each line and adds a .dockerignore and a docker-compose file for local development.

## Prompt

```prompt
You are a senior DevOps engineer. Write a Dockerfile for my application.

Language, framework and version: [STACK, e.g. Node 22 with Next.js, Python 3.12 with FastAPI]
How the app is built and started now: [BUILD AND START COMMANDS]
Dependencies file(s): [DEPENDENCY FILES, e.g. package.json]
Port and environment variables needed (names only, no secrets): [PORT AND ENV VARS]
Other services it needs locally: [SERVICES, e.g. Postgres, Redis, or "none"]
Target: [TARGET, e.g. development, production or both]

Provide:
1. A multi-stage Dockerfile with a slim base image, dependency caching, a non-root user and a healthcheck where it makes sense.
2. A .dockerignore file.
3. A docker-compose.yml for local development with the services above.
4. A line-by-line explanation of the Dockerfile.
5. Commands to build, run and check the image size.
6. Security notes: what never to bake into the image, and how to pass secrets at runtime.
```

## How to use it

1. **Describe your real build and start commands** so the container matches how the app runs today.
2. **Build and run it locally**, then fix any error by pasting the output back in.
3. **Commit the files** and use them in your CI pipeline.

## Tips

- Automate builds with the [GitHub Actions workflow](/prompts/github-actions-workflow/) prompt.
- Document the commands in your [README](/prompts/readme-for-code-project/).
