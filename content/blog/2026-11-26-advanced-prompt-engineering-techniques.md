---
title: "8 Advanced Prompt Engineering Techniques (With Templates)"
seoTitle: "8 Advanced Prompt Engineering Techniques With Templates"
date: 2026-11-26
description: Eight advanced prompt engineering techniques - from self-consistency to step-back and self-critique - with fill-in templates and when to use each.
related: [advanced-chatgpt-prompt-chain, claude-prompt-engineering-improve, chatgpt-prompt-template-cheat-sheet]
summary:
- Advanced prompt engineering techniques help most on hard tasks - multi-step reasoning, long documents and work where mistakes are costly.
- Techniques like step-back prompting, decomposition and self-consistency change how the model approaches a problem, not just the wording.
- Grounding answers in quoted source text and asking the model to critique its own draft against a rubric both reduce errors.
- Use the lightest technique that solves the problem, because each one adds length, cost and time.
faq:
- q: What are advanced prompt engineering techniques?
  a: They are methods that go beyond a clear instruction and a few examples. Common ones include step-back prompting, breaking a problem into sub-questions, sampling several answers and comparing them, exploring multiple solution paths, grounding answers in quotes, and having the model critique and revise its own work.
- q: Do advanced prompting techniques still matter with reasoning models?
  a: Some matter less. Models that reason internally often do not need "think step by step". But grounding in sources, clear structure, decomposition of large jobs and review against explicit criteria still tend to improve results, because they give the model information and checks it would not otherwise have.
- q: Which advanced technique should I learn first?
  a: Start with self-critique against a rubric and grounding answers in quotes. Both are easy to add to prompts you already use, work in ChatGPT, Claude and Gemini, and catch many of the errors that matter in real work.
---

Once you know the basics - a clear task, context, a role and a few examples - most everyday prompts work fine. The trouble starts with harder jobs: analysing a long contract, planning a launch with many moving parts, or answering a question where one wrong step ruins the result. That is where **advanced prompt engineering techniques** earn their extra words.

This guide covers eight of them. For each you get what it does, when to use it and a fill-in template you can paste into ChatGPT, Claude or Gemini. If you are newer to prompting, start with [zero-shot](/blog/zero-shot-prompting/), [few-shot](/blog/few-shot-prompting/) and [role prompting](/blog/role-prompting/) first; the techniques below build on them.

## 1. Step-back prompting

**What it is:** before answering a specific question, the model first states the general principle or concept behind it, then applies that principle to the case.

**When to use it:** questions where the model jumps to a plausible but shallow answer - physics or finance problems, policy questions, "why did this happen" analysis.

```prompt
Question: [SPECIFIC QUESTION]

Step 1: Before answering, state the general principles, rules or concepts that apply to this kind of question.
Step 2: Using only those principles and the facts below, answer the question.
Facts: [RELEVANT FACTS]
Show both steps, then give the final answer in one sentence.
```

## 2. Decomposition (least-to-most)

**What it is:** the model splits a hard problem into smaller sub-questions, solves the easiest first and uses each answer to solve the next.

**When to use it:** multi-part problems such as a pricing change that affects revenue, churn and support load, or a research question with several dependencies.

```prompt
Problem: [PROBLEM]

First, list the sub-questions that must be answered to solve this, ordered from simplest to most dependent. Do not answer yet.
Then answer each sub-question in order, using earlier answers where needed.
Finish with the overall answer and note which sub-answer you are least confident in.
```

For very large tasks, split the steps into separate prompts instead. Our guide to [prompt chaining](/blog/prompt-chaining/) and the [advanced ChatGPT prompt chain](/prompts/advanced-chatgpt-prompt-chain/) template show how.

## 3. Self-consistency

**What it is:** you ask for several independent solutions to the same problem, then pick the answer most of them agree on. Disagreement is a useful warning sign.

**When to use it:** questions with one correct answer - calculations, classification, logic - where a single run sometimes slips.

```prompt
Solve the following problem in [NUMBER] independent ways, using a different approach each time. Do not let one attempt influence the next.
Problem: [PROBLEM]

After the attempts, compare the final answers. Report the answer most attempts agree on, and if they disagree, explain where the reasoning splits.
```

You can also run the same prompt in several fresh chats and compare. That gives more independent attempts than asking for them in one reply.

## 4. Exploring multiple paths (tree of thoughts style)

**What it is:** instead of committing to the first approach, the model proposes several options, evaluates each, drops the weak ones and develops the best.

**When to use it:** open-ended planning and creative problems - a launch plan, a product name, an architecture choice - where the first idea is rarely the best.

```prompt
Goal: [GOAL]
Constraints: [CONSTRAINTS]

1. Propose [NUMBER] distinct approaches. Keep each to two sentences.
2. Score each approach from 1 to 5 on [CRITERIA], with one line of reasoning per score.
3. Drop all but the top two. For each, list the first three steps and the main risk.
4. Recommend one and explain what would make you switch to the other.
```

## 5. Grounding with quotes

**What it is:** for questions about a document, the model first extracts the exact passages that matter, then answers using only those quotes.

**When to use it:** contracts, reports, policies, research papers, long transcripts - anywhere an invented detail would be costly.

```prompt
Here is a document inside <document> tags:
<document>
[PASTE DOCUMENT]
</document>

Question: [QUESTION]

First, copy the exact sentences from the document that are relevant, inside <quotes> tags. Then answer the question using only those quotes. If the document does not contain the answer, say "Not stated in the document" instead of guessing.
```

The tags help separate your instructions from the material. Anthropic's documentation recommends XML-style tags for Claude, and they tend to work well in other models too, though guidance from each provider may change.

## 6. Self-critique against a rubric

**What it is:** the model writes a draft, reviews it against explicit criteria, then revises. The rubric is what makes this work - "check your work" alone is vague.

**When to use it:** anything you would otherwise review by hand - sales emails, reports, lesson plans, code explanations.

```prompt
Task: [TASK]

Step 1: Write a first draft.
Step 2: Review the draft against this rubric, scoring each item 1-5 with a one-line reason:
- [CRITERION 1]
- [CRITERION 2]
- [CRITERION 3]
Step 3: Rewrite the draft to fix every item that scored below 4.
Show only the rubric scores and the final version.
```

## 7. Structured output with a schema

**What it is:** you define the exact shape of the answer - fields, types, allowed values - so the output can be pasted into a spreadsheet or read by code.

**When to use it:** extracting data from messy text, tagging feedback, building tables, or any step that feeds another tool.

```prompt
Extract information from the text below and return valid JSON only, with no extra text.
Schema:
{
  "name": string,
  "company": string or null,
  "request_type": one of [CATEGORY LIST],
  "urgency": "low" | "medium" | "high",
  "summary": string under 25 words
}
If a field is missing, use null. Do not invent values.

Text: [TEXT]
```

Some tools and APIs offer a dedicated structured output or JSON mode that enforces a schema more strictly. Check your tool's current documentation, since these features change.

## 8. Meta prompting: let the model improve the prompt

**What it is:** you ask the model to rewrite your prompt before running it - adding missing context, constraints and an output format.

**When to use it:** when a prompt keeps giving mediocre results and you are not sure what is missing.

```prompt
I want to use an AI model for this task: [TASK DESCRIPTION].
Here is my current prompt: [CURRENT PROMPT]

Ask me up to 5 questions about missing context. After I answer, rewrite the prompt so it includes the goal, audience, context, constraints, output format and a quality check. Explain each change in one line.
```

Our full guide to [meta prompting](/blog/meta-prompting/) covers this in more depth, and the [Claude prompt improver](/prompts/claude-prompt-engineering-improve/) is a ready template.

## How to choose the right technique

| Problem | Technique to try first |
|---|---|
| Shallow or obvious answers | Step-back prompting |
| Problem with many parts | Decomposition or prompt chaining |
| One right answer, occasional slips | Self-consistency |
| Open-ended plan or idea | Exploring multiple paths |
| Questions about a long document | Grounding with quotes |
| Draft quality varies | Self-critique against a rubric |
| Output feeds a sheet or code | Structured output with a schema |
| Not sure what the prompt lacks | Meta prompting |

## Common mistakes

- **Stacking every technique at once.** Each one adds length and cost. Start with one and add another only if results are still weak.
- **Vague review criteria.** "Make it better" gives cosmetic edits. Name what good looks like.
- **Trusting agreement blindly.** If several attempts agree on a wrong premise, self-consistency will not catch it. Check key facts against a source.
- **Ignoring model differences.** Reasoning models may not need explicit step-by-step instructions, while grounding and structure still help. Test on the model you actually use.

## Keep a library of what works

When a technique fixes a problem, save the prompt as a template with blanks so you can reuse it. The [ChatGPT prompt template cheat sheet](/prompts/chatgpt-prompt-template-cheat-sheet/) is a good place to start, and you will find more ready-made templates in our [Claude prompts hub](/claude-prompts/).
