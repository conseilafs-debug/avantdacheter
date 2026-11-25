import type { RawGuide } from './types';

const guides: RawGuide[] = [
  // ───────────── ASPIRATEUR ─────────────
  {
    s: 'quelle-puissance-pour-un-aspirateur', p: 'aspirateur', t: 'puissance',
    h: 'Quelle puissance pour un aspirateur ?',
    d: 'La puissance en watts ne suffit pas à comparer deux aspirateurs. Découvrez les critères qui comptent vraiment : aspiration, filtration, brosse, autonomie.',
    q: 'Ne choisissez pas un aspirateur sur ses seuls watts : la puissance indiquée est celle du moteur, pas celle du nettoyage. Regardez plutôt la qualité de la brosse, la filtration, le type de sol et, pour un balai sans fil, l’autonomie réelle en mode puissant.',
    x: [
      ['Pourquoi les watts ne comparent pas deux aspirateurs', 'Les watts mesurent la consommation électrique du moteur. Deux appareils de même puissance peuvent aspirer très différemment selon la conception du flux d’air, la brosse et les fuites d’air. En Europe, la puissance des aspirateurs filaires est d’ailleurs plafonnée depuis 2017 : au-delà de ce plafond, les écarts viennent de la conception, pas du moteur.'],
      ['Quels indicateurs regarder à la place', 'Quand ils sont indiqués, l’aspiration (en kPa ou en air watts) donne une meilleure idée que les watts. Pour un balai sans fil, la tension de batterie (V) et la capacité (Ah) comptent, mais surtout l’autonomie en mode puissant, souvent bien inférieure à l’autonomie annoncée en mode éco.'],
      ['Adapter la puissance à vos sols', 'Sur parquet et carrelage, une aspiration modérée avec une bonne brosse suffit. Sur tapis épais ou moquette, une brosse motorisée et une aspiration plus élevée font la différence. Avec des animaux, la brosse anti-emmêlement compte autant que la puissance.'],
      ['Ne pas oublier le bruit et le poids', 'Un appareil très puissant mais lourd ou bruyant sera utilisé moins souvent. Vérifiez le niveau sonore (en dB) et le poids si vous avez des escaliers.'],
    ],
    tb: [['Situation', 'Aspiration à viser', 'À privilégier'], ['Petit logement, sols durs', 'Modérée', 'Légèreté, autonomie, brosse souple'], ['Maison avec tapis', 'Élevée', 'Brosse motorisée, réglage de puissance'], ['Animaux qui perdent des poils', 'Élevée', 'Brosse anti-emmêlement, grand bac'], ['Allergies à la poussière', 'Moyenne à élevée', 'Filtration HEPA, bac étanche']],
    pr: [
      ['Pour privilégier la légèreté', 'Un aspirateur balai léger convient aux petites surfaces et aux sols durs, à condition de vérifier l’autonomie en mode puissant.', 'aspirateur balai léger sans fil'],
      ['Pour privilégier l’aspiration sur tapis', 'Un traîneau filaire avec brosse motorisée et réglage de puissance reste un choix logique pour une maison avec tapis.', 'aspirateur traîneau avec brosse turbo'],
      ['Pour privilégier la filtration', 'Si la poussière vous gêne, ciblez une filtration HEPA et un système bien étanche.', 'aspirateur filtre HEPA'],
    ],
    m: ['Choisir au plus grand nombre de watts.', 'Se fier à l’autonomie maximale annoncée sans regarder celle en mode puissant.', 'Négliger le coût et la disponibilité des filtres et des batteries de rechange.'],
    f: [['Combien de watts faut-il pour un aspirateur ?', 'Il n’y a pas de seuil universel : à puissance égale, les résultats varient fortement. Privilégiez l’aspiration mesurée, la brosse et la filtration.'], ['Un aspirateur sans fil aspire-t-il aussi bien qu’un filaire ?', 'Les meilleurs balais sans fil sont très efficaces au quotidien, mais l’autonomie limite l’usage en mode puissant sur de grandes surfaces.']],
    k: 'watts aspiration kpa balai traineau',
  },
  {
    s: 'que-verifier-avant-d-acheter-un-aspirateur', p: 'aspirateur', t: 'verifier',
    h: 'Que vérifier avant d’acheter un aspirateur ?',
    d: 'Type, sols, bac ou sac, filtration, bruit, autonomie, pièces de rechange : la liste des vérifications utiles avant d’acheter un aspirateur.',
    q: 'Vérifiez d’abord vos sols et la surface à nettoyer, puis le type d’appareil (balai, traîneau, robot), la filtration, le bruit, la facilité de vidage et la disponibilité des pièces (filtres, batterie, brosses).',
    x: [
      ['1. Quels sols et quelle surface ?', 'Sols durs, tapis, moquette ou mélange ? Une grande surface ou des escaliers changent le choix entre traîneau, balai et robot.'],
      ['2. Sac ou sans sac ?', 'Le sans-sac évite l’achat de sacs mais demande de vider et nettoyer le bac. Le sac limite le contact avec la poussière, utile en cas d’allergie.'],
      ['3. Filtration et étanchéité', 'Un filtre HEPA n’a d’intérêt que si l’appareil est étanche : sinon l’air s’échappe par les joints.'],
      ['4. Bruit, poids, rangement', 'Notez le niveau sonore en dB, le poids et l’encombrement, surtout pour un petit logement.'],
      ['5. Pièces de rechange', 'Vérifiez que la batterie, les filtres et les brosses se remplacent et se trouvent facilement.'],
    ],
    tb: [['Point', 'Question à se poser', 'Pourquoi'], ['Type', 'Balai, traîneau ou robot ?', 'Surface et sols'], ['Vidage', 'Bac ou sac ?', 'Praticité, allergies'], ['Brosse', 'Adaptée aux poils ?', 'Entretien'], ['Pièces', 'Rechanges disponibles ?', 'Durée de vie']],
    pr: [
      ['Pour privilégier la simplicité', 'Un balai sans fil se sort et se range vite : idéal pour le quotidien.', 'aspirateur balai sans fil'],
      ['Pour privilégier l’économie', 'Un traîneau avec sac est souvent une solution simple et économique pour un grand ménage régulier.', 'aspirateur traîneau avec sac'],
    ],
    m: ['Acheter sans mesurer l’usage réel (sols, surface, animaux).', 'Oublier le coût des consommables.'],
    f: [['Aspirateur avec ou sans sac ?', 'Sans sac : pas de sacs à racheter. Avec sac : vidage plus propre. Choisissez selon votre sensibilité à la poussière et à l’entretien.'], ['Robot ou aspirateur classique ?', 'Un robot entretient au quotidien mais ne remplace pas toujours un passage manuel dans les recoins et sur les tapis épais.']],
  },
  {
    s: 'quel-aspirateur-pour-poils-de-chat', p: 'aspirateur', t: 'usage',
    h: 'Quel aspirateur pour les poils de chat ?',
    d: 'Brosse anti-emmêlement, grand bac, filtration, accessoires : les critères d’un aspirateur adapté aux poils de chat, par profil d’usage.',
    q: 'Pour les poils de chat, cherchez une brosse qui ne s’emmêle pas, un bac facile à vider, un bon filtre et un petit outil motorisé pour canapé et arbre à chat. La puissance brute compte moins.',
    x: [
      ['La brosse : le critère numéro un', 'Les poils s’enroulent autour des brosses classiques. Une brosse anti-emmêlement (ou un rouleau sans poils) évite de couper les poils avec des ciseaux à chaque passage.'],
      ['Bac, sac et filtration', 'Les poils fins et la litière dispersée encrassent vite les filtres. Un bac facile à vider et un filtre lavable simplifient l’entretien.'],
      ['Les accessoires utiles', 'Une mini-brosse motorisée sert sur le canapé, les coussins, l’arbre à chat. Un suceur plat aide dans les recoins.'],
    ],
    tb: [['Profil', 'Priorité', 'Point de vigilance'], ['Un chat, poil court', 'Aspirateur balai simple', 'Brosse non emmêlante'], ['Plusieurs chats, poil long', 'Grand bac, brosse robuste', 'Vidage fréquent'], ['Canapé et arbre à chat', 'Mini-brosse motorisée', 'Accessoire inclus']],
    pr: [
      ['Pour privilégier le quotidien facile', 'Un balai sans fil avec brosse anti-emmêlement convient à un ou deux chats.', 'aspirateur balai poils animaux brosse anti-emmêlement'],
      ['Pour privilégier la capacité', 'Plusieurs chats ou poil long : un grand bac ou un traîneau à sac évite les vidages incessants.', 'aspirateur poils d’animaux grand bac'],
      ['Pour privilégier les meubles', 'Une mini-brosse motorisée dédiée aux textiles.', 'mini brosse aspirateur poils animaux'],
    ],
    m: ['Acheter un modèle sans brosse adaptée.', 'Oublier l’aspiration des textiles (canapé, couvertures).'],
    f: [['Un robot aspirateur suffit-il pour les poils de chat ?', 'Il aide au quotidien sur sols durs, mais un passage manuel reste utile pour les textiles et les recoins.']],
  },
  {
    s: 'aspirateur-robot-utile-avec-un-chien', p: 'aspirateur', t: 'besoin',
    h: 'Un aspirateur robot est-il utile avec un chien ?',
    d: 'Avantages, limites et alternatives : un aspirateur robot est-il vraiment utile quand on a un chien ? Cas où il est pertinent et cas où il est inutile.',
    q: 'Oui, un robot est utile pour l’entretien quotidien des sols durs avec un chien, mais il ne remplace pas un aspirateur classique pour les textiles et les gros dégâts. Attention aux accidents : un robot peut étaler des déjections.',
    x: [
      ['Quand il est pertinent', 'Sols durs ou tapis ras, poils réguliers, envie d’un passage quotidien automatique : le robot garde la maison propre entre deux grands ménages.'],
      ['Ses limites', 'Capacité du bac limitée, difficulté avec les tapis épais, les franges et les câbles, passage impossible sous certains meubles. Il ne nettoie pas les canapés.'],
      ['Le risque à connaître', 'Un chien qui fait un accident dans la maison peut conduire le robot à étaler les déjections. Programmez-le quand vous êtes là, ou vérifiez si le modèle détecte les obstacles.'],
      ['Alternatives', 'Un aspirateur balai sans fil léger, sorti en deux minutes, couvre aussi les textiles.'],
    ],
    tb: [['Situation', 'Robot utile ?', 'Pourquoi'], ['Sols durs, chien qui perd ses poils', 'Oui', 'Entretien quotidien'], ['Tapis épais et canapés', 'Partiellement', 'Compléter par un balai'], ['Chien sujet aux accidents', 'Avec prudence', 'Risque d’étalement']],
    pr: [
      ['Pour privilégier l’automatisation', 'Un robot avec bac suffisant et brosse adaptée aux poils.', 'robot aspirateur poils d’animaux'],
      ['Pour privilégier la polyvalence', 'Un balai sans fil couvre sols et textiles.', 'aspirateur balai sans fil poils animaux'],
    ],
    m: ['Attendre du robot qu’il remplace tout aspirateur.', 'Le lancer en votre absence avec un chien sujet aux accidents.'],
    f: [['Un robot détecte-t-il les déjections ?', 'Certains modèles disposent d’une détection d’obstacles, mais le fonctionnement varie : vérifiez la fiche produit et les avis récents.']],
  },
  {
    s: 'aspirateur-balai-ou-traineau-lequel-choisir', p: 'aspirateur', t: 'comparaison',
    h: 'Aspirateur balai ou traîneau : lequel choisir ?',
    d: 'Aspirateur balai sans fil ou traîneau filaire : différences d’autonomie, d’aspiration, de rangement et d’usage pour choisir selon votre logement.',
    q: 'Le balai sans fil gagne en praticité pour l’entretien rapide et les petites surfaces. Le traîneau filaire reste plus régulier et souvent plus économique pour de grands ménages, des tapis et un usage intensif.',
    x: [
      ['Aspirateur balai : les points forts', 'Maniable, rapide à sortir, sans câble, facile à ranger, convertible en aspirateur à main.'],
      ['Aspirateur balai : les limites', 'Autonomie limitée en mode puissant, batterie qui vieillit, bac plus petit.'],
      ['Traîneau : les points forts', 'Pas de limite d’autonomie, grande capacité, accessoires variés, souvent plus économique.'],
      ['Traîneau : les limites', 'Câble, encombrement, tuyau à tirer, moins pratique dans un petit espace.'],
    ],
    tb: [['Critère', 'Balai sans fil', 'Traîneau'], ['Autonomie', 'Limitée', 'Illimitée'], ['Rangement', 'Facile', 'Encombrant'], ['Grandes surfaces', 'Moins adapté', 'Adapté'], ['Entretien rapide', 'Excellent', 'Moyen']],
    pr: [
      ['Pour privilégier la praticité', 'Un balai sans fil pour les passages rapides.', 'aspirateur balai sans fil'],
      ['Pour privilégier la capacité', 'Un traîneau pour de grandes surfaces.', 'aspirateur traîneau'],
    ],
    m: ['Choisir un balai pour une grande maison sans batterie de rechange.', 'Sous-estimer l’encombrement d’un traîneau.'],
    f: [['Peut-on n’avoir qu’un seul aspirateur ?', 'Oui, selon la surface : un balai suffit en appartement, un traîneau pour une grande maison.']],
  },

  // ───────────── FRITEUSE À AIR ─────────────
  {
    s: 'quelle-capacite-de-friteuse-a-air-pour-4-personnes', p: 'friteuse-a-air', t: 'capacite',
    h: 'Quelle capacité de friteuse à air pour 4 personnes ?',
    d: 'Pour 4 personnes, quelle capacité de friteuse à air choisir ? Repères en litres, panier ou double bac, encombrement et erreurs à éviter.',
    q: 'Pour 4 personnes, visez en général 5 litres ou plus, ou un modèle à double tiroir. En dessous, vous devrez cuire en plusieurs fournées, ce qui annule le gain de temps.',
    x: [
      ['Les repères de capacité', 'Repères courants : 2 à 3 L pour une ou deux personnes, 4 à 5 L pour deux à trois, 5 à 6 L et plus pour quatre personnes. Les fabricants annoncent des capacités en litres, mais ce qui compte est la surface du panier.'],
      ['Panier unique ou double bac', 'Un double bac permet de cuire deux aliments en même temps, utile pour une famille. Il occupe en revanche plus de place sur le plan de travail.'],
      ['L’encombrement', 'Mesurez la largeur, la profondeur et la hauteur disponibles, en laissant de l’espace derrière pour l’évacuation de l’air chaud.'],
      ['La puissance', 'Une puissance plus élevée aide à monter vite en température, mais ne remplace pas la bonne capacité.'],
    ],
    tb: [['Foyer', 'Capacité conseillée', 'Remarque'], ['1 à 2 personnes', '2 à 4 L', 'Compact'], ['3 personnes', '4 à 5 L', 'Polyvalent'], ['4 personnes', '5 à 6 L et plus', 'Ou double bac'], ['Famille de 5+', '7 L et plus / four', 'Plusieurs plats']],
    pr: [
      ['Pour privilégier la capacité', 'Un grand panier de 6 L ou plus pour cuire une portion familiale en une fois.', 'friteuse à air 6 litres'],
      ['Pour privilégier la polyvalence', 'Un double tiroir pour deux plats simultanés.', 'friteuse à air double tiroir'],
      ['Pour privilégier la compacité', 'Si la place est limitée, un modèle de 4 à 5 L suffit pour 2 à 3 personnes.', 'friteuse à air 4 litres'],
    ],
    m: ['Choisir un modèle de 3 L pour une famille.', 'Oublier la hauteur sous les meubles hauts.'],
    f: [['5 litres suffisent-ils pour 4 personnes ?', 'Pour des portions courantes, c’est souvent juste : un 6 L ou un double tiroir est plus confortable.']],
  },
  {
    s: 'friteuse-a-air-utile-pour-2-personnes', p: 'friteuse-a-air', t: 'besoin',
    h: 'Une friteuse à air est-elle utile pour 2 personnes ?',
    d: 'Faut-il acheter une friteuse à air pour deux ? Avantages, limites, cas où elle est utile ou inutile, et alternatives.',
    q: 'Oui si vous cuisinez souvent de petites portions (frites, nuggets, légumes, restes) : elle chauffe vite. Elle est moins utile si vous avez déjà un four peu gourmand et que vous cuisinez rarement ce type de plats.',
    x: [
      ['Les avantages', 'Préchauffage rapide, cuisson de petites portions, peu ou pas de matière grasse, nettoyage simple du panier.'],
      ['Les limites', 'Capacité limitée, encombrement sur le plan de travail, résultats variables selon les aliments et le remplissage du panier.'],
      ['Quand c’est pertinent', 'Vous mangez souvent des produits surgelés, des légumes rôtis, des restes réchauffés croustillants, ou vous voulez éviter d’allumer le four pour deux.'],
      ['Quand c’est inutile', 'Vous cuisinez peu, manquez de place, ou possédez un four à chaleur tournante récent qui fait déjà l’affaire.'],
    ],
    tb: [['Usage', 'Utile ?', 'Alternative'], ['Frites et surgelés', 'Oui', 'Four'], ['Légumes rôtis', 'Oui', 'Four'], ['Plats mijotés', 'Non', 'Cocotte']],
    pr: [['Pour privilégier la compacité', 'Pour deux, un modèle de 3 à 4 L suffit.', 'friteuse à air 3 litres'], ['Pour privilégier le confort', 'Un modèle de 4 à 5 L permet d’inviter parfois.', 'friteuse à air 4,5 litres']],
    m: ['Surdimensionner pour deux.', 'Remplir le panier jusqu’en haut : l’air doit circuler.'],
    f: [['Consomme-t-elle moins qu’un four ?', 'Elle chauffe un volume réduit, donc elle est souvent plus rapide pour de petites quantités ; le gain dépend de l’usage.']],
  },
  {
    s: 'quels-accessoires-pour-une-friteuse-a-air', p: 'friteuse-a-air', t: 'accessoires',
    h: 'Quels accessoires pour une friteuse à air ?',
    d: 'Papier de cuisson perforé, moule, grille, pinces : quels accessoires de friteuse à air sont indispensables, utiles ou optionnels ?',
    q: 'Rien n’est vraiment indispensable : un papier de cuisson perforé et des pinces suffisent. Une grille étagère et un petit moule deviennent utiles si vous cuisinez souvent.',
    x: [
      ['Indispensable', 'Des pinces adaptées pour retirer les aliments sans abîmer le revêtement ; un papier de cuisson perforé ou des feuilles prévues pour l’appareil.'],
      ['Utile', 'Une grille à étages pour doubler la surface, un moule adapté pour gâteaux et gratins, des brochettes en métal.'],
      ['Optionnel', 'Pique, tapis en silicone, pinceau. Vérifiez la compatibilité avec votre modèle (dimensions, matériaux).'],
    ],
    tb: [['Catégorie', 'Accessoire', 'Pourquoi'], ['Indispensable', 'Pinces, papier perforé', 'Sécurité, nettoyage'], ['Utile', 'Grille, moule', 'Plus de capacité'], ['Optionnel', 'Silicone, brochettes', 'Variété']],
    pr: [['Pour démarrer', 'Un lot d’accessoires de base compatible avec votre capacité.', 'accessoires friteuse à air kit'], ['Pour aller plus loin', 'Une grille à étages.', 'grille friteuse à air étages']],
    m: ['Acheter un kit sans vérifier les dimensions.', 'Utiliser du papier non perforé qui bloque la circulation d’air.'],
    f: [['Peut-on utiliser du papier aluminium ?', 'Selon le fabricant, avec précaution et sans bloquer la circulation d’air : suivez la notice de votre modèle.']],
  },

  // ───────────── MACHINE À CAFÉ ─────────────
  {
    s: 'quelle-machine-a-cafe-pour-deux-personnes', p: 'machine-a-cafe', t: 'usage',
    h: 'Quelle machine à café pour deux personnes ?',
    d: 'Dosettes, capsules, filtre ou grains : quelle machine à café choisir pour deux personnes selon vos habitudes ? Profils d’usage et critères.',
    q: 'Pour deux personnes, choisissez selon votre rythme : capsules ou dosettes pour la rapidité, machine à grains si vous buvez plusieurs cafés par jour et aimez le café frais, cafetière filtre si vous préférez le café long.',
    x: [
      ['Combien de cafés par jour ?', 'Un ou deux cafés par jour : capsules ou dosettes. Quatre cafés ou plus : une machine à grains devient plus économique à l’usage.'],
      ['Quelle boisson buvez-vous ?', 'Expresso, café long, cappuccino : la présence d’une buse vapeur ou d’un système à lait automatique change la machine.'],
      ['L’entretien', 'Les machines à grains demandent un nettoyage régulier et un détartrage. Les capsules sont plus simples mais génèrent des déchets et des coûts à la tasse.'],
      ['L’encombrement', 'Réservoir, bac à grains, bac à marc : prévoyez la place nécessaire sur le plan de travail.'],
    ],
    tb: [['Profil', 'Type conseillé', 'Point fort'], ['Rapidité', 'Capsules / dosettes', 'Simple'], ['Café frais', 'À grains', 'Fraîcheur'], ['Café long', 'Filtre', 'Grand volume'], ['Boissons lactées', 'Buse vapeur / lait auto', 'Variété']],
    pr: [['Pour privilégier la rapidité', 'Une machine à capsules ou dosettes compacte.', 'machine à café dosettes'], ['Pour privilégier le café frais', 'Une machine à grains avec broyeur intégré.', 'machine à café à grains broyeur'], ['Pour privilégier le café long', 'Une cafetière filtre programmable.', 'cafetière filtre programmable']],
    m: ['Oublier le coût à la tasse des capsules.', 'Négliger l’entretien (détartrage).'],
    f: [['Machine à grains ou à capsules pour deux ?', 'Si vous buvez plusieurs cafés par jour, la machine à grains est plus économique à terme ; sinon capsules suffisent.']],
  },
  {
    s: 'quel-budget-pour-une-machine-a-cafe-a-grains', p: 'machine-a-cafe', t: 'budget',
    h: 'Quel budget pour une machine à café à grains ?',
    d: 'Entrée, milieu et haut de gamme : quel budget prévoir pour une machine à café à grains et ce que l’on gagne en payant plus ?',
    q: 'Une machine à grains correcte se situe en général dans une fourchette de plusieurs centaines d’euros. Les prix évoluent : comparez ce que chaque gamme apporte (broyeur, buse lait, réglages) plutôt que le prix seul.',
    x: [
      ['Entrée de gamme', 'Fonctions de base, broyeur plus simple, réglages limités, buse vapeur manuelle. Suffit à un usage modeste.'],
      ['Milieu de gamme', 'Broyeur plus précis, plus de réglages (mouture, dose, température), parfois lait automatique. C’est souvent le meilleur compromis.'],
      ['Gamme supérieure', 'Broyeur haut de gamme, profils d’utilisateurs, écran, système lait avancé. Intéressant pour un usage intensif.'],
      ['Ne pas oublier le coût d’usage', 'Grains, détartrant, filtres à eau : ils pèsent sur le budget total.'],
    ],
    tb: [['Gamme', 'Ce que vous obtenez', 'Pour qui'], ['Entrée', 'Fonctions essentielles', 'Usage occasionnel'], ['Milieu', 'Réglages, lait', 'Usage quotidien'], ['Supérieure', 'Précision, confort', 'Usage intensif']],
    pr: [['Pour privilégier le petit prix', 'Une machine à grains d’entrée de gamme.', 'machine à café grains pas chère'], ['Pour privilégier le confort', 'Un modèle avec lait automatique.', 'machine à café grains lait automatique']],
    m: ['Acheter le prix le plus bas sans regarder le broyeur.', 'Sous-estimer l’entretien.'],
    f: [['Les prix Amazon changent-ils souvent ?', 'Oui : promotions et variations sont fréquentes. Comparez au moment de l’achat.']],
  },
  {
    s: 'que-verifier-avant-d-acheter-une-machine-a-cafe', p: 'machine-a-cafe', t: 'verifier',
    h: 'Que vérifier avant d’acheter une machine à café ?',
    d: 'Réservoir, pression, broyeur, entretien, encombrement, coût à la tasse : les points à vérifier avant d’acheter une machine à café.',
    q: 'Vérifiez le type de machine selon vos habitudes, la capacité du réservoir, la facilité d’entretien et de détartrage, l’encombrement et le coût à la tasse. Ne vous fiez pas qu’à la pression en bars.',
    x: [
      ['1. Type de machine', 'Capsules, dosettes, grains, filtre : le bon choix dépend de vos habitudes et de votre budget d’usage.'],
      ['2. Réservoir et bacs', 'Un réservoir trop petit oblige à remplir souvent ; un bac à marc réduit se vide trop souvent.'],
      ['3. Entretien', 'Détartrage, nettoyage de la buse lait, programme automatique : vérifiez ce que demande la machine.'],
      ['4. Encombrement', 'Mesurez largeur, hauteur (ouverture du couvercle) et accès au réservoir.'],
      ['5. Coût à la tasse', 'Calculez le coût capsule ou grain sur un mois plutôt que le seul prix d’achat.'],
    ],
    tb: [['Point', 'Question', 'Pourquoi'], ['Type', 'Capsule, grains, filtre ?', 'Usage'], ['Entretien', 'Détartrage facile ?', 'Durée de vie'], ['Encombrement', 'Place disponible ?', 'Confort']],
    pr: [['Pour un usage simple', 'Une machine facile à entretenir.', 'machine à café facile à nettoyer'], ['Pour un usage intensif', 'Réservoir et bac de grande capacité.', 'machine à café grand réservoir']],
    m: ['Se concentrer sur la pression en bars.', 'Oublier le détartrage régulier.'],
    f: [['À quelle fréquence détartrer ?', 'Selon la dureté de l’eau et la notice : suivez les indications de l’appareil.']],
  },

  // ───────────── COUETTE ─────────────
  {
    s: 'quelle-taille-de-couette-pour-un-lit-140x190', p: 'couette', t: 'taille',
    h: 'Quelle taille de couette pour un lit 140x190 ?',
    d: 'Pour un lit 140x190, quelle taille de couette choisir ? Tableau des tailles par lit, retombée, cas des couples et housse de couette.',
    q: 'Pour un lit 140x190, choisissez une couette de 200x200 cm. Si vous aimez une retombée généreuse ou dormez à deux sous la même couette, un format plus grand (220x240 cm) est plus enveloppant.',
    x: [
      ['La règle de base', 'La couette doit couvrir le matelas et retomber de chaque côté. Plus la retombée est importante, moins le partenaire tire la couette.'],
      ['Le cas du couple', 'Dans un lit de 140, deux personnes sous une couette de 200x200 se partagent peu de surface. Beaucoup de couples préfèrent deux couettes individuelles ou un format plus large.'],
      ['Penser à la housse', 'Prenez la housse de couette de la même taille que la couette. Une couette trop grande dans une housse trop petite se plisse.'],
    ],
    tb: [['Lit', 'Couette conseillée', 'Remarque'], ['90x190/200', '140x200', 'Standard'], ['140x190/200', '200x200', 'Ou 220x240 plus enveloppant'], ['160x200', '240x220', 'Standard'], ['180x200', '260x240', 'Grand lit']],
    pr: [['Pour privilégier le format standard', 'Une couette 200x200 pour lit 140.', 'couette 200x200'], ['Pour privilégier l’enveloppement', 'Une couette 220x240.', 'couette 220x240']],
    m: ['Acheter 140x200 pour un lit de 140.', 'Ignorer la taille de la housse.'],
    f: [['200x200 ou 220x240 pour un lit 140 ?', '200x200 est le standard ; 220x240 offre une retombée plus généreuse, appréciée par les couples.']],
  },
  {
    s: 'quelle-matiere-de-couette-choisir', p: 'couette', t: 'matiere',
    h: 'Quelle matière de couette choisir ?',
    d: 'Duvet, plumes, synthétique, laine : avantages et limites de chaque garnissage de couette, selon la saison, les allergies et l’entretien.',
    q: 'Le duvet est très chaud et léger mais plus cher. Le synthétique est lavable et pratique, notamment en cas d’allergie. La laine régule bien l’humidité. Choisissez selon la saison, le budget et l’entretien.',
    x: [
      ['Duvet et plumes', 'Très isolants pour leur poids. Demandent un entretien soigné et peuvent convenir moins bien aux personnes allergiques.'],
      ['Synthétique (polyester, microfibre)', 'Lavable en machine, durable, accessible. Un peu moins respirant que les fibres naturelles.'],
      ['Laine', 'Régule bien l’humidité et la température. Plus lourde, entretien spécifique.'],
      ['Chaude, tempérée, légère', 'Choisissez le niveau de chaleur selon votre pièce : une couette légère en été, chaude en hiver, ou un modèle 4 saisons composé de deux couettes.'],
    ],
    tb: [['Matière', 'Points forts', 'Limites'], ['Duvet/plumes', 'Chaleur légère', 'Prix, entretien'], ['Synthétique', 'Lavable, abordable', 'Moins respirant'], ['Laine', 'Régulation', 'Poids, entretien']],
    pr: [['Pour privilégier le lavage facile', 'Une couette synthétique lavable en machine.', 'couette synthétique lavable'], ['Pour privilégier la légèreté', 'Une couette en duvet.', 'couette duvet'], ['Pour toute l’année', 'Une couette 4 saisons.', 'couette 4 saisons']],
    m: ['Choisir une couette trop chaude pour une chambre chauffée.', 'Ignorer les consignes de lavage.'],
    f: [['Quelle couette en cas d’allergie ?', 'Beaucoup optent pour une couette synthétique lavable à haute température ; en cas de doute, demandez conseil à un professionnel de santé.']],
  },

  // ───────────── DÉSHUMIDIFICATEUR ─────────────
  {
    s: 'quelle-capacite-de-deshumidificateur-choisir', p: 'deshumidificateur', t: 'capacite',
    h: 'Quelle capacité de déshumidificateur choisir ?',
    d: 'Litres par 24 h, surface de la pièce, niveau d’humidité : comment choisir la capacité d’un déshumidificateur adapté à votre logement.',
    q: 'Pour une pièce de taille courante légèrement humide, visez 10 à 12 L/24 h. Pour une grande surface ou une humidité marquée, un modèle de 16 L ou plus est plus adapté. Vérifiez les conditions de mesure du fabricant.',
    x: [
      ['Comment est mesurée la capacité', 'Elle est indiquée en litres d’eau extraits par 24 heures, dans des conditions de test chaudes et humides. Dans un logement plus frais, la capacité réelle est inférieure.'],
      ['Les repères de choix', 'Pièce moyenne peu humide : 10 à 12 L/24 h. Grande surface ou forte humidité : 16 L/24 h et plus.'],
      ['Autres critères', 'Réservoir, vidange continue, hygrostat, bruit : en chambre, le niveau sonore est essentiel.'],
    ],
    tb: [['Situation', 'Capacité indicative', 'Remarque'], ['Chambre, petite pièce', '8 à 10 L', 'Bruit à surveiller'], ['Séjour moyen', '10 à 12 L', 'Polyvalent'], ['Grande surface, cave', '16 L et plus', 'Vidange continue']],
    pr: [['Pour privilégier le silence', 'Un modèle silencieux pour chambre.', 'déshumidificateur silencieux chambre'], ['Pour privilégier la capacité', 'Un modèle de 16 L ou plus.', 'déshumidificateur 16 litres']],
    m: ['Se fier uniquement à la capacité maximale.', 'Négliger l’origine de l’humidité (ventilation, infiltration).'],
    f: [['Déshumidificateur compresseur ou à absorption ?', 'Le compresseur convient aux pièces tempérées ; l’absorption fonctionne mieux à basse température mais consomme généralement plus.']],
  },
  {
    s: 'deshumidificateur-utile-dans-une-chambre', p: 'deshumidificateur', t: 'besoin',
    h: 'Un déshumidificateur est-il utile dans une chambre ?',
    d: 'Condensation, moisissures, linge qui sèche : un déshumidificateur est-il utile dans une chambre ? Cas pertinents, limites et alternatives.',
    q: 'Il peut être utile si la chambre présente de la condensation ou de la moisissure malgré l’aération. Traitez d’abord la cause (ventilation, fuite), car l’appareil ne règle pas un problème structurel.',
    x: [
      ['Quand il est pertinent', 'Vitres embuées tous les matins, odeur de renfermé, taches de moisissure, séchage de linge dans la pièce.'],
      ['Ses limites', 'Il consomme de l’électricité, fait du bruit et demande de vider le réservoir. Il ne remplace pas une ventilation correcte.'],
      ['Alternatives', 'Aérer quelques minutes chaque jour, vérifier la ventilation, éviter de sécher le linge en chambre, ou utiliser un absorbeur d’humidité pour une petite pièce.'],
    ],
    tb: [['Situation', 'Utile ?', 'Alternative'], ['Condensation constante', 'Oui', 'Ventilation'], ['Légère humidité', 'Peut-être', 'Absorbeur'], ['Fuite ou infiltration', 'Non seul', 'Réparer']],
    pr: [['Pour privilégier le silence', 'Un modèle conçu pour être silencieux en chambre.', 'déshumidificateur silencieux'], ['Pour une petite pièce', 'Un absorbeur d’humidité.', 'absorbeur d’humidité pièce']],
    m: ['Traiter le symptôme sans chercher la cause.', 'Négliger le bruit en chambre.'],
    f: [['Quel niveau d’humidité viser ?', 'On cite couramment 40 à 60 % comme plage confortable.']],
  },

  // ───────────── CHAUFFAGE D'APPOINT ─────────────
  {
    s: 'quelle-puissance-de-chauffage-d-appoint-par-piece', p: 'chauffage-d-appoint', t: 'puissance',
    h: 'Quelle puissance de chauffage d’appoint selon la pièce ?',
    d: 'Quelle puissance choisir pour un chauffage d’appoint selon la surface et l’isolation ? Repères en watts par m², types et précautions de sécurité.',
    q: 'Comptez en général 60 à 100 W par m², selon l’isolation et la hauteur sous plafond. Une pièce de 15 m² demande donc environ 1 000 à 1 500 W. La puissance seule ne dit pas tout : le type de chauffage compte aussi.',
    x: [
      ['Le calcul de base', 'Surface × 60 à 100 W, du plus isolé au moins isolé. Au-delà, vous surchauffez ; en dessous, le chauffage tournera sans cesse.'],
      ['Les types de chauffage', 'Soufflant : chauffe vite, bruyant. Radiant et infrarouge : chaleur directe. Bain d’huile : chaleur douce. Convecteur : usage général.'],
      ['La sécurité avant tout', 'Choisissez un modèle avec protection anti-surchauffe et anti-basculement. Branchez-le directement sur une prise, jamais sur une multiprise. N’utilisez pas de chauffage à combustion dans une pièce fermée.'],
    ],
    tb: [['Surface', 'Puissance indicative', 'Remarque'], ['10 m²', '600 à 1 000 W', 'Bureau, petite chambre'], ['15 m²', '1 000 à 1 500 W', 'Chambre'], ['20 m²', '1 500 à 2 000 W', 'Séjour'], ['30 m²', '2 000 W et plus', 'Chauffage principal conseillé']],
    pr: [['Pour privilégier la chaleur rapide', 'Un soufflant avec thermostat.', 'chauffage soufflant thermostat'], ['Pour privilégier la chaleur douce', 'Un radiateur à bain d’huile.', 'radiateur bain d’huile'], ['Pour privilégier le silence', 'Un panneau rayonnant ou à inertie.', 'radiateur inertie silencieux']],
    m: ['Brancher un chauffage sur une multiprise.', 'Ignorer l’isolation de la pièce.'],
    f: [['Un chauffage d’appoint consomme-t-il beaucoup ?', 'À puissance élevée et usage prolongé, oui : réservez-le à un usage ponctuel.']],
  },

  // ───────────── NETTOYEUR HAUTE PRESSION ─────────────
  {
    s: 'quelle-puissance-pour-un-nettoyeur-haute-pression', p: 'nettoyeur-haute-pression', t: 'puissance',
    h: 'Quelle puissance pour un nettoyeur haute pression ?',
    d: 'Pression en bars, débit en L/h, puissance en watts : comment choisir un nettoyeur haute pression selon voiture, terrasse ou façade.',
    q: 'Regardez la pression (bars) et le débit (L/h), pas seulement les watts. Un usage occasionnel (voiture, mobilier de jardin) demande un modèle modéré ; terrasses et façades demandent plus de pression et de débit.',
    x: [
      ['Pression et débit : le duo', 'La pression décolle la saleté, le débit l’évacue. À pression égale, un débit supérieur nettoie plus vite.'],
      ['La puissance du moteur', 'Elle conditionne la pression atteignable, mais deux appareils de même puissance n’offrent pas forcément les mêmes performances.'],
      ['Attention aux surfaces fragiles', 'Une pression trop élevée peut abîmer le bois tendre, les joints, la peinture. Utilisez le bon embout et gardez de la distance.'],
    ],
    tb: [['Usage', 'Niveau', 'À regarder'], ['Voiture, vélo, mobilier', 'Modéré', 'Réglage de pression'], ['Terrasse, allée', 'Moyen à élevé', 'Débit, accessoire surfaceur'], ['Façade', 'Élevé', 'Rallonge, lance adaptée']],
    pr: [['Pour privilégier l’usage occasionnel', 'Un nettoyeur compact pour voiture et mobilier.', 'nettoyeur haute pression compact'], ['Pour privilégier les terrasses', 'Un modèle plus puissant avec surfaceur.', 'nettoyeur haute pression surfaceur terrasse']],
    m: ['Utiliser une pression trop forte sur du bois ou une voiture.', 'Oublier le raccordement à un point d’eau suffisant.'],
    f: [['Combien de bars pour une voiture ?', 'Un niveau modéré suffit ; une pression excessive peut abîmer la peinture.']],
  },

  // ───────────── PERCEUSE ─────────────
  {
    s: 'quelle-puissance-pour-une-perceuse', p: 'perceuse', t: 'puissance',
    h: 'Quelle puissance pour une perceuse ?',
    d: 'Filaire ou sans fil, perceuse ou perforateur, volts, couple, batterie : comment choisir la bonne perceuse selon vos travaux.',
    q: 'Pour du bricolage courant (bois, métal léger, petites fixations), une perceuse-visseuse sans fil 18 V suffit. Pour percer régulièrement du béton, il vous faut un perforateur. La puissance en watts n’est pas le seul critère.',
    x: [
      ['Perceuse, visseuse ou perforateur', 'La perceuse-visseuse convient au bois, au métal et au vissage. La perceuse à percussion aide pour la brique. Le perforateur est conçu pour le béton.'],
      ['Sans fil : volts, ampères-heures et couple', 'Plus de volts et un couple élevé donnent plus de force. La capacité de batterie (Ah) détermine l’autonomie. Une seconde batterie évite l’attente.'],
      ['Filaire : une puissance continue', 'Une perceuse filaire est plus économique et ne s’arrête pas, mais elle est moins pratique.'],
      ['Mandrin et vitesse', 'Un mandrin de 13 mm accepte des forets plus grands ; le réglage de vitesse et de couple aide à ne pas abîmer les matériaux.'],
    ],
    tb: [['Travaux', 'Outil conseillé', 'Remarque'], ['Meubles, étagères', 'Perceuse-visseuse 18 V', 'Polyvalent'], ['Brique, parpaing', 'Perceuse à percussion', 'Selon le matériau'], ['Béton', 'Perforateur', 'Mandrin SDS']],
    pr: [['Pour privilégier le bricolage courant', 'Une perceuse-visseuse sans fil avec deux batteries.', 'perceuse visseuse 18V deux batteries'], ['Pour privilégier le béton', 'Un perforateur adapté.', 'perforateur SDS'], ['Pour privilégier le petit budget', 'Une perceuse filaire.', 'perceuse filaire']],
    m: ['Utiliser une perceuse classique sur du béton.', 'Choisir sans penser à l’écosystème de batteries.'],
    f: [['18 V suffit-il ?', 'Pour un usage domestique courant, oui. Les travaux intensifs demandent plus de puissance.']],
  },

  // ───────────── TAILLE-HAIE ─────────────
  {
    s: 'quelle-puissance-pour-un-taille-haie', p: 'taille-haie', t: 'puissance',
    h: 'Quelle puissance pour un taille-haie ?',
    d: 'Électrique, sur batterie ou thermique : puissance, longueur de lame et écartement des dents pour choisir son taille-haie.',
    q: 'Pour une haie de jardin standard, un modèle électrique ou sur batterie avec une lame de 50 à 60 cm convient. Pour une haie dense ou des branches épaisses, il faut plus de puissance et un bon écartement des dents.',
    x: [
      ['Le type d’alimentation', 'Électrique filaire : léger et économique, limité par le câble. Sur batterie : liberté de mouvement, autonomie limitée. Thermique : puissant, plus lourd et bruyant.'],
      ['Longueur de lame et écartement', 'Une lame longue couvre plus de surface mais pèse plus. L’écartement des dents détermine le diamètre des branches coupées.'],
      ['Poids et confort', 'Un appareil trop lourd fatigue vite : pensez à la poignée, aux protections et aux vibrations.'],
    ],
    tb: [['Haie', 'Type conseillé', 'À privilégier'], ['Petite haie, jardin urbain', 'Électrique / batterie', 'Légèreté'], ['Haie longue', 'Batterie + 2e batterie', 'Autonomie'], ['Haie dense, branches épaisses', 'Thermique / puissant', 'Écartement des dents']],
    pr: [['Pour privilégier la légèreté', 'Un taille-haie électrique léger.', 'taille-haie électrique'], ['Pour privilégier la liberté', 'Un taille-haie sur batterie.', 'taille-haie sur batterie'], ['Pour privilégier la puissance', 'Un taille-haie pour haie dense.', 'taille-haie thermique']],
    m: ['Choisir une lame trop courte pour une grande haie.', 'Négliger les équipements de protection.'],
    f: [['Quelle longueur de lame ?', 'Environ 45 à 60 cm pour un jardin standard.']],
  },

  // ───────────── LAMPE ─────────────
  {
    s: 'quelle-lampe-pour-lire-au-lit', p: 'lampe', t: 'usage',
    h: 'Quelle lampe pour lire au lit ?',
    d: 'Température de couleur, lumens, bras orientable, variateur : comment choisir une lampe de lecture pour le lit sans gêner son partenaire.',
    q: 'Choisissez une lumière chaude (environ 2 700 à 3 000 K), orientable et réglable en intensité. Quelques centaines de lumens suffisent pour lire sans éblouir ni gêner votre partenaire.',
    x: [
      ['La température de couleur', 'Une lumière chaude favorise l’endormissement ; une lumière plus froide fatigue davantage le soir.'],
      ['L’intensité', 'Pour la lecture, quelques centaines de lumens suffisent. Un variateur permet d’adapter.'],
      ['L’orientation', 'Un bras flexible, une pince de tête de lit ou une applique orientable dirige la lumière sur la page.'],
      ['Alimentation', 'Secteur, USB ou rechargeable : une lampe rechargeable évite le câble.'],
    ],
    tb: [['Profil', 'Type de lampe', 'Point fort'], ['Lire seul(e)', 'Lampe de chevet orientable', 'Confort'], ['Dormir à deux', 'Applique orientable ou pince', 'Faisceau dirigé'], ['Sans prise', 'Lampe rechargeable', 'Sans fil']],
    pr: [['Pour privilégier le confort', 'Une lampe de chevet réglable.', 'lampe de chevet variateur lumière chaude'], ['Pour ne pas gêner', 'Une lampe à pince.', 'lampe de lecture à pince lit'], ['Pour privilégier la liberté', 'Une lampe rechargeable.', 'lampe de lecture rechargeable']],
    m: ['Choisir une lumière trop froide.', 'Prendre une lampe non orientable.'],
    f: [['Lampe LED ou halogène ?', 'La LED consomme moins et chauffe peu, et se décline en lumière chaude.']],
  },

  // ───────────── TAPIS ─────────────
  {
    s: 'quelle-taille-de-tapis-pour-un-salon', p: 'tapis', t: 'taille',
    h: 'Quelle taille de tapis pour un salon ?',
    d: 'Comment choisir la taille d’un tapis de salon : repères selon le canapé, la table basse et la pièce, avec tableau de formats courants.',
    q: 'Le tapis doit être assez grand pour que les pieds avant des fauteuils et du canapé reposent dessus. Pour un salon courant, un format de 160x230 cm à 200x290 cm convient le plus souvent.',
    x: [
      ['Partir des meubles', 'Idéalement, les pieds avant du canapé et des fauteuils sont sur le tapis, qui dépasse légèrement des côtés de la table basse.'],
      ['Garder une bordure libre', 'Laissez environ 20 à 30 cm de sol visible entre le tapis et les murs pour donner de l’air à la pièce.'],
      ['Tapis sous une table à manger', 'Il doit dépasser de la table d’environ 50 à 60 cm de chaque côté pour que les chaises restent dessus quand on les recule.'],
    ],
    tb: [['Pièce', 'Format courant', 'Remarque'], ['Petit salon', '120x170 à 160x230 cm', 'Sous la table basse'], ['Salon moyen', '160x230 à 200x290 cm', 'Pieds avant dessus'], ['Grand salon', '240x340 cm', 'Zone complète']],
    pr: [['Pour privilégier le petit espace', 'Un tapis de 160x230 cm.', 'tapis 160x230'], ['Pour un grand salon', 'Un tapis de 200x290 cm.', 'tapis 200x290']],
    m: ['Choisir un tapis trop petit qui flotte au centre.', 'Oublier l’antidérapant.'],
    f: [['Quel format pour un petit salon ?', '160x230 cm est un bon point de départ.']],
  },
];

export default guides;
