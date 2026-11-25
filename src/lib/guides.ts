import { CATS, CLUSTERS, TYPES, type Cat, type Cluster, type GuideType } from '../data/taxonomy';
import { PRODUCTS, type Product } from '../data/products';
import maison from '../content/maison';
import camping from '../content/camping';
import animaux from '../content/animaux';
import voyage from '../content/voyage';
import informatique from '../content/informatique';
import loisirs from '../content/loisirs';
import famille from '../content/famille';
import type { RawGuide } from '../content/types';

export interface Guide {
  slug: string;
  cluster: Cluster;
  cat: Cat;
  type: GuideType;
  url: string;
  title: string;
  description: string;
  quick: string;
  sections: { h: string; p: string[] }[];
  table?: string[][];
  profiles: { label: string; text: string; query: string; products: Product[] }[];
  mistakes: string[];
  faq: { q: string; a: string }[];
  keywords: string;
}

const RAW: RawGuide[] = [...maison, ...camping, ...animaux, ...voyage, ...informatique, ...loisirs, ...famille];

export const GUIDES: Guide[] = RAW.map((r) => {
  const cluster = CLUSTERS.find((c) => c.slug === r.p);
  if (!cluster) throw new Error(`Cluster inconnu « ${r.p} » pour le guide ${r.s}`);
  const cat = CATS.find((c) => c.slug === cluster.cat)!;
  const type = TYPES.find((t) => t.key === r.t);
  if (!type) throw new Error(`Type inconnu « ${r.t} » pour le guide ${r.s}`);
  return {
    slug: r.s,
    cluster,
    cat,
    type,
    url: `/${cat.slug}/${cluster.slug}/${r.s}/`,
    title: r.h,
    description: r.d,
    quick: r.q,
    sections: r.x.map(([h, ...p]) => ({ h, p })),
    table: r.tb,
    profiles: r.pr.map(([label, text, query], i) => ({
      label,
      text,
      query,
      products: PRODUCTS.filter((p) => p.guide === r.s && p.profile === i),
    })),
    mistakes: r.m,
    faq: r.f.map(([q, a]) => ({ q, a })),
    keywords: r.k ?? '',
  };
});

// Contrôle d'unicité des slugs et URL
{
  const seen = new Set<string>();
  for (const g of GUIDES) {
    if (seen.has(g.url)) throw new Error(`URL en double : ${g.url}`);
    seen.add(g.url);
  }
}

export const guidesOfCat = (cat: string) => GUIDES.filter((g) => g.cat.slug === cat);
export const guidesOfCluster = (cluster: string) => GUIDES.filter((g) => g.cluster.slug === cluster);
export const guidesOfType = (type: string) => GUIDES.filter((g) => g.type.key === type);
export const clustersWithGuides = () => CLUSTERS.filter((c) => GUIDES.some((g) => g.cluster.slug === c.slug));
export const clustersOfCat = (cat: string) => clustersWithGuides().filter((c) => c.cat === cat);

export function related(g: Guide, n = 4): Guide[] {
  const sameCluster = GUIDES.filter((x) => x !== g && x.cluster.slug === g.cluster.slug);
  const sameCat = GUIDES.filter((x) => x !== g && x.cat.slug === g.cat.slug && x.cluster.slug !== g.cluster.slug && x.type.key === g.type.key);
  const sameType = GUIDES.filter((x) => x !== g && x.type.key === g.type.key && x.cat.slug !== g.cat.slug);
  const rest = GUIDES.filter((x) => x !== g && x.cat.slug === g.cat.slug);
  return [...new Set([...sameCluster, ...sameCat, ...rest, ...sameType])].slice(0, n);
}

export const TODAY = '2026-11-25';
