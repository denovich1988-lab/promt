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
const toISODate = (d) => (d instanceof Date ? d.toISOString().slice(0, 10) : String(d).slice(0, 10));
const todayISO = () => new Date().toISOString().slice(0, 10);
const write = (rel, html) => {
  const file = path.join(DIST, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
};
const catName = (c) => site.categories[c]?.name || c;

// ---------- markdown ----------
// Placeholders like [YOUR PRODUCT] are highlighted so readers know what to replace.
const highlight = (text) => esc(text).replace(/\[([A-Z0-9][A-Z0-9 _\-\/,.']*)\]/g, '<mark>[$1]</mark>');
const marked = new Marked({
  renderer: {
    code({ text, lang }) {
      if (lang === 'prompt') {
        const body = highlight(text);
        return `<div class="prompt-box"><div class="prompt-box__bar"><span>Prompt</span><button class="copy" type="button" data-copy>Copy prompt</button></div><pre><code>${body}</code></pre></div>\n`;
      }
      return `<pre class="code"><code>${esc(text)}</code></pre>\n`;
    },
  },
});

// ---------- load content ----------
function loadPrompts() {
  if (!fs.existsSync(CONTENT)) return [];
  const today = todayISO();
  const seen = new Set();
  const list = fs
    .readdirSync(CONTENT)
    .filter((f) => f.endsWith('.md'))
    .map((file) => {
      const raw = fs.readFileSync(path.join(CONTENT, file), 'utf8');
      const { data, content } = matter(raw);
      const date = toISODate(data.date || file.slice(0, 10));
      let slug = data.slug || file.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '');
      const required = ['title', 'description', 'category'];
      for (const k of required) if (!data[k]) throw new Error(`${file}: missing "${k}" in front matter`);
      if (!site.categories[data.category]) throw new Error(`${file}: unknown category "${data.category}"`);
      if (seen.has(slug)) throw new Error(`${file}: duplicate slug "${slug}"`);
      seen.add(slug);
      const promptMatch = content.match(/```prompt\n([\s\S]*?)```/);
      if (!promptMatch) throw new Error(`${file}: no \`\`\`prompt block found`);
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
        html: marked.parse(content),
        draft: Boolean(data.draft),
      };
    })
    .filter((p) => !p.draft && p.date <= today) // future-dated prompts wait for their day
    .sort((a, b) => (a.date === b.date ? a.slug.localeCompare(b.slug) : b.date.localeCompare(a.date)));
  return list;
}

// ---------- layout ----------
function layout({ title, description, pathname, body, ogType = 'website', jsonLd = null }) {
  const fullTitle = title ? `${title} · ${site.name}` : `${site.name} — ${site.tagline}`;
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
<meta name="theme-color" content="#f6f3ee" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#14130f" media="(prefers-color-scheme: dark)">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="alternate" type="application/rss+xml" title="${esc(site.name)}" href="/rss.xml">
<link rel="stylesheet" href="/assets/style.css?v=${BUILD_ID}">
${jsonLd ? `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>` : ''}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="site-header">
  <div class="wrap site-header__row">
    <a class="logo" href="/" aria-label="${esc(site.name)} home"><span class="logo__mark">›_</span>${esc(site.name)}</a>
    <nav class="site-nav" aria-label="Main"><a href="/"${pathname === '/' ? ' aria-current="page"' : ''}>All prompts</a><a href="/about/"${pathname === '/about/' ? ' aria-current="page"' : ''}>About</a><a href="/rss.xml">RSS</a></nav>
  </div>
  <div class="wrap"><nav class="cat-nav" aria-label="Categories">${navCats}</nav></div>
</header>
<main id="main">
${body}
</main>
<footer class="site-footer">
  <div class="wrap site-footer__row">
    <p><strong>${esc(site.name)}</strong> — ${esc(site.tagline)}</p>
    <p class="muted">© ${new Date().getFullYear()} ${esc(site.name)}. Prompts are free to use.</p>
  </div>
</footer>
<script src="/assets/app.js?v=${BUILD_ID}" defer></script>
</body>
</html>`;
}

const card = (p) => `<article class="card" data-search="${esc([p.title, p.description, catName(p.category), ...p.models, ...p.tags].join(' ').toLowerCase())}" data-cat="${p.category}">
  <a class="card__link" href="/prompts/${p.slug}/">
    <div class="card__meta"><span class="tag tag--${p.category}">${esc(catName(p.category))}</span><time datetime="${p.date}">${fmtDate(p.date)}</time></div>
    <h3 class="card__title">${esc(p.title)}</h3>
    <p class="card__desc">${esc(p.description)}</p>
    ${p.models.length ? `<p class="card__models">${p.models.map(esc).join(' · ')}</p>` : ''}
  </a>
</article>`;

// ---------- pages ----------
function homePage(prompts) {
  const [today, ...rest] = prompts;
  const counts = Object.fromEntries(Object.keys(site.categories).map((k) => [k, prompts.filter((p) => p.category === k).length]));
  const chips = [`<button class="chip" type="button" data-filter="" aria-pressed="true">All <span>${prompts.length}</span></button>`]
    .concat(Object.entries(site.categories).filter(([k]) => counts[k]).map(([k, c]) => `<button class="chip" type="button" data-filter="${k}" aria-pressed="false">${esc(c.name)} <span>${counts[k]}</span></button>`))
    .join('');
  const featured = today
    ? `<section class="today wrap" aria-labelledby="today-h">
  <p class="eyebrow">Prompt of the day · <time datetime="${today.date}">${fmtDate(today.date)}</time></p>
  <h2 id="today-h" class="today__title"><a href="/prompts/${today.slug}/">${esc(today.title)}</a></h2>
  <p class="today__desc">${esc(today.description)}</p>
  <div class="prompt-box prompt-box--teaser"><div class="prompt-box__bar"><span>${esc(catName(today.category))}${today.models.length ? ' · ' + today.models.map(esc).join(', ') : ''}</span><button class="copy" type="button" data-copy>Copy prompt</button></div><pre><code>${highlight(today.promptText)}</code></pre></div>
  <p><a class="btn" href="/prompts/${today.slug}/">How to use it →</a></p>
</section>`
    : '';
  const body = `
<section class="hero wrap">
  <h1>${esc(site.tagline)}</h1>
  <p class="lede">${esc(site.description)}</p>
</section>
${featured}
<section class="library wrap" aria-labelledby="lib-h">
  <div class="library__head">
    <h2 id="lib-h">Prompt library</h2>
    <label class="search"><span class="visually-hidden">Search prompts</span><input type="search" placeholder="Search prompts…" data-search-input autocomplete="off"></label>
  </div>
  <div class="chips" role="group" aria-label="Filter by category">${chips}</div>
  <div class="grid" data-grid>${(today ? [today, ...rest] : rest).map(card).join('\n')}</div>
  <p class="empty" data-empty hidden>No prompts match your search.</p>
</section>`;
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
  const related = prompts.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 3);
  const body = `
<article class="prompt wrap wrap--narrow">
  <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Prompts</a> <span aria-hidden="true">/</span> <a href="/category/${p.category}/">${esc(catName(p.category))}</a></nav>
  <header class="prompt__head">
    <h1>${esc(p.title)}</h1>
    <p class="lede">${esc(p.description)}</p>
    <dl class="facts">
      <div><dt>Published</dt><dd><time datetime="${p.date}">${fmtDate(p.date)}</time></dd></div>
      <div><dt>Category</dt><dd><a href="/category/${p.category}/">${esc(catName(p.category))}</a></dd></div>
      ${p.models.length ? `<div><dt>Works with</dt><dd>${p.models.map(esc).join(', ')}</dd></div>` : ''}
      ${p.level ? `<div><dt>Level</dt><dd>${esc(p.level)}</dd></div>` : ''}
    </dl>
  </header>
  <div class="prose">${p.html}</div>
  ${p.tags.length ? `<p class="tags">${p.tags.map((t) => `<span>#${esc(t)}</span>`).join(' ')}</p>` : ''}
  <nav class="pager" aria-label="More prompts">
    ${older ? `<a class="pager__prev" href="/prompts/${older.slug}/"><span>← Previous</span>${esc(older.title)}</a>` : '<span></span>'}
    ${newer ? `<a class="pager__next" href="/prompts/${newer.slug}/"><span>Next →</span>${esc(newer.title)}</a>` : '<span></span>'}
  </nav>
</article>
${related.length ? `<section class="wrap related"><h2>More ${esc(catName(p.category).toLowerCase())} prompts</h2><div class="grid">${related.map(card).join('\n')}</div></section>` : ''}`;
  return layout({
    title: p.title,
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

function categoryPage(key, prompts) {
  const c = site.categories[key];
  const list = prompts.filter((p) => p.category === key);
  const body = `
<section class="hero hero--small wrap">
  <p class="eyebrow"><a href="/">All prompts</a> / Category</p>
  <h1>${esc(c.name)} prompts</h1>
  <p class="lede">${esc(c.description)}</p>
</section>
<section class="wrap">
  ${list.length ? `<div class="grid">${list.map(card).join('\n')}</div>` : '<p class="empty">New prompts in this category are on the way.</p>'}
</section>`;
  return layout({ title: `${c.name} prompts`, description: `${c.description} Copy-ready AI prompts, updated daily.`, pathname: `/category/${key}/`, body });
}

function aboutPage() {
  const body = `
<article class="wrap wrap--narrow prose about">
  <h1>About ${esc(site.name)}</h1>
  <p class="lede">${esc(site.description)}</p>
  <h2>How it works</h2>
  <p>Every day we publish one prompt that solves a real task: writing, marketing, business, coding, images or video. Each prompt is copy-ready. Words in <mark>[SQUARE BRACKETS]</mark> are placeholders: replace them with your own details before you paste the prompt into your AI tool.</p>
  <h2>Getting better results</h2>
  <ul>
    <li><strong>Fill in every placeholder.</strong> The more specific your details, the better the answer.</li>
    <li><strong>Keep the conversation going.</strong> The first answer is a draft. Ask for changes: shorter, warmer, more examples.</li>
    <li><strong>Check facts.</strong> AI tools can be confidently wrong. Verify numbers, names and claims before you publish.</li>
  </ul>
  <h2>Stay updated</h2>
  <p>Subscribe to the <a href="/rss.xml">RSS feed</a> to get each new prompt the day it is published.</p>
</article>`;
  return layout({ title: 'About', description: `What ${site.name} is and how to get the most from our prompts.`, pathname: '/about/', body });
}

function notFoundPage() {
  return layout({
    title: 'Page not found',
    description: 'This page does not exist.',
    pathname: '/404.html',
    body: `<section class="hero wrap"><h1>Page not found</h1><p class="lede">This page doesn't exist, but today's prompt does.</p><p><a class="btn" href="/">Go to all prompts →</a></p></section>`,
  });
}

function rss(prompts) {
  const items = prompts
    .slice(0, 30)
    .map(
      (p) => `<item><title>${esc(p.title)}</title><link>${SITE_URL}/prompts/${p.slug}/</link><guid>${SITE_URL}/prompts/${p.slug}/</guid><pubDate>${new Date(p.date + 'T06:00:00Z').toUTCString()}</pubDate><category>${esc(catName(p.category))}</category><description>${esc(p.description)}</description></item>`
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel><title>${esc(site.name)}</title><link>${SITE_URL}/</link><description>${esc(site.description)}</description><language>${site.language}</language>
${items}
</channel></rss>`;
}

function sitemap(prompts) {
  const urls = ['/', '/about/', ...Object.keys(site.categories).map((k) => `/category/${k}/`)]
    .map((u) => `<url><loc>${SITE_URL}${u}</loc></url>`)
    .concat(prompts.map((p) => `<url><loc>${SITE_URL}/prompts/${p.slug}/</loc><lastmod>${p.date}</lastmod></url>`));
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>`;
}

// ---------- build ----------
const prompts = loadPrompts();
fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST, { recursive: true });
fs.cpSync(ASSETS, path.join(DIST, 'assets'), { recursive: true });
fs.copyFileSync(path.join(ASSETS, 'favicon.svg'), path.join(DIST, 'favicon.svg'));

write('index.html', homePage(prompts));
prompts.forEach((p, i) => write(`prompts/${p.slug}/index.html`, promptPage(p, i, prompts)));
Object.keys(site.categories).forEach((k) => write(`category/${k}/index.html`, categoryPage(k, prompts)));
write('about/index.html', aboutPage());
write('404.html', notFoundPage());
write('rss.xml', rss(prompts));
write('sitemap.xml', sitemap(prompts));
write('robots.txt', `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`);

console.log(`Built ${prompts.length} prompts → dist/`);
