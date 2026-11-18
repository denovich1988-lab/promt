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

// ---------- Prompt generator ----------
(() => {
  const g = document.querySelector('[data-generator]');
  if (!g) return;
  const f = (k) => g.querySelector(`[data-g="${k}"]`);
  const out = g.querySelector('[data-g-out]');
  const status = g.querySelector('[data-g-status]');
  const val = (k) => (f(k)?.value || '').trim();
  const lines = (t) => t.split('\n').map((x) => x.trim()).filter(Boolean);
  const build = () => {
    const type = val('type');
    g.querySelectorAll('[data-for]').forEach((el) => (el.hidden = !el.dataset.for.split(' ').includes(type)));
    const task = val('task');
    if (!task) {
      status.textContent = 'Fill in the task to start';
      return '';
    }
    const p = [];
    if (type === 'image' || type === 'video') {
      p.push(`${type === 'video' ? 'Create a short video' : 'Create an image'}: ${task}.`);
      if (val('context')) p.push(`Details: ${val('context')}`);
      if (val('style')) p.push(`Style and mood: ${val('style')}.`);
      if (type === 'video') p.push('Camera: smooth, steady movement; describe what moves in each part of the clip.');
      if (val('ratio')) p.push(`Format: ${val('ratio')}.`);
      const avoid = val('rules');
      p.push(`Avoid: ${avoid || (type === 'video' ? 'on-screen text, sudden cuts, distorted hands, morphing objects' : 'text, watermarks, extra objects, distorted hands')}.`);
    } else {
      const role = val('role') || (type === 'code' ? 'a senior software engineer' : '');
      if (role) p.push(`You are ${role.replace(/^(you are\s+)/i, '')}.`);
      p.push(`Task: ${task}`);
      if (val('context')) p.push(`Context:\n${lines(val('context')).map((l) => `- ${l}`).join('\n')}`);
      if (val('audience')) p.push(`Audience: ${val('audience')}`);
      const rules = [];
      if (val('tone')) rules.push(`Tone: ${val('tone')}.`);
      if (val('length')) rules.push(`Length: ${val('length')}.`);
      lines(val('rules')).forEach((r) => rules.push(r));
      rules.push("Don't invent facts, numbers or quotes. If something is uncertain, say so.");
      p.push(`Rules:\n${rules.map((r) => `- ${r}`).join('\n')}`);
      if (val('format')) p.push(`Output format: ${val('format')}.`);
      if (f('ask')?.checked) p.push('Before you start, ask me up to 3 questions if anything important is missing. Otherwise, go ahead.');
    }
    status.textContent = 'Ready to copy';
    return p.join('\n\n');
  };
  const render = () => {
    out.textContent = build() || 'Your prompt will appear here as you type.';
  };
  g.addEventListener('input', render);
  g.addEventListener('change', render);
  g.querySelector('[data-g-reset]')?.addEventListener('click', () => {
    g.querySelectorAll('input:not([type=checkbox]), textarea').forEach((el) => (el.value = ''));
    g.querySelectorAll('select').forEach((el) => (el.selectedIndex = 0));
    render();
  });
  g.querySelector('[data-g-copy]')?.addEventListener('click', async (e) => {
    const text = build();
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
    }
    const btn = e.currentTarget;
    btn.textContent = 'Copied';
    btn.classList.add('is-done');
    setTimeout(() => {
      btn.textContent = 'Copy prompt';
      btn.classList.remove('is-done');
    }, 1800);
  });
  render();
})();

// ---------- Mobile menu ----------
(() => {
  const btn = document.querySelector('[data-menu-btn]');
  const drawer = document.querySelector('[data-drawer]');
  if (!btn || !drawer) return;
  const set = (open) => {
    drawer.hidden = !open;
    btn.setAttribute('aria-expanded', String(open));
    document.documentElement.classList.toggle('menu-open', open);
    if (open) drawer.querySelector('input')?.focus({ preventScroll: true });
  };
  btn.addEventListener('click', () => set(drawer.hidden));
  drawer.addEventListener('click', (e) => {
    if (e.target.closest('a')) set(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !drawer.hidden) {
      set(false);
      btn.focus();
    }
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900 && !drawer.hidden) set(false);
  });
})();

// ---------- Tables become cards on phones: copy header labels onto cells ----------
document.querySelectorAll('.prose table').forEach((t) => {
  const heads = [...t.querySelectorAll('thead th')].map((th) => th.textContent.trim());
  if (!heads.length) return;
  t.classList.add('stack');
  t.querySelectorAll('tbody tr').forEach((tr) => [...tr.children].forEach((td, i) => heads[i] && td.setAttribute('data-label', heads[i])));
});
