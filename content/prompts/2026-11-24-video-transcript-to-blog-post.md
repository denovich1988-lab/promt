---
title: Turn a YouTube video transcript into a blog post
date: 2026-11-24
category: seo
description: A ChatGPT prompt to turn a video transcript into an SEO blog post — clear structure, headings, a target keyword and no filler from spoken language.
models: [ChatGPT, Claude, Gemini]
level: Beginner
tags: [video to blog, content repurposing, youtube, seo writing]
---

A good video already contains a blog post, but a raw transcript reads badly: filler words, repeated points and no headings. This prompt turns a YouTube video transcript into a structured blog post built around one keyword, so the same idea can rank in search as well as on YouTube.

## Prompt

```prompt
Act as an SEO content editor. Turn this video transcript into a blog post.

Target keyword: [TARGET KEYWORD]
Audience: [AUDIENCE]
Brand voice: [VOICE]
Video URL (to embed): [VIDEO URL]
Transcript:
[TRANSCRIPT]

Write:
1. An SEO title (under 60 characters) and meta description (under 155 characters).
2. An intro that answers the main question in the first two sentences.
3. A structure with H2 and H3 headings that follows the logic of the video, not its exact order.
4. The article in written style: remove filler, merge repeated points, add short lists where steps are described.
5. A note where to place the video embed and key timestamps.
6. A short FAQ (3 questions) based on points made in the video.
Keep every fact and example from the transcript; add nothing that was not said. Mark unclear parts as [CHECK].
```

## How to use it

1. **Export the transcript** from YouTube or your editing tool.
2. **Check the [CHECK] markers** against the video.
3. **Add screenshots or examples** the video shows on screen.

## Tips

- Brief the post first with the [SEO content brief](/prompts/seo-content-brief/) prompt.
- Do the same for audio with the [repurpose podcast episode](/prompts/repurpose-podcast-episode/) prompt.
