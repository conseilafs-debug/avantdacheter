import type { APIRoute } from 'astro';
import { CATS, TYPES } from '../data/taxonomy';
import { GUIDES, clustersWithGuides } from '../lib/guides';
import { SITE } from '../config';

export const GET: APIRoute = ({ site }) => {
  const base = (site ?? new URL('https://avant-dacheter.pages.dev')).toString().replace(/\/$/, '');
  const d = SITE.updated;
  const urls: [string, string, string][] = [
    ['/', '1.0', 'weekly'],
    ['/categories/', '0.8', 'weekly'],
    ['/guides/', '0.8', 'weekly'],
    ...CATS.map((c) => [`/${c.slug}/`, '0.8', 'weekly'] as [string, string, string]),
    ...clustersWithGuides().map((c) => [`/${c.cat}/${c.slug}/`, '0.7', 'weekly'] as [string, string, string]),
    ...TYPES.map((t) => [`/conseils/${t.slug}/`, '0.6', 'weekly'] as [string, string, string]),
    ...GUIDES.map((g) => [g.url, '0.7', 'monthly'] as [string, string, string]),
    ...['/a-propos/', '/notre-fonctionnement/', '/contact/', '/mentions-legales/', '/politique-de-confidentialite/', '/politique-de-cookies/', '/conditions-utilisation/'].map((u) => [u, '0.3', 'yearly'] as [string, string, string]),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(([u, p, f]) => `  <url><loc>${base}${u}</loc><lastmod>${d}</lastmod><changefreq>${f}</changefreq><priority>${p}</priority></url>`)
    .join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
