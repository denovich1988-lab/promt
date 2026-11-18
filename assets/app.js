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

// ---------- Search + category filter ----------
(() => {
  const list = document.querySelector('[data-grid]');
  if (!list) return;
  const input = document.querySelector('[data-search-input]');
  const chips = [...document.querySelectorAll('[data-filter]')];
  const empty = document.querySelector('[data-empty]');
  const rows = [...list.querySelectorAll('.row')];
  let cat = '';
  const apply = () => {
    const q = (input?.value || '').trim().toLowerCase();
    let shown = 0;
    for (const r of rows) {
      const ok = (!cat || r.dataset.cat === cat) && (!q || q.split(/\s+/).every((w) => r.dataset.search.includes(w)));
      r.hidden = !ok;
      if (ok) shown++;
    }
    if (empty) empty.hidden = shown > 0;
  };
  input?.addEventListener('input', apply);
  chips.forEach((chip) =>
    chip.addEventListener('click', () => {
      cat = chip.dataset.filter;
      chips.forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
      apply();
    })
  );
})();
