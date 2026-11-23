---
title: LLM prompt template for production apps
date: 2026-11-23
category: coding
description: A prompt that designs a reusable LLM prompt template for your app, with role, rules, variables, output schema, examples and an evaluation set.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [llm prompt template, prompt engineering, ai apps, evaluation]
---

Prompts inside apps often grow by trial and error until nobody knows which line does what. A good LLM prompt template has a clear structure: role, task, rules, input variables, output format and examples, plus a small set of tests. This prompt designs that template for your use case in a framework-neutral way, so it works with any model API or library.

## Prompt

```prompt
You are an AI engineer who designs reliable prompts for production apps. Design a reusable LLM prompt template for my use case.

Use case: [USE CASE, e.g. summarize customer calls into CRM notes]
Input variables my app will fill: [VARIABLES]
Required output (format, fields, length): [OUTPUT]
Rules the model must follow (tone, banned content, what to do when data is missing): [RULES]
Model(s) I plan to use: [MODELS]
Example inputs and ideal outputs (optional): [EXAMPLES]

Deliver:
1. The template as plain text with sections: role, task, context, rules, input (variables in {curly_braces}, user text clearly delimited), output format, examples.
2. A JSON schema (or exact format spec) for the output.
3. Instructions for edge cases: empty input, off-topic input, conflicting data, attempts to override the instructions.
4. Two few-shot examples, written to show the hardest cases.
5. An evaluation set of 8 test inputs with what a correct answer must contain.
6. A version-control tip: how to name and store versions and log changes.
Explain the purpose of each section in one line.
```

## How to use it

1. **Describe the exact output** your code needs before anything else.
2. **Run the evaluation set** each time you change the template or model.
3. **Store the template in your repo** with a version number.

## Tips

- Building with LangChain? Use the [LangChain prompt template](/prompts/langchain-prompt-template/) prompt.
- Chain several prompts with the [advanced ChatGPT prompt chain](/prompts/advanced-chatgpt-prompt-chain/).
