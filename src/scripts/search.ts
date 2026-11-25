type Item = { t: string; u: string; c: string; k: string; n: string };
let index: Item[] | null = null;
let loading: Promise<Item[]> | null = null;

const norm = (s: string) =>
  s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/œ/g, 'oe').replace(/[^a-z0-9]+/g, ' ').trim();
const stem = (w: string) => (w.length > 3 ? w.replace(/(s|x)$/, '') : w);
const STOP = new Set(['de', 'du', 'des', 'la', 'le', 'les', 'un', 'une', 'pour', 'et', 'ou', 'a', 'au', 'aux', 'en', 'quel', 'quelle', 'quels', 'quelles', 'que', 'choisir', 'faut', 'il', 'l', 'd']);

async function load(): Promise<Item[]> {
  if (index) return index;
  loading ??= fetch('/search-index.json')
    .then((r) => r.json())
    .then((d: Omit<Item, 'n'>[]) => (index = d.map((i) => ({ ...i, n: norm(`${i.t} ${i.k} ${i.c}`) }))));
  return loading;
}

function search(items: Item[], query: string, max = 8): Item[] {
  const tokens = norm(query).split(' ').filter((w) => w && !STOP.has(w)).map(stem);
  if (!tokens.length) return [];
  const scored: [number, Item][] = [];
  for (const it of items) {
    const title = norm(it.t);
    let score = 0;
    let ok = true;
    for (const tk of tokens) {
      if (title.includes(tk)) score += 4;
      else if (it.n.includes(tk)) score += 1;
      else { ok = false; break; }
    }
    if (ok) scored.push([score + (it.u.split('/').length <= 4 ? 1 : 0), it]);
  }
  return scored.sort((a, b) => b[0] - a[0] || a[1].t.localeCompare(b[1].t, 'fr')).slice(0, max).map((s) => s[1]);
}

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

document.querySelectorAll<HTMLFormElement>('form[data-search]').forEach((form) => {
  const input = form.querySelector<HTMLInputElement>('input[type=search]')!;
  const list = form.querySelector<HTMLUListElement>('.search-suggest')!;
  let active = -1;
  const close = () => { list.hidden = true; list.innerHTML = ''; active = -1; input.removeAttribute('aria-activedescendant'); };
  const render = async () => {
    const q = input.value;
    if (norm(q).length < 2) return close();
    const res = search(await load(), q, 7);
    if (!res.length) return close();
    list.innerHTML = res.map((r, i) => `<li role="presentation"><a role="option" id="${list.id}-${i}" href="${r.u}">${esc(r.t)}<small>${esc(r.c)}</small></a></li>`).join('');
    list.hidden = false; active = -1;
  };
  input.addEventListener('focus', () => { void load(); });
  input.addEventListener('input', () => { void render(); });
  input.addEventListener('keydown', (e) => {
    const links = [...list.querySelectorAll<HTMLAnchorElement>('a')];
    if (e.key === 'Escape') return close();
    if (!links.length || list.hidden) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      active = (active + (e.key === 'ArrowDown' ? 1 : -1) + links.length) % links.length;
      links.forEach((l, i) => l.setAttribute('aria-selected', String(i === active)));
      input.setAttribute('aria-activedescendant', links[active].id);
    } else if (e.key === 'Enter' && active >= 0) {
      e.preventDefault();
      links[active].click();
    }
  });
  document.addEventListener('click', (e) => { if (!form.contains(e.target as Node)) close(); });
});

// Page /recherche/
const box = document.getElementById('search-results');
if (box) {
  const q = new URLSearchParams(location.search).get('q') ?? '';
  const input = document.getElementById('q-page') as HTMLInputElement | null;
  if (input) input.value = q;
  if (q.trim()) {
    void load().then((items) => {
      const res = search(items, q, 40);
      box.innerHTML = res.length
        ? `<p>${res.length} résultat${res.length > 1 ? 's' : ''} pour « ${esc(q)} »</p><ul class="results">${res.map((r) => `<li><a href="${r.u}">${esc(r.t)}<small>${esc(r.c)}</small></a></li>`).join('')}</ul>`
        : `<p>Aucun résultat pour « ${esc(q)} ». Essayez un mot plus simple (ex. « tente », « valise ») ou parcourez <a href="/categories/">les catégories</a>.</p>`;
    });
  }
}
