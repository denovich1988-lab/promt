---
title: "Few-Shot Prompting: How to Teach AI by Example"
seoTitle: "Few-Shot Prompting: Examples and Templates That Work"
date: 2026-11-19
description: What few-shot prompting is, when to use it instead of a plain instruction, and copy-ready templates for tone, formatting, classification and data extraction.
related: [brand-voice-guide, meta-titles-descriptions-batch, facebook-ad-copy-variants, customer-pain-points-from-reviews]
summary:
- Few-shot prompting means showing the AI a few finished examples before asking it to do the same task on new input.
- It works best when the output is hard to describe in words but easy to show, such as a tone, a format or a labelling rule.
- Two to five varied examples are usually enough; make them consistent in format and cover the tricky cases.
- Label examples clearly and tell the model to copy the pattern, not the content.
faq:
- q: What is few-shot prompting?
  a: Few-shot prompting is a technique where you include a small number of input and output examples in your prompt, so the AI can copy the pattern when it handles a new input.
- q: What is the difference between zero-shot and few-shot prompting?
  a: A zero-shot prompt gives only an instruction. A few-shot prompt gives the instruction plus a few worked examples, which usually makes the format and style of the answer more predictable.
- q: How many examples should a few-shot prompt have?
  a: Start with two or three. Add more only if the model keeps getting a specific case wrong, and make each new example cover that case.
---

Some things are easy to show and hard to explain. You can spend a paragraph describing the tone of your product descriptions, or you can paste three you like and say "write the next one like these." The second approach is called **few-shot prompting**, and it is one of the most reliable ways to get consistent output from ChatGPT, Claude or Gemini.

This guide explains how it works, when it beats a plain instruction, and gives you templates you can fill in and use today.

## What few-shot prompting means

A "shot" is one example. The terms describe how many you give the model:

| Term | What the prompt contains | Good for |
|---|---|---|
| **Zero-shot** | Only an instruction | Simple, common tasks: "Summarise this email in 3 bullets." |
| **One-shot** | Instruction + one example | Showing a format the model would not guess |
| **Few-shot** | Instruction + two to five examples | Matching a style, a labelling rule or a complex structure |

Language models are very good at continuing patterns. When your prompt contains a few input → output pairs and then a new input, the most natural continuation is an output that follows the same pattern. You are not training the model; you are giving it a clear picture of the answer you expect, inside the conversation.

## When to use it (and when not to)

Few-shot prompting is worth the extra effort when:

- **The style is specific.** Your brand voice, a newsletter format, the way your team writes bug reports.
- **The format must be exact.** A table with fixed columns, a JSON object, a line of text that will go into a spreadsheet.
- **There is a judgement rule.** Tagging support tickets, sorting feedback into themes, scoring leads. Examples show where the line between categories falls.
- **Instructions keep being ignored.** If you have written "keep it short" three times and still get long answers, a short example often fixes it.

Skip it when the task is generic ("explain photosynthesis to a 10-year-old") or when you want the model to be creative and surprise you. Examples pull the output towards themselves, which is the point for consistency and a drawback for variety.

## The basic template

Every few-shot prompt has the same four parts: the task, the examples, the new input, and a slot for the answer.

```prompt
You will [TASK, e.g. rewrite product features as customer benefits].
Follow the pattern in the examples exactly: same length, tone and format. Copy the pattern, not the content.

Example 1
Input: [EXAMPLE INPUT 1]
Output: [EXAMPLE OUTPUT 1]

Example 2
Input: [EXAMPLE INPUT 2]
Output: [EXAMPLE OUTPUT 2]

Example 3
Input: [EXAMPLE INPUT 3]
Output: [EXAMPLE OUTPUT 3]

Now do the same for this input. Reply with the output only.
Input: [NEW INPUT]
Output:
```

Ending with "Output:" and nothing after it is a small trick that works well: it tells the model exactly where its answer starts and what shape it should take.

## 5 rules for good examples

1. **Use real examples you would be happy to publish.** The model copies quality as well as format. A sloppy example produces sloppy output.
2. **Vary the inputs.** If all three examples are about shoes, the model may assume every answer should mention shoes. Pick examples that differ in topic and length but share the pattern you want.
3. **Cover the edge cases.** For classification, include at least one example near the boundary between two categories, plus one that belongs in "Other". That is where models make most mistakes.
4. **Keep the format identical.** Same labels, same order, same punctuation in every example. Inconsistent examples give inconsistent answers.
5. **Separate examples from the task.** Clear labels ("Example 1", "Input", "Output") or simple dividers stop the model from treating your examples as part of the text to work on.

## Templates for common tasks

### Match your writing style

Paste a few pieces you wrote, and the AI drafts new ones in the same voice. For a longer, reusable version, build a full style guide with our [brand voice guide prompt](/prompts/brand-voice-guide/).

```prompt
Below are [NUMBER] short pieces I wrote for [CHANNEL, e.g. our LinkedIn page]. Study the tone, sentence length, structure and how each one opens and ends.

Piece 1:
[PASTE PIECE 1]

Piece 2:
[PASTE PIECE 2]

Piece 3:
[PASTE PIECE 3]

Before writing, list in 4 bullets what these pieces have in common. Then write a new piece about [TOPIC] that follows the same style. Do not reuse phrases from my examples.
```

Asking the model to name the pattern first is useful: you can check that it noticed the right things before it writes.

### Sort feedback into categories

Examples make labelling rules clear in a way that definitions alone rarely do. This pairs well with our prompt for finding [customer pain points in reviews](/prompts/customer-pain-points-from-reviews/).

```prompt
Classify each customer comment into exactly one category: [CATEGORY LIST, e.g. Pricing, Delivery, Product quality, Support, Other].

Examples:
Comment: "Arrived two days late and the box was crushed." → Delivery
Comment: "Great product but I wish the monthly plan was cheaper." → Pricing
Comment: "The chat agent fixed my issue in five minutes." → Support
Comment: "Do you ship to Canada?" → Other

Rules: if a comment fits two categories, choose the one the customer is most unhappy about. Reply as a table with columns Comment | Category | Reason (max 8 words).

Comments:
[PASTE COMMENTS, ONE PER LINE]
```

Replace the example comments with real ones from your own data, keeping one per category.

### Get an exact output format

When the result goes into a spreadsheet or another tool, show the exact line you need. The same idea powers our [meta titles and descriptions in bulk](/prompts/meta-titles-descriptions-batch/) prompt.

```prompt
Turn each product into one line in this exact format, with no extra text:
Name | Category | Price | One-sentence benefit (max 15 words)

Examples:
Input: Steel water bottle, 750 ml, keeps drinks cold 24h, $29
Output: Steel Water Bottle 750 ml | Drinkware | $29 | Keeps your drinks ice-cold from morning to night.

Input: Bamboo cutting board, large, with juice groove, $35
Output: Large Bamboo Cutting Board | Kitchen | $35 | A sturdy board that catches juices before they hit the counter.

Products:
[PASTE PRODUCT NOTES, ONE PER LINE]
```

### Write ad variations in a proven pattern

If you have ads that performed well, use them as examples so new variants keep the same structure. For a fuller workflow, see our [Facebook ad copy variants](/prompts/facebook-ad-copy-variants/) prompt.

```prompt
Here are [NUMBER] ads that worked well for [PRODUCT OR BRAND]:

Ad 1: [PASTE AD 1]
Ad 2: [PASTE AD 2]
Ad 3: [PASTE AD 3]

Write [NUMBER OF VARIANTS] new ads for [OFFER OR ANGLE] that use the same structure: hook, one concrete benefit, call to action. Keep each under [WORD LIMIT] words. Give each variant a different hook, and label which example it is closest to.
```

## Common mistakes

- **Too many examples.** Ten long examples eat up context and can make the model copy details too closely. Start small.
- **Examples that contradict the instruction.** If you ask for 50 words but your examples are 120, the model will usually follow the examples. Check that they agree.
- **All examples look the same.** The model may pick up an accidental pattern, such as every answer starting with "Discover". Vary the openings unless the opening is the pattern.
- **Hiding the task.** Examples show *how*; you still need one line that says *what* to do and for whom.

## Few-shot plus other techniques

Few-shot prompting combines well with other methods. Give the model a role ("You are a support team lead") and examples, and you get both the right perspective and the right format. For tasks that need reasoning, such as scoring leads, your examples can include a one-line reason before the answer, so the model shows its thinking in the same short way. If you are new to prompt structure in general, start with our [simple 5-part formula for writing prompts](/blog/how-to-write-ai-prompts/).

How each tool handles long prompts and examples can change between versions, so if results drift after an update, re-test your examples and trim them if needed.

You can find more ready-made prompts, many of which already include examples, on our [ChatGPT prompts hub](/chatgpt-prompts/).
