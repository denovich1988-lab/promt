---
title: React component prompt from a plain spec
date: 2026-11-26
category: coding
description: Generate a typed, accessible React component from a plain description, with props, states, styling, tests and usage examples.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [react, typescript, frontend, components]
---

Asking an AI for "a React dropdown" usually gets you a demo that ignores keyboard users, loading and error states, and your project's conventions. This React component prompt starts from a clear spec: what the component does, its props, its states and your stack. It returns a typed, accessible component with tests and usage examples that fit your codebase instead of a generic snippet.

## Prompt

```prompt
Act as a senior frontend engineer. Build a React component.

Component: [NAME AND WHAT IT DOES, E.G. A SEARCHABLE SELECT FOR CHOOSING A CUSTOMER]
Stack: [REACT VERSION, TYPESCRIPT YES/NO, STYLING E.G. TAILWIND / CSS MODULES / STYLED-COMPONENTS, STATE OR DATA LIBRARY]
Props and behaviour: [LIST INPUTS, CALLBACKS, CONTROLLED/UNCONTROLLED]
States to handle: [LOADING, EMPTY, ERROR, DISABLED, LONG CONTENT]
Design notes: [SIZES, VARIANTS, RESPONSIVE BEHAVIOUR]
Project conventions: [FILE STRUCTURE, NAMING, TESTING LIBRARY]

Deliver:
1. The component code with typed props, sensible defaults and short comments.
2. Accessibility: semantic HTML, keyboard support, focus management and ARIA only where needed; list what you implemented.
3. All the states I listed, handled visibly.
4. Tests with [TESTING LIBRARY] covering rendering, interaction, keyboard use and edge cases.
5. A usage example and, if useful, a Storybook story.
6. Performance notes (memoization only where it helps).
7. Anything in my spec that is ambiguous, with the choice you made.

Don't add dependencies I haven't listed without asking.
```

## How to use it

1. **Describe states and edge cases** up front; that's where generic components fail.
2. **Run the tests and try the component with a keyboard** before merging.
3. **Ask for refinements** against your design system tokens.

## Tips

- Check whether your project already has a component library before building from scratch.
- Ask for a short README section if the component will be reused by other teams.
