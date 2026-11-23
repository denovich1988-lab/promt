---
title: Match cut transition AI video prompt
date: 2026-11-23
category: video
description: "An AI video prompt for match cut transitions: two clips that share shape, motion or framing so they cut together seamlessly in your edit."
models: [Veo, Kling, Runway, Seedance]
level: Advanced
tags: [match cut, transitions, video editing, ai video]
---

A match cut joins two different scenes through a shared shape, movement or framing: a spinning coin becomes a spinning planet, a door closing becomes a book closing. AI video makes these easy if you generate both clips with the same composition. This prompt writes a matched pair of shot prompts that line up for a clean cut.

## Prompt

```prompt
Write two AI video shot prompts that will match cut together.

Shot A subject and setting: [SHOT A, e.g. a coffee cup seen from above, steam rising]
Shot B subject and setting: [SHOT B, e.g. a volcano crater seen from above, smoke rising]
The element they share: [MATCH TYPE, e.g. circular shape in the center, upward motion, same camera move]
Style and mood: [STYLE]
Length of each clip: [DURATION]
Aspect ratio: [ASPECT RATIO]

For each shot write one prompt that fixes: the exact position and size of the shared element in the frame, camera angle and height, camera movement direction and speed, lighting direction, and where the action is at the last frame of A and the first frame of B. Then tell me where to place the cut and how to fine-tune it in an editor (speed ramp, small scale or position change, a short blur).
```

## How to use it

1. **Keep the shared element in the same spot** and size in both prompts.
2. **Match motion direction**; a pan left must continue left after the cut.
3. **Generate several takes of shot B** and pick the one that lines up best.

## Tips

- Start from a still with the [image to video camera move](/prompts/image-to-video-camera-move/) prompt for more control.
- Plan a full sequence with the [30-second ad storyboard](/prompts/second-ad-storyboard-video/) prompt.
