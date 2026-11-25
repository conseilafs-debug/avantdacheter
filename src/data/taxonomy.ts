export interface Cat {
  slug: string;
  name: string;
  short: string;
  icon: string;
  desc: string;
  subs: string[]; // sous-catégories éditoriales prévues (affichage)
}

export const CATS: Cat[] = [
  { slug: 'maison', name: 'Maison', short: 'Maison', icon: '🏠', desc: 'Cuisine, nettoyage, confort, chauffage, bricolage et jardin : les critères à vérifier pour équiper la maison sans se tromper.', subs: ['Cuisine', 'Nettoyage', 'Rangement', 'Bricolage', 'Jardin', 'Éclairage', 'Chauffage', 'Confort', 'Décoration'] },
  { slug: 'animaux', name: 'Animaux', short: 'Animaux', icon: '🐾', desc: 'Chats, chiens, petits animaux, aquarium : tailles, matières et accessoires utiles pour bien équiper votre compagnon.', subs: ['Chats', 'Chiens', 'Petits animaux', 'Aquarium', 'Accessoires'] },
  { slug: 'camping', name: 'Camping & randonnée', short: 'Camping', icon: '⛺', desc: 'Tentes, sacs à dos, matelas, couchage, éclairage et cuisine de bivouac : choisir selon votre usage réel.', subs: ['Tentes', 'Sacs à dos', 'Matelas', 'Sacs de couchage', 'Lampes', 'Réchauds', 'Mobilier de camping', 'Accessoires'] },
  { slug: 'voyage', name: 'Voyage', short: 'Voyage', icon: '🧳', desc: 'Valises, bagages cabine, organisation et accessoires : dimensions, capacités et pièges à éviter.', subs: ['Valises', 'Sacs de voyage', 'Accessoires', 'Organisation', 'Transport'] },
  { slug: 'informatique', name: 'Informatique & bureau', short: 'Informatique', icon: '💻', desc: 'Écrans, chaises, batteries externes, claviers et télétravail : tailles, capacités et critères qui comptent vraiment.', subs: ['Ordinateurs', 'Écrans', 'Claviers', 'Souris', 'Imprimantes', 'Bureau', 'Télétravail', 'Accessoires'] },
  { slug: 'loisirs-sport', name: 'Loisirs & sport', short: 'Sport', icon: '🚴', desc: 'Vélo, fitness, randonnée, pêche : tailles, poids et critères pour choisir le bon équipement.', subs: ['Fitness', 'Randonnée', 'Vélo', 'Pêche', 'Plein air', 'Jeux', 'Activités'] },
  { slug: 'famille', name: 'Famille', short: 'Famille', icon: '👨‍👩‍👧', desc: 'Bébé, enfants, école : tailles, capacités et vérifications avant d’acheter pour les plus jeunes.', subs: ['Bébé', 'Enfants', 'École', 'Jeux', 'Rangement', 'Activités'] },
];

export interface GuideType {
  key: string;
  slug: string; // page /conseils/<slug>/
  title: string;
  blurb: string;
  label: string; // étiquette courte
}

export const TYPES: GuideType[] = [
  { key: 'taille', slug: 'quelle-taille-choisir', title: 'Quelle taille choisir ?', label: 'Taille', blurb: 'Dimensions, tailles et encombrement : mesurer avant de commander.' },
  { key: 'capacite', slug: 'quelle-capacite-choisir', title: 'Quelle capacité choisir ?', label: 'Capacité', blurb: 'Litres, mAh, personnes, kilos : dimensionner selon votre usage.' },
  { key: 'puissance', slug: 'quelle-puissance-choisir', title: 'Quelle puissance choisir ?', label: 'Puissance', blurb: 'Watts, lumens, bars : ce que la puissance dit… et ne dit pas.' },
  { key: 'budget', slug: 'quel-budget-prevoir', title: 'Quel budget prévoir ?', label: 'Budget', blurb: 'Entrée, milieu et haut de gamme : ce que l’on gagne en payant plus.' },
  { key: 'verifier', slug: 'que-verifier-avant-d-acheter', title: 'Que vérifier avant d’acheter ?', label: 'À vérifier', blurb: 'Les points de contrôle concrets avant de cliquer sur « commander ».' },
  { key: 'besoin', slug: 'est-ce-vraiment-utile', title: 'Est-ce vraiment utile ?', label: 'Utilité', blurb: 'Avantages, limites et alternatives : en avez-vous réellement besoin ?' },
  { key: 'usage', slug: 'quel-produit-pour-mon-usage', title: 'Quel produit pour mon usage ?', label: 'Usage', blurb: 'Des profils d’utilisateurs plutôt qu’un classement.' },
  { key: 'accessoires', slug: 'quels-accessoires-prevoir', title: 'Quels accessoires prévoir ?', label: 'Accessoires', blurb: 'Indispensable, utile ou optionnel : ne payez que le nécessaire.' },
  { key: 'matiere', slug: 'quelle-matiere-choisir', title: 'Quelle matière choisir ?', label: 'Matière', blurb: 'Avantages et limites de chaque matériau.' },
  { key: 'comparaison', slug: 'x-ou-y-lequel-choisir', title: 'X ou Y : lequel choisir ?', label: 'Comparaison', blurb: 'Deux options face à face, pour quel usage.' },
];

export interface Cluster {
  slug: string;
  cat: string;
  sub: string; // sous-catégorie éditoriale
  name: string;
  desc: string;
}

export const CLUSTERS: Cluster[] = [
  // Maison
  { slug: 'aspirateur', cat: 'maison', sub: 'Nettoyage', name: 'Aspirateur', desc: 'Puissance, type, poils d’animaux, robot ou balai : bien choisir son aspirateur.' },
  { slug: 'friteuse-a-air', cat: 'maison', sub: 'Cuisine', name: 'Friteuse à air', desc: 'Capacité, utilité et accessoires de la friteuse à air.' },
  { slug: 'machine-a-cafe', cat: 'maison', sub: 'Cuisine', name: 'Machine à café', desc: 'Usage, budget et vérifications avant d’acheter une machine à café.' },
  { slug: 'couette', cat: 'maison', sub: 'Confort', name: 'Couette', desc: 'Taille et matière de couette selon votre lit.' },
  { slug: 'deshumidificateur', cat: 'maison', sub: 'Confort', name: 'Déshumidificateur', desc: 'Capacité et utilité d’un déshumidificateur.' },
  { slug: 'chauffage-d-appoint', cat: 'maison', sub: 'Chauffage', name: 'Chauffage d’appoint', desc: 'Puissance adaptée à la pièce et à l’usage.' },
  { slug: 'nettoyeur-haute-pression', cat: 'maison', sub: 'Nettoyage', name: 'Nettoyeur haute pression', desc: 'Pression, débit et puissance pour nettoyer terrasse et voiture.' },
  { slug: 'perceuse', cat: 'maison', sub: 'Bricolage', name: 'Perceuse', desc: 'Puissance et type de perceuse selon vos travaux.' },
  { slug: 'taille-haie', cat: 'maison', sub: 'Jardin', name: 'Taille-haie', desc: 'Puissance, longueur de lame et type d’alimentation.' },
  { slug: 'lampe', cat: 'maison', sub: 'Éclairage', name: 'Lampe', desc: 'Éclairage de lecture et d’ambiance.' },
  { slug: 'tapis', cat: 'maison', sub: 'Décoration', name: 'Tapis', desc: 'Taille et matière de tapis.' },
  // Camping
  { slug: 'tente', cat: 'camping', sub: 'Tentes', name: 'Tente', desc: 'Taille, imperméabilité, poids, matière et accessoires : tout pour choisir sa tente.' },
  { slug: 'sac-a-dos', cat: 'camping', sub: 'Sacs à dos', name: 'Sac à dos de randonnée', desc: 'Capacité, taille de dos et critères de confort.' },
  { slug: 'matelas', cat: 'camping', sub: 'Matelas', name: 'Matelas de camping', desc: 'Confort et isolation du sol.' },
  { slug: 'sac-de-couchage', cat: 'camping', sub: 'Sacs de couchage', name: 'Sac de couchage', desc: 'Températures, garnissage et usage.' },
  { slug: 'lampe-frontale', cat: 'camping', sub: 'Lampes', name: 'Lampe frontale', desc: 'Lumens, autonomie et usage.' },
  { slug: 'rechaud', cat: 'camping', sub: 'Réchauds', name: 'Réchaud', desc: 'Types de réchauds de camping.' },
  { slug: 'glaciere', cat: 'camping', sub: 'Accessoires', name: 'Glacière', desc: 'Capacité et type de glacière.' },
  // Animaux
  { slug: 'arbre-a-chat', cat: 'animaux', sub: 'Chats', name: 'Arbre à chat', desc: 'Taille, stabilité, matières et budget pour un arbre à chat.' },
  { slug: 'cage-hamster', cat: 'animaux', sub: 'Petits animaux', name: 'Cage pour hamster', desc: 'Taille de cage pour un hamster.' },
  { slug: 'aquarium', cat: 'animaux', sub: 'Aquarium', name: 'Aquarium', desc: 'Premier aquarium : taille et accessoires.' },
  { slug: 'fontaine-a-eau-chat', cat: 'animaux', sub: 'Chats', name: 'Fontaine à eau pour chat', desc: 'Utilité des fontaines à eau.' },
  { slug: 'harnais-chien', cat: 'animaux', sub: 'Chiens', name: 'Harnais pour chien', desc: 'Prendre les mesures et choisir la bonne taille.' },
  { slug: 'panier-chien', cat: 'animaux', sub: 'Chiens', name: 'Panier pour chien', desc: 'Taille du panier selon le gabarit.' },
  { slug: 'litiere', cat: 'animaux', sub: 'Chats', name: 'Litière', desc: 'Types de litières : avantages et limites.' },
  { slug: 'caisse-de-transport', cat: 'animaux', sub: 'Accessoires', name: 'Caisse de transport', desc: 'Taille de la caisse de transport pour chat.' },
  { slug: 'distributeur-de-croquettes', cat: 'animaux', sub: 'Accessoires', name: 'Distributeur de croquettes', desc: 'Utilité des distributeurs automatiques.' },
  // Voyage
  { slug: 'valise', cat: 'voyage', sub: 'Valises', name: 'Valise', desc: 'Taille, capacité, matière et budget pour bien choisir sa valise.' },
  { slug: 'sac-de-voyage', cat: 'voyage', sub: 'Sacs de voyage', name: 'Sac de voyage', desc: 'Capacité des sacs de week-end et de voyage.' },
  { slug: 'accessoires-de-voyage', cat: 'voyage', sub: 'Accessoires', name: 'Accessoires de voyage', desc: 'Organisation, adaptateurs, cadenas : ce qui sert vraiment.' },
  // Informatique
  { slug: 'chaise-de-bureau', cat: 'informatique', sub: 'Télétravail', name: 'Chaise de bureau', desc: 'Critères d’ergonomie, budget et matières.' },
  { slug: 'ecran', cat: 'informatique', sub: 'Écrans', name: 'Écran d’ordinateur', desc: 'Taille et points à vérifier.' },
  { slug: 'batterie-externe', cat: 'informatique', sub: 'Accessoires', name: 'Batterie externe', desc: 'Capacité en mAh, utilité et vérifications.' },
  { slug: 'clavier', cat: 'informatique', sub: 'Claviers', name: 'Clavier', desc: 'Mécanique ou membrane.' },
  { slug: 'souris', cat: 'informatique', sub: 'Souris', name: 'Souris', desc: 'Souris ergonomique : utile ou non.' },
  { slug: 'imprimante', cat: 'informatique', sub: 'Imprimantes', name: 'Imprimante', desc: 'Laser ou jet d’encre.' },
  { slug: 'bureau', cat: 'informatique', sub: 'Bureau', name: 'Bureau & télétravail', desc: 'Taille de bureau et accessoires de télétravail.' },
  // Loisirs & sport
  { slug: 'velo', cat: 'loisirs-sport', sub: 'Vélo', name: 'Vélo', desc: 'Taille de vélo et de casque, antivol.' },
  { slug: 'tapis-de-yoga', cat: 'loisirs-sport', sub: 'Fitness', name: 'Tapis de yoga', desc: 'Épaisseur et matière.' },
  { slug: 'fitness', cat: 'loisirs-sport', sub: 'Fitness', name: 'Fitness à la maison', desc: 'Haltères, tapis de course, vélo d’appartement.' },
  { slug: 'peche', cat: 'loisirs-sport', sub: 'Pêche', name: 'Pêche', desc: 'Choisir sa canne selon la pêche pratiquée.' },
  { slug: 'randonnee', cat: 'loisirs-sport', sub: 'Randonnée', name: 'Randonnée', desc: 'Bâtons, chaussures : ce qui compte.' },
  // Famille
  { slug: 'poussette', cat: 'famille', sub: 'Bébé', name: 'Poussette', desc: 'Types de poussettes et points à vérifier.' },
  { slug: 'siege-auto', cat: 'famille', sub: 'Bébé', name: 'Siège auto', desc: 'Normes et choix selon l’enfant.' },
  { slug: 'cartable', cat: 'famille', sub: 'École', name: 'Cartable & sac d’école', desc: 'Capacité et critères de confort.' },
  { slug: 'lit-bebe', cat: 'famille', sub: 'Bébé', name: 'Lit bébé', desc: 'Dimensions standard des lits bébé.' },
  { slug: 'rangement-jouets', cat: 'famille', sub: 'Rangement', name: 'Rangement de jouets', desc: 'Capacité et formats.' },
  { slug: 'velo-enfant', cat: 'famille', sub: 'Enfants', name: 'Vélo enfant', desc: 'Choisir la taille de roue.' },
  { slug: 'chaise-haute', cat: 'famille', sub: 'Bébé', name: 'Chaise haute', desc: 'Utilité et alternatives.' },
];
