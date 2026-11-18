// Copy buttons
document.addEventListener('click', async (e) => {
  const btn = e.target.closest('[data-copy]');
  if (!btn) return;
  const code = btn.closest('.prompt-box')?.querySelector('pre code');
  if (!code) return;
  const text = code.textContent;
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
  const label = btn.textContent;
  btn.textContent = 'Copied ✓';
  btn.classList.add('is-done');
  setTimeout(() => { btn.textContent = label; btn.classList.remove('is-done'); }, 1600);
});

// Search + category filter on the home page
(() => {
  const grid = document.querySelector('[data-grid]');
  if (!grid) return;
  const input = document.querySelector('[data-search-input]');
  const chips = [...document.querySelectorAll('[data-filter]')];
  const empty = document.querySelector('[data-empty]');
  const cards = [...grid.querySelectorAll('.card')];
  let cat = '';
  const apply = () => {
    const q = (input?.value || '').trim().toLowerCase();
    let shown = 0;
    for (const c of cards) {
      const ok = (!cat || c.dataset.cat === cat) && (!q || q.split(/\s+/).every((w) => c.dataset.search.includes(w)));
      c.hidden = !ok;
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
