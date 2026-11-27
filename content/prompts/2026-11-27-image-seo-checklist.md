---
title: Image SEO audit for faster pages and image search
date: 2026-11-27
category: seo
description: Audit your site's images for SEO, covering file names, formats, sizes, lazy loading, alt text, image sitemaps and structured data, with fixes ranked.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [image seo, page speed, google images, technical seo]
---

Images affect SEO in two ways: heavy or badly loaded images slow pages down, and well-described images can bring traffic from image search and visual results. Alt text is only one piece. This image SEO prompt audits the whole picture (file names, formats, dimensions, compression, lazy loading, captions, image sitemaps and structured data) for a page template and gives you a prioritised fix list for developers and content editors.

## Prompt

```prompt
Act as a technical SEO and web performance specialist. Audit image SEO for this page template.

Site type and page template: [E.G. ECOMMERCE PRODUCT PAGE, RECIPE POST, PORTFOLIO]
Page URL pattern: [E.G. /PRODUCTS/NAME/]
Image HTML from the page: [PASTE THE <IMG> / <PICTURE> TAGS, INCLUDING SRC, SRCSET, SIZES, ALT, WIDTH, HEIGHT, LOADING]
Image file details: [FILE NAMES, FORMATS, FILE SIZES, DISPLAYED VS. ACTUAL DIMENSIONS]
Page speed data: [LCP ELEMENT AND TIME, ANY IMAGE WARNINGS FROM A SPEED TOOL]
Do images matter for search traffic here? [E.G. PRODUCTS, RECIPES, DESIGN WORK — YES / NO]
CMS / CDN: [PLATFORM, IMAGE CDN IF ANY]

Check and report:
1. File names: descriptive vs. generic (IMG_1234.jpg), with a naming pattern for this template.
2. Formats and compression: where WebP/AVIF would help, target file sizes.
3. Responsive images: srcset/sizes correctness, oversized images.
4. Layout shift: width/height or aspect-ratio set.
5. Loading: lazy loading below the fold, and the main (LCP) image not lazy-loaded, with fetch priority where useful.
6. Alt text quality and captions/surrounding text that give context.
7. Discoverability: images in HTML (not only CSS backgrounds), image sitemap entries, structured data image properties for this page type.
8. Licensing/attribution and original vs. stock images.
Output a fix table: issue, example from my code, fix (with corrected HTML), owner (dev/content), impact.
```

## How to use it

1. **Copy the real image HTML** from your browser's dev tools for one template.
2. **Run a speed test** and note the LCP element; that image matters most.
3. **Fix the template once**, so every page using it improves.

## Tips

- Never lazy-load the main image at the top of the page; it delays the largest paint.
- For writing alt text at scale, use a dedicated alt text prompt after the technical fixes are in.
