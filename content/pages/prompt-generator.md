---
title: Free AI Prompt Generator
h1: Free AI prompt generator
description: Build a clear, structured prompt for ChatGPT, Claude, Gemini, Midjourney or AI video in seconds. Fill in a few fields and copy the result. Free, no sign-up.
updated: 2026-11-18
schemaType: WebApplication
faq:
  - q: "Is the prompt generator free?"
    a: "Yes. It's free, needs no account and has no usage limits."
  - q: "Does it send my text to an AI?"
    a: "No. The generator only assembles your answers into a prompt inside your browser. Nothing is sent to us or to any AI service until you paste it there yourself."
  - q: "Which AI tools does it work with?"
    a: "Text and code prompts work in ChatGPT, Claude, Gemini and other chat assistants. Image prompts suit Midjourney, GPT Image, Flux, Gemini and Ideogram. Video prompts suit Seedance, Veo, Kling and Runway."
---

Answer a few questions and the generator turns them into a structured prompt: role, task, context, rules and output format. Everything runs in your browser; nothing you type is sent anywhere.

<div class="gen" data-generator>
  <div class="gen__form">
    <label class="gen__field"><span>What do you want to create?</span>
      <select data-g="type">
        <option value="text">Text: email, post, article, plan, analysis</option>
        <option value="code">Code: write, review or debug</option>
        <option value="image">Image: Midjourney, GPT Image, Flux, Gemini</option>
        <option value="video">Video: Seedance, Veo, Kling, Runway</option>
      </select>
    </label>
    <label class="gen__field"><span>Task — what should the AI do?</span>
      <textarea data-g="task" rows="2" placeholder="e.g. Write a follow-up email to a client who hasn't replied in two weeks"></textarea>
    </label>
    <label class="gen__field" data-for="text code"><span>Role — who should the AI act as? <em>optional</em></span>
      <input data-g="role" placeholder="e.g. an experienced account manager">
    </label>
    <label class="gen__field"><span>Context — what does the AI need to know?</span>
      <textarea data-g="context" rows="3" placeholder="e.g. We design websites for dentists. The client asked for a quote on 3 March and went quiet."></textarea>
    </label>
    <label class="gen__field" data-for="text"><span>Audience <em>optional</em></span>
      <input data-g="audience" placeholder="e.g. a busy clinic owner">
    </label>
    <div class="gen__row" data-for="text">
      <label class="gen__field"><span>Tone</span>
        <select data-g="tone"><option value="">Any</option><option>friendly and direct</option><option>professional</option><option>warm and encouraging</option><option>confident and persuasive</option><option>simple and clear for beginners</option><option>formal</option></select>
      </label>
      <label class="gen__field"><span>Length</span>
        <select data-g="length"><option value="">Any</option><option>under 100 words</option><option>about 150–250 words</option><option>about 500 words</option><option>as long as needed, but no filler</option></select>
      </label>
    </div>
    <label class="gen__field" data-for="image video"><span>Style and mood <em>optional</em></span>
      <input data-g="style" placeholder="e.g. clean studio photo, soft daylight, calm premium mood">
    </label>
    <label class="gen__field" data-for="image video"><span>Format</span>
      <select data-g="ratio"><option value="">Any</option><option>square 1:1</option><option>vertical 9:16</option><option>horizontal 16:9</option><option>portrait 4:5</option></select>
    </label>
    <label class="gen__field" data-for="text code"><span>Output format</span>
      <select data-g="format"><option value="">Let the AI decide</option><option>a short draft I can send as is</option><option>a bulleted list</option><option>a table</option><option>step-by-step instructions</option><option>3 different versions to choose from</option><option>code first, then a short explanation</option></select>
    </label>
    <label class="gen__field"><span>Rules — anything to always do or avoid? <em>optional</em></span>
      <textarea data-g="rules" rows="2" placeholder="e.g. No jargon. Don't invent numbers. Mention the free consultation."></textarea>
    </label>
    <label class="gen__check"><input type="checkbox" data-g="ask" checked> Ask me questions first if something important is missing</label>
  </div>
  <div class="gen__out">
    <div class="editor">
      <pre class="editor__text"><code data-g-out></code></pre>
      <div class="editor__bar"><p class="editor__status" data-g-status>Fill in the task to start</p><div class="editor__actions"><button class="btn btn--quiet" type="button" data-g-reset>Reset</button><button class="btn btn--copy" type="button" data-g-copy>Copy prompt</button></div></div>
    </div>
  </div>
</div>

## How the generator builds a prompt

Every prompt it creates follows the same five parts we recommend in our guide on [how to write AI prompts](/blog/how-to-write-ai-prompts/):

1. **Role** — sets the expertise and point of view.
2. **Task** — one clear job, starting with a verb.
3. **Context** — the facts only you know. This part matters most.
4. **Rules** — tone, length and what to avoid.
5. **Format** — the shape of the answer you want.

Image and video prompts are built differently: subject, setting, style, light, camera and format, plus a short "avoid" list.

## Tips for better results

- **Be concrete in the context field.** Names, numbers, dates and the reason you're asking make the biggest difference.
- **Keep the first answer as a draft.** Ask follow-up questions: shorter, simpler, more examples, a different tone.
- **Save prompts that work.** Or browse our [library of ready-made prompts](/prompts/) with fill-in blanks for common tasks.
