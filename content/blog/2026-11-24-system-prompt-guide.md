---
title: "What Is a System Prompt? How to Write One (With Templates)"
seoTitle: "System Prompt: What It Is and How to Write a Good One"
date: 2026-11-24
description: Learn what a system prompt is, how it differs from a user prompt, and how to write one with fill-in templates for assistants, bots and custom GPTs.
related: [llm-prompt-template-production, chatgpt-personality-custom-instructions, claude-prompt-generator, chatgpt-character-roleplay]
summary:
- A system prompt is a set of standing instructions that shapes how an AI model behaves across a whole conversation, before any user message arrives.
- Good system prompts cover five things - role, audience, rules, output format and what to do when unsure.
- Keep it specific and short enough to maintain, and explain the reason behind important rules so the model can apply them to new cases.
- Test a system prompt with real and awkward user messages, then change one thing at a time.
faq:
- q: What is the difference between a system prompt and a user prompt?
  a: A system prompt sets standing rules for the whole conversation, such as role, tone and limits. A user prompt is a single request inside that conversation. The model reads both, and the system prompt frames how it handles each user message.
- q: Can I use a system prompt in ChatGPT without the API?
  a: Not directly, but features such as ChatGPT custom instructions, custom GPT instructions, Claude project instructions and Gemini Gems work in a similar way. Their names and limits can change, so check the current settings in each tool.
- q: How long should a system prompt be?
  a: There is no fixed length. Many useful system prompts fit in 150-500 words. Make it as long as the rules require and no longer, because long, repetitive instructions are harder to maintain and test.
---

Every time you chat with an AI assistant, there may be instructions you never see. Before your first message, the model has often already been told who it is, how to answer and what to avoid. That hidden layer is the **system prompt**, and learning to write one is one of the most useful prompting skills if you build bots, custom GPTs or repeatable workflows.

This guide explains what a system prompt is, how it differs from a normal prompt, and how to write one that holds up in real use. You will also get fill-in templates you can adapt today.

## What a system prompt is

A system prompt is a block of instructions given to a language model at the start of a conversation, separate from the user's messages. It sets the ground rules: the assistant's role, who it is talking to, what it should and should not do, and how answers should look.

Think of it like the brief a new employee gets on day one. Customers (users) then ask questions, and the employee answers within the brief.

| | System prompt | User prompt |
|---|---|---|
| **Who writes it** | The builder or the person setting up the assistant | The person chatting |
| **When it applies** | The whole conversation | One turn |
| **Typical content** | Role, rules, tone, format, limits | A specific question or task |
| **Where you set it** | API "system" message, custom GPT instructions, project or Gem instructions | The chat box |

In the APIs from OpenAI, Anthropic and Google, the system prompt is usually a dedicated field or message role. In consumer apps, features like ChatGPT custom instructions, custom GPTs, Claude projects and Gemini Gems play a similar part. Products change often, so check the current settings in the tool you use. If you only want ChatGPT to remember your preferences, our guide to [ChatGPT custom instructions](/blog/chatgpt-custom-instructions-examples/) covers that simpler case.

## Why system prompts matter

Without a system prompt, a model falls back on its general defaults: friendly, broad and fairly long. That is fine for casual questions, but not for a support bot that must stay on topic, a writing assistant that must match a brand voice, or an internal tool that must return clean JSON.

A clear system prompt helps you:

- **Stay consistent.** Every user gets the same tone and format.
- **Stay on task.** The assistant knows what is in and out of scope.
- **Save typing.** Users don't need to repeat context in every message.
- **Handle edge cases.** You decide in advance what happens with unclear, off-topic or risky requests.

No system prompt guarantees perfect behaviour. Models can still make mistakes or be talked out of instructions, so anything sensitive needs checks outside the prompt too.

## The 5 parts of a strong system prompt

Most good system prompts answer five questions. You don't need headings for each, but you should cover them all.

1. **Role and goal.** Who is the assistant and what is it for? "You are a support assistant for a meal-kit service. Your goal is to resolve delivery and billing questions in one reply when possible."
2. **Audience.** Who will it talk to, and what do they know? A beginner audience needs plain words; developers can handle jargon.
3. **Rules and limits.** What must it always do, never do, and leave to a human? Give the reason for important rules. "Don't promise refunds, because only the billing team can approve them" works better than "No refunds", since the model can apply the reason to cases you didn't list.
4. **Output format.** Length, structure, tone, language and any fixed format such as bullet points or JSON.
5. **When unsure.** What should it do with missing information or questions outside its scope? Ask one clarifying question, say it doesn't know, or point to a human.

These map closely to the parts of any good prompt, explained in our [5-part prompt formula](/blog/how-to-write-ai-prompts/). The difference is that a system prompt has to work for many future messages you can't see yet.

## Template: a general-purpose system prompt

Fill in the blanks and paste this into the system field, custom instructions or project instructions of your tool.

```prompt
You are [ROLE], helping [AUDIENCE] with [MAIN TASK].

Goal: [WHAT A GOOD OUTCOME LOOKS LIKE FOR THE USER]

Context you can rely on:
[KEY FACTS, PRODUCT DETAILS, POLICIES OR STYLE NOTES]

Rules:
- Always [MUST-DO BEHAVIOUR], because [REASON].
- Never [FORBIDDEN BEHAVIOUR], because [REASON].
- If a request is about [OUT-OF-SCOPE TOPIC], say it is outside what you can help with and suggest [WHERE TO GO INSTEAD].

Format:
- Answer in [LENGTH, E.G. 3-6 SENTENCES] unless the user asks for more.
- Use [TONE, E.G. PLAIN, FRIENDLY ENGLISH] and avoid [WORDS OR STYLES TO AVOID].
- [ANY STRUCTURE, E.G. END WITH ONE SUGGESTED NEXT STEP]

When unsure:
- If key information is missing, ask one short clarifying question before answering.
- If you don't know, say so plainly instead of guessing.
```

## Template: a customer support bot

Support is where system prompts earn their keep, because the assistant has to stay accurate and polite with every kind of message.

```prompt
You are the support assistant for [COMPANY], which sells [PRODUCT OR SERVICE].

You help customers with: [LIST OF TOPICS, E.G. ORDERS, DELIVERY, ACCOUNT ACCESS].
You do not handle: [LIST, E.G. REFUND APPROVALS, LEGAL COMPLAINTS] - for these, collect the order number and say a team member will reply within [TIME FRAME].

Policies:
[PASTE RETURN, DELIVERY AND PRIVACY RULES]

Style: warm, calm and brief. Use the customer's name if they give it. Never blame the customer. Apologise once at most.

Answer only from the policies above. If the answer is not in them, say you will pass the question to the team rather than guessing.

Never ask for full card numbers or passwords.
```

## Template: a writing assistant with a fixed voice

```prompt
You are a writing assistant for [BRAND OR PERSON]. You draft and edit [CONTENT TYPES, E.G. NEWSLETTERS AND LINKEDIN POSTS].

Voice: [3-5 TRAITS, E.G. DIRECT, DRY HUMOUR, NO HYPE]
Readers: [WHO READS IT AND WHAT THEY CARE ABOUT]
Words to avoid: [LIST]

Example of the voice:
"""
[PASTE A SHORT SAMPLE YOU LIKE]
"""

When asked to write, first confirm the goal and audience in one line if they are unclear. Keep sentences short. Do not invent facts, figures or quotes; leave {FACT NEEDED} where a fact is missing.
```

A short example of real writing usually does more for voice than a long list of adjectives. That idea is covered in depth in our guide to [few-shot prompting](/blog/few-shot-prompting/).

## Template: get AI to draft your system prompt

If you're not sure where to start, let the model interview you first. This is a form of [meta prompting](/blog/meta-prompting/).

```prompt
I want to create a system prompt for an AI assistant that will [PURPOSE]. It will be used by [AUDIENCE] in [TOOL OR PLATFORM].

Before writing anything, ask me up to 8 questions about role, scope, rules, tone, format and edge cases. Ask them all at once.

After I answer, write the system prompt in plain sections (role, context, rules, format, when unsure), then list 5 test messages, including 2 tricky ones, that I should use to check it.
```

The [Claude prompt generator](/prompts/claude-prompt-generator/) and the [production LLM prompt template](/prompts/llm-prompt-template-production/) are also good starting points if you build with an API.

## How to test and improve a system prompt

Writing the prompt is half the job. The other half is seeing how it behaves.

1. **Write a test set.** Collect 10-15 realistic user messages: common questions, vague requests, off-topic asks, a rude message and one that tries to make the assistant break a rule.
2. **Run them all.** Note where answers are too long, wrong in tone, off-policy or made up.
3. **Change one thing at a time.** If you rewrite everything after each test, you won't know what helped.
4. **Add rules only for real failures.** Every extra rule is something to maintain. Fix the root cause, such as missing context, before adding "never" lines.
5. **Re-test after model updates.** A prompt that works in one model version may behave differently in the next.

## Common mistakes

- **Vague roles.** "You are a helpful assistant" tells the model almost nothing. Name the job, the audience and the goal.
- **Rules without reasons.** Short commands get applied too literally or too loosely. One clause of reasoning helps the model generalise.
- **Contradictions.** "Be brief" and "explain everything in detail" in the same prompt leaves the model guessing. Say which wins and when.
- **Putting secrets in the prompt.** Users can sometimes get a model to reveal its instructions. Don't put passwords, API keys or private data there.
- **Never testing edge cases.** Most problems show up in the awkward messages, not the easy ones.

## Where to go next

A system prompt is the foundation; the prompts users send on top of it still matter. For setting a persona, see our guide to [role prompting](/blog/role-prompting/) and the [ChatGPT personality custom instructions prompt](/prompts/chatgpt-personality-custom-instructions/). If you build character-style assistants, the [character roleplay prompt](/prompts/chatgpt-character-roleplay/) shows how to keep a persona steady over a long chat.

You can browse more templates for Anthropic's model on the [Claude prompts hub](/claude-prompts/).
