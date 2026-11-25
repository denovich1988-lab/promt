---
title: How Long Can a ChatGPT Prompt Be? Chunk Long Text
date: 2026-11-25
category: productivity
description: How long can a ChatGPT prompt be? When your document is too long, use this chunking prompt to process it in parts and merge one accurate summary.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [how long can a chatgpt prompt be, long documents, context window, summarization]
---

How long can a ChatGPT prompt be? It depends on the model and plan, and limits change, but every model has a context window, and very long inputs can be cut off or have their middle sections skimmed. The reliable fix is to split long documents into labelled chunks, extract notes from each, then merge. This prompt sets up that process so nothing gets lost and the final answer cites which part each point came from.

## Prompt

```prompt
I'm going to send you a long document in several parts. Follow this process.

Document type and goal: [e.g. 80-page contract — find obligations and deadlines]
Number of parts: [N]
What to extract from each part: [e.g. key points, dates, numbers, risks, open questions]

For each part I send (labelled PART 1 of N, PART 2 of N...):
- Reply only with "Received PART X" and a numbered list of extracted notes, each tagged with the part and section heading.
- Don't summarize the whole document yet.
- Note anything that seems to continue from or into another part.

When I write "ALL PARTS SENT":
1. Merge the notes into one answer to my goal, grouped by theme.
2. Cite the part and section for every point.
3. List contradictions or gaps between parts.
4. List anything you're unsure about rather than guessing.
```

## How to use it

1. **Split the document** at natural breaks (chapters, sections) into similar-sized parts.
2. **Send the setup prompt**, then each part in its own message.
3. **Check two or three citations** against the original before relying on the summary.

## Tips

- If your tool supports file uploads, try that first; then use this for very long files.
- Start a new chat if earlier parts seem forgotten, and paste in the extracted notes instead.
