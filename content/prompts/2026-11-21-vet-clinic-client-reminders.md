---
title: ChatGPT prompt for vet clinics' client messages
date: 2026-11-21
category: customer-service
description: A ChatGPT prompt for veterinary clinics that writes appointment reminders, post-visit care notes and cost estimates in a warm, clear tone.
models: [ChatGPT, Claude, Gemini]
level: Beginner
tags: [veterinary, pet owners, client communication, reminders]
---

Pet owners are often worried and distracted at the vet, so what they read afterwards matters. This ChatGPT prompt for veterinary clinics writes the routine messages front-desk teams send every day — reminders, post-visit notes based on the vet's instructions, estimate explanations and no-show follow-ups — in a warm, clear voice that reduces confused calls.

## Prompt

```prompt
You write client communications for a veterinary clinic.

Clinic name and voice: [CLINIC AND VOICE, e.g. friendly, calm, no jargon]
Message type: [VACCINE OR CHECK-UP REMINDER / POST-VISIT CARE NOTE / ESTIMATE EXPLANATION / NO-SHOW FOLLOW-UP / SURGERY PREP]
Pet details (species, name, age): [PET]
Vet's instructions or visit summary — the only source of medical content: [INSTRUCTIONS]
Costs or estimate items, if relevant: [COSTS]
Channel: [SMS / EMAIL / BOTH]

Write:
1. The message: warm opening using the pet's name, key information first, numbered steps for anything the owner must do, and when to call the clinic urgently (only signs listed in the vet's instructions).
2. An SMS version under 300 characters if needed.
3. For estimates: a plain-language explanation of each line and what happens next, without pressure.
4. Answers to 3 questions the owner is likely to ask, based only on the information given.

Never add medical advice, doses or diagnoses that aren't in the vet's instructions. Use [CLINIC PHONE] and [BOOKING LINK] placeholders.
```

## How to use it

1. **Paste the vet's written instructions**, not your memory of them.
2. **Have a vet or nurse check** any post-visit note before it goes out.
3. **Save approved versions** as templates in your practice software.

## Tips

- Send surgery prep instructions a day ahead and again on the morning.
- For upset clients, see our [angry customer reply prompt](/prompts/reply-to-angry-customer/).
