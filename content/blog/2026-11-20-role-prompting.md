---
title: "Role Prompting: How to Give AI a Role That Improves Answers"
seoTitle: "Role Prompting: Examples and Templates for Better AI Output"
date: 2026-11-20
description: What role prompting is, why "act as an expert" alone rarely helps, and fill-in templates that turn a role into sharper, more useful AI answers.
related: [senior-code-review, sales-objection-responses, explain-with-everyday-analogies, brand-voice-guide]
summary:
- Role prompting means telling the AI who it should be while it answers, such as an editor, a tax adviser or a skeptical investor.
- A bare role like "act as an expert" changes little; a role works when it comes with an audience, a goal and the standards that role would apply.
- Roles are most useful for reviews, critiques, explanations at a set level, and practising conversations.
- A role does not give the model new knowledge, so still check facts, numbers and anything legal, medical or financial.
faq:
- q: What is role prompting?
  a: Role prompting is a technique where you assign the AI a persona or job, such as "a senior copy editor", so it answers with the priorities, vocabulary and level of detail that person would use.
- q: Does telling ChatGPT to act as an expert make it more accurate?
  a: Not by itself. A role can change tone, focus and structure, but it cannot add facts the model does not have. Accuracy improves more when you add context, clear criteria and source material.
- q: Where should the role go in a prompt?
  a: Put it at the start, followed by the task, the audience and the rules. In ChatGPT custom instructions, Claude projects or Gemini Gems you can also save a role so it applies to every chat.
---

"Act as a marketing expert" is probably the most copied line in prompt guides. It is also one of the weakest when used alone. The idea behind it, **role prompting**, is sound: when you tell ChatGPT, Claude or Gemini who it should be, the answer shifts toward that person's priorities and language. The trick is giving the model enough of the role to work with.

This guide covers what role prompting does, where it helps, where it does not, and templates you can fill in today.

## What role prompting is

Role prompting means opening your prompt with a job, a point of view or a persona the AI should take on while it answers. Some examples:

- "You are a copy editor at a business magazine."
- "You are a hiring manager screening applications for a junior analyst role."
- "You are a skeptical seed investor hearing this pitch for the first time."

Each role brings a set of habits with it. An editor cuts words. A hiring manager scans for evidence of results. A skeptical investor looks for the weakest assumption. When the model has a clear role, it tends to pick the details that person would care about and skip the rest.

## Why "act as an expert" is not enough

A one-line role gives the model very little to go on. "Expert" in what, for whom, judged by what standard? Compare these two prompts:

**Weak:** "Act as a marketing expert. Review my landing page."

**Stronger:** "You are a conversion copywriter who reviews landing pages for small software companies. Your reader is a busy founder. Point out the three changes most likely to get more sign-ups, and explain each in one sentence."

The second version tells the model the speciality, the audience, the goal and the shape of the answer. That is what makes the role useful. A good rule of thumb: **a role should change what the AI pays attention to, not just how it sounds.**

## The four parts of a useful role

When you write a role, try to cover four things:

| Part | Question it answers | Example |
|---|---|---|
| **Who** | What job and level of experience? | "A senior backend engineer" |
| **For whom** | Who is the answer for? | "Reviewing code written by a junior teammate" |
| **Goal** | What does success look like? | "Catch bugs and security risks before release" |
| **Standards** | What would this person check or refuse to do? | "Flag anything untested; do not rewrite style choices" |

Here is a general template that combines them:

```prompt
You are [ROLE AND LEVEL OF EXPERIENCE], working with [AUDIENCE].
Your goal is to [WHAT A GOOD RESULT LOOKS LIKE].
Apply the standards this role would use: [2-3 THINGS THIS PERSON ALWAYS CHECKS].

Task: [WHAT YOU WANT DONE]

Material:
[PASTE TEXT, DATA OR NOTES]

Answer format: [FORMAT, E.G. A NUMBERED LIST OF CHANGES WITH ONE-LINE REASONS].
If something important is missing, ask me up to 3 questions before you answer.
```

## When role prompting works best

### 1. Reviews and critiques

Roles shine when you want the AI to judge something, because the role sets the criteria. A "strict editor" and a "friendly writing coach" will give very different feedback on the same draft, and you can pick the one you need.

```prompt
You are a strict editor at [PUBLICATION OR COMPANY TYPE] who edits for clarity and brevity.
Review the draft below for a reader who is [READER DESCRIPTION].

List the 5 most important edits, in order of impact. For each one:
- quote the original sentence,
- show your rewrite,
- give the reason in under 15 words.

Do not change facts or add new claims.

Draft:
[PASTE DRAFT]
```

For code, the same idea works with an engineering role. Our [senior code review prompt](/prompts/senior-code-review/) is built this way.

### 2. Explaining at the right level

A role can pin down the level of an explanation better than "explain simply." "A chemistry teacher explaining to a 12-year-old" and "a chemistry professor explaining to a first-year student" give the model two clear, different targets.

```prompt
You are a [SUBJECT] teacher explaining [TOPIC] to [LEARNER, E.G. A 14-YEAR-OLD WITH NO BACKGROUND].
Use one everyday analogy, then the correct explanation in plain words.
End with 2 short questions I can use to check I understood.
Keep it under [WORD COUNT] words.
```

If analogies are what you need most, try the [everyday analogies prompt](/prompts/explain-with-everyday-analogies/).

### 3. Practising a conversation

Roles let you rehearse a hard conversation before it happens: a salary talk, a sales call, a client complaint. Here the AI plays the *other* person, and you play yourself.

```prompt
Let's role-play. You are [OTHER PERSON'S ROLE, E.G. A PROCUREMENT MANAGER AT A MID-SIZE RETAILER].
Your situation: [THEIR GOALS, BUDGET OR CONCERNS].
I am [MY ROLE] and I want to [MY GOAL].

Stay in character and reply as this person would, one message at a time.
Raise realistic objections, especially about [LIKELY OBJECTION].
When I type "pause", step out of the role and give me 3 pieces of feedback on how I handled it.
```

The [sales objection responses prompt](/prompts/sales-objection-responses/) pairs well with this: prepare your answers first, then rehearse them.

### 4. Seeing a problem from several sides

You can ask for more than one role in the same prompt. This is a quick way to find blind spots in a plan.

```prompt
Review the plan below from three points of view:
1. [ROLE 1, E.G. A CFO WORRIED ABOUT COST]
2. [ROLE 2, E.G. A CUSTOMER WHO WILL USE THIS]
3. [ROLE 3, E.G. AN ENGINEER WHO HAS TO BUILD IT]

For each role, give the biggest concern and one question they would ask.
Then list the changes that would answer most of the concerns.

Plan:
[PASTE PLAN]
```

## Where roles do not help

Role prompting has limits, and it is worth being clear about them:

- **A role does not add knowledge.** "You are a tax lawyer" will not give the model current tax law it does not know. It may sound more confident while being just as wrong. Check facts, figures and deadlines yourself.
- **High-stakes advice still needs a professional.** A role is fine for preparing questions for your doctor, lawyer or accountant, not for replacing them.
- **Famous-person roles can backfire.** Asking the AI to "be" a real, named person invites invented quotes and opinions. Describe the qualities you want instead: "a plain-spoken investor who focuses on unit economics."
- **Too many instructions dilute the role.** If your prompt is a page of rules, the role at the top carries less weight. Keep the role short and specific.

## Saving a role so you do not repeat it

If you use the same role often, save it once. ChatGPT custom instructions, Claude projects and Gemini Gems all let you store standing instructions in some form, though the exact names and limits change, so check each tool's current settings. A saved role might look like this:

```prompt
In this workspace you are [ROLE], helping [WHO I AM AND WHAT I DO].
Default reader: [AUDIENCE].
Always: [2-3 HABITS, E.G. LEAD WITH THE ANSWER, USE PLAIN ENGLISH, FLAG ASSUMPTIONS].
Never: [1-2 THINGS TO AVOID, E.G. INVENT STATISTICS].
```

You can combine this with a voice document, such as one built with our [brand voice guide prompt](/prompts/brand-voice-guide/), so every answer matches how you write.

## Role prompting checklist

Before you send a role prompt, check that it:

1. Names a specific job and level, not just "expert".
2. Says who the answer is for.
3. States the goal or what a good answer looks like.
4. Lists two or three standards the role would apply.
5. Asks for a clear output format.

Role prompting combines well with other techniques. Add a few examples of the output you want ([few-shot prompting](/blog/few-shot-prompting/)) or follow the [5-part prompt formula](/blog/how-to-write-ai-prompts/) for the rest of the prompt. For more ready-made prompts that already include strong roles, browse our [ChatGPT prompts](/chatgpt-prompts/).
