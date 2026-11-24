---
title: Build a simple Chrome extension with ChatGPT
date: 2026-11-24
category: coding
description: A ChatGPT prompt to build a Chrome extension — Manifest V3 files, minimal permissions, popup and content script code, plus steps to load and test it.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [chrome extension, javascript, manifest v3, coding]
---

A small Chrome extension can save you minutes every day: highlight words, tidy a page, copy data in one click. Getting the manifest, permissions and file structure right is where most first attempts fail. This prompt asks ChatGPT for a working Chrome extension with minimal permissions and clear steps to test it.

## Prompt

```prompt
Act as a senior JavaScript developer who builds browser extensions. Build a Chrome extension.

What it should do: [FEATURE]
Which sites it runs on: [SITES]
How the user triggers it (popup button, keyboard shortcut, automatic on page load, context menu): [TRIGGER]
Data it needs to store, if any: [STORAGE]
My experience level: [EXPERIENCE]

Provide:
1. The folder structure.
2. A Manifest V3 manifest.json with only the permissions needed, and a note on why each is needed.
3. Complete code for each file (popup HTML/JS, content script, background service worker if needed), with short comments.
4. Steps to load it unpacked in Chrome and test it.
5. Common errors and how to read them in the extension console.
6. Privacy notes: what data it touches, and how to keep it local.
Do not use remote code or external libraries unless I ask.
```

## How to use it

1. **Describe one small feature** first; add more once it works.
2. **Load it unpacked** from chrome://extensions with Developer mode on.
3. **Paste any console error** back into the chat to fix it.

## Tips

- Plan bigger features first with the [plan a feature before coding](/prompts/plan-feature-before-coding/) prompt.
- Check the code with the [code security review](/prompts/code-security-review/) prompt before sharing it.
