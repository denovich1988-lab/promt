// ---------- Prompt editors: fill in blanks, copy the result ----------
const editors = [...document.querySelectorAll('[data-editor]')];

const filledText = (code) => {
  let out = '';
  code.childNodes.forEach((n) => {
    if (n.nodeType === 3) out += n.textContent;
    else if (n.classList?.contains('blank')) {
      const v = n.textContent.trim();
      out += v || `[${n.dataset.ph}]`;
    } else out += n.textContent;
  });
  return out;
};

const updateStatus = (ed) => {
  const blanks = [...ed.querySelectorAll('.blank')];
  const done = new Set();
  const all = new Set();
  blanks.forEach((b) => {
    const filled = b.textContent.trim() !== '';
    if (!filled && b.textContent !== '') b.textContent = ''; // keep :empty placeholder working
    b.classList.toggle('is-filled', filled);
    all.add(b.dataset.ph);
    if (filled) done.add(b.dataset.ph);
  });
  const status = ed.querySelector('[data-status]');
  if (!status) return;
  status.querySelector('[data-filled]').textContent = done.size;
  status.classList.toggle('is-complete', all.size > 0 && done.size === all.size);
};

editors.forEach((ed) => {
  const code = ed.querySelector('code');
  ed.addEventListener('input', (e) => {
    const b = e.target.closest('.blank');
    if (!b) return;
    // The same blank can appear more than once: keep the copies in sync.
    ed.querySelectorAll(`.blank[data-ph="${CSS.escape(b.dataset.ph)}"]`).forEach((o) => {
      if (o !== b) o.textContent = b.textContent;
    });
    updateStatus(ed);
  });
  ed.addEventListener('keydown', (e) => {
    const b = e.target.closest('.blank');
    if (!b) return;
    if (e.key === 'Enter') {
      e.preventDefault();
      const list = [...ed.querySelectorAll('.blank')];
      const next = list[list.indexOf(b) + 1];
      if (next) next.focus();
      else ed.querySelector('[data-copy]')?.focus();
    }
  });
  ed.addEventListener('paste', (e) => {
    if (!e.target.closest('.blank')) return;
    e.preventDefault();
    const text = (e.clipboardData || window.clipboardData).getData('text').replace(/\s*\n\s*/g, ' ');
    document.execCommand('insertText', false, text);
  });
  ed.querySelector('[data-clear]')?.addEventListener('click', () => {
    ed.querySelectorAll('.blank').forEach((b) => (b.textContent = ''));
    updateStatus(ed);
    ed.querySelector('.blank')?.focus();
  });
  ed.querySelector('[data-copy]')?.addEventListener('click', async (e) => {
    const btn = e.currentTarget;
    const text = filledText(code);
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
    }
    btn.textContent = 'Copied';
    btn.classList.add('is-done');
    clearTimeout(btn._t);
    btn._t = setTimeout(() => {
      btn.textContent = 'Copy prompt';
      btn.classList.remove('is-done');
    }, 1800);
  });
  updateStatus(ed);
});

// ---------- Search across the full library (loads /search-index.json on first use) ----------
(() => {
  const input = document.querySelector('[data-search-input]');
  if (!input) return;
  const latest = document.querySelector('[data-grid]');
  const results = document.querySelector('[data-results]');
  const empty = document.querySelector('[data-empty]');
  const heading = document.querySelector('[data-list-h]');
  const headingText = heading?.textContent || '';
  let index = null;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  const load = async () => {
    if (!index) index = await fetch('/search-index.json').then((r) => r.json()).catch(() => []);
    return index;
  };
  const fmt = (d) => new Date(d + 'T00:00:00Z').toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });
  const render = (items) =>
    items
      .map(
        (p) => `<li class="row"><time class="row__date" datetime="${p.a}">${fmt(p.a)}</time><div class="row__main"><h3 class="row__title"><a href="/prompts/${p.s}/">${esc(p.t)}</a></h3><p class="row__desc">${esc(p.d)}</p></div><p class="row__cat">${esc(p.c)}</p><p class="row__models">${p.m.length ? 'For ' + esc(p.m.join(', ')) : ''}</p></li>`
      )
      .join('');
  const run = async () => {
    const q = input.value.trim().toLowerCase();
    if (q.length < 2) {
      latest.hidden = false;
      results.hidden = true;
      empty.hidden = true;
      if (heading) heading.textContent = headingText;
      return;
    }
    const words = q.split(/\s+/);
    const all = await load();
    const found = all.filter((p) => {
      const hay = [p.t, p.d, p.c, ...p.m, ...p.g].join(' ').toLowerCase();
      return words.every((w) => hay.includes(w));
    });
    latest.hidden = true;
    results.hidden = found.length === 0;
    results.innerHTML = render(found.slice(0, 60));
    empty.hidden = found.length > 0;
    if (heading) heading.textContent = `${found.length} result${found.length === 1 ? '' : 's'} for “${input.value.trim()}”`;
  };
  let t;
  input.addEventListener('input', () => {
    clearTimeout(t);
    t = setTimeout(run, 120);
  });
  // Support links like /?q=resume (used by the site search schema).
  const q = new URLSearchParams(location.search).get('q');
  if (q) {
    input.value = q;
    run();
    document.getElementById('lib-h')?.scrollIntoView();
  }
})();

// ---------- Cookie consent (Google Consent Mode) ----------
(() => {
  const box = document.querySelector('[data-consent]');
  if (!box) return;
  let saved = null;
  try {
    saved = localStorage.getItem('consent');
  } catch (e) {}
  if (!saved) box.hidden = false;
  const choose = (yes) => {
    try {
      localStorage.setItem('consent', yes ? 'yes' : 'no');
    } catch (e) {}
    if (typeof window.gtag === 'function') window.gtag('consent', 'update', { analytics_storage: yes ? 'granted' : 'denied' });
    box.hidden = true;
  };
  box.querySelector('[data-consent-yes]')?.addEventListener('click', () => choose(true));
  box.querySelector('[data-consent-no]')?.addEventListener('click', () => choose(false));
  document.querySelectorAll('[data-consent-open]').forEach((b) => b.addEventListener('click', () => (box.hidden = false)));
})();
