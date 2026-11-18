---
title: AI video scene with dialogue and sound
date: 2026-11-18
category: video
description: A prompt for AI video models that generate audio — one short scene with a character, a spoken line, ambient sound and a clear camera plan.
models: [Veo, Seedance, Kling]
level: Intermediate
tags: [ai video, dialogue, veo, ads]
---

Video models that generate sound can also make characters speak, but only if the prompt separates what we see, what we hear and what is said. Mixing them in one long sentence usually gives the wrong voice, missing audio or lip movement that doesn't match. This template keeps each layer separate.

## Prompt

```prompt
8-second cinematic video, [ASPECT RATIO, E.G. "VERTICAL 9:16"], photorealistic.

Scene: [PLACE AND TIME, E.G. "A SMALL BAKERY AT DAWN, WARM LIGHT THROUGH THE WINDOW"]
Character: [WHO, E.G. "A WOMAN IN HER 30S WITH FLOUR ON HER APRON, CALM AND PROUD"]
Action: [WHAT SHE DOES, E.G. "SHE TAKES A TRAY OF BREAD OUT OF THE OVEN AND TURNS TO THE CAMERA"]

Camera: [E.G. "SLOW PUSH-IN FROM MEDIUM SHOT TO CLOSE-UP, STEADY, SHALLOW DEPTH OF FIELD"]

Dialogue: she says, warmly and clearly: "[ONE SHORT LINE, MAX 12 WORDS]"
Audio: [AMBIENT SOUND, E.G. "QUIET OVEN HUM, BIRDS OUTSIDE, NO MUSIC"]

Avoid: subtitles, on-screen text, extra people, distorted hands, sudden cuts.
```

## How to use it

1. **Keep the spoken line short.** Around 8–12 words fit naturally into an 8-second clip.
2. **Describe the voice** ("warmly", "quietly", "excited") right before the line; models use it to set the delivery.
3. **Generate several takes** and keep the one where lips and audio match best. Results vary a lot between runs.

## Tips

- Not every model or plan generates audio. If yours does not, remove the dialogue and audio lines and add sound in an editor.
- For a series of ads, keep the character description identical in every prompt so the person looks consistent.
