---
title: "Chain of Thought Prompting: How to Get AI to Reason Step by Step"
seoTitle: "Chain of Thought Prompt: Examples and Templates"
date: 2026-11-27
description: What a chain of thought prompt is, when step-by-step reasoning helps, and copy-ready templates for maths, decisions, debugging and analysis.
related: [math-problems-step-by-step, debug-error-step-by-step, decision-memo-compare-options, business-problem-root-cause]
summary:
- A chain of thought prompt asks the AI to work through intermediate steps before it gives a final answer.
- It helps most on multi-step problems such as arithmetic, logic, planning, debugging and trade-off decisions.
- You can trigger it with a short instruction (zero-shot) or by showing one worked example (few-shot).
- Separate the reasoning from the final answer, and check the steps, because a confident chain can still contain an error.
faq:
- q: What is a chain of thought prompt?
  a: It is a prompt that asks the model to show its intermediate reasoning, step by step, before stating the final answer, instead of jumping straight to a conclusion.
- q: Is chain of thought prompting still useful with reasoning models?
  a: Less often. Models with a built-in thinking mode already reason before answering, so a plain "think step by step" adds little. A clear list of steps to follow, or a request to show the working for review, is still useful.
- q: What is the difference between chain of thought and prompt chaining?
  a: Chain of thought happens inside one answer, where the model reasons through steps. Prompt chaining splits a task across several prompts, and each output feeds the next prompt.
---

Ask an AI a tricky question and it will often give you an answer straight away, with full confidence. Sometimes that answer is right. On problems with several steps (a pricing calculation, a scheduling puzzle, a bug with two possible causes) a fast answer is where mistakes slip in. A **chain of thought prompt** fixes this by asking the model to work through the problem out loud before it commits to an answer.

This guide explains what chain of thought prompting is, when it helps and when it doesn't, and gives you templates you can fill in and use in ChatGPT, Claude or Gemini.

## What chain of thought prompting is

Chain of thought (often shortened to CoT) means asking the model to write out the intermediate steps of its reasoning, then give the final answer. The idea was described by Google researchers in 2022, who found that showing a model worked examples with the reasoning written out improved its results on maths and logic problems. A follow-up paper the same year showed that simply adding "Let's think step by step" could have a similar effect without any examples.

Why does it work? A language model produces text one piece at a time. When it writes out the steps, each step becomes part of the context for the next one. The model gets to "use" its earlier work instead of guessing the whole answer in one go. It also makes the reasoning visible to you, so you can see exactly where it went wrong.

There are two main ways to do it:

| Style | What you add to the prompt | Best for |
|---|---|---|
| **Zero-shot CoT** | An instruction such as "Work through this step by step before answering." | Quick questions, everyday problems |
| **Few-shot CoT** | One or two worked examples that show the reasoning, then your new question | Problems with a specific method you want followed |

If you are new to these terms, our guides to [zero-shot prompting](/blog/zero-shot-prompting/) and [few-shot prompting](/blog/few-shot-prompting/) cover the basics.

## When to use it (and when to skip it)

Chain of thought is worth it when the answer depends on several steps that build on each other:

- **Arithmetic and estimates:** discounts, unit costs, budgets, time zones.
- **Logic and rules:** "Does this customer qualify for the refund policy?"
- **Planning:** ordering tasks, scheduling with constraints.
- **Debugging:** working out which of several causes fits the symptoms.
- **Decisions:** weighing options against criteria before choosing one.

Skip it when the task is simple or creative. You don't need step-by-step reasoning to rewrite an email, brainstorm names or summarise a paragraph. It only makes the answer longer and slower.

A note on newer models: several current models (including some versions of ChatGPT, Claude and Gemini) have a "thinking" or "reasoning" mode that reasons before answering on its own. Features and names change often, so check what your plan offers. With these modes, a generic "think step by step" usually adds little. What still helps is telling the model *which* steps to follow, and asking it to show the working so you can review it.

## The basic chain of thought prompt

This is the all-purpose template. It asks for reasoning first, then a clearly marked answer, so you can read either part on its own.

```prompt
I need help with this problem:

[DESCRIBE THE PROBLEM, WITH ALL NUMBERS AND CONDITIONS]

Before answering, work through it step by step:
1. Restate what is being asked in one sentence.
2. List the facts and constraints you will use.
3. Solve it one step at a time, showing any calculations.
4. Check the result against the constraints.

Then write "Final answer:" followed by the answer in [FORMAT, E.G. ONE SENTENCE / A NUMBER / A TABLE].
If any information is missing, say what you are assuming.
```

The numbered steps matter more than the phrase "step by step". They give the model a method, and they give you a checklist for reviewing its work.

## Few-shot chain of thought: show the method once

When you want a problem solved in a particular way, show one worked example. The model will copy the structure of the reasoning, not just the format of the answer.

```prompt
Solve the problem at the end using the same method as the example.

Example problem: [EXAMPLE PROBLEM]
Reasoning:
Step 1: [FIRST STEP OF YOUR METHOD]
Step 2: [SECOND STEP]
Step 3: [THIRD STEP]
Final answer: [EXAMPLE ANSWER]

New problem: [YOUR PROBLEM]
Reasoning:
```

Ending the prompt with "Reasoning:" nudges the model to start with the steps rather than the answer. For maths homework or practice, the [step-by-step maths problem prompt](/prompts/math-problems-step-by-step/) uses the same idea.

## Templates for common tasks

### Decisions between options

Ask for the criteria first, then the scoring, then the choice. This stops the model from picking a favourite and justifying it afterwards.

```prompt
I need to choose between these options: [OPTION A], [OPTION B], [OPTION C].
My situation: [CONTEXT, BUDGET, DEADLINE, CONSTRAINTS]

Reason through it in this order:
1. List the 4–6 criteria that matter most for my situation, and say why.
2. Assess each option against each criterion, in a table.
3. Name the biggest risk of each option.
4. Only then recommend one option and explain the deciding factor.

End with "Final recommendation:" and one sentence.
```

For a version you can share with a team, see the [decision memo prompt](/prompts/decision-memo-compare-options/).

### Debugging

```prompt
Here is an error and the code that produces it.

Error: [PASTE ERROR MESSAGE]
Code: [PASTE CODE]
What I expected: [EXPECTED BEHAVIOUR]

Think it through before suggesting a fix:
1. Explain what the error message means.
2. List the possible causes, most likely first.
3. For each cause, say what evidence in the code supports or rules it out.
4. Pick the most likely cause.

Then give the fix as a code block and one line on how to confirm it works.
```

The [step-by-step debugging prompt](/prompts/debug-error-step-by-step/) is a longer version with more checks.

### Root-cause analysis

```prompt
Problem: [WHAT IS GOING WRONG, WITH NUMBERS IF YOU HAVE THEM]
When it started: [DATE OR EVENT]
What changed around then: [CHANGES YOU KNOW ABOUT]

Work through the cause step by step:
1. Describe the symptom precisely.
2. List possible causes across people, process, tools and external factors.
3. For each, say what data would confirm or rule it out.
4. Rank the causes by likelihood based on what I have told you.

Final answer: the top cause, the next step to test it, and what to do if it is wrong.
```

## Get a short answer without losing the reasoning

Sometimes you want the benefit of reasoning but only need the result. Ask for the reasoning in a separate section you can skip:

```prompt
[YOUR QUESTION]

First, reason through the problem inside a section titled "Working". Keep it brief.
Then, in a section titled "Answer", give only the result in [NUMBER OF SENTENCES] sentences.
```

This also works well when you paste the answer somewhere else: copy only the "Answer" section.

## Check the chain, don't just trust it

Written-out reasoning looks convincing, but it can still go wrong. A model may make an arithmetic slip in step 2 and carry it all the way to a confident final answer. The reasoning it shows is also not guaranteed to be the exact process that produced the answer. A few habits help:

- **Read the steps, not only the answer.** Errors are easiest to spot in the middle.
- **Ask for a check.** Add: "Now verify each step and correct any error before restating the final answer."
- **Run it twice.** For important questions, ask again in a new chat. If two runs disagree, look at where the reasoning splits. This is the idea behind self-consistency, covered in our [advanced prompt engineering techniques](/blog/advanced-prompt-engineering-techniques/).
- **Verify numbers yourself** for anything involving money, health, law or safety.

## Common mistakes

- **Using it for everything.** Step-by-step reasoning on a simple task wastes time and adds clutter.
- **Leaving out facts.** The model can only reason with what you give it. Missing constraints lead to wrong but logical answers.
- **No marked final answer.** Without "Final answer:", the result gets buried in a long explanation.
- **Confusing it with prompt chaining.** Chain of thought happens inside one reply. [Prompt chaining](/blog/prompt-chaining/) splits a big job into several prompts.

## Try it now

Pick a question you asked an AI this week where the answer felt rushed. Paste it into the basic template above, fill in the facts, and compare the two answers. For more ready-made prompts that use structured reasoning, browse our [ChatGPT prompts](/chatgpt-prompts/) or start with the [root-cause analysis prompt](/prompts/business-problem-root-cause/).
