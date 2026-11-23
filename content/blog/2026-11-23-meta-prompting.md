---
title: "Meta Prompting: How to Get AI to Write Better Prompts for You"
seoTitle: "Meta Prompting: What It Is, With Copy-Ready Templates"
date: 2026-11-23
description: What meta prompting is, when it helps, and fill-in templates that get ChatGPT, Claude or Gemini to write, critique and improve prompts for you.
related: [claude-prompt-generator, claude-prompt-engineering-improve, chatgpt-prompt-template-cheat-sheet, midjourney-prompt-generator]
summary:
- Meta prompting means using a prompt to make the AI write, critique or improve another prompt instead of doing the task directly.
- It works best when you know the goal but not the right instructions, or when a prompt will be reused many times.
- The strongest pattern is a loop of draft, interview, critique and test, rather than a single "write me a prompt" request.
- Always run the generated prompt on real inputs and fix what fails, because a prompt that reads well can still produce weak output.
faq:
- q: What is meta prompting?
  a: Meta prompting is the practice of asking an AI model to create or improve a prompt, so the output of the first prompt becomes the instructions for a second one.
- q: Is meta prompting better than writing prompts myself?
  a: Not always. It saves time when you are unsure what to include or need a reusable template, but for quick one-off questions a plain, clear instruction is usually faster.
- q: Which AI models can do meta prompting?
  a: Any capable chat model, including ChatGPT, Claude and Gemini, can write and critique prompts. Results vary between models and versions, so test the prompt in the same tool you plan to use it in.
---

Writing a good prompt takes practice. You need to know what context to include, how to describe the format, which limits to set and what to do about missing information. **Meta prompting** hands part of that work back to the AI: instead of asking it to do the task, you ask it to write the instructions for the task.

It sounds like a trick, but it is a practical habit. Models are good at spotting what a request leaves out, and they can turn a vague goal into a structured prompt you can reuse. This guide explains what meta prompting is, when it pays off, and gives you templates you can fill in today.

## What meta prompting means

A normal prompt asks for an answer: "Write a cold email to a logistics manager." A meta prompt asks for a prompt: "Write a reusable prompt that produces cold emails to logistics managers, with blanks for the product and the pain point."

The output of a meta prompt is itself a set of instructions. You then run those instructions, either in the same chat or in a fresh one. There are four common jobs a meta prompt can do:

| Job | What you ask for | When it helps |
|---|---|---|
| **Generate** | A new prompt from a goal | You know the result you want but not how to ask |
| **Interview** | Questions before the prompt is written | Your goal is fuzzy or has many details |
| **Critique** | A review of an existing prompt | A prompt gives inconsistent or bland results |
| **Adapt** | A version for another tool or audience | You want the same prompt in Midjourney, Claude or a team template |

If you are new to prompt structure in general, start with our [5-part prompt formula](/blog/how-to-write-ai-prompts/). Meta prompting builds on the same parts: role, task, context, format and limits.

## When meta prompting is worth it

Meta prompting adds a step, so it is not the right choice for every request. It earns its place when:

- **The prompt will be reused.** A template your team runs fifty times is worth ten minutes of refinement.
- **You don't know the domain well.** The model can suggest details an expert would include, such as the sections of a legal summary or the fields of a bug report.
- **Results are inconsistent.** A critique often reveals the ambiguity that causes different answers each run.
- **You're moving between tools.** Image models, chat models and coding assistants each respond to different phrasing.

Skip it for quick, one-off questions. "What is the capital of Peru?" doesn't need a prompt about a prompt.

## Template 1: Generate a prompt from a goal

This is the basic meta prompt. The key is to describe the goal and the reader, not the wording, and to ask for blanks you can fill in later.

```prompt
You are an expert prompt writer. Write a reusable prompt for this goal: [GOAL].

Who will read the final output: [AUDIENCE]
Where the output will be used: [CHANNEL OR DOCUMENT]
What a great result looks like: [QUALITY BAR]

Requirements for the prompt you write:
- Start with a short role for the AI.
- State the task in one clear sentence.
- Include placeholders in square brackets for anything that changes each time.
- Specify the output format, length and tone.
- Tell the AI what to do if information is missing.

Return only the finished prompt inside a code block, then list the placeholders and what each one means.
```

Put the generated prompt into a fresh chat to test it. A clean conversation shows you how the prompt performs without the context of your earlier messages.

## Template 2: Let the AI interview you first

When your goal has many moving parts, a single request produces a generic prompt. Asking the model to interview you fixes that, because it collects the details before writing anything.

```prompt
I want a prompt that helps me [GOAL]. Before you write it, ask me up to [NUMBER] questions, one at a time, about anything you need to know: audience, inputs, format, tone, constraints and examples of good output.

After my last answer, write the final prompt. Use square brackets for parts that change each time, and keep it under [WORD LIMIT] words.
```

Answer the questions honestly, including "I don't know". The model can then suggest a sensible default and note it in the prompt.

## Template 3: Critique and improve an existing prompt

This is where meta prompting is most useful day to day. Paste a prompt that isn't working and ask for a diagnosis, not just a rewrite.

```prompt
Review the prompt below. It is meant to [GOAL], but the results are [PROBLEM, E.G. TOO GENERIC, TOO LONG, INCONSISTENT].

Prompt:
"""
[PASTE YOUR PROMPT]
"""

1. List the specific weaknesses: missing context, vague words, unclear format, conflicting instructions.
2. Explain how each weakness could cause the problem I described.
3. Write an improved version that fixes them. Keep my original intent and placeholders.
4. Suggest one test input I can use to check whether the new version is better.
```

Asking for the reasoning behind each change helps you learn what to fix yourself next time. For a ready-made version, see our [prompt improvement template](/prompts/claude-prompt-engineering-improve/).

## Template 4: Adapt a prompt for another tool

Prompts don't transfer cleanly between tools. A detailed paragraph that works in a chat model may need to become a short list of visual descriptors for an image generator.

```prompt
Here is a prompt written for [ORIGINAL TOOL]:
"""
[PASTE PROMPT]
"""

Rewrite it for [TARGET TOOL]. Keep the same goal and key details, but change the structure, length and wording to suit how [TARGET TOOL] is usually prompted. If the target tool supports settings or parameters, list the ones worth trying separately and note that I should check the tool's current documentation, as options change.
```

For image work specifically, our [Midjourney prompt generator](/prompts/midjourney-prompt-generator/) turns a plain idea into a full image prompt.

## A simple meta prompting workflow

The best results come from treating meta prompting as a loop rather than a single request:

1. **Draft.** Use Template 1 or 2 to get a first version.
2. **Test.** Run it on two or three real inputs, including an awkward one.
3. **Critique.** Paste the prompt and a weak output into Template 3 and ask what caused the problem.
4. **Lock it in.** Save the final version with a note on what it is for and which tool you tested it in.

This loop is similar to [prompt chaining](/blog/prompt-chaining/), where you split a big task into steps. The difference is that here the steps improve the instructions rather than the content.

## Common mistakes

**Accepting the first prompt.** A generated prompt can look polished and still miss your real goal. Testing is the only reliable check.

**Asking for "the perfect prompt".** Vague requests produce vague prompts. Give the model the audience, the format and a description of good output.

**Letting the prompt grow too long.** Models tend to add instructions. If a generated prompt is several hundred words for a simple task, ask for a shorter version that keeps only the rules that change the output.

**Forgetting examples.** If the output must match a specific style, add one or two samples. Our guide to [few-shot prompting](/blog/few-shot-prompting/) shows how.

**Testing in the wrong tool.** A prompt refined in one model may behave differently in another. Test where you will actually use it.

## Where to go next

Meta prompting is a shortcut to better instructions, not a replacement for knowing what you want. Start with one prompt you use often, run it through the critique template, and compare the results side by side.

If you want ready-made starting points, browse our [Claude prompts](/claude-prompts/) or try the [Claude prompt generator](/prompts/claude-prompt-generator/) and the [ChatGPT prompt template cheat sheet](/prompts/chatgpt-prompt-template-cheat-sheet/).
