import { CATS, TYPES } from '../data/taxonomy';
import { GUIDES, clustersWithGuides } from '../lib/guides';

export function GET() {
  const items = [
    ...GUIDES.map((g) => ({ t: g.title, u: g.url, c: `${g.cat.name} · ${g.cluster.name} · ${g.type.label}`, k: `${g.cluster.name} ${g.keywords} ${g.type.title}` })),
    ...clustersWithGuides().map((c) => ({ t: `${c.name} : tous les guides`, u: `/${c.cat}/${c.slug}/`, c: `${CATS.find((x) => x.slug === c.cat)!.name} · Dossier`, k: c.desc })),
    ...CATS.map((c) => ({ t: c.name, u: `/${c.slug}/`, c: 'Catégorie', k: c.subs.join(' ') })),
    ...TYPES.map((t) => ({ t: t.title, u: `/conseils/${t.slug}/`, c: 'Conseils', k: t.blurb })),
  ];
  return new Response(JSON.stringify(items), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
