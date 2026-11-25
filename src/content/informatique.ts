import type { RawGuide } from './types';

const guides: RawGuide[] = [
  // ───────────── CHAISE DE BUREAU ─────────────
  {
    s: 'quelle-chaise-de-bureau-pour-teletravailler', p: 'chaise-de-bureau', t: 'usage',
    h: 'Quelle chaise de bureau pour télétravailler ?',
    d: 'Réglages, soutien lombaire, assise, accoudoirs, matière : comment choisir une chaise de bureau pour travailler plusieurs heures par jour.',
    q: 'Pour travailler plusieurs heures, privilégiez une chaise réglable en hauteur, avec un dossier qui soutient le bas du dos, une assise de profondeur ajustable et des accoudoirs réglables. Le confort se juge sur la durée.',
    x: [
      ['Les réglages essentiels', 'Hauteur d’assise, inclinaison du dossier, accoudoirs réglables, et si possible profondeur d’assise : ils permettent d’adapter la chaise à votre morphologie.'],
      ['Soutien lombaire', 'Le dossier doit épouser la courbure du bas du dos. Un soutien lombaire réglable est un vrai plus.'],
      ['Assise et matière', 'Une mousse dense reste confortable plus longtemps. La maille respire mieux l’été ; le tissu est plus doux ; le simili peut chauffer.'],
      ['Poids et gabarit', 'Vérifiez la charge maximale et la taille d’assise annoncées.'],
    ],
    tb: [['Profil', 'Chaise adaptée', 'À privilégier'], ['4 à 8 h par jour', 'Chaise ergonomique réglable', 'Lombaires, réglages'], ['Usage occasionnel', 'Chaise simple confortable', 'Prix, hauteur'], ['Chaleur', 'Dossier maille', 'Respirabilité']],
    pr: [['Pour privilégier le budget', 'Une chaise réglable d’entrée de gamme.', 'chaise de bureau ergonomique pas chère'], ['Pour privilégier le dos', 'Une chaise avec soutien lombaire réglable.', 'chaise de bureau soutien lombaire réglable'], ['Pour privilégier la fraîcheur', 'Une chaise à dossier maille.', 'chaise de bureau dossier maille']],
    m: ['Choisir sur l’esthétique.', 'Ignorer les réglages de hauteur et de profondeur.'],
    f: [['Quelle chaise de bureau choisir pour le mal de dos ?', 'Aucune chaise ne remplace des pauses et du mouvement. En cas de douleur, demandez l’avis d’un professionnel de santé.']],
  },
  {
    s: 'que-verifier-avant-d-acheter-une-chaise-de-bureau', p: 'chaise-de-bureau', t: 'verifier',
    h: 'Que vérifier avant d’acheter une chaise de bureau ?',
    d: 'Réglages, charge maximale, norme, roulettes, matière, garantie : les points à vérifier avant d’acheter une chaise de bureau.',
    q: 'Vérifiez les réglages disponibles, la charge maximale, la hauteur et la profondeur d’assise, la qualité du vérin (certification) et la garantie. Si possible, essayez-la avant de l’acheter.',
    x: [
      ['1. Les réglages', 'Hauteur, dossier, accoudoirs, inclinaison : plus ils sont nombreux, plus la chaise s’adapte.'],
      ['2. La charge maximale', 'Annoncée par le fabricant : respectez-la.'],
      ['3. Le vérin et la structure', 'Un vérin conforme aux normes de sécurité et un piètement solide.'],
      ['4. Les roulettes', 'Adaptées à votre sol : des roulettes souples protègent parquet et carrelage.'],
      ['5. La garantie', 'La durée et ce qu’elle couvre.'],
    ],
    tb: [['Point', 'Question', 'Pourquoi'], ['Réglages', 'Lesquels ?', 'Ergonomie'], ['Charge', 'Combien de kg ?', 'Sécurité'], ['Roulettes', 'Adaptées au sol ?', 'Protection']],
    pr: [['Pour un usage quotidien', 'Une chaise réglable robuste.', 'chaise de bureau réglable robuste'], ['Pour protéger le sol', 'Des roulettes pour parquet.', 'roulettes chaise de bureau parquet']],
    m: ['Acheter sans connaître sa morphologie.', 'Oublier le sol.'],
    f: [['Faut-il essayer avant d’acheter ?', 'Si possible oui ; sinon vérifiez la politique de retour.']],
  },
  {
    s: 'quel-budget-pour-une-chaise-de-bureau', p: 'chaise-de-bureau', t: 'budget',
    h: 'Quel budget prévoir pour une chaise de bureau ?',
    d: 'Entrée, milieu et haut de gamme : ce que l’on gagne en payant plus pour une chaise de bureau selon l’usage.',
    q: 'Pour un usage de plusieurs heures par jour, évitez le tout premier prix : les réglages, la mousse et le vérin font la durabilité. Pour un usage occasionnel, l’entrée de gamme suffit.',
    x: [
      ['Entrée de gamme', 'Réglages limités, mousse qui s’affaisse plus vite, convient à un usage ponctuel.'],
      ['Milieu de gamme', 'Réglages plus nombreux, meilleur soutien lombaire, construction plus solide. Bon choix pour le télétravail.'],
      ['Gamme supérieure', 'Réglages fins, matériaux premium, garanties longues. Pertinent pour 8 h par jour.'],
    ],
    tb: [['Gamme', 'Usage', 'À vérifier'], ['Entrée', 'Occasionnel', 'Réglage hauteur'], ['Milieu', 'Télétravail', 'Lombaires'], ['Supérieure', 'Intensif', 'Garantie']],
    pr: [['Pour privilégier le petit prix', 'Une chaise simple.', 'chaise de bureau pas chère'], ['Pour privilégier la durée', 'Une chaise ergonomique de milieu de gamme.', 'chaise de bureau ergonomique']],
    m: ['Rogner sur la chaise quand on travaille tous les jours.', 'Oublier la garantie.'],
    f: [['Combien de temps dure une chaise de bureau ?', 'Selon l’usage et la qualité : la mousse et le vérin sont les premiers éléments à vieillir.']],
  },
  {
    s: 'quelle-matiere-de-chaise-de-bureau-choisir', p: 'chaise-de-bureau', t: 'matiere',
    h: 'Quelle matière de chaise de bureau choisir ?',
    d: 'Maille, tissu, simili cuir ou cuir : avantages et limites de chaque matière de chaise de bureau.',
    q: 'La maille respire le mieux, le tissu est confortable et doux, le simili cuir est facile à nettoyer mais peut chauffer. Choisissez selon votre climat et la durée d’utilisation.',
    x: [
      ['Maille (mesh)', 'Très respirante, idéale en été et pour de longues journées. Moins moelleuse.'],
      ['Tissu', 'Confortable et agréable au toucher. Se tache plus facilement.'],
      ['Simili cuir', 'Facile à essuyer, aspect soigné. Moins respirant, peut s’écailler avec le temps.'],
      ['Cuir', 'Durable et élégant, plus cher.'],
    ],
    tb: [['Matière', 'Points forts', 'Limites'], ['Maille', 'Respirante', 'Moins moelleuse'], ['Tissu', 'Confort', 'Taches'], ['Simili', 'Entretien', 'Chaleur'], ['Cuir', 'Durable', 'Prix']],
    pr: [['Pour privilégier la fraîcheur', 'Une chaise en maille.', 'chaise de bureau maille'], ['Pour privilégier le confort', 'Une chaise en tissu.', 'chaise de bureau tissu']],
    m: ['Choisir du simili pour une pièce chaude.', 'Ne pas tester l’assise.'],
    f: [['Quelle matière en été ?', 'La maille, plus respirante.']],
  },

  // ───────────── ÉCRAN ─────────────
  {
    s: 'quelle-taille-d-ecran-pour-un-bureau', p: 'ecran', t: 'taille',
    h: 'Quelle taille d’écran choisir pour un bureau ?',
    d: 'Pouces, résolution, distance de vision, profondeur du bureau : comment choisir la taille d’un écran d’ordinateur selon votre usage.',
    q: 'Pour un bureau classique, 24 pouces en Full HD ou 27 pouces en QHD sont les repères les plus courants. Au-delà, vérifiez la profondeur de votre bureau et la résolution pour garder une image nette.',
    x: [
      ['Taille et résolution vont ensemble', 'Un écran plus grand demande une résolution plus élevée pour rester net : 24 pouces en 1920x1080, 27 pouces en 2560x1440, 32 pouces et plus en 4K.'],
      ['La distance de vision', 'Vous devez voir l’écran sans tourner la tête. Un bureau de 70 à 80 cm de profondeur convient bien aux écrans de 27 pouces.'],
      ['Un ou deux écrans', 'Deux écrans de 24 pouces offrent plus d’espace qu’un seul écran de 27 pouces, mais occupent plus de largeur.'],
    ],
    tb: [['Usage', 'Taille', 'Résolution'], ['Bureautique', '24 pouces', 'Full HD'], ['Télétravail polyvalent', '27 pouces', 'QHD'], ['Création, multitâche', '32 pouces et plus', '4K']],
    pr: [['Pour privilégier le budget', 'Un 24 pouces Full HD.', 'écran 24 pouces Full HD'], ['Pour privilégier le confort', 'Un 27 pouces QHD.', 'écran 27 pouces QHD'], ['Pour privilégier l’espace', 'Un écran 32 pouces 4K.', 'écran 32 pouces 4K']],
    m: ['Acheter un grand écran en Full HD seulement.', 'Oublier la profondeur du bureau.'],
    f: [['24 ou 27 pouces ?', '24 pour un petit bureau, 27 pour plus de confort si la profondeur le permet.']],
  },
  {
    s: 'que-verifier-avant-d-acheter-un-ecran', p: 'ecran', t: 'verifier',
    h: 'Que vérifier avant d’acheter un écran ?',
    d: 'Taille, résolution, dalle, connectique, réglage du pied, fréquence : les points à vérifier avant d’acheter un écran d’ordinateur.',
    q: 'Vérifiez la taille et la résolution, le type de dalle, la connectique (HDMI, DisplayPort, USB-C), le réglage du pied et, pour le jeu, la fréquence de rafraîchissement.',
    x: [
      ['1. Taille et résolution', 'Cohérentes entre elles : voir notre guide de taille.'],
      ['2. Le type de dalle', 'IPS : angles de vision et couleurs. VA : contraste. TN : réactivité, couleurs moins fidèles.'],
      ['3. La connectique', 'Vérifiez que l’écran est compatible avec votre ordinateur. L’USB-C avec alimentation simplifie le branchement d’un portable.'],
      ['4. Le pied', 'Réglage en hauteur et rotation pour la posture ; sinon, compatibilité VESA pour un bras.'],
      ['5. La fréquence', '60 Hz suffit en bureautique, 120 ou 144 Hz pour le jeu.'],
    ],
    tb: [['Point', 'Repère', 'Pourquoi'], ['Dalle', 'IPS pour la polyvalence', 'Couleurs, angles'], ['Pied', 'Réglable en hauteur', 'Posture'], ['Connectique', 'HDMI, DP, USB-C', 'Compatibilité']],
    pr: [['Pour privilégier le télétravail', 'Un écran avec USB-C.', 'écran USB-C 27 pouces'], ['Pour privilégier la posture', 'Un écran avec pied réglable.', 'écran pied réglable hauteur']],
    m: ['Ne pas vérifier la connectique.', 'Oublier la hauteur du pied.'],
    f: [['Écran incurvé ou plat ?', 'Les écrans incurvés sont surtout utiles en grand format ; le plat convient à la plupart des usages.']],
  },

  // ───────────── BATTERIE EXTERNE ─────────────
  {
    s: 'quelle-capacite-de-batterie-externe-choisir', p: 'batterie-externe', t: 'capacite',
    h: 'Quelle capacité de batterie externe choisir ?',
    d: 'mAh, Wh, charges de téléphone, ordinateur portable, avion : comment choisir la capacité d’une batterie externe selon votre usage.',
    q: 'Un téléphone se recharge une à deux fois avec 10 000 mAh, trois à quatre fois avec 20 000 mAh. Un ordinateur portable demande une batterie de forte puissance de sortie (USB-C PD) et une capacité en Wh plus élevée.',
    x: [
      ['Les mAh, ce n’est pas ce que vous récupérez', 'La capacité annoncée est mesurée à une tension interne ; une partie est perdue à la conversion. Comptez environ 60 à 70 % de capacité utile.'],
      ['Combien de charges de téléphone', 'Un smartphone possède souvent une batterie de 4 000 à 5 000 mAh. 10 000 mAh donnent donc environ 1,5 à 2 charges, 20 000 mAh environ 3 à 4.'],
      ['Ordinateur portable et tablette', 'Regardez la puissance de sortie en watts (USB-C PD) et la capacité en Wh : un portable peut demander 45 à 65 W ou plus.'],
      ['En avion', 'Les batteries externes se transportent en cabine, pas en soute. Au-delà de 100 Wh (environ 27 000 mAh), l’accord de la compagnie est nécessaire.'],
    ],
    tb: [['Usage', 'Capacité indicative', 'À vérifier'], ['Appoint quotidien', '5 000 à 10 000 mAh', 'Compacité'], ['Week-end, voyage', '10 000 à 20 000 mAh', 'Nombre de ports'], ['Portable / tablette', '20 000 mAh et plus', 'USB-C PD ≥ 45 W']],
    pr: [['Pour privilégier la compacité', 'Une batterie 10 000 mAh.', 'batterie externe 10000 mAh'], ['Pour privilégier la capacité', 'Une batterie 20 000 mAh.', 'batterie externe 20000 mAh'], ['Pour recharger un ordinateur', 'Une batterie USB-C PD haute puissance.', 'batterie externe ordinateur portable USB-C PD 65W']],
    m: ['Se fier uniquement aux mAh annoncés.', 'Oublier la puissance de sortie.'],
    f: [['10 000 ou 20 000 mAh ?', '10 000 pour le quotidien, 20 000 pour plusieurs jours sans prise.']],
  },
  {
    s: 'faut-il-une-batterie-externe-de-20000-mah', p: 'batterie-externe', t: 'besoin',
    h: 'Faut-il acheter une batterie externe de 20 000 mAh ?',
    d: 'Une batterie externe de 20 000 mAh est-elle utile ? Avantages, poids, limites, cas pertinents et alternatives.',
    q: 'Oui pour plusieurs jours sans prise, un voyage ou la recharge d’une tablette. Pour un usage quotidien en ville, une batterie de 10 000 mAh, plus légère, suffit souvent.',
    x: [
      ['Les avantages', 'Plusieurs recharges de téléphone, recharge possible d’une tablette ou parfois d’un portable (selon la puissance).'],
      ['Les limites', 'Poids (souvent plus de 400 g), temps de recharge long, encombrement.'],
      ['Quand c’est pertinent', 'Randonnée de plusieurs jours, longs trajets, festival, voyage.'],
      ['Alternatives', 'Une batterie de 10 000 mAh pour le quotidien ; ou deux petites batteries.'],
    ],
    tb: [['Situation', '20 000 mAh utile ?', 'Alternative'], ['Usage quotidien', 'Souvent superflu', '10 000 mAh'], ['Voyage, randonnée', 'Oui', '—'], ['Tablette', 'Oui', '—']],
    pr: [['Pour privilégier l’autonomie', 'Une batterie 20 000 mAh.', 'batterie externe 20000 mAh'], ['Pour privilégier la légèreté', 'Une batterie 10 000 mAh.', 'batterie externe 10000 mAh compacte']],
    m: ['Acheter plus gros que nécessaire.', 'Oublier la recharge de la batterie elle-même.'],
    f: [['Combien de temps pour la recharger ?', 'Plusieurs heures selon la puissance du chargeur.']],
  },
  {
    s: 'que-verifier-avant-d-acheter-une-batterie-externe', p: 'batterie-externe', t: 'verifier',
    h: 'Que vérifier avant d’acheter une batterie externe ?',
    d: 'Capacité, puissance de sortie, ports, charge rapide, sécurité, poids : les points à vérifier avant d’acheter une batterie externe.',
    q: 'Vérifiez la capacité utile, la puissance de sortie (W), les ports (USB-C, USB-A), les protections de sécurité et le poids. Une batterie qui charge lentement vous décevra, même avec beaucoup de mAh.',
    x: [
      ['1. La capacité', 'Cohérente avec votre usage (voir notre guide de capacité).'],
      ['2. La puissance de sortie', 'En watts : de 12 à 20 W pour un téléphone, 45 à 100 W pour un portable.'],
      ['3. Les ports', 'USB-C bidirectionnel (pour se recharger vite), nombre de ports, charge simultanée.'],
      ['4. La sécurité', 'Protections contre la surcharge et la surchauffe, marquage CE, fabricant identifiable.'],
      ['5. Le poids et l’encombrement', 'À porter tous les jours ?'],
    ],
    tb: [['Point', 'Repère', 'Pourquoi'], ['Sortie', '20 W et plus', 'Charge rapide'], ['Port', 'USB-C', 'Compatibilité'], ['Poids', '< 300 g pour 10 000 mAh', 'Transport']],
    pr: [['Pour un téléphone', 'Une batterie compacte à charge rapide.', 'batterie externe charge rapide 20W'], ['Pour un portable', 'Une batterie USB-C PD 65 W.', 'batterie externe USB-C 65W']],
    m: ['Acheter une marque inconnue sans protections.', 'Prendre une batterie sans USB-C.'],
    f: [['Peut-on prendre une batterie externe en avion ?', 'En cabine uniquement ; vérifiez la limite en Wh de votre compagnie.']],
  },

  // ───────────── CLAVIER ─────────────
  {
    s: 'clavier-mecanique-ou-membrane-lequel-choisir', p: 'clavier', t: 'comparaison',
    h: 'Clavier mécanique ou à membrane : lequel choisir ?',
    d: 'Mécanique ou membrane : différences de frappe, de bruit, de durabilité, de prix et d’usage (bureau, jeu, open space).',
    q: 'Le clavier mécanique offre une frappe précise et une grande durabilité, mais coûte plus cher et peut être bruyant. La membrane est silencieuse et économique, idéale en open space ou pour un usage simple.',
    x: [
      ['Clavier mécanique', 'Un interrupteur par touche, frappe plus nette, remplaçable, choix de switches (linéaires, tactiles, cliquants). Plus bruyant et plus cher.'],
      ['Clavier à membrane', 'Silencieux, abordable, léger. Frappe plus molle, durée de vie moindre.'],
      ['Clavier à ciseaux', 'Faible course, proche des claviers d’ordinateur portable : agréable et discret.'],
    ],
    tb: [['Critère', 'Mécanique', 'Membrane'], ['Frappe', 'Précise', 'Molle'], ['Bruit', 'Plus fort', 'Silencieux'], ['Prix', 'Plus élevé', 'Abordable'], ['Durée de vie', 'Longue', 'Moyenne']],
    pr: [['Pour privilégier la frappe', 'Un clavier mécanique.', 'clavier mécanique'], ['Pour privilégier le silence', 'Un clavier à membrane silencieux.', 'clavier silencieux'], ['Pour privilégier la polyvalence', 'Un clavier à ciseaux.', 'clavier sans fil ciseaux']],
    m: ['Prendre un mécanique cliquant en open space.', 'Ne pas vérifier la disposition AZERTY.'],
    f: [['Quel switch choisir ?', 'Linéaire pour la fluidité, tactile pour la frappe, cliquant pour le retour sonore.']],
  },

  // ───────────── SOURIS ─────────────
  {
    s: 'souris-ergonomique-est-ce-utile', p: 'souris', t: 'besoin',
    h: 'Une souris ergonomique est-elle utile ?',
    d: 'Souris verticale, trackball : avantages, limites, cas où une souris ergonomique est utile et alternatives.',
    q: 'Elle peut soulager si vous passez de longues heures à la souris, mais elle demande une période d’adaptation. En cas de douleur persistante, consultez un professionnel de santé.',
    x: [
      ['Les avantages', 'Position de la main plus neutre, moins de rotation de l’avant-bras, confort en usage prolongé.'],
      ['Les limites', 'Adaptation nécessaire, prix plus élevé, moins précise pour certains usages comme le jeu.'],
      ['Alternatives', 'Pauses régulières, bonne hauteur de bureau, souris adaptée à la taille de la main.'],
    ],
    tb: [['Profil', 'Utile ?', 'Type'], ['Usage intensif', 'Oui', 'Verticale ou trackball'], ['Usage occasionnel', 'Non', 'Souris classique'], ['Main gauche', 'Peut-être', 'Modèle gaucher']],
    pr: [['Pour privilégier l’ergonomie', 'Une souris verticale.', 'souris verticale ergonomique'], ['Pour privilégier la précision', 'Une souris classique de bonne taille.', 'souris sans fil ergonomique']],
    m: ['Choisir sans tenir compte de la taille de la main.', 'Attendre un résultat immédiat.'],
    f: [['Souris verticale ou trackball ?', 'La verticale change l’angle du poignet ; le trackball évite de déplacer la main.']],
  },

  // ───────────── IMPRIMANTE ─────────────
  {
    s: 'imprimante-laser-ou-jet-d-encre-laquelle-choisir', p: 'imprimante', t: 'comparaison',
    h: 'Imprimante laser ou jet d’encre : laquelle choisir ?',
    d: 'Laser ou jet d’encre : coût par page, vitesse, qualité photo, entretien et usage pour choisir la bonne imprimante.',
    q: 'Le laser convient aux textes en volume et aux impressions occasionnelles sans séchage d’encre. Le jet d’encre convient aux couleurs et photos, avec un coût par page à surveiller et des buses qui peuvent sécher si on imprime peu.',
    x: [
      ['Imprimante laser', 'Rapide, nette sur le texte, pas de buses qui sèchent. Les modèles couleur sont plus chers.'],
      ['Imprimante jet d’encre', 'Meilleure pour les photos et la couleur, prix d’achat bas. Les cartouches coûtent cher et peuvent sécher.'],
      ['Réservoirs rechargeables', 'Certains jets d’encre fonctionnent avec des réservoirs : prix d’achat plus élevé, coût par page nettement plus bas.'],
    ],
    tb: [['Usage', 'Type conseillé', 'Raison'], ['Documents noir et blanc', 'Laser monochrome', 'Vitesse, coût par page'], ['Photos, couleur', 'Jet d’encre', 'Qualité'], ['Impression rare', 'Laser', 'Pas de séchage']],
    pr: [['Pour privilégier le texte', 'Une imprimante laser monochrome.', 'imprimante laser monochrome'], ['Pour privilégier la couleur', 'Une imprimante à réservoirs.', 'imprimante jet d’encre réservoirs'], ['Pour privilégier le polyvalent', 'Une multifonction.', 'imprimante multifonction']],
    m: ['Ne regarder que le prix d’achat.', 'Imprimer rarement avec un jet d’encre.'],
    f: [['Quel coût par page ?', 'Calculez prix cartouche ÷ nombre de pages annoncé.']],
  },

  // ───────────── BUREAU ─────────────
  {
    s: 'quelle-taille-de-bureau-choisir', p: 'bureau', t: 'taille',
    h: 'Quelle taille de bureau choisir ?',
    d: 'Largeur, profondeur, hauteur : comment choisir la taille d’un bureau selon l’écran, l’usage et la pièce.',
    q: 'Un bureau de 120 x 60 cm suffit pour un portable ; 140 x 70 ou 80 cm convient à un écran de 27 pouces ; 160 cm de large permet deux écrans.',
    x: [
      ['La largeur', '120 cm pour un portable ; 140 cm pour un grand écran ; 160 cm et plus pour deux écrans ou du matériel.'],
      ['La profondeur', '60 cm pour un portable ; 70 à 80 cm pour garder une distance confortable avec un grand écran.'],
      ['La hauteur', 'La hauteur courante est de 72 à 75 cm. Un bureau réglable en hauteur permet d’alterner assis et debout.'],
    ],
    tb: [['Usage', 'Taille', 'Remarque'], ['Portable', '120 x 60 cm', 'Petit espace'], ['Écran 27"', '140 x 70/80 cm', 'Confort'], ['Double écran', '160 x 80 cm', 'Plus de largeur']],
    pr: [['Pour privilégier la compacité', 'Un bureau 120 cm.', 'bureau 120 cm'], ['Pour privilégier le confort', 'Un bureau 140 x 70 cm.', 'bureau 140 cm'], ['Pour alterner assis et debout', 'Un bureau réglable en hauteur.', 'bureau réglable en hauteur']],
    m: ['Choisir un bureau trop profond pour la pièce.', 'Ignorer l’espace pour les jambes.'],
    f: [['Quelle hauteur de bureau ?', 'Environ 72 à 75 cm en standard.']],
  },
  {
    s: 'quels-accessoires-pour-teletravailler', p: 'bureau', t: 'accessoires',
    h: 'Quels accessoires pour le télétravail ?',
    d: 'Support d’ordinateur, clavier externe, casque, repose-pieds, éclairage : quels accessoires de télétravail sont indispensables, utiles, optionnels ?',
    q: 'Indispensable : une bonne chaise et un écran à bonne hauteur. Utile : clavier et souris externes, casque, éclairage. Optionnel : repose-pieds, hub USB-C, webcam externe.',
    x: [
      ['Indispensable', 'Une chaise réglable, un écran (ou support) à hauteur des yeux, une multiprise sécurisée.'],
      ['Utile', 'Clavier et souris externes, support d’ordinateur portable, casque avec micro, lampe de bureau.'],
      ['Optionnel', 'Repose-pieds, hub USB-C, webcam externe, tapis de bureau.'],
    ],
    tb: [['Catégorie', 'Accessoire', 'Pourquoi'], ['Indispensable', 'Chaise, écran', 'Posture'], ['Utile', 'Clavier, souris, casque', 'Confort'], ['Optionnel', 'Hub, webcam', 'Polyvalence']],
    pr: [['Pour la posture', 'Un support d’ordinateur portable.', 'support ordinateur portable réglable'], ['Pour le confort', 'Un clavier et une souris sans fil.', 'clavier souris sans fil bureau'], ['Pour les visios', 'Un casque avec micro.', 'casque micro visioconférence']],
    m: ['Travailler sur portable seul pendant des heures.', 'Ignorer l’éclairage.'],
    f: [['Quel accessoire en premier ?', 'Un support de portable avec clavier externe : il améliore la posture.']],
  },
];

export default guides;
