---
title: "Image-to-Video Prompts: How to Animate a Photo With AI"
seoTitle: "Image-to-Video Prompts: Animate a Photo With AI (Templates)"
date: 2026-11-18
description: How to write image-to-video prompts for Seedance, Veo, Kling and Runway — what to describe, what to skip, and 5 templates for products, people and places.
related: [cinematic-product-reveal-video, veo-dialogue-scene, product-photo-on-any-background]
summary:
- In image-to-video, the picture already shows what is there — the prompt should describe motion.
- 'Describe three layers: camera motion, subject motion and environment motion.'
- Say what must stay the same and what to avoid, such as morphing or text.
- Small, slow movements look the most realistic; generate several takes and pick the best.
faq:
- q: How do I write an image-to-video prompt?
  a: Describe the camera move, what the subject does and what moves in the environment, then list what must stay the same and what to avoid. Do not re-describe what is already in the image.
- q: Which tools support image-to-video?
  a: Many AI video tools, including Seedance, Veo, Kling and Runway, can start from an image. Features change often, so check the tool you use.
- q: Why does my AI video distort the subject?
  a: Large or fast movements often cause distortion. Use slower camera moves, smaller subject motion and add an avoid line such as "no morphing".
---

Image-to-video is the easiest way to get consistent AI video: you start from a photo you already like, and the model only has to add motion. But the prompt works differently from text-to-video. The picture already shows *what* is there. Your prompt should describe *what moves*.

## The one rule: describe motion, not the picture

The most common mistake is re-describing the image: "a red bottle on a marble table in a bright kitchen". The model can already see that. Repeating it adds nothing and sometimes makes the model change things.

Instead, describe three layers of motion:

1. **Camera motion:** push-in, pull-back, slow orbit, pan left, static.
2. **Subject motion:** what the person or object does.
3. **Environment motion:** steam, wind, light changing, water, background people.

## A simple structure

```prompt
Camera: [CAMERA MOVE, E.G. "SLOW PUSH-IN, STEADY"]
Subject: [WHAT THE SUBJECT DOES, E.G. "THE WOMAN TURNS HER HEAD TOWARD THE CAMERA AND SMILES SLIGHTLY"]
Environment: [WHAT ELSE MOVES, E.G. "LEAVES MOVE GENTLY IN THE WIND, SOFT SUNLIGHT FLICKERS"]
Mood and pace: [E.G. "CALM, SLOW, CINEMATIC"]
Keep the same: [WHAT MUST NOT CHANGE, E.G. "HER FACE, CLOTHES AND THE BACKGROUND LAYOUT"]
Avoid: morphing, extra people, distorted hands, text, sudden cuts.
```

## 5 templates

### Product: slow hero orbit

```prompt
Camera: slow orbit around the product at the same height, about 30 degrees, smooth and stable.
Subject: the product stays still; light reflections glide across its surface.
Environment: subtle dust particles in the light.
Keep the same: the product's shape, label and colours.
Avoid: warping, text changes, extra objects, camera shake.
```

### Portrait: natural moment

```prompt
Camera: static, slight natural handheld feel.
Subject: the person blinks, breathes, and gives a small natural smile; hair moves slightly.
Environment: background softly out of focus, gentle light change.
Keep the same: face, hairstyle and clothes.
Avoid: talking, big head movements, face morphing.
```

### Food: steam and texture

```prompt
Camera: very slow push-in toward the dish.
Subject: steam rises from the food; sauce glistens.
Environment: warm light, slight movement of a napkin edge.
Avoid: hands, utensils appearing, changes to the plate.
```

### Landscape: living postcard

```prompt
Camera: slow pan from left to right.
Subject: clouds drift; water ripples; grass moves in the wind.
Environment: light shifts slowly as if the sun is moving behind clouds.
Avoid: people, birds flying into frame, sudden lighting changes.
```

### Before and after reveal

```prompt
Camera: static.
Subject: a soft wipe of light moves across the frame from left to right, revealing the finished [ROOM / PRODUCT / RESULT].
Keep the same: composition and camera angle.
Avoid: morphing shapes, text, extra objects.
```

## Tips for better results

- **Start with a strong image.** Sharp, well-lit photos with a clear subject animate best. Our [studio product shot prompt](/prompts/product-photo-on-any-background/) is a good way to create one.
- **Less motion is more.** Big moves cause distortion. Slow camera moves and small subject motion look the most real.
- **Short clips first.** Test with the shortest duration, then extend the take that works.
- **Generate several takes.** Results vary between runs; pick the best and move on.

For full text-to-video prompts with timed beats, see our [cinematic product reveal](/prompts/cinematic-product-reveal-video/) and [AI video prompts](/ai-video-prompts/).
