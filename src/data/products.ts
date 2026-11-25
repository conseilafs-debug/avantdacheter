/**
 * PRODUITS AMAZON — source unique des produits mis en avant.
 *
 * Règles :
 *  - ne renseigner un produit QUE si l'ASIN a été vérifié sur Amazon.fr ;
 *  - ne jamais saisir de prix, de note ou de disponibilité (ils changent) ;
 *  - `guide` = slug du guide, `profile` = index (à partir de 0) du bloc « Pour privilégier… »
 *    sous lequel le produit s'affiche.
 *
 * Tant qu'aucun produit n'est renseigné pour un bloc, la page affiche un bouton
 * « Voir les modèles sur Amazon » vers une recherche Amazon.fr ciblée (avec amalys-21).
 *
 * Exemple (à décommenter avec un vrai ASIN vérifié) :
 *
 * {
 *   asin: 'B0XXXXXXXX',
 *   name: 'Nom exact du produit',
 *   guide: 'quelle-taille-de-tente-pour-4-personnes',
 *   profile: 0,
 *   forWho: 'Pour qui il convient',
 *   strength: 'Son point fort',
 *   limit: 'Sa limite éventuelle',
 *   features: ['Caractéristique vérifiée 1', 'Caractéristique vérifiée 2'],
 *   image: '/images/produits/nom.webp', // optionnel, uniquement si vous avez le droit de l'utiliser
 * }
 */
export interface Product {
  asin: string;
  name: string;
  guide: string;
  profile: number;
  forWho: string;
  strength: string;
  limit?: string;
  features?: string[];
  image?: string;
  imageAlt?: string;
}

export const PRODUCTS: Product[] = [];
