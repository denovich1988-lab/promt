---
title: Git merge conflict resolution prompt
date: 2026-11-27
category: coding
description: Resolve Git merge conflicts safely with AI, by explaining both sides, proposing a merged version that keeps each intent, and listing tests to run.
models: [ChatGPT, Claude, Gemini]
level: Intermediate
tags: [git, merge conflicts, version control, code review]
---

Merge conflicts are where bugs slip in: it's tempting to pick "ours" or "theirs" just to make the markers go away. A better approach is to understand what each branch was trying to do and keep both intents. This Git merge conflict resolution prompt explains the conflicting changes, proposes a merged version with reasoning, and tells you what to test before you commit.

## Prompt

```prompt
Act as a senior engineer helping me resolve a Git merge conflict safely.

Language and framework: [E.G. TYPESCRIPT, REACT]
What my branch does: [SHORT DESCRIPTION OF MY CHANGE]
What the other branch does: [SHORT DESCRIPTION, OR PASTE THE PR TITLE AND COMMITS]
Operation: [MERGE / REBASE / CHERRY-PICK]
Conflicted file(s) with markers:
[PASTE THE CONFLICTED SECTION INCLUDING <<<<<<<, =======, >>>>>>> AND ENOUGH SURROUNDING CODE]
Base version of the section (optional, from `git show :1:path/to/file`):
[PASTE IF AVAILABLE]

Please:
1. Explain in plain words what each side changed and why it probably changed it.
2. Say whether the changes are compatible, overlapping, or truly contradictory.
3. Propose the resolved code with no conflict markers, keeping both intents where possible.
4. Explain each decision, and point out anything you are unsure about.
5. List other places in the codebase that might need the same update (renamed functions, changed signatures, imports).
6. Give the Git commands to mark the file resolved and continue the operation.
7. List tests or manual checks to run before committing.

Do not silently drop code from either side. If a choice depends on product intent, ask me.
```

## How to use it

1. **Include enough code around the markers** so the AI can see the context.
2. **Compare the proposal with both branches** and confirm nothing was lost.
3. **Run the tests and the app** before you finish the merge or rebase.

## Tips

- Turn on `git config merge.conflictstyle diff3` (or `zdiff3`) to see the base version inside the markers.
- Don't paste secrets or private keys from config files into an AI tool.
