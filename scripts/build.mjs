// Builds the static site from content/prompts/*.md into dist/.
// No framework: one small script, so the daily publishing job stays simple.
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { Marked } from 'marked';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const CONTENT = path.join(ROOT, 'content', 'prompts');
const ASSETS = path.join(ROOT, 'assets');
const DIST = path.join(ROOT, 'dist');
const site = JSON.parse(fs.readFileSync(path.join(ROOT, 'site.config.json'), 'utf8'));
const SITE_URL = (process.env.SITE_URL || site.url).replace(/\/$/, '');
const BUILD_ID = Date.now().toString(36);

// ---------- helpers ----------
const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const fmtDate = (d) =>
  new Date(d + 'T00:00:00Z').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
const fmtShort = (d) =>
  new Date(d + 'T00:00:00Z').toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });
const toISODate = (d) => (d instanceof Date ? d.toISOString().slice(0, 10) : String(d).slice(0, 10));
const todayISO = () => new Date().toISOString().slice(0, 10);
const write = (rel, html) => {
  const file = path.join(DIST, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
};
const catName = (c) => site.categories[c]?.name || c;
const listJoin = (a) => (a.length < 2 ? a.join('') : `${a.slice(0, -1).join(', ')} and ${a[a.length - 1]}`);

// ---------- prompt editor ----------
// Placeholders like [YOUR PRODUCT] become editable blanks right on the page.
// Any [BRACKETED TEXT] that starts with a capital or digit and has no lowercase letters.
const PH = /\[([A-Z0-9][^\[\]a-z\n]*)\]/g;
const countBlanks = (text) => new Set([...text.matchAll(PH)].map((m) => m[1])).size;
const withBlanks = (text) => {
  let out = '';
  let last = 0;
  for (const m of text.matchAll(PH)) {
    out += esc(text.slice(last, m.index));
    const ph = m[1];
    out += `<span class="blank" contenteditable="true" spellcheck="false" role="textbox" aria-label="Fill in: ${esc(ph.toLowerCase())}" data-ph="${esc(ph)}"></span>`;
    last = m.index + m[0].length;
  }
  return out + esc(text.slice(last));
};

function editor(text) {
  const n = countBlanks(text);
  const status = n
    ? `<p class="editor__status" data-status aria-live="polite"><span data-filled>0</span> of ${n} blank${n === 1 ? '' : 's'} filled</p>`
    : `<p class="editor__status">Ready to copy</p>`;
  return `<div class="editor" data-editor>
<pre class="editor__text"><code>${withBlanks(text)}</code></pre>
<div class="editor__bar">${status}<div class="editor__actions">${n ? '<button class="btn btn--quiet" type="button" data-clear>Clear</button>' : ''}<button class="btn btn--copy" type="button" data-copy>Copy prompt</button></div></div>
</div>`;
}

// ---------- markdown ----------
const marked = new Marked({
  renderer: {
    code({ text, lang }) {
      if (lang === 'prompt') return editor(text.trim()) + '\n';
      return `<pre class="code"><code>${esc(text)}</code></pre>\n`;
    },
  },
});

// ---------- load content ----------
function loadPrompts() {
  if (!fs.existsSync(CONTENT)) return [];
  const today = todayISO();
  const seen = new Set();
  return fs
    .readdirSync(CONTENT)
    .filter((f) => f.endsWith('.md'))
    .map((file) => {
      const raw = fs.readFileSync(path.join(CONTENT, file), 'utf8');
      const { data, content } = matter(raw);
      const date = toISODate(data.date || file.slice(0, 10));
      const slug = data.slug || file.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '');
      for (const k of ['title', 'description', 'category']) if (!data[k]) throw new Error(`${file}: missing "${k}" in front matter`);
      if (!site.categories[data.category]) throw new Error(`${file}: unknown category "${data.category}"`);
      if (seen.has(slug)) throw new Error(`${file}: duplicate slug "${slug}"`);
      seen.add(slug);
      const promptMatch = content.match(/```prompt\n([\s\S]*?)```/);
      if (!promptMatch) throw new Error(`${file}: no \`\`\`prompt block found`);
      // The prompt page shows the editor at the top, so the body keeps everything else.
      const [intro, ...after] = content.split(/^## Prompt\s*$/m);
      const rest = after.join('').replace(/```prompt\n[\s\S]*?```/, '');
      return {
        file,
        slug,
        date,
        title: data.title,
        description: data.description,
        category: data.category,
        models: data.models || [],
        tags: data.tags || [],
        level: data.level || '',
        updated: data.updated ? toISODate(data.updated) : '',
        promptText: promptMatch[1].trim(),
        introHtml: marked.parse(intro || ''),
        restHtml: marked.parse(rest || ''),
        draft: Boolean(data.draft),
      };
    })
    .filter((p) => !p.draft && p.date <= today) // future-dated prompts wait for their day
    .sort((a, b) => (a.date === b.date ? a.slug.localeCompare(b.slug) : b.date.localeCompare(a.date)));
}

// ---------- layout ----------
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const OG_IMAGE = `${SITE_URL}/assets/og.png`;
const LEGAL = [
  ['/about/', 'About'],
  ['/contact/', 'Contact'],
  ['/privacy/', 'Privacy policy'],
  ['/cookies/', 'Cookie policy'],
  ['/terms/', 'Terms of use'],
  ['/disclaimer/', 'Disclaimer'],
];

// Keep <title> within ~60 characters: drop the brand suffix when the title is already long.
const makeTitle = (title) => {
  if (!title) return `Free AI Prompts for ChatGPT, Claude & Gemini | ${site.name}`;
  const full = `${title} | ${site.name}`;
  return full.length <= 62 ? full : title;
};

function layout({ title, description, pathname, body, ogType = 'website', jsonLd = [], crumbs = [], published = '', modified = '', noindex = false }) {
  const fullTitle = makeTitle(title);
  const desc = description || site.description;
  const canonical = SITE_URL + pathname;
  const navCats = Object.entries(site.categories)
    .map(([k, c]) => `<a href="/category/${k}/"${pathname === `/category/${k}/` ? ' aria-current="page"' : ''}>${esc(c.name)}</a>`)
    .join('');
  const graph = [
    {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: site.name,
      url: SITE_URL + '/',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/assets/logo.png`, width: 512, height: 512 },
      email: site.email,
      description: site.description,
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      name: site.name,
      url: SITE_URL + '/',
      description: site.description,
      inLanguage: site.language,
      publisher: { '@id': ORG_ID },
      potentialAction: { '@type': 'SearchAction', target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/?q={search_term_string}` }, 'query-input': 'required name=search_term_string' },
    },
  ];
  if (crumbs.length) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [['Home', '/'], ...crumbs].map(([name, url], i) => ({ '@type': 'ListItem', position: i + 1, name, item: SITE_URL + url })),
    });
  }
  for (const j of [].concat(jsonLd || [])) if (j) graph.push(j);
  return `<!doctype html>
<html lang="${site.language}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="robots" content="${noindex ? 'noindex, follow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'}">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="${ogType}">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:locale" content="en_US">
<meta property="og:title" content="${esc(title || fullTitle)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${OG_IMAGE}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(site.name)}: free AI prompts you can fill in and copy">
${published ? `<meta property="article:published_time" content="${published}">\n<meta property="article:modified_time" content="${modified || published}">` : ''}
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title || fullTitle)}">
<meta name="twitter:description" content="${esc(desc)}">
<meta name="twitter:image" content="${OG_IMAGE}">
<meta name="theme-color" content="#e9ebf0" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#101218" media="(prefers-color-scheme: dark)">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/logo.png">
<link rel="preload" href="/assets/fonts/bricolage.woff2" as="font" type="font/woff2" crossorigin>
<link rel="alternate" type="application/rss+xml" title="${esc(site.name)}" href="/rss.xml">
<link rel="stylesheet" href="/assets/style.css?v=${BUILD_ID}">
<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c')}</script>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="top">
  <div class="wrap top__row">
    <a class="logo" href="/" aria-label="${esc(site.name)} home">promt<span class="logo__blank" aria-hidden="true"></span></a>
    <nav class="top__nav" aria-label="Categories">${navCats}</nav>
    <nav class="top__aux" aria-label="Site"><a href="/blog/"${pathname.startsWith('/blog/') ? ' aria-current="page"' : ''}>Blog</a><a href="/about/"${pathname === '/about/' ? ' aria-current="page"' : ''}>About</a></nav>
  </div>
</header>
<main id="main">
${body}
</main>
<footer class="foot">
  <div class="wrap foot__grid">
    <div>
      <p class="logo logo--small">promt<span class="logo__blank" aria-hidden="true"></span></p>
      <p class="foot__about">${esc(site.tagline)} Free to copy and use.</p>
    </div>
    <nav aria-label="Prompts by AI tool"><p class="foot__h">By AI tool</p>${Object.entries(site.hubs).map(([k, h]) => `<a href="/${k}/">${esc(h.title)}</a>`).join('')}</nav>
    <nav aria-label="Prompts by task"><p class="foot__h">By task</p>${Object.entries(site.categories).map(([k, c]) => `<a href="/category/${k}/">${esc(c.name)} prompts</a>`).join('')}</nav>
    <nav aria-label="Company and legal"><p class="foot__h">Company</p><a href="/blog/">Blog</a>${LEGAL.map(([u, n]) => `<a href="${u}">${n}</a>`).join('')}<a href="/rss.xml">RSS feed</a></nav>
  </div>
  <div class="wrap"><p class="muted foot__copy">© ${new Date().getFullYear()} ${esc(site.name)}. Not affiliated with OpenAI, Anthropic, Google or Midjourney.</p></div>
</footer>
<script src="/assets/app.js?v=${BUILD_ID}" defer></script>
</body>
</html>`;
}

// Visible FAQ block + matching FAQPage schema (answers must be the same text users see).
const faqHtml = (faq, heading = 'Frequently asked questions') =>
  faq.length ? `<section class="faq prose" aria-labelledby="faq-h"><h2 id="faq-h">${esc(heading)}</h2>${faq.map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join('')}</section>` : '';
const faqSchema = (faq) => (faq.length ? { '@type': 'FAQPage', mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) } : null);

const row = (p) => `<li class="row" data-search="${esc([p.title, p.description, catName(p.category), ...p.models, ...p.tags].join(' ').toLowerCase())}" data-cat="${p.category}">
  <time class="row__date" datetime="${p.date}">${fmtShort(p.date)}</time>
  <div class="row__main">
    <h3 class="row__title"><a href="/prompts/${p.slug}/">${esc(p.title)}</a></h3>
    <p class="row__desc">${esc(p.description)}</p>
  </div>
  <p class="row__cat">${esc(catName(p.category))}</p>
  <p class="row__models">${p.models.length ? 'For ' + esc(listJoin(p.models)) : ''}</p>
</li>`;

// ---------- pages ----------
const hubLinks = () =>
  `<nav class="hubs" aria-label="Prompts by AI tool">${Object.entries(site.hubs)
    .map(([k, h]) => `<a class="hub" href="/${k}/"><span class="hub__name">${esc(h.title.replace(/ for .*/, ''))}</span><span class="hub__count">${h._count} prompt${h._count === 1 ? '' : 's'}</span></a>`)
    .join('')}</nav>`;

const postRow = (b) => `<li class="row row--post">
  <time class="row__date" datetime="${b.date}">${fmtShort(b.date)}</time>
  <div class="row__main">
    <h3 class="row__title"><a href="/blog/${b.slug}/">${esc(b.title)}</a></h3>
    <p class="row__desc">${esc(b.description)}</p>
  </div>
  <p class="row__cat">${b.minutes} min read</p>
</li>`;

const itemList = (name, items) => ({
  '@type': 'ItemList',
  name,
  numberOfItems: items.length,
  itemListElement: items.slice(0, 100).map((x, i) => ({ '@type': 'ListItem', position: i + 1, url: x.url, name: x.name })),
});
const promptItems = (list) => list.map((p) => ({ url: `${SITE_URL}/prompts/${p.slug}/`, name: p.title }));
const authorRef = () => ({ '@type': 'Organization', '@id': ORG_ID, name: `${site.name} editorial team`, url: `${SITE_URL}/about/` });

const homeFaq = () => [
  { q: `What is ${site.name}?`, a: `${site.name} is a free library of AI prompts for ChatGPT, Claude, Gemini, Midjourney and AI video tools. Each prompt has fill-in blanks: you type your details on the page and copy a ready-to-use prompt.` },
  { q: 'Are the prompts free?', a: 'Yes. Every prompt on the site is free to copy and use for personal and commercial work. No sign-up is needed.' },
  { q: 'How do I use a prompt?', a: 'Open a prompt, click each blue blank and type your details, then press Copy prompt and paste it into ChatGPT, Claude, Gemini or another AI tool. Treat the first answer as a draft and ask for changes.' },
  { q: 'Which AI tools do the prompts work with?', a: 'Text prompts work with ChatGPT, Claude and Gemini. Image prompts are written for Midjourney, Gemini, Flux, DALL·E and Ideogram. Video prompts are written for Seedance, Veo, Kling and Runway. Each prompt page lists the tools it suits.' },
  { q: 'How often are new prompts added?', a: 'New prompts are published every day. Follow the RSS feed to see them as they come out.' },
];

function homePage(prompts, posts) {
  const [today] = prompts;
  const counts = Object.fromEntries(Object.keys(site.categories).map((k) => [k, prompts.filter((p) => p.category === k).length]));
  const chips = [`<button class="chip" type="button" data-filter="" aria-pressed="true">All<span>${prompts.length}</span></button>`]
    .concat(Object.entries(site.categories).filter(([k]) => counts[k]).map(([k, c]) => `<button class="chip" type="button" data-filter="${k}" aria-pressed="false">${esc(c.name)}<span>${counts[k]}</span></button>`))
    .join('');
  const faq = homeFaq();
  const featured = today
    ? `<section class="today" aria-labelledby="today-h">
  <div class="wrap today__grid">
    <div class="today__info">
      <p class="today__when">Newest prompt, <time datetime="${today.date}">${fmtDate(today.date)}</time></p>
      <h2 id="today-h" class="today__title">${esc(today.title)}</h2>
      <p class="today__desc">${esc(today.description)}</p>
      <p class="today__meta">${esc(catName(today.category))}${today.models.length ? `. Works with ${esc(listJoin(today.models))}.` : ''}</p>
      <a class="link-strong" href="/prompts/${today.slug}/">Read the guide for this prompt</a>
    </div>
    ${editor(today.promptText)}
  </div>
</section>`
    : '';
  const body = `
<section class="hero wrap">
  <h1 class="hero__title">Free AI prompts. Fill in the <span class="hero__blank">blanks</span>.</h1>
  <p class="hero__lede">${esc(site.description)}</p>
  ${hubLinks()}
</section>
${featured}
<section class="library wrap" aria-labelledby="lib-h">
  <div class="library__head">
    <h2 id="lib-h">AI prompt library</h2>
    <label class="search"><span class="visually-hidden">Search prompts</span><input type="search" name="q" placeholder="Search, e.g. resume, Midjourney" data-search-input autocomplete="off"></label>
  </div>
  <div class="chips" role="group" aria-label="Filter by category">${chips}</div>
  <ol class="rows" data-grid>${prompts.map(row).join('\n')}</ol>
  <p class="empty" data-empty hidden>Nothing matches that search. Try a shorter word or pick another category.</p>
</section>
${posts.length ? `<section class="library wrap" aria-labelledby="blog-h">
  <div class="library__head"><h2 id="blog-h">Guides from the blog</h2><a class="link-strong" href="/blog/">All articles</a></div>
  <ol class="rows">${posts.slice(0, 3).map(postRow).join('\n')}</ol>
</section>` : ''}
<div class="wrap">${faqHtml(faq)}</div>`;
  return layout({
    title: '',
    description: site.description,
    pathname: '/',
    body,
    jsonLd: [itemList('Newest AI prompts', promptItems(prompts.slice(0, 20))), faqSchema(faq)],
  });
}

const promptFaq = (p) => {
  const tools = p.models.length ? listJoin(p.models) : 'most AI chat tools';
  const blanks = [...new Set([...p.promptText.matchAll(PH)].map((m) => m[1].toLowerCase()))];
  return [
    { q: 'What does this prompt do?', a: p.description },
    { q: 'Which AI tools does it work with?', a: `It is written for ${tools}. It also works in other AI tools that accept text prompts, with small changes.` },
    {
      q: 'What do I need to fill in?',
      a: blanks.length ? `${blanks.length} blank${blanks.length === 1 ? '' : 's'}: ${blanks.slice(0, 6).join('; ')}${blanks.length > 6 ? '; and more' : ''}. Click each blue blank on the page, type your details and press Copy prompt.` : 'Nothing. The prompt is ready to copy as it is.',
    },
    { q: 'Is this prompt free to use?', a: 'Yes. You can copy and use it for personal and commercial work.' },
  ];
};

function promptPage(p, i, prompts) {
  const newer = prompts[i - 1];
  const older = prompts[i + 1];
  const related = prompts.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 4);
  const tool = p.models[0] || 'AI';
  const hubFor = Object.entries(site.hubs).filter(([, h]) => h.models.some((m) => p.models.includes(m)));
  const faq = promptFaq(p);
  const url = `${SITE_URL}/prompts/${p.slug}/`;
  const body = `
<article class="prompt">
  <header class="wrap prompt__head">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/category/${p.category}/">${esc(catName(p.category))} prompts</a></nav>
    <h1>${esc(p.title)}</h1>
    <p class="prompt__lede">${esc(p.description)}</p>
    <dl class="facts">
      <div><dt>Published</dt><dd><time datetime="${p.date}">${fmtDate(p.date)}</time></dd></div>
      ${p.models.length ? `<div><dt>Works with</dt><dd>${esc(listJoin(p.models))}</dd></div>` : ''}
      ${p.level ? `<div><dt>Level</dt><dd>${esc(p.level)}</dd></div>` : ''}
      <div><dt>By</dt><dd><a href="/about/">${esc(site.name)} editorial team</a></dd></div>
    </dl>
  </header>
  <div class="wrap prompt__body">
    <div class="prose prompt__intro">${p.introHtml}</div>
    <h2 class="visually-hidden">The prompt</h2>
    ${editor(p.promptText)}
    <div class="prose">${p.restHtml}</div>
    ${faqHtml(faq)}
    ${p.tags.length ? `<p class="tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join('')}</p>` : ''}
    ${hubFor.length ? `<p class="see-also">More prompts for ${hubFor.map(([k, h]) => `<a href="/${k}/">${esc(h.title.replace(/ Prompts.*/, ''))}</a>`).join(', ')}.</p>` : ''}
  </div>
  <nav class="wrap pager" aria-label="More prompts">
    ${older ? `<a class="pager__link" href="/prompts/${older.slug}/"><span>Previous prompt</span>${esc(older.title)}</a>` : '<span></span>'}
    ${newer ? `<a class="pager__link pager__link--next" href="/prompts/${newer.slug}/"><span>Next prompt</span>${esc(newer.title)}</a>` : '<span></span>'}
  </nav>
</article>
${related.length ? `<section class="wrap related"><h2>More ${esc(catName(p.category).toLowerCase())} prompts</h2><ol class="rows">${related.map(row).join('\n')}</ol></section>` : ''}`;
  return layout({
    title: /prompt/i.test(p.title) || p.title.length > 44 ? p.title : `${p.title}: ${tool} Prompt`,
    description: p.description,
    pathname: `/prompts/${p.slug}/`,
    ogType: 'article',
    published: p.date,
    modified: p.updated || p.date,
    crumbs: [[`${catName(p.category)} prompts`, `/category/${p.category}/`], [p.title, `/prompts/${p.slug}/`]],
    body,
    jsonLd: [
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: p.title,
        description: p.description,
        datePublished: p.date,
        dateModified: p.updated || p.date,
        url,
        mainEntityOfPage: url,
        image: OG_IMAGE,
        author: authorRef(),
        publisher: { '@id': ORG_ID },
        articleSection: catName(p.category),
        keywords: [...p.tags, ...p.models.map((m) => `${m} prompt`)].join(', '),
        about: p.models.map((m) => ({ '@type': 'SoftwareApplication', name: m, applicationCategory: 'AI assistant' })),
        isAccessibleForFree: true,
        inLanguage: site.language,
        hasPart: { '@type': 'CreativeWork', name: `${p.title} (prompt text)`, text: p.promptText, isAccessibleForFree: true },
      },
      faqSchema(faq),
    ],
  });
}

function listPage({ crumbsHtml, crumbs, h1, lede, list, title, description, pathname, extra = '', faq = [] }) {
  const body = `
<section class="hero hero--small wrap">
  <nav class="crumbs" aria-label="Breadcrumb">${crumbsHtml}</nav>
  <h1 class="hero__title">${esc(h1)}</h1>
  <p class="hero__lede">${esc(lede)}</p>
</section>
<section class="wrap library" aria-labelledby="list-h">
  <h2 id="list-h" class="list__h">${list.length} prompt${list.length === 1 ? '' : 's'}, newest first</h2>
  ${list.length ? `<ol class="rows">${list.map(row).join('\n')}</ol>` : '<p class="empty">New prompts here are on the way. Meanwhile, <a href="/">browse all prompts</a>.</p>'}
  ${extra}
  ${faqHtml(faq)}
</section>`;
  return layout({
    title,
    description,
    pathname,
    crumbs,
    body,
    jsonLd: [
      { '@type': 'CollectionPage', '@id': `${SITE_URL}${pathname}#page`, name: h1, description, url: SITE_URL + pathname, isPartOf: { '@id': WEBSITE_ID }, mainEntity: itemList(h1, promptItems(list)) },
      faqSchema(faq),
    ],
  });
}

const howToUse = `<div class="howto prose"><h2>How to use these prompts</h2><ol><li>Open a prompt and type your details into the blue blanks.</li><li>Press <strong>Copy prompt</strong> and paste it into your AI tool.</li><li>Treat the first answer as a draft and ask for changes until it fits.</li></ol></div>`;

function categoryPage(key, prompts) {
  const c = site.categories[key];
  const list = prompts.filter((p) => p.category === key);
  return listPage({
    crumbsHtml: '<a href="/">Home</a>',
    crumbs: [[c.title, `/category/${key}/`]],
    h1: c.title,
    lede: c.description,
    list,
    title: c.seoTitle || c.title,
    description: c.description,
    pathname: `/category/${key}/`,
    extra: howToUse,
  });
}

function hubPage(key, prompts) {
  const h = site.hubs[key];
  const list = prompts.filter((p) => p.models.some((m) => h.models.includes(m)));
  const tools = listJoin(h.models);
  const faq = [
    { q: `What are the best ${h.title.replace(/ for .*/, '').toLowerCase()}?`, a: `The best prompts give the AI a role, the context only you know and clear rules for the answer. Every prompt on this page follows that structure, with blanks for your details. Start with the newest prompts at the top of the list.` },
    { q: `How do I use these prompts in ${tools}?`, a: `Open a prompt, fill in the blue blanks, press Copy prompt and paste it into ${tools}. Then ask follow-up questions to adjust the result.` },
    { q: 'Are these prompts free?', a: 'Yes. All prompts are free to copy and use, including for commercial work.' },
  ];
  return listPage({
    crumbsHtml: '<a href="/">Home</a>',
    crumbs: [[h.title, `/${key}/`]],
    h1: h.h1,
    lede: h.description,
    list,
    title: `${h.title.replace(/ for .*/, '')}: ${list.length} Free Copy-Ready Prompts`,
    description: h.description,
    pathname: `/${key}/`,
    extra: howToUse,
    faq,
  });
}

function blogIndex(posts) {
  const desc = 'Practical guides to writing better AI prompts for ChatGPT, Claude, Gemini, Midjourney and AI video tools.';
  const body = `
<section class="hero hero--small wrap">
  <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a></nav>
  <h1 class="hero__title">AI prompting blog</h1>
  <p class="hero__lede">${desc}</p>
</section>
<section class="wrap library" aria-labelledby="list-h">
  <h2 id="list-h" class="list__h">${posts.length} articles, newest first</h2>
  <ol class="rows">${posts.map(postRow).join('\n')}</ol>
</section>`;
  return layout({
    title: 'AI Prompting Blog: Guides and Prompt Examples',
    description: desc,
    pathname: '/blog/',
    crumbs: [['Blog', '/blog/']],
    body,
    jsonLd: [{ '@type': 'Blog', '@id': `${SITE_URL}/blog/#blog`, name: `${site.name} blog`, url: `${SITE_URL}/blog/`, publisher: { '@id': ORG_ID }, blogPost: posts.map((b) => ({ '@type': 'BlogPosting', headline: b.title, url: `${SITE_URL}/blog/${b.slug}/`, datePublished: b.date })) }],
  });
}

function postPage(b, i, posts, promptsBySlug) {
  const related = (b.related || []).map((s) => promptsBySlug[s]).filter(Boolean);
  const more = posts.filter((x) => x.slug !== b.slug).slice(0, 3);
  const url = `${SITE_URL}/blog/${b.slug}/`;
  const body = `
<article class="prompt post">
  <header class="wrap prompt__head">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/blog/">Blog</a></nav>
    <h1>${esc(b.title)}</h1>
    <p class="prompt__lede">${esc(b.description)}</p>
    <dl class="facts">
      <div><dt>Published</dt><dd><time datetime="${b.date}">${fmtDate(b.date)}</time></dd></div>
      ${b.updated && b.updated !== b.date ? `<div><dt>Updated</dt><dd><time datetime="${b.updated}">${fmtDate(b.updated)}</time></dd></div>` : ''}
      <div><dt>Reading time</dt><dd>${b.minutes} min</dd></div>
      <div><dt>By</dt><dd><a href="/about/">${esc(site.name)} editorial team</a></dd></div>
    </dl>
  </header>
  <div class="wrap prompt__body">
    ${b.summary.length ? `<aside class="summary" aria-labelledby="sum-h"><h2 id="sum-h">Key takeaways</h2><ul>${b.summary.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></aside>` : ''}
    <div class="prose">${b.html}</div>
    ${faqHtml(b.faq)}
  </div>
</article>
${related.length ? `<section class="wrap related"><h2>Prompts from this article</h2><ol class="rows">${related.map(row).join('\n')}</ol></section>` : ''}
${more.length ? `<section class="wrap related"><h2>More from the blog</h2><ol class="rows">${more.map(postRow).join('\n')}</ol></section>` : ''}`;
  return layout({
    title: b.seoTitle || b.title,
    description: b.description,
    pathname: `/blog/${b.slug}/`,
    ogType: 'article',
    published: b.date,
    modified: b.updated || b.date,
    crumbs: [['Blog', '/blog/'], [b.title, `/blog/${b.slug}/`]],
    body,
    jsonLd: [
      {
        '@type': 'BlogPosting',
        '@id': `${url}#article`,
        headline: b.title,
        description: b.description,
        abstract: b.summary.join(' '),
        datePublished: b.date,
        dateModified: b.updated || b.date,
        url,
        mainEntityOfPage: url,
        image: OG_IMAGE,
        author: authorRef(),
        publisher: { '@id': ORG_ID },
        wordCount: b.words,
        inLanguage: site.language,
        isAccessibleForFree: true,
      },
      faqSchema(b.faq),
    ],
  });
}

function staticPage(pg) {
  const body = `
<article class="wrap about">
  <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a></nav>
  <h1 class="hero__title">${esc(pg.h1 || pg.title)}</h1>
  <p class="muted page__updated">Last updated: <time datetime="${pg.updated}">${fmtDate(pg.updated)}</time></p>
  <div class="prose">${pg.html}</div>
</article>`;
  return layout({
    title: pg.title,
    description: pg.description,
    pathname: `/${pg.slug}/`,
    crumbs: [[pg.title, `/${pg.slug}/`]],
    body,
    jsonLd: [{ '@type': pg.schemaType || 'WebPage', '@id': `${SITE_URL}/${pg.slug}/#page`, name: pg.title, description: pg.description, url: `${SITE_URL}/${pg.slug}/`, isPartOf: { '@id': WEBSITE_ID }, dateModified: pg.updated, ...(pg.schemaType === 'AboutPage' || pg.schemaType === 'ContactPage' ? { mainEntity: { '@id': ORG_ID } } : {}) }],
  });
}

function notFoundPage() {
  return layout({
    title: 'Page not found',
    description: 'This page does not exist.',
    pathname: '/404.html',
    noindex: true,
    body: `<section class="hero wrap"><h1 class="hero__title">This page is a <span class="hero__blank">blank</span>.</h1><p class="hero__lede">The link may be old or mistyped. The newest prompts are on the home page.</p><p><a class="btn btn--copy" href="/">Go to the home page</a></p></section>`,
  });
}

function rss(prompts, posts) {
  const entries = [
    ...prompts.map((p) => ({ title: p.title, url: `${SITE_URL}/prompts/${p.slug}/`, date: p.date, cat: catName(p.category), desc: p.description })),
    ...posts.map((b) => ({ title: b.title, url: `${SITE_URL}/blog/${b.slug}/`, date: b.date, cat: 'Blog', desc: b.description })),
  ].sort((a, b) => b.date.localeCompare(a.date));
  const items = entries
    .slice(0, 40)
    .map((e) => `<item><title>${esc(e.title)}</title><link>${e.url}</link><guid>${e.url}</guid><pubDate>${new Date(e.date + 'T06:00:00Z').toUTCString()}</pubDate><category>${esc(e.cat)}</category><description>${esc(e.desc)}</description></item>`)
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel><title>${esc(site.name)}</title><link>${SITE_URL}/</link><description>${esc(site.description)}</description><language>${site.language}</language>
${items}
</channel></rss>`;
}

function sitemap(prompts, posts, pages) {
  const newest = prompts[0]?.date || todayISO();
  const newestPost = posts[0]?.date || newest;
  const urls = [['/', newest], ['/blog/', newestPost], ...Object.keys(site.hubs).map((k) => [`/${k}/`, newest]), ...Object.keys(site.categories).map((k) => [`/category/${k}/`, prompts.find((p) => p.category === k)?.date || newest])]
    .map(([u, d]) => `<url><loc>${SITE_URL}${u}</loc><lastmod>${d}</lastmod></url>`)
    .concat(pages.map((pg) => `<url><loc>${SITE_URL}/${pg.slug}/</loc><lastmod>${pg.updated}</lastmod></url>`))
    .concat(prompts.map((p) => `<url><loc>${SITE_URL}/prompts/${p.slug}/</loc><lastmod>${p.updated || p.date}</lastmod></url>`))
    .concat(posts.map((b) => `<url><loc>${SITE_URL}/blog/${b.slug}/</loc><lastmod>${b.updated || b.date}</lastmod></url>`));
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>`;
}

function loadPosts() {
  const dir = path.join(ROOT, 'content', 'blog');
  if (!fs.existsSync(dir)) return [];
  const today = todayISO();
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((file) => {
      const { data, content } = matter(fs.readFileSync(path.join(dir, file), 'utf8'));
      for (const k of ['title', 'description']) if (!data[k]) throw new Error(`blog/${file}: missing "${k}"`);
      const words = content.split(/\s+/).length;
      return {
        slug: data.slug || file.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, ''),
        date: toISODate(data.date || file.slice(0, 10)),
        updated: data.updated ? toISODate(data.updated) : '',
        title: data.title,
        seoTitle: data.seoTitle || '',
        description: data.description,
        related: data.related || [],
        summary: data.summary || [],
        faq: data.faq || [],
        words,
        minutes: Math.max(1, Math.round(words / 220)),
        html: marked.parse(content),
        draft: Boolean(data.draft),
      };
    })
    .filter((b) => !b.draft && b.date <= today)
    .sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
}

function loadPages() {
  const dir = path.join(ROOT, 'content', 'pages');
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((file) => {
      const { data, content } = matter(fs.readFileSync(path.join(dir, file), 'utf8'));
      for (const k of ['title', 'description', 'updated']) if (!data[k]) throw new Error(`pages/${file}: missing "${k}"`);
      const fill = (t) => t.replaceAll('{{SITE}}', site.name).replaceAll('{{URL}}', SITE_URL).replaceAll('{{EMAIL}}', site.email);
      return { slug: file.replace(/\.md$/, ''), title: data.title, h1: data.h1, description: fill(data.description), updated: toISODate(data.updated), schemaType: data.schemaType, html: marked.parse(fill(content)) };
    });
}

// llms.txt: a plain-text map of the site for AI assistants and answer engines.
function llmsTxt(prompts, posts, pages) {
  const line = (title, url, desc) => `- [${title}](${url})${desc ? `: ${desc}` : ''}`;
  return `# ${site.name}

> ${site.description}

${site.name} publishes free, copy-ready AI prompts. Each prompt has fill-in blanks marked [IN SQUARE BRACKETS] for the user's details, plus steps and tips for using it. All prompts are free to use, including for commercial work. New prompts are added every day.

## Prompts by AI tool
${Object.entries(site.hubs).map(([k, h]) => line(h.title, `${SITE_URL}/${k}/`, h.description)).join('\n')}

## Prompts by task
${Object.entries(site.categories).map(([k, c]) => line(c.title, `${SITE_URL}/category/${k}/`, c.description)).join('\n')}

## Prompts
${prompts.map((p) => line(p.title, `${SITE_URL}/prompts/${p.slug}/`, `${p.description} (Works with ${listJoin(p.models) || 'AI chat tools'}.)`)).join('\n')}

## Guides
${posts.map((b) => line(b.title, `${SITE_URL}/blog/${b.slug}/`, b.description)).join('\n')}

## About
${pages.map((pg) => line(pg.title, `${SITE_URL}/${pg.slug}/`, '')).join('\n')}

## Optional
- [Full text of all prompts](${SITE_URL}/llms-full.txt)
- [RSS feed](${SITE_URL}/rss.xml)
`;
}

function llmsFullTxt(prompts) {
  return `# ${site.name}: full prompt library

${site.description}

Placeholders in [SQUARE BRACKETS] are for the user's own details. Source: ${SITE_URL}/

${prompts
  .map(
    (p) => `---

## ${p.title}

URL: ${SITE_URL}/prompts/${p.slug}/
Category: ${catName(p.category)}
Works with: ${listJoin(p.models) || 'AI chat tools'}
Published: ${p.date}

${p.description}

Prompt:

${p.promptText}
`
  )
  .join('\n')}`;
}

const AI_BOTS = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'anthropic-ai', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended', 'Bingbot', 'meta-externalagent', 'cohere-ai', 'DuckAssistBot', 'MistralAI-User'];
const robotsTxt = () => `# ${site.name} welcomes search engines and AI assistants.
User-agent: *
Allow: /
Disallow: /404.html

${AI_BOTS.map((b) => `User-agent: ${b}\nAllow: /`).join('\n\n')}

Sitemap: ${SITE_URL}/sitemap.xml
`;

// ---------- build ----------
const prompts = loadPrompts();
const posts = loadPosts();
const pages = loadPages();
const promptsBySlug = Object.fromEntries(prompts.map((p) => [p.slug, p]));
for (const b of posts) for (const s of b.related) if (!promptsBySlug[s]) throw new Error(`blog/${b.slug}: related prompt "${s}" not found`);
for (const h of Object.values(site.hubs)) h._count = prompts.filter((p) => p.models.some((m) => h.models.includes(m))).length;
fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST, { recursive: true });
fs.cpSync(ASSETS, path.join(DIST, 'assets'), { recursive: true });
fs.copyFileSync(path.join(ASSETS, 'favicon.svg'), path.join(DIST, 'favicon.svg'));

write('index.html', homePage(prompts, posts));
prompts.forEach((p, i) => write(`prompts/${p.slug}/index.html`, promptPage(p, i, prompts)));
Object.keys(site.categories).forEach((k) => write(`category/${k}/index.html`, categoryPage(k, prompts)));
Object.keys(site.hubs).forEach((k) => write(`${k}/index.html`, hubPage(k, prompts)));
write('blog/index.html', blogIndex(posts));
posts.forEach((b, i) => write(`blog/${b.slug}/index.html`, postPage(b, i, posts, promptsBySlug)));
pages.forEach((pg) => write(`${pg.slug}/index.html`, staticPage(pg)));
write('404.html', notFoundPage());
write('rss.xml', rss(prompts, posts));
write('sitemap.xml', sitemap(prompts, posts, pages));
write('robots.txt', robotsTxt());
write('llms.txt', llmsTxt(prompts, posts, pages));
write('llms-full.txt', llmsFullTxt(prompts));

console.log(`Built ${prompts.length} prompts, ${posts.length} blog posts and ${pages.length} pages → dist/`);
