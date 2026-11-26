---
title: HTML accessibility audit and fixes
date: 2026-11-26
category: coding
description: Review HTML or component code for accessibility problems like missing labels, poor focus handling and ARIA misuse, and get corrected code.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [web accessibility, wcag, html, frontend]
---

Many accessibility problems — form fields without labels, clickable divs, missing focus styles, images without alt text — are easy to fix once someone points them out. This HTML accessibility prompt reviews your markup or component code against common WCAG issues, explains who each problem affects and returns corrected code you can drop in.

## Prompt

```prompt
Act as a senior front-end developer who specialises in accessibility. Review this code.

Framework: [PLAIN HTML / REACT / VUE / OTHER]
What the component does: [E.G. SIGNUP FORM, MODAL DIALOG, NAVIGATION MENU, PRODUCT CARD]
Target standard: [E.G. WCAG 2.2 AA]
Code:
[PASTE CODE]

Check for: semantic elements, headings order, labels and instructions for inputs, error messages linked to fields, keyboard access and tab order, visible focus, focus management in modals and menus, ARIA used correctly (and not where native HTML works), alt text, colour contrast risks in the CSS, motion and timing, touch target size, screen reader announcements for dynamic content.

Output:
1. A table: issue, line or element, who it affects, WCAG criterion, severity.
2. The corrected code in full, with comments on each change.
3. Manual tests I should still run (keyboard only, screen reader, zoom to 200%).
Don't claim the code is fully compliant; automated review can't confirm that.
```

## How to use it

1. **Paste one component at a time** with its CSS if contrast or focus is in question.
2. **Run the manual tests** with a keyboard and a screen reader after applying fixes.
3. **Add the patterns to your component library** so new code starts accessible.

## Tips

- Use a real `<button>` instead of a clickable div; it brings keyboard support for free.
- Pair this with an automated checker in CI to catch regressions.
