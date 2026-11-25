import type { APIRoute } from 'astro';
export const GET: APIRoute = ({ site }) => {
  const base = (site ?? new URL('https://avantdacheter.pages.dev')).toString().replace(/\/$/, '');
  return new Response(`User-agent: *\nAllow: /\nDisallow: /recherche/\n\nSitemap: ${base}/sitemap.xml\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
