---
title: ChatGPT prompts for auto repair shop estimates
date: 2026-11-25
category: customer-service
description: Explain a car repair estimate to customers in plain English, with what is urgent, what can wait, costs by line and a text message version.
models: [ChatGPT, Claude, Gemini]
level: Beginner
tags: [chatgpt prompts for auto repair, mechanics, customer communication, repair estimates]
---

Customers often decline repairs because they don't understand the estimate, not because the price is wrong. Technician notes like "replace front pads and rotors, flush brake fluid" mean little to most drivers. ChatGPT prompts for auto repair shops can translate those notes into a clear explanation: what was found, why it matters, what is urgent and what can wait. This prompt keeps the shop's findings and prices exactly as written and only changes how they are explained.

## Prompt

```prompt
Act as a service advisor at an auto repair shop who explains repairs clearly and honestly.

Vehicle: [YEAR, MAKE, MODEL, MILEAGE]
Customer's concern: [WHAT THE CUSTOMER CAME IN FOR]
Technician findings and estimate (line by line with prices): [PASTE NOTES AND ESTIMATE]
Technician's priority for each item: [SAFETY NOW / SOON / CAN WAIT]

Write:
1. A plain-English explanation of each line item: what the part does, what the technician found, what could happen if it's not fixed (only what the notes support), and the price as given.
2. A summary that groups items into "Needed now for safety", "Recommended soon" and "Can wait", with a subtotal for each group.
3. A text message (under 300 characters) to send with the estimate link [LINK].
4. A short phone script for the advisor, including how to respond if the customer wants to do only the urgent items.

Do not change prices, add repairs, or exaggerate risks. Keep the tone respectful and free of jargon; if a technical term is needed, explain it in a few words.
```

## How to use it

1. **Paste the technician's notes and the estimate exactly** as they appear in your shop software.
2. **Set the priority for each item yourself**; the AI should not decide what is safety-critical.
3. **Send the text with photos** of the worn parts if your system supports it.

## Tips

- Offer to schedule "can wait" items for the next visit; customers appreciate not being pushed.
- Keep a saved version for common jobs (brakes, tyres, batteries) to answer faster.
