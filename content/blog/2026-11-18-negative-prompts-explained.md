---
title: "Negative Prompts Explained: How to Tell AI Image Tools What to Leave Out"
seoTitle: "Negative Prompts: What They Are + Examples for Midjourney"
date: 2026-11-18
description: What a negative prompt is, how it works in Midjourney and Stable Diffusion, and ready-to-use negative prompt lists for portraits, products, logos and AI video.
related: [product-photo-on-any-background, midjourney-logo-design, cinematic-product-reveal-video]
summary:
- A negative prompt lists what an image or video model should leave out.
- In Midjourney, add --no followed by the items; Stable Diffusion tools have a separate field.
- List concrete objects and defects, not vague adjectives, and keep the list short.
- Fix the main prompt first; use negative prompts to remove recurring side effects.
faq:
- q: What is a negative prompt?
  a: A negative prompt tells an AI image or video model what you do not want in the result, such as text, watermarks, extra fingers or a cluttered background.
- q: How do I use a negative prompt in Midjourney?
  a: 'Add the --no parameter at the end of your prompt, followed by the things to exclude, for example: --no text, watermark, people.'
- q: Why is my negative prompt not working?
  a: The list may be too vague or too long, or the main prompt may still suggest the unwanted thing. Make the positive prompt more specific about what should appear instead.
---

A negative prompt tells an image or video model what you *don't* want in the result: blurry details, extra fingers, text, watermarks, a cluttered background. It's the quickest fix for the same mistakes appearing again and again.

## How negative prompts work

Image models build a picture step by step, nudging it toward your prompt. A negative prompt gives them a second direction: away from the things you list. That's why short lists of concrete things work best. "Ugly" is vague; "extra fingers, distorted hands" is something the model can steer away from.

Different tools handle it differently:

| Tool | How to add a negative prompt |
|---|---|
| **Midjourney** | Add `--no` at the end, followed by the items: `--no text, watermark, people` |
| **Stable Diffusion** (and most interfaces built on it) | A separate "negative prompt" field |
| **Chat-based image tools** (ChatGPT, Gemini) | No separate field; write it into the prompt: "Avoid text, logos and extra objects." |
| **AI video tools** | Many have a negative prompt field; otherwise add an "Avoid:" line at the end of the prompt |

Tool features change often, so check the current documentation of the tool you use.

## Rules that make negative prompts work

1. **List objects and defects, not adjectives.** "Watermark, signature, text" works better than "bad, low quality".
2. **Keep it short.** Five to ten items is usually enough. Huge lists can make images flat and lifeless.
3. **Don't repeat the positive prompt in negative form.** If you asked for "a white background", you don't also need `--no colored background`.
4. **Fix the main prompt first.** If the subject is wrong, a negative prompt won't save it. Use negatives to remove recurring side effects.
5. **Change one thing at a time** so you can see what actually helped.

## Ready-to-use negative prompt lists

### Portraits and people

```prompt
extra fingers, distorted hands, extra limbs, crossed eyes, blurry face, plastic skin, heavy makeup, watermark, text, cropped head
```

### Product photos

```prompt
text, logo, watermark, extra objects, clutter, harsh shadows, reflections of the photographer, distorted label, fingerprints
```

For the full product photo setup, see our [studio product shot prompt](/prompts/product-photo-on-any-background/).

### Logos and icons

```prompt
gradient, shadow, 3d, photo, mockup, background texture, small details, multiple logos, text
```

It pairs well with the [Midjourney logo design prompt](/prompts/midjourney-logo-design/).

### Landscapes and interiors

```prompt
people, cars, power lines, signs, text, watermark, oversaturated colors, fisheye distortion
```

### AI video

```prompt
subtitles, on-screen text, sudden cuts, camera shake, morphing objects, extra people, distorted hands, flickering
```

Our video prompts, like the [cinematic product reveal](/prompts/cinematic-product-reveal-video/), already end with an "Avoid" line built this way.

## Troubleshooting

- **The unwanted thing still appears.** Make the main prompt more specific about what should be there instead. "A plain white wall behind the product" beats `--no clutter`.
- **The image got dull.** Your list is too long or too vague. Cut it to the three worst problems.
- **Text keeps appearing.** Remove any words from the positive prompt that sound like labels or signs (for example "poster" or "packaging with a label").

Browse more ready-made [Midjourney prompts](/midjourney-prompts/) and [AI video prompts](/ai-video-prompts/) in our library.
