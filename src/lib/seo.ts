import { SITE } from '../config';

export const abs = (site: URL | undefined, path: string) =>
  (site ?? new URL('https://avantdacheter.pages.dev')).toString().replace(/\/$/, '') + path;

export function breadcrumbLd(site: URL | undefined, items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: abs(site, it.url),
    })),
  };
}

export const publisherLd = (site: URL | undefined) => ({
  '@type': 'Organization',
  name: SITE.name,
  url: abs(site, '/'),
  logo: { '@type': 'ImageObject', url: abs(site, '/favicon.svg') },
});
