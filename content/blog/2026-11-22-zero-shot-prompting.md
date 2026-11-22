---
title: "Zero-Shot Prompting: How to Get Good Answers Without Examples"
seoTitle: "Zero-Shot Prompting: Guide, Templates and Examples"
date: 2026-11-22
description: What zero-shot prompting is, when it works better than adding examples, and fill-in templates for summaries, classification, extraction and rewriting.
related: [chatgpt-prompt-template-cheat-sheet, claude-prompt-engineering-improve, executive-summary-long-document, survey-results-insights-summary]
summary:
- Zero-shot prompting means giving the AI a clear instruction with no worked examples and letting it rely on what it already knows.
- It is the right default for common tasks such as summarising, translating, classifying into obvious categories and rewriting.
- Good zero-shot prompts are specific about the task, the audience, the format and the limits, because there is no example to copy.
- Switch to few-shot prompting when the output must match a specific style or a judgement rule the model cannot guess.
faq:
- q: What is zero-shot prompting?
  a: Zero-shot prompting is asking an AI model to do a task using only an instruction, without showing it any examples of the answer you want.
- q: When should I use zero-shot instead of few-shot prompting?
  a: Use zero-shot for common, well-defined tasks where a clear instruction is enough. Use few-shot when the output has to match a particular tone, format or labelling rule that is easier to show than to describe.
- q: How do I make zero-shot prompts more accurate?
  a: Name the task with a precise verb, describe the audience, fix the output format, set limits such as length, and tell the model what to do when information is missing.
---

Most prompts people type into ChatGPT, Claude or Gemini are zero-shot prompts. "Summarise this article." "Translate this into Spanish." "Is this review positive or negative?" There is no example of the answer, just an instruction, and the model does the rest.

The name sounds technical, but the skill behind it is simple: writing an instruction clear enough that the model doesn't need an example. This guide explains what **zero-shot prompting** is, when it is the right choice, and gives you templates that make plain instructions more reliable.

## What zero-shot prompting means

A "shot" is one worked example in your prompt. The three common approaches are:

| Approach | What you give the model | Example |
|---|---|---|
| **Zero-shot** | An instruction only | "Classify this ticket as Billing, Technical or Other." |
| **One-shot** | Instruction + one example | The same, plus one ticket with its correct label |
| **Few-shot** | Instruction + several examples | The same, plus three to five labelled tickets |

Large language models have learned from a huge amount of text, so they already know how to summarise, translate, classify and rewrite. A zero-shot prompt simply points that knowledge at your task. If you want the other side of the comparison, read our guide to [few-shot prompting](/blog/few-shot-prompting/).

## When zero-shot is the right choice

Zero-shot prompting works well when:

- **The task is common.** Summaries, translations, explanations, outlines, grammar fixes and simple data extraction.
- **The categories are obvious.** Positive vs negative, urgent vs not urgent, question vs complaint.
- **You want range.** Brainstorming names, angles or ideas. Examples would pull every answer towards them.
- **You don't have examples yet.** A zero-shot run is a quick way to produce a first draft you can later turn into an example.

It is weaker when your output must match a house style, a precise format that a model would not guess, or a judgement rule specific to your team ("we count a refund request as Billing, not Complaint"). In those cases, one or two examples usually help more than another paragraph of instructions.

## The anatomy of a strong zero-shot prompt

With no example to copy, the instruction has to carry everything. Check that your prompt covers:

1. **Task** — a precise verb: summarise, classify, extract, rewrite, compare.
2. **Input** — clearly separated from the instruction, for example between lines or quotes.
3. **Audience and purpose** — who will read the result and what they will do with it.
4. **Format** — bullets, a table, JSON, a single word, a set number of items.
5. **Limits** — length, reading level, what to leave out.
6. **Fallback** — what to do if the input doesn't contain the answer.

Here is that structure as a reusable template:

```prompt
Task: [WHAT YOU WANT DONE, E.G. SUMMARISE THE TEXT BELOW]
Audience: [WHO WILL READ IT AND WHY]
Format: [EXACT FORMAT, E.G. 5 BULLETS, EACH UNDER 20 WORDS]
Limits: [LENGTH, TONE, WHAT TO AVOID]
If the text does not contain enough information, say so instead of guessing.

Text:
"""
[PASTE YOUR TEXT]
"""
```

For a bigger library of structures like this, see our [ChatGPT prompt template cheat sheet](/prompts/chatgpt-prompt-template-cheat-sheet/).

## Zero-shot templates for everyday tasks

### Summarising

```prompt
Summarise the document below for [AUDIENCE, E.G. A BUSY MANAGER] who needs to decide [DECISION]. Give: one sentence on the main point, 3-5 bullets with the key facts, and a final line starting "Open question:" if anything important is unclear. Use only information from the document.

Document:
"""
[PASTE DOCUMENT]
"""
```

For long reports, our [executive summary prompt](/prompts/executive-summary-long-document/) adds more structure.

### Classifying

Zero-shot classification works best when you define each label in a few words.

```prompt
Classify each item below into exactly one category:
- [CATEGORY 1]: [SHORT DEFINITION]
- [CATEGORY 2]: [SHORT DEFINITION]
- [CATEGORY 3]: [SHORT DEFINITION]
- Unclear: does not fit any category

Return a table with columns: Item, Category, Reason (max 10 words).

Items:
[PASTE ITEMS, ONE PER LINE]
```

### Extracting data

```prompt
Extract the following fields from the text below: [FIELD 1], [FIELD 2], [FIELD 3]. Return valid JSON with exactly these keys. If a field is not mentioned, use null. Do not add fields or explanations.

Text:
"""
[PASTE TEXT]
"""
```

### Rewriting

```prompt
Rewrite the text below for [AUDIENCE] at a [READING LEVEL, E.G. 8TH GRADE] reading level. Keep every fact and number, cut it to about [WORD COUNT] words, use short sentences, and keep the tone [TONE]. Return only the rewritten text.

Text:
"""
[PASTE TEXT]
"""
```

### Analysing feedback

```prompt
Read the [SURVEY RESPONSES / REVIEWS] below about [PRODUCT OR SERVICE]. Group them into 3-6 themes. For each theme give: a short name, how many responses mention it, one representative quote copied word for word, and one suggested action. List themes from most to least mentioned.

Responses:
"""
[PASTE RESPONSES]
"""
```

Our [survey results insights prompt](/prompts/survey-results-insights-summary/) is a fuller version of this.

## Zero-shot chain of thought

For questions that need reasoning, such as a calculation, a comparison or a plan with constraints, a short extra line can help: ask the model to work through the problem before giving the answer. This is often called zero-shot chain-of-thought prompting, because you get step-by-step reasoning without writing out an example of it.

```prompt
[YOUR QUESTION OR PROBLEM]

Work through this step by step: list the facts you are using, do the reasoning, then give the final answer on its own line starting "Answer:". If a needed fact is missing, state your assumption.
```

Some newer models reason internally before they reply, so the gain from this line varies by model and version. It still has a practical benefit: you can read the steps and spot where an answer went wrong.

## Common zero-shot mistakes

- **Vague verbs.** "Look at this" or "help with this" leaves the model guessing. Say exactly what you want.
- **No format.** Without one, you get whatever length and layout the model prefers. Name it.
- **Mixed instructions and input.** If your text contains its own instructions, the model may follow them. Put the input between clear separators.
- **Undefined labels.** "Classify as high or low priority" means different things to different teams. Define each label.
- **No permission to say "I don't know".** Models tend to give an answer anyway. Tell them what to do when the information isn't there.

## From zero-shot to better prompts

A practical workflow is to start zero-shot, look at the output, and fix the instruction where it fell short. If the same problem keeps coming back, paste one of your best outputs back in as an example, and you have moved to one-shot prompting. You can also ask the model to improve your instruction for you; our [prompt improvement prompt for Claude](/prompts/claude-prompt-engineering-improve/) is built for that, and it works in ChatGPT and Gemini too.

For more ready-to-use instructions you can fill in and run, browse the [ChatGPT prompts hub](/chatgpt-prompts/).
