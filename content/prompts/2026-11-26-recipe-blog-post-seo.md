---
title: Recipe blog post SEO prompt with schema
date: 2026-11-26
category: seo
description: Write an SEO-friendly recipe post with a helpful intro, clear ingredients and steps, tips, FAQ and Recipe schema, without filler stories.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [recipe seo, food blog, recipe schema, content writing]
---

Food bloggers are often told to write long stories before the recipe, but readers mostly want the ingredients, steps and tips that help the dish turn out well. Search engines also want clear, structured recipe content. This recipe blog post SEO prompt writes a post around your tested recipe: a short, useful intro, ingredient notes, clear steps, substitutions, storage tips, FAQ and Recipe structured data, without filler.

## Prompt

```prompt
Act as a food blogger and SEO editor. Write a recipe post.

Recipe name and main keyword: [E.G. CRANBERRY ORANGE SCONES / "EASY CRANBERRY SCONES"]
My tested recipe (ingredients with amounts, steps, times, servings): [PASTE]
What makes my version different: [E.G. NO MIXER, MAKE-AHEAD, LESS SUGAR]
Common problems people have with this dish: [E.G. DRY, FLAT, SOGGY]
Dietary notes: [E.G. VEGETARIAN, CAN BE GLUTEN-FREE]
Audience: [E.G. BUSY FAMILIES, BEGINNER BAKERS]

Write:
1. SEO title (under 60 characters) and meta description (under 155).
2. Intro of 80–120 words: what the dish is, why this version works, who it's for. No life story.
3. "Why this recipe works": 3–4 bullets.
4. Ingredient notes: what each key ingredient does and substitutions.
5. Step-by-step instructions with visual cues (e.g. "until golden at the edges") and suggested process photo points.
6. Tips for success, addressing the common problems.
7. Variations, storage, freezing and reheating.
8. FAQ: 5 questions people search for about this dish.
9. Recipe JSON-LD (name, description, recipeIngredient, recipeInstructions, prepTime, cookTime, totalTime, recipeYield, recipeCategory, recipeCuisine, keywords), using ISO 8601 durations.

Use my amounts and times exactly; don't invent nutrition data or ratings.
```

## How to use it

1. **Paste the recipe exactly as you tested it**; the post depends on correct amounts.
2. **Add your own photos** at the suggested points.
3. **Validate the schema** with Google's Rich Results Test, or use your recipe card plugin's fields instead.

## Tips

- Add a personal note or tip from your testing; first-hand experience helps readers and trust.
- Link to related recipes that use the same ingredients.
