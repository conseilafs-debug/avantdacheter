import { AMAZON } from '../config';

/** ASIN valide : 10 caractères alphanumériques (ex. B0XXXXXXXX ou ISBN-10). */
export const isValidAsin = (asin?: string): boolean =>
  !!asin && /^(B[0-9A-Z]{9}|[0-9]{9}[0-9X])$/.test(asin.trim().toUpperCase());

/** Lien produit à partir d'un ASIN. Retourne null si l'ASIN n'est pas valide (on n'invente jamais d'ASIN). */
export function amazonProductUrl(asin: string): string | null {
  if (!isValidAsin(asin)) return null;
  return `https://${AMAZON.host}/dp/${asin.trim().toUpperCase()}/?tag=${AMAZON.tag}`;
}

/** Lien vers une recherche Amazon.fr (aucun ASIN requis) avec le tracking ID. */
export function amazonSearchUrl(query: string): string {
  const q = encodeURIComponent(query.trim()).replace(/%20/g, '+');
  return `https://${AMAZON.host}/s?k=${q}&tag=${AMAZON.tag}`;
}

/** Force le tracking ID sur n'importe quelle URL Amazon.fr (remplace un éventuel autre tag). */
export function withTag(url: string): string {
  try {
    const u = new URL(url);
    u.searchParams.set('tag', AMAZON.tag);
    return u.toString();
  } catch {
    return url;
  }
}
