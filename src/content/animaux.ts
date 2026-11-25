import type { RawGuide } from './types';

const guides: RawGuide[] = [
  // ───────────── ARBRE À CHAT ─────────────
  {
    s: 'quelle-taille-d-arbre-a-chat-choisir', p: 'arbre-a-chat', t: 'taille',
    h: 'Quelle taille d’arbre à chat choisir ?',
    d: 'Hauteur, base, plateformes : comment choisir la taille d’un arbre à chat selon le gabarit du chat, le nombre de chats et la pièce.',
    q: 'Choisissez un arbre dont les plateformes accueillent votre chat allongé et dont la base est assez large pour rester stable. Un grand chat ou plusieurs chats demandent un arbre plus massif, pas seulement plus haut.',
    x: [
      ['1. Quel est le gabarit de votre chat ?', 'Un chat moyen apprécie des plateformes d’environ 35 à 40 cm de côté. Les grandes races ou les chats lourds ont besoin de plateformes plus larges et de structures plus robustes.'],
      ['2. Combien de chats ?', 'Plusieurs chats demandent plusieurs niveaux et plusieurs cachettes pour éviter les conflits.'],
      ['3. Quelle hauteur ?', 'La hauteur dépend de la pièce. En appartement, 1,2 à 1,5 m est courant ; sous plafond bas, mesurez avant de commander.'],
      ['4. Quelle stabilité ?', 'Une base large et lourde, ou une fixation entre sol et plafond, empêche l’arbre de basculer quand le chat saute.'],
      ['5. Quel espace au sol ?', 'Mesurez l’emprise de la base, pas seulement la hauteur.'],
    ],
    tb: [['Profil', 'Taille conseillée', 'À privilégier'], ['Chat moyen, appartement', '1,2 à 1,5 m', 'Stabilité, 2-3 niveaux'], ['Grand chat', 'Plateformes larges', 'Structure robuste'], ['Plusieurs chats', 'Arbre multi-niveaux', 'Cachettes, accès multiples']],
    pr: [['Pour privilégier la stabilité', 'Un arbre à base large pour chat lourd.', 'arbre à chat grand chat stable'], ['Pour privilégier la compacité', 'Un arbre compact pour petit espace.', 'arbre à chat compact'], ['Pour plusieurs chats', 'Un arbre multi-niveaux.', 'arbre à chat grand plusieurs chats']],
    m: ['Choisir selon la hauteur seule.', 'Négliger la stabilité d’un arbre léger.'],
    f: [['Quelle hauteur d’arbre à chat ?', 'Entre 1,2 et 1,5 m convient à la plupart des appartements, selon la pièce.'], ['Un arbre à chat doit-il être fixé ?', 'Une base lourde et large suffit souvent ; sinon, fixez-le entre sol et plafond.']],
  },
  {
    s: 'que-verifier-avant-d-acheter-un-arbre-a-chat', p: 'arbre-a-chat', t: 'verifier',
    h: 'Que vérifier avant d’acheter un arbre à chat ?',
    d: 'Stabilité, sisal, plateformes, hamac, entretien, sécurité : les points à vérifier avant d’acheter un arbre à chat.',
    q: 'Vérifiez la stabilité de la base, la qualité du sisal, la taille des plateformes, la facilité de nettoyage et l’absence de petites pièces détachables. Un arbre instable ne sera pas utilisé.',
    x: [
      ['1. La stabilité', 'Base large, structure rigide, vis solides.'],
      ['2. Le sisal', 'Il sert à se faire les griffes : une corde épaisse et bien fixée résiste plus longtemps.'],
      ['3. Les plateformes', 'Assez grandes pour que le chat s’allonge ; avec bords si votre chat est dormeur.'],
      ['4. Le nettoyage', 'Housses amovibles et revêtements lavables facilitent l’entretien.'],
      ['5. La sécurité', 'Pas de petites pièces mâchouillables, pas d’arêtes, jouets bien fixés.'],
    ],
    tb: [['Point', 'Question', 'Pourquoi'], ['Stabilité', 'Bouge-t-il ?', 'Utilisation'], ['Sisal', 'Épais, bien fixé ?', 'Durabilité'], ['Nettoyage', 'Housses lavables ?', 'Hygiène']],
    pr: [['Pour privilégier la durabilité', 'Un arbre robuste, sisal épais.', 'arbre à chat sisal robuste'], ['Pour privilégier l’entretien', 'Un arbre à housses lavables.', 'arbre à chat housse lavable']],
    m: ['Acheter sans lire les dimensions.', 'Prendre un modèle trop léger pour un chat lourd.'],
    f: [['Mon chat n’utilisera-t-il pas l’arbre ?', 'Placez-le près d’une fenêtre ou d’un lieu de vie : l’emplacement compte beaucoup.']],
  },
  {
    s: 'quelle-matiere-d-arbre-a-chat-choisir', p: 'arbre-a-chat', t: 'matiere',
    h: 'Quelle matière d’arbre à chat choisir ?',
    d: 'Sisal, peluche, carton, bois : avantages et limites des matières d’arbre à chat pour les griffes, le confort et l’entretien.',
    q: 'Le sisal est la matière de référence pour les griffes. Pour le couchage, une peluche douce plaît, mais se salit plus vite. La structure en bois massif est plus solide que l’aggloméré.',
    x: [
      ['Sisal', 'Matière idéale pour se faire les griffes, durable. À remplacer lorsqu’il est trop usé.'],
      ['Peluche et tissus', 'Confortables, mais retiennent les poils et demandent plus de nettoyage.'],
      ['Carton et moquette', 'Économiques mais s’usent vite.'],
      ['Structure', 'Le bois massif ou le contreplaqué épais est plus solide que l’aggloméré fin, qui peut se fissurer sous le poids d’un grand chat.'],
    ],
    tb: [['Matière', 'Points forts', 'Limites'], ['Sisal', 'Griffes, durable', 'S’effiloche'], ['Peluche', 'Confort', 'Nettoyage'], ['Carton', 'Prix', 'Usure']],
    pr: [['Pour les griffes', 'Un arbre avec colonnes sisal.', 'arbre à chat sisal'], ['Pour le confort', 'Un arbre à plateformes peluche.', 'arbre à chat peluche']],
    m: ['Choisir uniquement selon l’apparence.', 'Oublier la solidité de la structure.'],
    f: [['Comment remplacer le sisal ?', 'Il existe des cordes de sisal de rechange à enrouler et fixer.']],
  },
  {
    s: 'quel-arbre-a-chat-pour-un-appartement', p: 'arbre-a-chat', t: 'usage',
    h: 'Quel arbre à chat pour un appartement ?',
    d: 'Peu de place, chat d’intérieur : quel arbre à chat choisir pour un appartement ? Profils d’usage, hauteur et emplacement.',
    q: 'En appartement, privilégiez la verticalité : un arbre peu large mais bien stable, placé près d’une fenêtre, avec un griffoir et un coin de repos.',
    x: [
      ['Gagner de la place en hauteur', 'Un arbre mince et haut occupe peu de surface au sol.'],
      ['Un chat d’intérieur a besoin d’activités', 'Griffoir, point d’observation, cachette : l’arbre répond à plusieurs besoins.'],
      ['L’emplacement', 'Près d’une fenêtre, un arbre devient un poste d’observation très apprécié.'],
    ],
    tb: [['Situation', 'Type d’arbre', 'À privilégier'], ['Petit appartement', 'Mince, haut', 'Stabilité'], ['Chat très actif', 'Arbre multi-niveaux', 'Plateformes'], ['Fenêtre disponible', 'Poste d’observation', 'Hauteur']],
    pr: [['Pour privilégier le gain de place', 'Un arbre mince et haut.', 'arbre à chat étroit appartement'], ['Pour privilégier l’observation', 'Un arbre près de la fenêtre.', 'arbre à chat fenêtre plateforme']],
    m: ['Choisir un arbre trop large pour le salon.', 'Le placer dans un coin sans intérêt pour le chat.'],
    f: [['Combien d’arbres pour un chat d’appartement ?', 'Un seul bien placé suffit souvent ; ajoutez des griffoirs.']],
  },
  {
    s: 'quel-budget-pour-un-arbre-a-chat', p: 'arbre-a-chat', t: 'budget',
    h: 'Quel budget prévoir pour un arbre à chat ?',
    d: 'Entrée, milieu et haut de gamme : ce que l’on gagne en payant plus pour un arbre à chat (stabilité, matières, taille).',
    q: 'Le prix influence surtout la stabilité, l’épaisseur des matériaux et la taille. Un arbre bon marché peut convenir à un petit chat, mais un grand chat demande une structure plus solide.',
    x: [
      ['Entrée de gamme', 'Convient à un chat léger, structure plus légère, finitions simples.'],
      ['Milieu de gamme', 'Meilleure stabilité, sisal plus épais, housses plus durables.'],
      ['Gamme supérieure', 'Gros chats, plusieurs chats, matériaux massifs.'],
    ],
    tb: [['Gamme', 'Pour qui', 'À vérifier'], ['Entrée', 'Chat léger', 'Stabilité'], ['Milieu', 'Usage quotidien', 'Sisal'], ['Supérieure', 'Gros ou plusieurs chats', 'Structure']],
    pr: [['Pour privilégier le petit prix', 'Un arbre simple.', 'arbre à chat pas cher'], ['Pour privilégier la solidité', 'Un arbre robuste.', 'arbre à chat robuste grand']],
    m: ['Acheter le moins cher pour un gros chat.', 'Ne pas lire les avis sur la stabilité.'],
    f: [['Est-ce rentable de payer plus ?', 'Si votre chat est lourd ou actif, oui : un arbre instable n’est pas utilisé.']],
  },

  // ───────────── CAGE HAMSTER ─────────────
  {
    s: 'quelle-taille-de-cage-pour-un-hamster', p: 'cage-hamster', t: 'taille',
    h: 'Quelle taille de cage pour un hamster ?',
    d: 'Dimensions minimales couramment recommandées pour une cage de hamster, litière profonde, roue et aménagement.',
    q: 'On recommande couramment une surface au sol d’au moins 100 x 50 cm, avec une litière profonde pour creuser. Les cages d’animalerie vendues sont souvent trop petites.',
    x: [
      ['La surface avant tout', 'Les hamsters parcourent de grandes distances la nuit : la surface au sol compte plus que la hauteur.'],
      ['Litière profonde', 'Prévoyez une épaisseur importante de litière pour que le hamster creuse des galeries.'],
      ['La roue', 'Choisissez une roue de grand diamètre, pleine et silencieuse, adaptée à la race : on cite souvent environ 28 cm pour un hamster doré.'],
      ['Cage, bac ou terrarium', 'Un bac ou un terrarium offre souvent plus de surface et de litière qu’une cage à barreaux.'],
    ],
    tb: [['Élément', 'Repère courant', 'Remarque'], ['Surface au sol', '100 x 50 cm minimum', 'Plus si possible'], ['Litière', 'Épaisse, pour creuser', 'Plusieurs dizaines de cm'], ['Roue', 'Grand diamètre', 'Adaptée à la race']],
    pr: [['Pour privilégier l’espace', 'Une grande cage ou un bac.', 'cage hamster 100 cm'], ['Pour privilégier le confort', 'Une roue silencieuse grand diamètre.', 'roue hamster silencieuse 28 cm']],
    m: ['Acheter une cage d’animalerie standard.', 'Mettre une roue trop petite.'],
    f: [['Une cage à étages est-elle utile ?', 'Les étages ne remplacent pas la surface au sol.']],
  },

  // ───────────── AQUARIUM ─────────────
  {
    s: 'quelle-taille-de-premier-aquarium-choisir', p: 'aquarium', t: 'taille',
    h: 'Quelle taille de premier aquarium choisir ?',
    d: 'Volume, stabilité de l’eau, espèces : quelle taille d’aquarium pour débuter ? Repères en litres et erreurs à éviter.',
    q: 'Pour un premier aquarium d’eau douce, visez au moins 60 litres. Un plus grand volume est plus stable et pardonne mieux les erreurs qu’un très petit bac.',
    x: [
      ['Pourquoi plus grand est plus simple', 'Dans un petit volume, la température et la qualité de l’eau varient vite. Un volume plus important limite ces variations.'],
      ['Choisir les poissons avant l’aquarium', 'Chaque espèce a ses besoins (taille adulte, température, nombre de congénères). Choisissez les poissons d’abord, puis le volume.'],
      ['L’espace disponible', 'Un aquarium rempli pèse lourd : vérifiez le meuble et l’emplacement.'],
      ['Le cycle de l’eau', 'Avant d’introduire des poissons, il faut laisser l’aquarium se stabiliser (cycle de l’azote).'],
    ],
    tb: [['Volume', 'Pour qui', 'Remarque'], ['Moins de 30 L', 'Déconseillé aux débutants', 'Instable'], ['60 à 100 L', 'Débutant', 'Bon compromis'], ['100 L et plus', 'Communautaire', 'Plus stable']],
    pr: [['Pour débuter', 'Un aquarium de 60 à 100 L en kit.', 'aquarium 60 litres kit'], ['Pour la stabilité', 'Un aquarium plus grand.', 'aquarium 100 litres']],
    m: ['Acheter un petit bocal.', 'Introduire les poissons le jour même.'],
    f: [['Combien de poissons dans 60 L ?', 'Cela dépend de l’espèce : renseignez-vous avant d’acheter.']],
  },
  {
    s: 'quels-accessoires-pour-un-aquarium', p: 'aquarium', t: 'accessoires',
    h: 'Quels accessoires pour un aquarium ?',
    d: 'Filtre, chauffage, éclairage, tests d’eau, conditionneur : quels accessoires d’aquarium sont indispensables, utiles ou optionnels ?',
    q: 'Indispensables : un filtre, un conditionneur d’eau, un thermomètre et des tests d’eau ; un chauffage pour des espèces tropicales. Utiles : éclairage adapté, épuisette, décor. Optionnels : CO2, surpresseur.',
    x: [
      ['Indispensable', 'Filtre adapté au volume, conditionneur d’eau, thermomètre, tests de qualité de l’eau, chauffage si espèces tropicales.'],
      ['Utile', 'Éclairage adapté aux plantes, épuisette, siphon de nettoyage, substrat adapté, décor et cachettes.'],
      ['Optionnel', 'Injection de CO2, aérateur, minuteur, thermostat externe.'],
    ],
    tb: [['Catégorie', 'Accessoire', 'Pourquoi'], ['Indispensable', 'Filtre, tests, conditionneur', 'Qualité de l’eau'], ['Utile', 'Éclairage, siphon', 'Entretien'], ['Optionnel', 'CO2, minuteur', 'Plantes avancées']],
    pr: [['Pour démarrer', 'Un kit de tests d’eau.', 'tests eau aquarium'], ['Pour la filtration', 'Un filtre adapté au volume.', 'filtre aquarium 100 litres']],
    m: ['Sous-dimensionner le filtre.', 'Ne pas tester l’eau.'],
    f: [['À quelle fréquence tester l’eau ?', 'Au début, régulièrement, puis selon la stabilité du bac.']],
  },

  // ───────────── FONTAINE À EAU CHAT ─────────────
  {
    s: 'fontaine-a-eau-pour-chat-est-ce-utile', p: 'fontaine-a-eau-chat', t: 'besoin',
    h: 'Une fontaine à eau pour chat est-elle utile ?',
    d: 'Une fontaine à eau pour chat : avantages, limites, cas où elle est utile, entretien et alternatives.',
    q: 'Elle peut aider si votre chat boit peu ou aime l’eau courante, mais ce n’est pas indispensable. Elle demande un nettoyage régulier. En cas de doute sur la consommation d’eau, parlez-en à votre vétérinaire.',
    x: [
      ['Les avantages possibles', 'L’eau en mouvement attire certains chats ; le réservoir plus grand évite de remplir tous les jours.'],
      ['Les limites', 'Bruit de pompe, nettoyage fréquent, filtres à remplacer, câble à protéger.'],
      ['Quand c’est pertinent', 'Chat qui joue avec l’eau, qui préfère les robinets, ou foyer où l’on s’absente.'],
      ['Alternatives', 'Plusieurs gamelles d’eau fraîche à différents endroits, loin de la nourriture.'],
    ],
    tb: [['Situation', 'Utile ?', 'Alternative'], ['Chat attiré par l’eau courante', 'Oui', 'Gamelles'], ['Chat qui boit bien', 'Pas nécessaire', 'Gamelle'], ['Absences fréquentes', 'Peut aider', 'Gamelles multiples']],
    pr: [['Pour privilégier l’entretien', 'Une fontaine facile à démonter.', 'fontaine à eau chat inox'], ['Pour privilégier le silence', 'Une fontaine silencieuse.', 'fontaine à eau chat silencieuse']],
    m: ['Ne pas nettoyer la fontaine.', 'La placer près de la litière.'],
    f: [['Inox, céramique ou plastique ?', 'Inox et céramique se nettoient plus facilement que le plastique.']],
  },

  // ───────────── HARNAIS CHIEN ─────────────
  {
    s: 'quelle-taille-de-harnais-pour-chien', p: 'harnais-chien', t: 'taille',
    h: 'Quelle taille de harnais pour chien ?',
    d: 'Tour de poitrail, tour de cou, poids : comment mesurer son chien pour choisir la bonne taille de harnais.',
    q: 'Mesurez le tour de poitrail juste derrière les pattes avant, puis comparez au tableau de la marque. Un harnais bien réglé laisse passer deux doigts, sans jeu excessif.',
    x: [
      ['Comment mesurer', 'Avec un mètre souple, mesurez le tour de poitrail à l’endroit le plus large, derrière les pattes avant. Mesurez aussi le tour de cou si le modèle l’exige.'],
      ['Se fier au guide de la marque', 'Les tailles S, M, L varient d’une marque à l’autre : utilisez le tableau du fabricant, pas la race.'],
      ['Le bon réglage', 'Deux doigts doivent passer entre le harnais et le corps ; il ne doit pas gêner les mouvements des épaules.'],
    ],
    tb: [['Mesure', 'Où', 'Astuce'], ['Tour de poitrail', 'Derrière les pattes avant', 'Partie la plus large'], ['Tour de cou', 'Base du cou', 'Deux doigts'], ['Poids', 'Balance', 'Indication complémentaire']],
    pr: [['Pour privilégier le confort', 'Un harnais réglable en Y.', 'harnais chien réglable'], ['Pour un chien qui tire', 'Un harnais à attache frontale.', 'harnais chien anti-traction']],
    m: ['Choisir selon la race seulement.', 'Laisser trop de jeu.'],
    f: [['Harnais ou collier ?', 'Le harnais répartit la pression ; demandez conseil à un éducateur si votre chien tire.']],
  },

  // ───────────── PANIER CHIEN ─────────────
  {
    s: 'quelle-taille-de-panier-pour-chien', p: 'panier-chien', t: 'taille',
    h: 'Quelle taille de panier pour chien ?',
    d: 'Mesurer son chien pour choisir la taille du panier : longueur couché, hauteur, position de sommeil et marge de confort.',
    q: 'Mesurez votre chien du nez à la base de la queue, puis ajoutez environ 10 à 15 cm. Adaptez selon sa façon de dormir : étiré ou en boule.',
    x: [
      ['La mesure de base', 'Longueur du nez à la base de la queue, plus une marge de confort.'],
      ['La façon de dormir', 'Un chien qui dort allongé a besoin de plus de longueur ; un chien qui dort en boule se contente d’un panier plus petit avec des rebords.'],
      ['Anticiper la croissance', 'Pour un chiot, choisissez selon la taille adulte.'],
    ],
    tb: [['Position', 'Panier', 'Remarque'], ['Étiré', 'Plus long', 'Prévoir 10-15 cm'], ['En boule', 'Rebords, nid', 'Plus compact'], ['Chiot', 'Taille adulte', 'Housse lavable']],
    pr: [['Pour privilégier le confort', 'Un panier à rebords.', 'panier chien rebords'], ['Pour les grands chiens', 'Un grand coussin.', 'coussin chien grand']],
    m: ['Acheter trop petit.', 'Ignorer la croissance du chiot.'],
    f: [['Quelle matière ?', 'Housse lavable en machine pour faciliter l’entretien.']],
  },

  // ───────────── LITIÈRE ─────────────
  {
    s: 'quelle-litiere-pour-chat-choisir', p: 'litiere', t: 'matiere',
    h: 'Quelle litière pour chat choisir ?',
    d: 'Agglomérante, silice, végétale ou argile : avantages et limites de chaque type de litière pour chat.',
    q: 'L’agglomérante simplifie l’entretien quotidien, la silice absorbe bien les odeurs, la végétale est plus écologique. Choisissez aussi selon la préférence de votre chat et demandez conseil au vétérinaire pour un chaton.',
    x: [
      ['Litière agglomérante', 'Forme des boules faciles à retirer : entretien simple, mais peut être plus poussiéreuse et lourde.'],
      ['Litière de silice', 'Cristaux très absorbants, bonne maîtrise des odeurs, légère.'],
      ['Litière végétale', 'Bois, maïs, papier : plus naturelle, parfois moins absorbante.'],
      ['Litière d’argile non agglomérante', 'Économique mais à changer entièrement, plus souvent.'],
    ],
    tb: [['Type', 'Points forts', 'Limites'], ['Agglomérante', 'Entretien simple', 'Poussière, poids'], ['Silice', 'Odeurs, légèreté', 'Prix'], ['Végétale', 'Naturelle', 'Absorption'], ['Argile', 'Prix', 'Changement fréquent']],
    pr: [['Pour privilégier la simplicité', 'Une litière agglomérante peu poussiéreuse.', 'litière agglomérante chat'], ['Pour privilégier les odeurs', 'Une litière silice.', 'litière silice chat'], ['Pour privilégier le naturel', 'Une litière végétale.', 'litière végétale chat']],
    m: ['Changer de litière brutalement.', 'Choisir sans tenir compte de la préférence du chat.'],
    f: [['Comment changer de litière ?', 'Mélangez progressivement l’ancienne et la nouvelle sur plusieurs jours.']],
  },

  // ───────────── CAISSE DE TRANSPORT ─────────────
  {
    s: 'quelle-taille-de-caisse-de-transport-pour-chat', p: 'caisse-de-transport', t: 'taille',
    h: 'Quelle taille de caisse de transport pour chat ?',
    d: 'Mesurer son chat pour choisir la caisse de transport : espace pour se tenir debout, se retourner, normes des transporteurs.',
    q: 'Le chat doit pouvoir se tenir debout, se retourner et se coucher dans la caisse, sans excès d’espace. Pour un voyage en train ou en avion, vérifiez les dimensions exigées par le transporteur.',
    x: [
      ['Les mesures utiles', 'Longueur du chat (museau à base de la queue), hauteur au garrot, puis une marge raisonnable.'],
      ['Rigide ou souple', 'Rigide : robuste, plus facile à nettoyer. Souple : plus légère, adaptée à certains transports en cabine.'],
      ['Les contraintes de transport', 'Chaque compagnie fixe ses propres dimensions : consultez-les avant d’acheter.'],
    ],
    tb: [['Usage', 'Type', 'À vérifier'], ['Vétérinaire, voiture', 'Rigide', 'Facilité d’ouverture'], ['Train, avion', 'Souple ou rigide homologuée', 'Dimensions du transporteur']],
    pr: [['Pour privilégier la solidité', 'Une caisse rigide à ouverture dessus.', 'caisse de transport chat rigide'], ['Pour voyager', 'Un sac de transport souple.', 'sac de transport chat cabine']],
    m: ['Acheter sans vérifier la compagnie.', 'Choisir trop grand pour une voiture.'],
    f: [['Comment habituer son chat à la caisse ?', 'Laissez-la ouverte à la maison, avec une couverture familière.']],
  },

  // ───────────── DISTRIBUTEUR DE CROQUETTES ─────────────
  {
    s: 'distributeur-de-croquettes-est-ce-utile', p: 'distributeur-de-croquettes', t: 'besoin',
    h: 'Un distributeur de croquettes automatique est-il utile ?',
    d: 'Distributeur de croquettes programmable : avantages, limites, cas où il est utile (absences, rations) et alternatives.',
    q: 'Il est utile pour des repas à heure fixe ou de courtes absences, pas pour de longues absences sans surveillance. Il ne remplace pas la présence ni l’avis du vétérinaire pour les rations.',
    x: [
      ['Les avantages', 'Repas à heures régulières, rations mesurées, utile en cas d’horaires décalés.'],
      ['Les limites', 'Risque de panne ou de blocage, piles ou courant à surveiller, animaux rusés qui forcent le distributeur.'],
      ['Quand c’est pertinent', 'Chat à heure de repas stricte, animal en régime encadré par le vétérinaire, absence d’une journée.'],
      ['Alternatives', 'Gamelle à minuterie, proche qui passe, pet-sitter.'],
    ],
    tb: [['Situation', 'Utile ?', 'Précaution'], ['Repas à heure fixe', 'Oui', 'Vérifier le fonctionnement'], ['Régime encadré', 'Oui', 'Avis vétérinaire'], ['Longue absence', 'Non seul', 'Prévoir une personne']],
    pr: [['Pour privilégier la fiabilité', 'Un distributeur à piles et secteur.', 'distributeur croquettes automatique'], ['Pour privilégier la capacité', 'Un grand réservoir.', 'distributeur croquettes grande capacité']],
    m: ['Partir plusieurs jours sans filet de sécurité.', 'Ne pas tester avant l’absence.'],
    f: [['Combien de repas programmer ?', 'Suivez les recommandations de votre vétérinaire.']],
  },
];

export default guides;
