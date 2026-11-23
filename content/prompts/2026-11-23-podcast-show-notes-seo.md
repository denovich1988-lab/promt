---
title: SEO podcast show notes from a transcript
date: 2026-11-23
category: seo
description: A ChatGPT prompt that turns a podcast transcript into SEO show notes with a search-friendly title, summary, timestamps, key takeaways and links.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [podcast seo, show notes, transcripts, content marketing]
---

Most podcast episode pages hold two lines of text and an audio player, so search engines have almost nothing to rank. This prompt turns your transcript into SEO show notes: a title built around what listeners search for, a readable summary, timestamps, key takeaways, quotes you can check, and links to mention. It gives each episode a page that can bring in new listeners from search.

## Prompt

```prompt
You are a podcast producer who knows SEO. Write show notes for this episode page.

Podcast name and audience: [PODCAST AND AUDIENCE]
Episode number and guest (if any): [EPISODE AND GUEST]
Main topic and a search phrase people might use for it: [TOPIC AND SEARCH PHRASE]
Transcript (with timestamps if you have them): [TRANSCRIPT]
Links mentioned or to promote: [LINKS]

Write:
1. Three episode title options: clear, specific, with the search phrase near the start, under 60 characters.
2. A meta description under 155 characters.
3. A 150–200 word summary in plain language, using the search phrase naturally once or twice.
4. Timestamps for the main segments (only if the transcript has times; otherwise give section headings).
5. 5 key takeaways as bullets.
6. 2 short quotes copied exactly from the transcript, with the speaker's name.
7. Resources mentioned, as a list. Do not add links that are not in my input.
8. Three questions listeners ask about this topic, answered in 2 sentences each from the episode content.
```

## How to use it

1. **Use the full transcript** from your hosting platform or a transcription tool.
2. **Check names, quotes and timestamps** against the audio before publishing.
3. **Link related episodes** to each other on the page.

## Tips

- Turn the episode into more content with [repurpose podcast episode](/prompts/repurpose-podcast-episode/).
- Add FAQ markup with the [schema markup JSON-LD](/prompts/schema-markup-json-ld/) prompt.
