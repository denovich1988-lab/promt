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
const PH = /\[([A-Z0-9][A-Z0-9 _\-\/,.'"()]*)\]/g;
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
function layout({ title, description, pathname, body, ogType = 'website', jsonLd = null }) {
  const fullTitle = title ? `${title} | ${site.name}` : `Free AI Prompts for ChatGPT, Claude, Gemini and Midjourney | ${site.name}`;
  const canonical = SITE_URL + pathname;
  const navCats = Object.entries(site.categories)
    .map(([k, c]) => `<a href="/category/${k}/"${pathname === `/category/${k}/` ? ' aria-current="page"' : ''}>${esc(c.name)}</a>`)
    .join('');
  return `<!doctype html>
<html lang="${site.language}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description || site.description)}">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="${ogType}">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(title || site.name)}">
<meta property="og:description" content="${esc(description || site.description)}">
<meta property="og:url" content="${canonical}">
<meta name="twitter:card" content="summary">
<meta name="theme-color" content="#e9ebf0" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#101218" media="(prefers-color-scheme: dark)">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preload" href="/assets/fonts/bricolage.woff2" as="font" type="font/woff2" crossorigin>
<link rel="alternate" type="application/rss+xml" title="${esc(site.name)}" href="/rss.xml">
<link rel="stylesheet" href="/assets/style.css?v=${BUILD_ID}">
${jsonLd ? `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>` : ''}
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
    <nav aria-label="More"><p class="foot__h">More</p><a href="/blog/">Blog</a><a href="/about/">About</a><a href="/rss.xml">RSS feed</a></nav>
  </div>
  <div class="wrap"><p class="muted foot__copy">© ${new Date().getFullYear()} ${esc(site.name)}</p></div>
</footer>
<script src="/assets/app.js?v=${BUILD_ID}" defer></script>
</body>
</html>`;
}

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

function homePage(prompts, posts) {
  const [today] = prompts;
  const counts = Object.fromEntries(Object.keys(site.categories).map((k) => [k, prompts.filter((p) => p.category === k).length]));
  const chips = [`<button class="chip" type="button" data-filter="" aria-pressed="true">All<span>${prompts.length}</span></button>`]
    .concat(Object.entries(site.categories).filter(([k]) => counts[k]).map(([k, c]) => `<button class="chip" type="button" data-filter="${k}" aria-pressed="false">${esc(c.name)}<span>${counts[k]}</span></button>`))
    .join('');
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
    <label class="search"><span class="visually-hidden">Search prompts</span><input type="search" placeholder="Search, e.g. resume, Midjourney" data-search-input autocomplete="off"></label>
  </div>
  <div class="chips" role="group" aria-label="Filter by category">${chips}</div>
  <ol class="rows" data-grid>${prompts.map(row).join('\n')}</ol>
  <p class="empty" data-empty hidden>Nothing matches that search. Try a shorter word or pick another category.</p>
</section>
${posts.length ? `<section class="library wrap" aria-labelledby="blog-h">
  <div class="library__head"><h2 id="blog-h">From the blog</h2><a class="link-strong" href="/blog/">All articles</a></div>
  <ol class="rows">${posts.slice(0, 3).map(postRow).join('\n')}</ol>
</section>` : ''}`;
  return layout({
    title: '',
    description: site.description,
    pathname: '/',
    body,
    jsonLd: { '@context': 'https://schema.org', '@type': 'WebSite', name: site.name, url: SITE_URL + '/', description: site.description },
  });
}

function promptPage(p, i, prompts) {
  const newer = prompts[i - 1];
  const older = prompts[i + 1];
  const related = prompts.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 4);
  const tool = p.models[0] || 'AI';
  const hubFor = Object.entries(site.hubs).filter(([, h]) => h.models.some((m) => p.models.includes(m)));
  const body = `
<article class="prompt">
  <header class="wrap prompt__head">
    <p class="crumbs"><a href="/">All prompts</a> / <a href="/category/${p.category}/">${esc(catName(p.category))}</a></p>
    <h1>${esc(p.title)}</h1>
    <p class="prompt__lede">${esc(p.description)}</p>
    <dl class="facts">
      <div><dt>Published</dt><dd><time datetime="${p.date}">${fmtDate(p.date)}</time></dd></div>
      ${p.models.length ? `<div><dt>Works with</dt><dd>${esc(listJoin(p.models))}</dd></div>` : ''}
      ${p.level ? `<div><dt>Level</dt><dd>${esc(p.level)}</dd></div>` : ''}
    </dl>
  </header>
  <div class="wrap prompt__body">
    <div class="prose prompt__intro">${p.introHtml}</div>
    ${editor(p.promptText)}
    <div class="prose">${p.restHtml}</div>
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
    title: /prompt/i.test(p.title) ? p.title : `${p.title}: ${tool} Prompt`,
    description: p.description,
    pathname: `/prompts/${p.slug}/`,
    ogType: 'article',
    body,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: p.title,
      description: p.description,
      datePublished: p.date,
      url: `${SITE_URL}/prompts/${p.slug}/`,
      publisher: { '@type': 'Organization', name: site.name },
    },
  });
}

function listPage({ crumbs, h1, lede, list, title, description, pathname, extra = '' }) {
  const body = `
<section class="hero hero--small wrap">
  <p class="crumbs">${crumbs}</p>
  <h1 class="hero__title">${esc(h1)}</h1>
  <p class="hero__lede">${esc(lede)}</p>
</section>
<section class="wrap library">
  ${list.length ? `<ol class="rows">${list.map(row).join('\n')}</ol>` : '<p class="empty">New prompts here are on the way. Meanwhile, <a href="/">browse all prompts</a>.</p>'}
  ${extra}
</section>`;
  return layout({
    title,
    description,
    pathname,
    body,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: h1,
      description,
      url: SITE_URL + pathname,
      hasPart: list.slice(0, 50).map((p) => ({ '@type': 'CreativeWork', name: p.title, url: `${SITE_URL}/prompts/${p.slug}/` })),
    },
  });
}

const howToUse = `<div class="howto prose"><h2>How to use these prompts</h2><ol><li>Click a prompt and type your details into the blue blanks.</li><li>Press <strong>Copy prompt</strong> and paste it into your AI tool.</li><li>Treat the first answer as a draft and ask for changes until it fits.</li></ol></div>`;

function categoryPage(key, prompts) {
  const c = site.categories[key];
  const list = prompts.filter((p) => p.category === key);
  return listPage({
    crumbs: '<a href="/">All prompts</a>',
    h1: c.title,
    lede: c.description,
    list,
    title: `${c.title} (Free, Copy-Ready)`,
    description: c.description,
    pathname: `/category/${key}/`,
    extra: howToUse,
  });
}

function hubPage(key, prompts) {
  const h = site.hubs[key];
  const list = prompts.filter((p) => p.models.some((m) => h.models.includes(m)));
  return listPage({
    crumbs: '<a href="/">All prompts</a>',
    h1: h.h1,
    lede: h.description,
    list,
    title: `${h.title}: ${list.length} Free Copy-Ready Prompts`,
    description: h.description,
    pathname: `/${key}/`,
    extra: howToUse,
  });
}

function blogIndex(posts) {
  const body = `
<section class="hero hero--small wrap">
  <p class="crumbs"><a href="/">All prompts</a></p>
  <h1 class="hero__title">Blog</h1>
  <p class="hero__lede">Practical guides to ChatGPT, Claude, Gemini and Midjourney: how to write better prompts and get better answers.</p>
</section>
<section class="wrap library">
  <ol class="rows">${posts.map(postRow).join('\n')}</ol>
</section>`;
  return layout({ title: 'AI Prompting Blog: Guides for ChatGPT, Claude and Midjourney', description: 'Practical guides to writing better AI prompts for ChatGPT, Claude, Gemini and Midjourney.', pathname: '/blog/', body });
}

function postPage(b, i, posts, promptsBySlug) {
  const related = (b.related || []).map((s) => promptsBySlug[s]).filter(Boolean);
  const more = posts.filter((x) => x.slug !== b.slug).slice(0, 3);
  const body = `
<article class="prompt post">
  <header class="wrap prompt__head">
    <p class="crumbs"><a href="/blog/">Blog</a></p>
    <h1>${esc(b.title)}</h1>
    <p class="prompt__lede">${esc(b.description)}</p>
    <dl class="facts">
      <div><dt>Published</dt><dd><time datetime="${b.date}">${fmtDate(b.date)}</time></dd></div>
      <div><dt>Reading time</dt><dd>${b.minutes} min</dd></div>
    </dl>
  </header>
  <div class="wrap prompt__body">
    <div class="prose">${b.html}</div>
  </div>
</article>
${related.length ? `<section class="wrap related"><h2>Prompts from this article</h2><ol class="rows">${related.map(row).join('\n')}</ol></section>` : ''}
${more.length ? `<section class="wrap related"><h2>More from the blog</h2><ol class="rows">${more.map(postRow).join('\n')}</ol></section>` : ''}`;
  return layout({
    title: b.seoTitle || b.title,
    description: b.description,
    pathname: `/blog/${b.slug}/`,
    ogType: 'article',
    body,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: b.title,
      description: b.description,
      datePublished: b.date,
      dateModified: b.updated || b.date,
      url: `${SITE_URL}/blog/${b.slug}/`,
      publisher: { '@type': 'Organization', name: site.name },
    },
  });
}

function aboutPage() {
  const body = `
<article class="wrap about">
  <h1 class="hero__title">About ${esc(site.name)}</h1>
  <div class="prose">
  <p class="prompt__lede">${esc(site.description)}</p>
  <h2>How it works</h2>
  <p>We publish new prompts every day for real tasks: writing, marketing, business, coding, images and video. Blue blanks mark the details only you know. Click a blank, type your answer, then press <strong>Copy prompt</strong>. Any blank you skip is copied as it was, so you can fill it in later.</p>
  <h2>Getting better results</h2>
  <ul>
    <li><strong>Be specific in every blank.</strong> “Owners of small coffee shops” works better than “businesses”.</li>
    <li><strong>Treat the first answer as a draft.</strong> Ask for changes: shorter, warmer, more examples.</li>
    <li><strong>Check the facts.</strong> AI tools can be confidently wrong. Verify numbers, names and claims before you publish.</li>
  </ul>
  <h2>Get new prompts</h2>
  <p>Subscribe to the <a href="/rss.xml">RSS feed</a> to see each prompt the day it comes out.</p>
  </div>
</article>`;
  return layout({ title: 'About', description: `What ${site.name} is and how to get the most from each prompt.`, pathname: '/about/', body });
}

function notFoundPage() {
  return layout({
    title: 'Page not found',
    description: 'This page does not exist.',
    pathname: '/404.html',
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

function sitemap(prompts, posts) {
  const urls = ['/', '/blog/', '/about/', ...Object.keys(site.hubs).map((k) => `/${k}/`), ...Object.keys(site.categories).map((k) => `/category/${k}/`)]
    .map((u) => `<url><loc>${SITE_URL}${u}</loc></url>`)
    .concat(prompts.map((p) => `<url><loc>${SITE_URL}/prompts/${p.slug}/</loc><lastmod>${p.date}</lastmod></url>`))
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
        minutes: Math.max(1, Math.round(words / 220)),
        html: marked.parse(content),
        draft: Boolean(data.draft),
      };
    })
    .filter((b) => !b.draft && b.date <= today)
    .sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
}

// ---------- build ----------
const prompts = loadPrompts();
const posts = loadPosts();
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
write('about/index.html', aboutPage());
write('404.html', notFoundPage());
write('rss.xml', rss(prompts, posts));
write('sitemap.xml', sitemap(prompts, posts));
write('robots.txt', `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`);

console.log(`Built ${prompts.length} prompts and ${posts.length} blog posts → dist/`);
