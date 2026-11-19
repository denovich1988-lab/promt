---
title: "12 ChatGPT Prompts for Your Resume (Fill in and Copy)"
seoTitle: "12 ChatGPT Prompts for Resume Writing and Editing"
date: 2026-11-19
description: Twelve ChatGPT prompts for resume writing, from tailoring to a job post to stronger bullet points, a summary, skills and a final proofread.
related: [resume-bullet-points-with-results, cover-letter-from-job-post, star-interview-answers]
summary:
- ChatGPT writes better resume content when you give it the job post, your real experience and clear rules.
- Start by mapping the job post, then rewrite bullets, the summary and the skills section to match it.
- Never let the AI invent numbers, titles or skills; ask it to flag gaps instead.
- Finish with a recruiter-style review and a proofread before you send the resume.
faq:
- q: Can ChatGPT write my resume?
  a: It can draft and improve every section, but it only knows what you tell it. Give it your real experience and the job post, and check every line for accuracy before you use it.
- q: Will recruiters know I used ChatGPT on my resume?
  a: Generic AI phrases like "results-driven professional" are easy to spot. Using specific facts from your own work, and editing the output in your own words, makes the resume read as yours.
- q: Do these resume prompts work in Claude and Gemini?
  a: Yes. They are plain-text prompts, so they work in ChatGPT, Claude, Gemini and most other AI chat tools.
---

Ask ChatGPT to "improve my resume" and you will usually get the same polished, empty phrases everyone else gets: *dynamic*, *results-driven*, *proven track record*. The fix is not a smarter AI. It is a better prompt: one that gives the model the job you want, the work you actually did, and strict rules about what it may not invent.

The 12 prompts below follow the order you would work on a resume: understand the job, rewrite the content, polish, then check. Fill in the blanks and copy. They also work in Claude and Gemini.

**One rule for all of them:** the AI does not know your career. If a prompt produces a number, a tool or a title you never mentioned, delete it. Each prompt tells the model to ask or mark gaps instead of guessing, which keeps that from happening most of the time.

## Before you write

### 1. Decode the job post

```prompt
Analyse this job post for a [JOB TITLE] role. List:
1. The 5 most important requirements, in order of how much the employer seems to care
2. Keywords and tools I should use word for word on my resume
3. Soft skills they hint at but don't state directly
4. Anything unusual or specific to this company

Job post:
[PASTE JOB POST]
```

### 2. Find the gaps between you and the job

```prompt
Compare my resume with the job post below. Make a table with columns: Requirement | Evidence on my resume | Strength (strong / weak / missing). Then list the 3 gaps I should address first and suggest which real experience of mine might cover each one. Do not invent experience.

My resume:
[PASTE RESUME]

Job post:
[PASTE JOB POST]
```

### 3. Pull achievements out of your memory

Most people undersell their work because they forget it. This prompt turns the AI into an interviewer.

```prompt
I am updating my resume for [TARGET ROLE]. Interview me about my job as [CURRENT OR PAST ROLE] at [COMPANY TYPE]. Ask one question at a time, 8 questions in total, focused on problems I solved, things I improved, numbers I can share and feedback I received. After my last answer, list the 5 strongest achievements you heard, each in one sentence.
```

## Rewrite the content

### 4. Turn duties into results

"Responsible for social media" says what you were meant to do, not what you achieved. For a version with a full before-and-after format, use our [resume bullet points with results](/prompts/resume-bullet-points-with-results/) prompt.

```prompt
Rewrite these resume bullets for a [TARGET ROLE] application. For each bullet:
- Start with a strong past-tense verb
- Show the result or impact, not just the duty
- Keep it to one line (max 25 words)
- Use only facts I gave you. Where a number would help but I didn't give one, add {ADD NUMBER} so I can fill it in.

Bullets:
[PASTE BULLETS]
```

### 5. Write a summary that isn't generic

```prompt
Write 3 versions of a resume summary for a [TARGET ROLE] position. Each version: 2–3 sentences, max 50 words, first-person implied (no "I"). Mention my years of experience ([YEARS]), my strongest area ([MAIN STRENGTH]) and one concrete achievement ([ACHIEVEMENT]). Do not use these words: results-driven, dynamic, passionate, proven track record, team player, synergy.
```

### 6. Tailor the skills section

```prompt
Here is my current skills list and a job post. Reorder and group my skills into 3–4 categories that match the job. Put the skills the employer mentions first, using their exact wording where my skill is the same thing. Remove skills that are irrelevant to this role. Do not add any skill I did not list, but tell me separately which skills from the post I am missing.

My skills:
[PASTE SKILLS]

Job post:
[PASTE JOB POST]
```

### 7. Explain a career change

```prompt
I am moving from [CURRENT FIELD] to [NEW FIELD]. Here is my experience. Identify the transferable skills and achievements that matter most in [NEW FIELD], and rewrite my 4 strongest bullets so a hiring manager in that field understands their value. Avoid industry jargon from my old field.

My experience:
[PASTE EXPERIENCE]
```

### 8. Handle an employment gap honestly

```prompt
I have a gap in my work history from [START DATE] to [END DATE] because [REASON]. Suggest how to show this on my resume in one short line, and write a 2-sentence explanation I could use in a cover letter or interview. Keep it honest, brief and focused on what I am ready to do now.
```

## Polish and check

### 9. Cut it to one page

```prompt
My resume is too long for a [JOB LEVEL, e.g. mid-level] role. Suggest what to cut or shorten to fit one page. Rank each suggestion by how little it would hurt my application for [TARGET ROLE]. Keep all achievements with numbers. Show the shortened version of each section you changed.

Resume:
[PASTE RESUME]
```

### 10. Make it easy for applicant tracking systems

Many employers use applicant tracking systems (ATS) to sort applications, and how each one reads a resume varies. Simple formatting and the employer's own wording are the safest approach.

```prompt
Review my resume for ATS-friendliness for this job post. Check: standard section headings, keywords from the post that are missing, anything that might not parse well (tables, columns, icons, headers and footers), and inconsistent date formats. List the problems in order of importance with a specific fix for each. Do not rewrite the whole resume.

Resume:
[PASTE RESUME]

Job post:
[PASTE JOB POST]
```

### 11. Get a recruiter's first impression

```prompt
Act as a recruiter hiring for a [TARGET ROLE] at a [COMPANY TYPE]. You have 30 seconds to scan my resume. Tell me:
1. What you remember after the scan
2. Whether you would move me to the next round, and why
3. The 3 changes that would most improve my chances
Be direct; I want honest feedback, not encouragement.

Resume:
[PASTE RESUME]
```

### 12. Final proofread

```prompt
Proofread my resume. List every spelling, grammar and punctuation error, every inconsistency (tense, date format, capitalisation, bullet style) and every vague phrase. Quote each problem and give the fix. Use [US OR UK] English. Do not change the content or add anything new.

Resume:
[PASTE RESUME]
```

## Tips for better results

- **Work in one chat per application.** Paste the job post once at the start, and the AI can refer back to it for every section.
- **Give it more raw material than you need.** Long, messy notes about your work give the model more to choose from than a finished resume does.
- **Edit the final wording yourself.** Read every bullet aloud. If it doesn't sound like something you would say in an interview, rewrite it.
- **Check your privacy.** Remove your address, phone number and anything confidential about your employer before pasting your resume into any AI tool, and check the tool's data settings.

## After the resume

Once your resume is ready, use the same job post to write a matching cover letter with our [cover letter from a job post](/prompts/cover-letter-from-job-post/) prompt. When the interview invitation arrives, prepare your stories with the [STAR interview answers](/prompts/star-interview-answers/) prompt.

For more prompts like these, browse our [ChatGPT prompts hub](/chatgpt-prompts/), or read [how to make ChatGPT write like a human](/blog/make-chatgpt-sound-human/) if the drafts still sound robotic.
