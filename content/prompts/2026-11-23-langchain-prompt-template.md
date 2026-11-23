---
title: LangChain prompt template generator
date: 2026-11-23
category: coding
description: A prompt that writes a clean LangChain prompt template for your task, with input variables, system and human messages, an output parser and tests.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [langchain prompt template, python, llm apps, prompt engineering]
---

A LangChain prompt template is easy to start and easy to get wrong: missing variables, prompts that mix instructions with user input, and outputs your code cannot parse. This prompt asks an AI coding assistant to design the template for your task, write the Python code with `ChatPromptTemplate`, add structured output, and give you test cases. LangChain's API changes between versions, so it asks the assistant to state which version the code targets.

## Prompt

```prompt
You are a senior Python developer who builds LLM apps with LangChain. Write a production-ready prompt template for my task.

Task the LLM should do: [TASK, e.g. classify support tickets by topic and urgency]
Inputs my code will pass: [INPUT VARIABLES, e.g. ticket_text, customer_tier]
Output I need back: [OUTPUT FORMAT, e.g. JSON with topic, urgency, reason]
Model provider: [PROVIDER, e.g. OpenAI, Anthropic]
LangChain version or "latest": [VERSION]
Examples of good input/output (optional): [EXAMPLES]

Deliver:
1. The prompt design: system message (role, rules, output format) and human message with clearly named variables. Explain each choice in one line.
2. Python code using ChatPromptTemplate, with structured output (a Pydantic model and with_structured_output, or an output parser if that is not supported).
3. Optional few-shot examples set up so they are easy to update.
4. Guarding against prompt injection: keep user text clearly delimited and tell the model to treat it as data.
5. Three test cases (normal, edge, bad input) as pytest functions.
6. Notes on what to check if my LangChain version differs; state which version the code targets.
```

## How to use it

1. **Describe the task and exact output** your app expects.
2. **Run the tests** and check the imports against your installed LangChain version.
3. **Keep the prompt in its own file** so you can change it without touching app logic.

## Tips

- Make a provider-neutral version with the [LLM prompt template](/prompts/llm-prompt-template-production/) prompt.
- Have the code checked with the [senior code review](/prompts/senior-code-review/) prompt.
