---
title: "Prompt Chaining: How to Split Big Tasks Into AI Steps"
seoTitle: "Prompt Chaining: Examples and Templates for Better Results"
date: 2026-11-21
description: What prompt chaining is, when it beats one long prompt, and fill-in templates for research, writing and coding chains you can run in any AI chat.
related: [customer-interview-synthesis, seo-content-brief, plan-feature-before-coding, blog-post-intro-hooks]
summary:
- Prompt chaining means breaking a big task into a sequence of smaller prompts, where the output of one step becomes the input of the next.
- Chains work better than one giant prompt when a task has distinct stages, such as gathering, deciding, drafting and checking.
- Each link should have one job, a clear input, a fixed output format and a point where you can review before moving on.
- You can run a chain by hand in ChatGPT, Claude or Gemini; no code or special tools are needed to start.
faq:
- q: What is prompt chaining?
  a: Prompt chaining is a technique where you split a complex task into several prompts run in order, feeding each answer into the next prompt instead of asking for everything at once.
- q: How is prompt chaining different from chain of thought prompting?
  a: Chain of thought asks the model to reason step by step inside a single answer. Prompt chaining spreads the work across separate prompts, so you can check and correct each step before the next one runs.
- q: How many steps should a prompt chain have?
  a: Most everyday chains need three to five steps. Add a step only when it has its own clear job and output; if two steps always run together without review, merge them.
---

Ask an AI to "research our market, pick a positioning angle and write the landing page" in one go, and you usually get something that looks finished but is thin at every stage. **Prompt chaining** fixes that. Instead of one long request, you run a short sequence of prompts, and each one builds on the answer before it.

This guide explains how prompt chaining works, when it is worth the extra steps, and gives you templates you can fill in and run today in ChatGPT, Claude or Gemini.

## What prompt chaining is

A prompt chain is a set of prompts run in order, where the output of one prompt is pasted into (or carried forward to) the next. A simple chain for a blog post might look like this:

1. **Outline**: turn a topic and audience into an outline.
2. **Draft**: write the post from the approved outline.
3. **Edit**: tighten the draft against a checklist.
4. **Package**: write the title, meta description and social posts.

Each step is a small, focused task. The model only has to do one thing well, and you get a chance to look at the result before it is used in the next step.

## Why chains beat one giant prompt

A single long prompt asks the model to hold many goals at once. In practice, some of them get less attention. Chaining helps in a few concrete ways:

- **Focus.** Each prompt has one job, so the instructions for that job are not buried among ten others.
- **Checkpoints.** You can catch a weak outline before it turns into a weak 1,500-word draft.
- **Reuse.** A good "edit" or "summarise" step can be reused in many chains.
- **Easier fixes.** When something goes wrong, you know which step to change instead of rewriting the whole prompt.

Chaining is not always better. For a short email or a quick answer, one clear prompt is faster. Use a chain when the task has stages a person would also do separately.

## The anatomy of a good link

Every step in a chain works best when it has the same four parts:

| Part | What to write | Example |
|---|---|---|
| **Job** | One task, stated plainly | "Group these interview notes into themes" |
| **Input** | What the step receives | "The notes below" or "The outline from step 1" |
| **Output format** | A fixed shape the next step can use | "A table with theme, evidence, quote count" |
| **Stop rule** | What to do when something is missing | "If notes are unclear, list questions instead of guessing" |

The output format matters most. If step 2 expects a numbered list and step 1 returns loose paragraphs, the chain wobbles. Ask for tables, numbered lists or labelled sections that are easy to paste forward.

Here is a reusable template for any single link:

```prompt
This is step [STEP NUMBER] of [TOTAL STEPS] in a larger task: [OVERALL GOAL].

Your job in this step only: [ONE SPECIFIC TASK].

Input:
[PASTE THE OUTPUT FROM THE PREVIOUS STEP OR YOUR SOURCE MATERIAL]

Output format: [EXACT FORMAT, E.G. A NUMBERED LIST OF 5 ITEMS WITH ONE-LINE REASONS].
Do not do the next steps yet.
If the input is missing something you need, list your questions instead of guessing.
```

The line "Do not do the next steps yet" is worth keeping. Models like to be helpful and will often jump ahead, which defeats the checkpoint.

## Example 1: a research chain

This chain turns raw customer interviews into a short decision memo.

**Step 1: extract.**

```prompt
Below are notes from [NUMBER] customer interviews about [PRODUCT OR TOPIC].
Extract every pain point, request and quote. Return a table with columns:
interview number, type (pain / request / praise), what they said in one line, exact quote if there is one.
Do not summarise or group yet.

Notes:
[PASTE INTERVIEW NOTES]
```

**Step 2: group.**

```prompt
Here is a table of findings from customer interviews:
[PASTE TABLE FROM STEP 1]

Group the rows into 4-7 themes. For each theme give: a short name, how many interviews mention it, and the 2 strongest quotes.
Sort themes by how many interviews mention them.
```

**Step 3: decide.**

```prompt
Here are the themes from our customer interviews:
[PASTE THEMES FROM STEP 2]

Our goal this quarter is [GOAL]. Our constraints are [TEAM SIZE, BUDGET OR TIME].
Recommend the 2 themes to act on first. For each, give the reason, a first small action and how we would know it worked.
Write it as a one-page memo for [AUDIENCE, E.G. THE FOUNDERS].
```

If you only need the first two steps in one go, our [customer interview synthesis prompt](/prompts/customer-interview-synthesis/) does a compact version of them.

## Example 2: a content chain

Writing is where chaining pays off most, because a weak plan always produces a weak draft.

**Step 1: brief.** Start with a content brief. Our [SEO content brief prompt](/prompts/seo-content-brief/) is a good first link: it turns a keyword and audience into headings, questions to answer and angle.

**Step 2: draft from the brief.**

```prompt
Write a [WORD COUNT]-word article using only the brief below.
Follow its headings in order. Use plain English for [AUDIENCE].
Where you need a fact, figure or example you are not sure of, write {CHECK: what to verify} instead of inventing it.

Brief:
[PASTE BRIEF FROM STEP 1]
```

**Step 3: edit.**

```prompt
Edit the draft below. Check it against this list:
1. Does the opening state the reader's problem in the first two sentences?
2. Is every heading answered directly in its first paragraph?
3. Are there sentences longer than 30 words? Split them.
4. Remove filler phrases and repeated points.

Return the edited draft, then a short list of the changes you made.

Draft:
[PASTE DRAFT FROM STEP 2]
```

**Step 4: hook and package.** Run the edited intro through the [blog post intro hooks prompt](/prompts/blog-post-intro-hooks/) to test a few openings, then ask for a title and meta description in a final step.

The `{CHECK: ...}` markers in step 2 are a small trick worth stealing: they leave visible gaps you can fill with real facts instead of letting the model make something up.

## Example 3: a coding chain

For code, a chain keeps the model from writing a large change before anyone has agreed on the approach.

1. **Plan.** Describe the feature and ask for a plan, affected files and open questions. The [plan a feature before coding prompt](/prompts/plan-feature-before-coding/) is built for this step.
2. **Implement one part.** Paste the approved plan and ask for the code for one item only.
3. **Test.** Ask for unit tests for the code from step 2, including edge cases.
4. **Review.** Paste the code and tests and ask for a review focused on bugs and security, not style.

```prompt
Here is the approved plan for a change to [PROJECT OR LANGUAGE]:
[PASTE PLAN]

Implement only item [ITEM NUMBER]: [ITEM DESCRIPTION].
Show complete code for each file you change.
List any assumption you made about code you have not seen.
Do not start the other items.
```

## Running chains without any code

You do not need an API or automation tool to chain prompts. Three practical ways:

- **One chat, step by step.** Send step 1, review, then send step 2 in the same conversation. The model can see the earlier answers, so you can say "use the outline above".
- **Fresh chat per step.** Paste only the output you approved into a new chat. This keeps old drafts and side comments from leaking into later steps, which is useful for long chains.
- **Saved steps.** Keep each link as a saved prompt, project instruction or Gem so you can reuse it. Features and names differ by tool and change over time, so check what your current plan offers.

If you later want to automate a chain, the same structure carries over to tools that call AI models in sequence. Getting it right by hand first is the best way to design it.

## Common mistakes

- **Steps that are too big.** If one link still has five jobs, split it again.
- **No fixed output format.** Loose answers make the next step guess.
- **Skipping review.** The point of a chain is the checkpoints; if you never look, errors flow straight through.
- **Carrying everything forward.** Pass only what the next step needs. Extra text dilutes the instructions.
- **Trusting facts at the end.** A chain organises work, it does not verify it. Check names, numbers and claims yourself.

## Quick prompt chaining checklist

1. Write down the stages a person would go through for this task.
2. Give each stage one job, one input and one output format.
3. Add "do not do the next steps yet" to stop the model jumping ahead.
4. Review each output before you pass it on.
5. Save the steps that work so you can reuse them.

Prompt chaining pairs well with other techniques: give a step a clear role with [role prompting](/blog/role-prompting/), or show it the output style you want with [few-shot prompting](/blog/few-shot-prompting/). For more ready-made prompts you can use as links in your own chains, browse our [ChatGPT prompts](/chatgpt-prompts/).
