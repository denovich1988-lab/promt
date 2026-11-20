---
title: "10 ChatGPT Prompts for SEO (Fill In and Copy)"
seoTitle: "10 ChatGPT Prompts for SEO: Keywords, Briefs and Meta Tags"
date: 2026-11-20
description: Ten fill-in ChatGPT prompts for SEO tasks, from keyword clusters and content briefs to meta tags, FAQs, internal links and refreshing old posts.
related: [keyword-cluster-planner, seo-content-brief, meta-titles-descriptions-batch, content-refresh-old-post]
summary:
- ChatGPT is useful for SEO tasks that need structure and drafting, such as grouping keywords, planning briefs and writing meta tags.
- It does not have reliable search volume, ranking or backlink data, so pair it with a real SEO tool or Google Search Console.
- Give each prompt real inputs: your keyword list, page URL text, audience and competitors' headings.
- Always edit the output, check facts and make sure each page answers the searcher better than what already ranks.
faq:
- q: Can ChatGPT do keyword research?
  a: It can brainstorm related terms, group keywords by intent and suggest topics, but it should not be trusted for search volume or difficulty numbers. Get those from an SEO tool and paste them in.
- q: Is AI-written content bad for SEO?
  a: Google's public guidance focuses on whether content is helpful and original rather than how it was produced. Thin, unedited AI text tends to perform poorly; edited content with real expertise and examples is a different matter.
- q: What is the best ChatGPT prompt for SEO?
  a: The most useful one depends on the task, but a content brief prompt is a good start because it turns a keyword into a clear plan for the page, which improves everything you write after it.
---

SEO involves a lot of work that is repetitive but still needs judgement: sorting keywords, outlining pages, writing dozens of meta descriptions, finding internal links. ChatGPT handles that kind of work well when you give it the right inputs. It is much weaker at anything that needs live data, so the prompts below are built around what you already know or can export from your tools.

Each prompt has fill-in blanks in `[SQUARE BRACKETS]`. They also work in Claude and Gemini.

## What ChatGPT can and cannot do for SEO

**Good at:** grouping keywords by intent, drafting outlines and briefs, writing title tags and meta descriptions, generating FAQ questions, rewriting for clarity, spotting gaps between your page and a list of competitor headings.

**Not good at:** search volume, keyword difficulty, current rankings, backlink counts or anything about what Google is showing today. Some versions can browse the web, but treat any numbers it gives you as unverified. Get data from an SEO tool or Google Search Console and paste it into the prompt.

## 1. Group keywords into clusters

Start with a raw list exported from your keyword tool. This prompt turns it into page-level groups so you do not create several pages competing for the same intent.

```prompt
I run a [TYPE OF SITE] for [AUDIENCE].
Below is a list of keywords with monthly search volume.

Group them into clusters where one page could rank for every keyword in the cluster.
For each cluster give:
- a suggested primary keyword (highest volume that fits the intent),
- the search intent (informational, commercial, transactional or navigational),
- a working page title,
- the keywords in the cluster.

Put keywords that do not fit anywhere in a separate "unassigned" list.

Keywords:
[PASTE KEYWORD LIST WITH VOLUMES]
```

For a more detailed version, use the [keyword cluster planner](/prompts/keyword-cluster-planner/).

## 2. Find the search intent behind a keyword

Before writing, decide what kind of page the searcher expects. Paste the titles of the pages currently ranking so the model works from real results.

```prompt
Keyword: [KEYWORD]
Here are the titles of the top 10 results on Google right now:
[PASTE TITLES]

1. What is the main search intent, and is there a secondary one?
2. What format do most results use (list, guide, tool, product page, comparison)?
3. What do most of them cover that I must include?
4. What angle is missing that I could use to stand out?
```

## 3. Write a content brief

A brief turns a keyword into a plan a writer (or you) can follow.

```prompt
Create an SEO content brief for the keyword "[KEYWORD]".
Audience: [WHO IS SEARCHING AND WHAT THEY KNOW ALREADY]
Goal of the page: [E.G. GET EMAIL SIGN-UPS, SELL PRODUCT, EXPLAIN A TOPIC]
Competitor headings (H2/H3) from the top results:
[PASTE HEADINGS]

Include:
- 3 title options under 60 characters,
- a one-sentence angle for the page,
- an H2/H3 outline with a note on what each section must answer,
- questions to answer in an FAQ,
- what to leave out,
- a suggested word range based on the competitors.
```

Our [SEO content brief prompt](/prompts/seo-content-brief/) adds more structure for writers.

## 4. Write title tags and meta descriptions in bulk

```prompt
Write a title tag and meta description for each page below.
Rules:
- Title: under 60 characters, primary keyword near the start, no clickbait.
- Meta description: 140-155 characters, says what the reader gets, includes the keyword naturally, ends with a reason to click.
- Every title and description must be unique.

Return a table with columns: URL, title, title length, description, description length.

Pages (URL | primary keyword | one-line summary):
[PASTE PAGES]
```

Lengths from ChatGPT are not always exact, so check them in a spreadsheet. The [meta titles and descriptions batch prompt](/prompts/meta-titles-descriptions-batch/) covers this in more depth.

## 5. Generate an FAQ section

```prompt
My page targets "[KEYWORD]" for [AUDIENCE].
Here is the page content:
[PASTE CONTENT]

Suggest 6 questions a searcher would still have after reading this page.
Write a 40-60 word answer for each, using only facts from the page or general knowledge I can verify.
Mark any answer that needs a fact checked with {CHECK}.
```

## 6. Refresh an old post

Older posts often lose traffic because they are out of date or thinner than newer competitors. This prompt gives you a list of changes rather than a full rewrite.

```prompt
This post targets "[KEYWORD]" and has lost traffic over the last [TIME PERIOD].
Current post:
[PASTE POST]

Headings from the pages that now outrank it:
[PASTE HEADINGS]

List:
1. Outdated sections or claims I should check,
2. Topics competitors cover that I do not,
3. Sections that could be cut or merged,
4. A new introduction (under 80 words) that answers the query faster.
```

For a step-by-step version, see the [content refresh prompt](/prompts/content-refresh-old-post/).

## 7. Suggest internal links

```prompt
Here is a new article and a list of existing pages on my site.
Suggest 5-8 internal links from the new article to existing pages.
For each one give: the sentence in the article where the link fits, the anchor text (2-5 words, descriptive, not "click here"), and the target URL.
Also suggest 3 existing pages that should link back to the new article.

New article:
[PASTE ARTICLE]

Existing pages (URL | title):
[PASTE LIST]
```

## 8. Write image alt text

```prompt
Write alt text for each image below.
Page topic: [TOPIC]
Rules: describe what is in the image in under 125 characters, include the keyword only where it fits naturally, no "image of".

Images (file name | what it shows):
[PASTE LIST]
```

## 9. Draft schema markup

```prompt
Write JSON-LD schema markup of type [SCHEMA TYPE, E.G. FAQPAGE, PRODUCT, LOCALBUSINESS] for the page below.
Use only information from the page. Leave any field I have not given you out rather than inventing it.
After the code, list the fields I should double-check.

Page details:
[PASTE DETAILS]
```

Test the result with Google's Rich Results Test before publishing, since supported types and requirements can change.

## 10. Audit a page against its keyword

```prompt
Act as an SEO editor. Review this page for the keyword "[KEYWORD]" and the audience [AUDIENCE].

Check:
- Does the first paragraph answer the query?
- Is the keyword (or a close variant) in the title, H1, first 100 words and at least one H2?
- Are there sections that do not serve the searcher?
- Is anything hard to scan (long paragraphs, missing lists or tables)?

Give the 5 highest-impact fixes, in order, with a short example for each.

Page:
[PASTE PAGE]
```

## Tips for better SEO output

- **Feed it real data.** The prompts work best with your keyword exports, Search Console queries and competitor headings pasted in.
- **Edit for experience.** Add your own examples, screenshots, results and opinions. That is the part AI cannot supply and readers value most.
- **Check every fact.** Treat numbers, dates and product details in the output as drafts until you verify them.
- **Give the AI a clear role.** Opening with a specific job, such as "an SEO editor for a B2B software blog", tends to sharpen the feedback. Our guide to [role prompting](/blog/role-prompting/) explains how.

For more ready-to-use prompts across marketing, writing and research, browse our [ChatGPT prompts hub](/chatgpt-prompts/).
