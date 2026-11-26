---
title: YouTube chapters and timestamps from a transcript
date: 2026-11-26
category: seo
description: Turn a video transcript into YouTube chapters with accurate timestamps and keyword-rich titles that help viewers and search find each section.
models: [ChatGPT, Claude, Gemini]
level: Beginner
tags: [youtube chapters, timestamps, video seo, youtube description]
---

YouTube chapters make long videos easier to skim and can show up as key moments in Google, but writing them by hand means scrubbing through the whole video. This prompt turns a timestamped transcript into YouTube chapters and timestamps that follow YouTube's format rules, with short titles that describe each section in the words viewers actually search for.

## Prompt

```prompt
Act as a YouTube SEO editor. Create chapters for my video from the transcript below.

Video title: [VIDEO TITLE]
Video length: [E.G. 18:42]
Main topic and target keyword: [TOPIC / KEYWORD]
Audience: [WHO WATCHES]
Timestamped transcript: [PASTE TRANSCRIPT WITH TIMESTAMPS]

Rules:
- The first chapter must start at 0:00.
- Make 5–12 chapters; each at least 10 seconds long. Split where the topic genuinely changes, not at fixed intervals.
- Use only timestamps that appear in the transcript; never estimate one.
- Chapter titles: 2–6 words, specific ("Setting up the tripod", not "Part 2"), with the keyword or a close variant in 1–2 titles only where it reads naturally.

Output:
1. The chapter list in YouTube format (one per line: 0:00 Title), ready to paste into the description.
2. A 2-sentence description intro placed above the chapters, using the main keyword once.
3. One line per chapter explaining why you split there, so I can check it.
4. Any section that runs longer than 4 minutes, flagged as {CONSIDER SPLITTING}.
```

## How to use it

1. **Export the transcript with timestamps** from YouTube Studio or your editing tool and paste it in.
2. **Check every timestamp** against the video before publishing; a chapter that starts mid-sentence feels sloppy.
3. **Paste the list into the description** with 0:00 first, or YouTube won't create chapters.

## Tips

- Name chapters after the question a viewer would ask; those titles also work as search terms.
- Reuse the chapter list as the outline for a blog post or show notes.
