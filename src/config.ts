/**
 * Configuration centrale du site « Avant d'Acheter ».
 * Tout ce qui est susceptible de changer (tracking ID, mentions légales, nom du site) est ici.
 */
export const SITE = {
  name: "Avant d'Acheter",
  slogan: "Tout ce qu'il faut savoir avant d'acheter",
  lang: 'fr-FR',
  // Date de dernière révision éditoriale affichée sur les guides de la V1
  updated: '2026-11-25',
};

/** Affiliation Amazon.fr (Programme Partenaires) */
export const AMAZON = {
  tag: 'amalys-21', // Tracking ID Amazon Associates
  host: 'www.amazon.fr',
};

/**
 * Informations d'éditeur utilisées dans les mentions légales et la page contact.
 * ⚠️ À vérifier / adapter avant mise en production.
 */
export const LEGAL = {
  editor: 'Athéna Office (micro-entreprise, EI de Tiffany Lesieur)',
  publisher: 'Philippe Lesieur',
  address: '2 résidence Pierre Jacques, rue des Chardonnerets, 62600 Groffliers, France',
  email: 'contact@athena-office.fr',
  siren: '105 858 328',
  vat: 'Non assujetti à la TVA',
  host: 'Cloudflare, Inc. — 101 Townsend St, San Francisco, CA 94107, États-Unis',
};
