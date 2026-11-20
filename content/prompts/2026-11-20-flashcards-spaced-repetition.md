---
title: Flashcards from any text for spaced repetition
date: 2026-11-20
category: education
description: Turn notes, textbook pages or articles into clear question-and-answer flashcards ready to import into Anki or Quizlet.
models: [ChatGPT, Claude, Gemini]
level: Beginner
tags: [flashcards, anki, study techniques]
---

Spaced repetition is one of the most effective ways to remember what you study, but making good flashcards takes time. Cards that are too long or vague don't work. This prompt turns your material into short, single-fact cards in an import-ready format.

## Prompt

```prompt
You are a learning coach. Create flashcards from my study material.

Subject and exam or goal: [SUBJECT AND GOAL]
My level: [LEVEL]
Material: [NOTES OR TEXT]
Number of cards: [NUMBER]

Rules for each card:
1. One fact or idea per card.
2. The question must make sense without seeing the source.
3. Answers are short — ideally under 15 words.
4. Mix types: definitions, why/how questions, cause and effect, examples, and cloze deletions for key terms.
5. Avoid yes/no questions and lists longer than 3 items.

Output:
- A table with columns: Front | Back | Tag.
- The same cards as plain text, one per line, in the format: front;back;tag (for Anki or Quizlet import).
- 3 concepts from the material that are hard to put on cards, with a suggestion for how to study them instead.

Only use information from my material.
```

## How to use it

1. **Paste one chapter or topic** at a time for focused cards.
2. **Import the plain-text list** into Anki or Quizlet using semicolons as separators.
3. **Review a little every day** and edit cards that keep confusing you.

## Tips

- Delete cards you already know well so reviews stay short.
- Ask for reverse cards (answer → question) for vocabulary.
