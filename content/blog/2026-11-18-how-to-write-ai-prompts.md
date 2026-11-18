---
title: "How to Write AI Prompts: A Simple 5-Part Formula"
seoTitle: How to Write AI Prompts That Work (5-Part Formula + Examples)
date: 2026-11-18
description: A simple formula for writing prompts that get good answers from ChatGPT, Claude and Gemini — role, task, context, rules and format — with before-and-after examples.
related: [cold-email-that-gets-replies, seo-content-brief, senior-code-review]
---

A vague prompt gets a vague answer. The AI is not being lazy; it simply fills every gap with the most average guess. Good prompts close those gaps. You don't need special tricks for that — just five parts, in this order.

## The 5-part prompt formula

| Part | What it does | Example |
|---|---|---|
| **1. Role** | Sets the expertise and point of view | "You are an experienced B2B copywriter." |
| **2. Task** | Says exactly what to produce | "Write a cold email to a prospect." |
| **3. Context** | Gives the facts only you know | Your offer, the reader, what you noticed about them |
| **4. Rules** | Sets limits and quality bar | "Under 90 words. No buzzwords. One question at the end." |
| **5. Format** | Defines the shape of the output | "Give 3 subject lines, then the email, then 2 follow-ups." |

You won't always need all five. A quick question needs only the task. But when an answer disappoints you, one of these five parts is almost always missing.

## Before and after

**Before:**

> Write a post about our new app.

The AI doesn't know what the app does, who it's for, where the post goes or how long it should be. You'll get a generic announcement full of words like "excited" and "revolutionary".

**After:**

```prompt
You are a social media manager for a small software company.

Write a LinkedIn post announcing our new app.

Context:
- The app: [WHAT IT DOES IN ONE SENTENCE]
- Who it is for: [AUDIENCE]
- The main problem it solves: [PROBLEM]
- One real result from a beta user: [RESULT]

Rules:
- 120–180 words, short paragraphs.
- Start with the problem, not with "We are excited".
- No hype words: revolutionary, game-changer, seamless.
- End with a question for the reader.

Format: the post, then 3 alternative first lines.
```

Same request, completely different answer. And notice the blue blanks: the second version is reusable. Fill them in for any product and it still works.

## Each part, explained

### 1. Role

A role sets vocabulary and priorities. "You are a senior engineer reviewing code" makes the AI look for bugs and risks; "You are a teacher" makes it explain. Keep it to one sentence and make it relevant. Elaborate personas ("You are the world's greatest genius…") don't add anything.

### 2. Task

Use a clear verb: write, summarise, compare, list, rewrite, plan, critique. One prompt, one main task. If you need three things, number them in the order you want them.

### 3. Context

This is where most of the quality comes from, and the part people skip. The AI doesn't know your audience, your product, your constraints or what you've already tried. Tell it. Paste source material when you have it: the job post, your notes, the email you're replying to.

### 4. Rules

Rules turn "an answer" into "the answer you need". Useful kinds:

- **Length:** "under 150 words", "one page", "5 bullets".
- **Tone:** "friendly and direct", "formal", "like explaining to a colleague".
- **Must include / must avoid:** "include one number", "no jargon", "do not invent statistics".
- **Honesty rules:** "if you don't know, say so", "mark anything you're unsure about".

### 5. Format

Say what shape you want: a table, a numbered list, headings, a JSON object, a draft followed by notes. Formats make answers easier to scan and to reuse.

## Three habits that matter more than any template

1. **Iterate.** Treat the first answer as a draft. "Shorter", "more concrete", "give me 3 different angles" are all fine follow-ups.
2. **Show an example.** If you have a sample you like, paste it and say "match this style". Examples beat descriptions.
3. **Ask it to ask you.** For bigger tasks, end with *"Before you start, ask me up to 5 questions."* The questions reveal the context you forgot to give.

## Common mistakes

- **Stuffing everything into one prompt.** Big tasks work better in steps: outline first, then sections.
- **Trusting facts blindly.** Ask for sources when they matter, and check them yourself.
- **Copying giant "mega-prompts" you don't understand.** If you can't explain why a line is there, it's probably noise.

## Practice with real prompts

Every prompt in our [AI prompt library](/) follows this formula, with the context parts marked as blanks. Open one, fill in the blanks and compare the answer with what you got before — for example the [cold email prompt](/prompts/cold-email-that-gets-replies/) or the [SEO content brief](/prompts/seo-content-brief/).
