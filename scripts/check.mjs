// Contrôles post-build : liens internes, tag Amazon, unicité des balises, JSON-LD.
// Usage : npm run build && npm run check:links
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const TAG = 'amalys-21';
const files = [];
(function walk(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && files.push(p);
  }
})(DIST);

const errors = [];
const titles = new Map(), descs = new Map(), h1s = new Map();
let amazon = 0;
for (const f of files) {
  const html = readFileSync(f, 'utf8');
  const page = '/' + f.slice(DIST.length + 1).replace(/index\.html$/, '');
  const grab = (re) => (html.match(re) || [])[1];
  const t = grab(/<title>([^<]*)<\/title>/), d = grab(/<meta name="description" content="([^"]*)"/);
  const h1c = (html.match(/<h1[ >]/g) || []).length;
  const h1 = grab(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  if (!t) errors.push(`${page}: title manquant`);
  if (!d) errors.push(`${page}: meta description manquante`);
  if (h1c !== 1) errors.push(`${page}: ${h1c} balises h1`);
  if (!/<link rel="canonical"/.test(html)) errors.push(`${page}: canonical manquant`);
  if (page !== '/404/') {
    for (const [m, v, n] of [[titles, t, 'title'], [descs, d, 'description'], [h1s, h1?.replace(/<[^>]+>/g, ''), 'h1']]) {
      if (v && m.has(v) && !/recherche/.test(page)) errors.push(`${page}: ${n} dupliqué avec ${m.get(v)}`);
      else if (v) m.set(v, page);
    }
  }
  // JSON-LD valide
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]); } catch { errors.push(`${page}: JSON-LD invalide`); }
  }
  // Liens
  for (const m of html.matchAll(/<a [^>]*>/g)) {
    const href = (m[0].match(/href="([^"]+)"/) || [])[1];
    if (!href) continue;
    if (/^https?:\/\/(www\.)?amazon\./.test(href)) {
      amazon++;
      if (!href.includes(`tag=${TAG}`)) errors.push(`${page}: lien Amazon sans tag ${TAG} → ${href}`);
      if (!/rel="[^"]*sponsored/.test(m[0])) errors.push(`${page}: lien Amazon sans rel=sponsored`);
    } else if (href.startsWith('/') && !href.startsWith('//')) {
      const p = href.split('#')[0].split('?')[0];
      const target = join(DIST, p, p.endsWith('/') ? 'index.html' : '');
      if (!existsSync(target) && !existsSync(join(DIST, p))) errors.push(`${page}: lien interne cassé → ${href}`);
    }
  }
}
console.log(`${files.length} pages HTML, ${amazon} liens Amazon vérifiés.`);
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log('✔ Aucun problème détecté.');
