---
title: Customer support chatbot conversation flow
date: 2026-11-23
category: customer-service
description: "Design a customer support chatbot flow with ChatGPT: top intents, bot replies, clarifying questions and clean handoff to a human agent."
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [chatbot, customer support, conversation design, automation]
---

A support chatbot that answers simple questions well and hands off the rest gracefully saves your team time; one that loops customers in circles costs you trust. This prompt designs the conversation flow for your top intents: greetings, bot replies, clarifying questions, fallbacks and when to pass the chat to a person.

## Prompt

```prompt
You are a conversation designer for customer support. Design our chatbot flow.

Business and product: [BUSINESS]
Top customer questions or ticket reasons (with rough volume): [TOP INTENTS]
Help center links or policies the bot can use: [SOURCES]
What the bot must never do (refunds, account changes, legal or medical advice): [LIMITS]
Human support hours and channels: [SUPPORT HOURS]
Brand voice: [VOICE]

Create:
1. A greeting and a menu of 4–6 quick-reply options.
2. For each top intent: example customer phrasings, the bot reply (under 60 words), one clarifying question if needed, and the resolution or link.
3. A fallback reply when the bot doesn't understand (and what happens after the second miss).
4. Handoff rules: which topics or emotions go straight to a human, and the message the customer sees, including outside support hours.
5. Information the bot should collect before handoff so customers don't repeat themselves.
6. 5 test conversations, including an angry customer and an off-topic question.
```

## How to use it

1. **Pull your top ticket reasons** from your help desk.
2. **Build the flow** in your chatbot tool and run the test conversations.
3. **Review real transcripts weekly** and fix the replies that led to handoffs.

## Tips

- Give agents ready replies with the [customer service macros](/prompts/customer-service-macros/) prompt.
- For human-run chat, see the [live chat scripts](/prompts/live-chat-scripts-support/) prompt.
