import type { RawGuide } from './types';

const guides: RawGuide[] = [
  // ───────────── POUSSETTE ─────────────
  {
    s: 'poussette-canne-ou-compacte-laquelle-choisir', p: 'poussette', t: 'comparaison',
    h: 'Poussette canne ou poussette multi-positions : laquelle choisir ?',
    d: 'Poussette canne, compacte ou multi-positions : âge de l’enfant, poids, pliage, usage urbain ou voiture pour choisir sans se tromper.',
    q: 'La poussette canne est légère et compacte, mais convient à un enfant qui tient assis. Une poussette multi-positions accompagne le bébé dès la naissance, au prix d’un poids et d’un encombrement plus importants.',
    x: [
      ['Poussette canne', 'Légère et facile à plier, idéale en ville et en transports. Convient en général à partir de l’âge où l’enfant tient assis, selon la notice.'],
      ['Poussette multi-positions', 'Dossier inclinable, parfois allongé, utilisable plus tôt et plus longtemps. Plus lourde et plus volumineuse.'],
      ['Comment choisir', 'Âge de l’enfant, usage (ville, campagne, voiture), place dans le coffre et logement (ascenseur, escalier).'],
    ],
    tb: [['Profil', 'Poussette conseillée', 'À privilégier'], ['Bébé de quelques mois', 'Multi-positions', 'Position allongée'], ['Enfant qui marche', 'Canne', 'Légèreté'], ['Beaucoup de transports', 'Compacte', 'Pliage rapide']],
    pr: [['Pour privilégier la légèreté', 'Une poussette canne.', 'poussette canne légère'], ['Pour privilégier la polyvalence', 'Une poussette multi-positions.', 'poussette compacte multi-positions'], ['Pour voyager', 'Une poussette cabine.', 'poussette cabine compacte']],
    m: ['Acheter une canne pour un très jeune bébé.', 'Oublier le poids de la poussette pliée.'],
    f: [['À quel âge utiliser une poussette canne ?', 'Suivez l’âge et le poids indiqués par le fabricant dans la notice.']],
  },
  {
    s: 'que-verifier-avant-d-acheter-une-poussette', p: 'poussette', t: 'verifier',
    h: 'Que vérifier avant d’acheter une poussette ?',
    d: 'Âge, poids, pliage, harnais, freins, maniabilité : les points à vérifier avant d’acheter une poussette.',
    q: 'Vérifiez l’âge d’utilisation, le poids de la poussette, le pliage à une main, le harnais, les freins et la maniabilité sur vos trajets habituels.',
    x: [
      ['1. L’âge et le poids de l’enfant', 'Compatibilité avec la notice du fabricant.'],
      ['2. Le pliage', 'Essayez de la plier d’une main, bébé dans l’autre bras.'],
      ['3. Le harnais et les freins', 'Harnais 5 points, freins fiables et accessibles.'],
      ['4. La maniabilité', 'Roues adaptées à vos trottoirs et chemins.'],
      ['5. Le poids et le coffre', 'Mesurez votre coffre et pensez aux escaliers.'],
    ],
    tb: [['Point', 'Question', 'Pourquoi'], ['Pliage', 'Une main ?', 'Praticité'], ['Roues', 'Adaptées ?', 'Terrain'], ['Poids', 'Combien ?', 'Escaliers']],
    pr: [['Pour la ville', 'Une poussette maniable.', 'poussette ville légère'], ['Pour les chemins', 'Une poussette à grandes roues.', 'poussette tout terrain']],
    m: ['Ne pas essayer le pliage.', 'Oublier les escaliers.'],
    f: [['Faut-il essayer en magasin ?', 'C’est recommandé pour tester le pliage et la maniabilité.']],
  },

  // ───────────── SIÈGE AUTO ─────────────
  {
    s: 'quel-siege-auto-choisir-selon-la-taille-de-l-enfant', p: 'siege-auto', t: 'taille',
    h: 'Quel siège auto choisir selon la taille de l’enfant ?',
    d: 'Normes R129 (i-Size) et R44, taille, poids, dos à la route, rehausseur : comment choisir un siège auto adapté à l’âge et à la taille de l’enfant.',
    q: 'Choisissez un siège homologué adapté à la taille (norme R129 i-Size) ou au poids (norme R44) de l’enfant. Les sièges i-Size imposent le dos à la route au moins jusqu’à 15 mois. En France, un dispositif adapté est obligatoire jusqu’à 10 ans.',
    x: [
      ['Deux normes en vigueur', 'La norme R129 (i-Size) classe les sièges par taille de l’enfant. La norme R44/04 les classe par groupes de poids. Les deux sont homologuées.'],
      ['Le dos à la route', 'Les sièges i-Size imposent le dos à la route au moins jusqu’à 15 mois. Prolonger cette position est généralement recommandé tant que le siège le permet.'],
      ['Du siège au rehausseur', 'Après le siège coque, le siège avec harnais puis le rehausseur prennent le relais selon la taille et le poids.'],
      ['Compatibilité avec le véhicule', 'Vérifiez que le siège est compatible avec votre voiture (ISOFIX, ceinture) via la liste du fabricant.'],
    ],
    tb: [['Âge / taille indicatifs', 'Type de siège', 'Remarque'], ['Naissance, petits bébés', 'Coque dos à la route', 'Selon taille et poids'], ['Petite enfance', 'Siège évolutif', 'Dos à la route conseillé'], ['Enfant plus grand', 'Siège avec harnais ou rehausseur', 'Selon la taille']],
    pr: [['Pour privilégier la durée d’usage', 'Un siège évolutif i-Size.', 'siège auto i-Size évolutif'], ['Pour la sécurité', 'Un siège dos à la route prolongé.', 'siège auto pivotant dos à la route'], ['Pour un enfant plus grand', 'Un rehausseur homologué.', 'rehausseur voiture enfant']],
    m: ['Acheter sans vérifier la compatibilité voiture.', 'Passer trop tôt face à la route.'],
    f: [['i-Size ou R44 ?', 'Les deux sont homologués. L’i-Size, basé sur la taille, est plus simple à lire.']],
  },
  {
    s: 'que-verifier-avant-d-acheter-un-siege-auto', p: 'siege-auto', t: 'verifier',
    h: 'Que vérifier avant d’acheter un siège auto ?',
    d: 'Homologation, compatibilité véhicule, ISOFIX, taille, installation : les points à vérifier avant d’acheter un siège auto.',
    q: 'Vérifiez l’homologation (R129 ou R44/04), la compatibilité avec votre voiture, la méthode de fixation (ISOFIX ou ceinture) et la taille de l’enfant. Évitez le siège d’occasion dont vous ne connaissez pas l’historique.',
    x: [
      ['1. L’homologation', 'Étiquette orange avec marquage ECE R129 ou R44/04.'],
      ['2. La compatibilité', 'La liste de compatibilité du fabricant précise les voitures acceptées.'],
      ['3. La fixation', 'ISOFIX : plus simple. Ceinture : plus universelle. Suivez la notice.'],
      ['4. La taille', 'Le siège doit convenir à la taille et au poids de l’enfant.'],
      ['5. L’état', 'Un siège ayant subi un choc doit être remplacé.'],
    ],
    tb: [['Point', 'Question', 'Pourquoi'], ['Homologation', 'R129 / R44 ?', 'Légalité'], ['Fixation', 'ISOFIX / ceinture ?', 'Installation'], ['État', 'Neuf ?', 'Sécurité']],
    pr: [['Pour une installation simple', 'Un siège ISOFIX.', 'siège auto ISOFIX'], ['Pour la polyvalence', 'Un siège compatible ceinture.', 'siège auto fixation ceinture']],
    m: ['Mal installer le siège.', 'Acheter d’occasion sans historique.'],
    f: [['Où vérifier l’installation ?', 'Certains points de vente et associations proposent un contrôle.']],
  },

  // ───────────── CARTABLE ─────────────
  {
    s: 'quelle-capacite-de-cartable-selon-l-age', p: 'cartable', t: 'capacite',
    h: 'Quelle capacité de cartable selon l’âge ?',
    d: 'Maternelle, primaire, collège : quelle capacité de cartable choisir en litres, et quel poids maximum pour le dos de l’enfant ?',
    q: 'Environ 8 à 12 L en maternelle, 15 à 20 L en CP-CE1, 20 à 25 L du CE2 au CM2, 20 à 30 L au collège. Le poids chargé ne devrait pas dépasser environ 10 à 15 % du poids de l’enfant.',
    x: [
      ['Les repères par âge', 'Maternelle : un petit sac pour le goûter et un doudou. Primaire : cahiers, trousse, livres. Collège : classeurs, livres, matériel de sport.'],
      ['Le poids avant tout', 'On recommande souvent de ne pas dépasser 10 à 15 % du poids de l’enfant. Un sac trop grand incite à trop charger.'],
      ['Le format', 'Il doit contenir un classeur ou un cahier grand format sans plier les feuilles.'],
    ],
    tb: [['Niveau', 'Capacité indicative', 'Remarque'], ['Maternelle', '8 à 12 L', 'Léger'], ['CP-CE1', '15 à 20 L', 'Dos adapté'], ['CE2-CM2', '20 à 25 L', 'Format A4'], ['Collège', '20 à 30 L', 'Classeurs']],
    pr: [['Pour la maternelle', 'Un petit sac à dos.', 'sac à dos maternelle'], ['Pour le primaire', 'Un cartable ergonomique.', 'cartable primaire ergonomique'], ['Pour le collège', 'Un sac à dos 25 à 30 L.', 'sac à dos collège']],
    m: ['Acheter trop grand pour que ça dure.', 'Ne pas vérifier le poids à vide.'],
    f: [['Sac à dos ou cartable à roulettes ?', 'Les roulettes soulagent le dos mais compliquent escaliers et transports.']],
  },
  {
    s: 'que-verifier-avant-d-acheter-un-cartable', p: 'cartable', t: 'verifier',
    h: 'Que vérifier avant d’acheter un cartable ?',
    d: 'Poids à vide, dos, bretelles, ceinture, format, solidité : les points à vérifier avant d’acheter un cartable ou un sac d’école.',
    q: 'Vérifiez le poids à vide, un dos rembourré, des bretelles larges et réglables, une ceinture ventrale pour les plus grands et un format adapté aux cahiers.',
    x: [
      ['1. Le poids à vide', 'Un sac léger laisse plus de marge pour les affaires.'],
      ['2. Le dos et les bretelles', 'Dos rembourré, bretelles larges, réglables en hauteur.'],
      ['3. Le format', 'Peut-il contenir un classeur sans le plier ?'],
      ['4. Les rangements', 'Compartiments pour trousse, bouteille, goûter.'],
      ['5. La solidité', 'Coutures, fermetures éclair, fond renforcé.'],
    ],
    tb: [['Point', 'Question', 'Pourquoi'], ['Poids à vide', 'Combien ?', 'Charge totale'], ['Bretelles', 'Larges, réglables ?', 'Confort'], ['Fond', 'Renforcé ?', 'Durabilité']],
    pr: [['Pour le confort', 'Un cartable à dos ergonomique.', 'cartable dos ergonomique'], ['Pour la robustesse', 'Un sac renforcé.', 'sac à dos école robuste']],
    m: ['Choisir sur le personnage plutôt que sur le confort.', 'Négliger le réglage des bretelles.'],
    f: [['Comment bien porter le cartable ?', 'Bretelles réglées pour que le sac reste haut et près du dos.']],
  },

  // ───────────── LIT BÉBÉ ─────────────
  {
    s: 'quelle-taille-de-lit-bebe-choisir', p: 'lit-bebe', t: 'taille',
    h: 'Quelle taille de lit bébé choisir ?',
    d: 'Dimensions standard des lits bébé (60x120, 70x140), matelas adapté, sécurité et durée d’utilisation.',
    q: 'Les deux formats courants sont 60 x 120 cm et 70 x 140 cm. Le second dure plus longtemps. Le matelas doit être ferme et parfaitement ajusté, sans espace important sur les côtés.',
    x: [
      ['60 x 120 cm', 'Format le plus répandu, compact, adapté jusqu’à environ 3 ans.'],
      ['70 x 140 cm', 'Plus grand, il peut servir plus longtemps. Plus encombrant.'],
      ['Le matelas', 'Ferme, aux dimensions exactes du lit : un espace trop grand entre le matelas et les côtés est un risque.'],
      ['Les normes', 'Vérifiez la conformité du lit et du matelas aux normes de sécurité pour les lits d’enfant.'],
    ],
    tb: [['Format', 'Avantage', 'Limite'], ['60 x 120 cm', 'Compact', 'Durée plus courte'], ['70 x 140 cm', 'Plus durable', 'Encombrement']],
    pr: [['Pour privilégier la compacité', 'Un lit 60 x 120 cm.', 'lit bébé 60x120'], ['Pour privilégier la durée', 'Un lit évolutif 70 x 140 cm.', 'lit bébé évolutif 70x140'], ['Pour le matelas', 'Un matelas bébé ferme.', 'matelas bébé 60x120']],
    m: ['Choisir un matelas trop petit.', 'Ajouter des objets dans le lit.'],
    f: [['Lit à barreaux ou en bois plein ?', 'Vérifiez l’écartement des barreaux et les normes de sécurité.']],
  },

  // ───────────── RANGEMENT DE JOUETS ─────────────
  {
    s: 'quelle-capacite-de-coffre-a-jouets-choisir', p: 'rangement-jouets', t: 'capacite',
    h: 'Quelle capacité de rangement pour les jouets ?',
    d: 'Coffre, bacs, étagères : quelle capacité de rangement choisir pour les jouets selon l’âge et le nombre d’enfants.',
    q: 'Pour un enfant, un coffre ou des bacs de 40 à 60 L suffisent ; pour deux enfants ou beaucoup de jouets, prévoyez 80 L et plus ou plusieurs bacs. Privilégiez des bacs accessibles aux enfants et un couvercle sûr.',
    x: [
      ['Selon le nombre d’enfants', 'Plus d’enfants et d’âges différents, plus il faut de volume et de séparation (petits jouets, grandes pièces).'],
      ['Bacs ou coffre', 'Les bacs permettent de trier et d’alterner les jouets. Un coffre est pratique pour les gros objets.'],
      ['La sécurité', 'Évitez les couvercles lourds qui peuvent retomber sur les mains : charnières de sécurité recommandées.'],
    ],
    tb: [['Situation', 'Capacité', 'Type'], ['Un enfant', '40 à 60 L', 'Bacs ou coffre'], ['Deux enfants', '80 L et plus', 'Plusieurs bacs'], ['Petits jouets', 'Petits bacs', 'Tri']],
    pr: [['Pour privilégier l’organisation', 'Des bacs de rangement.', 'bacs de rangement jouets enfant'], ['Pour la capacité', 'Un coffre à jouets.', 'coffre à jouets avec charnière sécurité']],
    m: ['Choisir un coffre avec couvercle lourd.', 'Mélanger tous les jouets.'],
    f: [['Comment faire participer l’enfant au rangement ?', 'Des bacs accessibles et identifiés par pictogramme.']],
  },

  // ───────────── VÉLO ENFANT ─────────────
  {
    s: 'quelle-taille-de-velo-enfant-choisir', p: 'velo-enfant', t: 'taille',
    h: 'Quelle taille de vélo enfant choisir ?',
    d: 'Diamètre de roue (12, 14, 16, 20, 24 pouces) selon la taille de l’enfant : tableau de repères indicatifs et conseils d’essayage.',
    q: 'On choisit la taille de roue selon la taille de l’enfant : environ 12" vers 85-100 cm, 16" vers 105-120 cm, 20" vers 115-130 cm, 24" vers 125-145 cm. Il doit toucher le sol des pieds sur la selle.',
    x: [
      ['La roue plutôt que l’âge', 'Les enfants grandissent à des rythmes différents : la taille compte plus que l’âge.'],
      ['Le test du pied à terre', 'L’enfant assis sur la selle doit pouvoir poser au moins la pointe des pieds au sol.'],
      ['Ne pas acheter trop grand', 'Un vélo trop grand est difficile à contrôler et dangereux. Mieux vaut un vélo à selle réglable.'],
      ['Équipements', 'Casque, freins adaptés, sonnette : voir nos guides vélo.'],
    ],
    tb: [['Taille de l’enfant (indicatif)', 'Roue', 'Remarque'], ['85 à 100 cm', '12"', 'Débutant'], ['95 à 110 cm', '14"', 'Intermédiaire'], ['105 à 120 cm', '16"', 'Stabilisateurs possibles'], ['115 à 130 cm', '20"', 'Vitesses'], ['125 à 145 cm', '24"', 'Grand enfant']],
    pr: [['Pour débuter', 'Un vélo 12 ou 14 pouces.', 'vélo enfant 14 pouces'], ['Pour grandir', 'Un vélo 16 ou 20 pouces.', 'vélo enfant 16 pouces'], ['Pour apprendre l’équilibre', 'Une draisienne.', 'draisienne enfant']],
    m: ['Acheter plus grand « pour qu’il grandisse ».', 'Oublier le casque.'],
    f: [['À quel âge enlever les stabilisateurs ?', 'Quand l’enfant a acquis l’équilibre ; une draisienne aide à l’apprendre.']],
  },

  // ───────────── CHAISE HAUTE ─────────────
  {
    s: 'chaise-haute-bebe-est-ce-utile', p: 'chaise-haute', t: 'besoin',
    h: 'Une chaise haute pour bébé est-elle utile ?',
    d: 'Chaise haute : avantages, limites, âge d’utilisation, alternatives (rehausseur) et critères de sécurité.',
    q: 'Elle est utile quand l’enfant tient assis seul et partage les repas : elle sécurise et facilite le nettoyage. Un rehausseur peut la remplacer si la place manque.',
    x: [
      ['Les avantages', 'Position stable à table, harnais, plateau facile à nettoyer, enfant intégré au repas.'],
      ['Les limites', 'Encombrement, nettoyage, utilisation limitée dans le temps.'],
      ['Alternatives', 'Rehausseur sur une chaise, chaise évolutive.'],
      ['Sécurité', 'Harnais 5 points, stabilité, pas de petites pièces détachables.'],
    ],
    tb: [['Situation', 'Utile ?', 'Alternative'], ['Repas à table en famille', 'Oui', 'Rehausseur'], ['Petit espace', 'Pas toujours', 'Chaise pliante'], ['Enfant qui ne tient pas assis', 'Pas encore', 'Transat']],
    pr: [['Pour privilégier l’évolutivité', 'Une chaise haute évolutive.', 'chaise haute bébé évolutive'], ['Pour gagner de la place', 'Un rehausseur.', 'rehausseur de chaise bébé']],
    m: ['Laisser l’enfant sans surveillance.', 'Négliger le harnais.'],
    f: [['À partir de quel âge ?', 'Quand l’enfant tient assis seul, selon la notice du fabricant.']],
  },
];

export default guides;
