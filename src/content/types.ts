/**
 * Format compact d'un guide (voir README, « Créer une nouvelle page SEO »).
 *  s  slug de la page            p  slug du « cluster » produit (voir src/data/taxonomy.ts)
 *  t  type de guide (taille, capacite, puissance, budget, verifier, besoin, usage, accessoires, matiere, comparaison)
 *  h  titre H1 (et title)        d  meta description (≈150 caractères)
 *  q  réponse rapide             x  sections [[titre, paragraphe, paragraphe…], …]
 *  tb tableau récapitulatif [[en-têtes], [ligne], …]
 *  pr blocs produits [[« Pour privilégier… », explication, requête de recherche Amazon], …]
 *  m  erreurs à éviter           f  FAQ [[question, réponse], …]
 *  k  mots-clés de recherche interne (optionnel)
 */
export interface RawGuide {
  s: string;
  p: string;
  t: string;
  h: string;
  d: string;
  q: string;
  x: string[][];
  tb?: string[][];
  pr: [string, string, string][];
  m: string[];
  f: [string, string][];
  k?: string;
}
