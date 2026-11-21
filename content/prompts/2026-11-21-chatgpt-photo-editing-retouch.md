---
title: ChatGPT photo editing prompts for quick fixes
date: 2026-11-21
category: image
description: "ChatGPT photo editing prompts that work like an AI photo editor: fix light, remove objects, swap backgrounds and keep the subject unchanged."
models: [GPT Image, ChatGPT, Gemini]
level: Beginner
tags: [photo editing, ai photo editor, retouching]
---

ChatGPT photo editing works best when you treat it like an AI photo editor with one clear job per request. Asking for five changes at once usually changes things you wanted to keep. This prompt lists the fixes in order, locks the subject, and asks the model to describe what it changed so you can undo or adjust.

## Prompt

```prompt
Edit the photo I uploaded like a careful photo retoucher.

Never change: [FACE, BODY SHAPE, PRODUCT, LOGO, TEXT ON ITEMS, ETC.]

Apply only these edits, in this order:
1. [EDIT 1, E.G. "BRIGHTEN THE IMAGE, IT IS UNDEREXPOSED"]
2. [EDIT 2, E.G. "REMOVE THE TRASH BIN ON THE RIGHT"]
3. [EDIT 3, E.G. "REPLACE THE BACKGROUND WITH A PLAIN LIGHT-GREY WALL"]

Keep the original framing, resolution feel and colour of clothing.
Match shadows and light direction to the new background.
Result is for: [USE, E.G. "LINKEDIN PHOTO", "MARKETPLACE LISTING"]

After the edit, list each change you made in one line, and anything you could not do cleanly.
```

## How to use it

1. **Upload the highest-quality original** you have.
2. **List edits in order of importance**; start with one or two.
3. **Compare with the original** at full size before using the result.

## Tips

- If a face changes, say "undo the face change and keep everything else".
- For listings, do not remove real flaws a buyer should know about.
