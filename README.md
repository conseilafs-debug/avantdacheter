# Avant d'Acheter

Site de guides d'achat français (Astro, 100 % statique) — « Tout ce qu'il faut savoir avant d'acheter ».
Monétisation : affiliation Amazon.fr, **tracking ID `amalys-21`**. 102 guides, 180 pages.

## Démarrage
```bash
npm install
npm run dev            # http://localhost:4321
npm run build          # génère dist/
npm run check:links    # contrôle liens internes, tag Amazon, titres/h1/meta uniques, JSON-LD
```

## Déploiement GitHub → Cloudflare Pages
1. Poussez ce dossier sur un dépôt GitHub.
2. Cloudflare → Workers & Pages → Create → Pages → Connect to Git → choisir le dépôt.
3. Build command : `npm run build` — Output directory : `dist` — Variable `NODE_VERSION=22`.
4. Nommez le projet `avant-dacheter` → URL `https://avant-dacheter.pages.dev`.
   Si le nom diffère, ajoutez la variable `SITE_URL=https://votre-projet.pages.dev` (canonical, sitemap, Open Graph), puis relancez le build.

## Structure
- `src/config.ts` : nom, **tracking ID (`AMAZON.tag`)**, mentions légales.
- `src/data/taxonomy.ts` : catégories, types de guides, « clusters » produits.
- `src/data/products.ts` : produits Amazon vérifiés (ASIN).
- `src/content/*.ts` : les guides, par catégorie.
- `src/lib/affiliate.ts` : génération des liens (`amazonProductUrl`, `amazonSearchUrl`, `withTag`).
- `src/components/` : Header, Footer, Breadcrumb, Search, CategoryCard, GuideCard, ProductCard, AffiliateButton, FAQ, RelatedArticles, DisclosureAffiliate.
- `src/pages/` : routes (`/[cat]/[cluster]/[slug]/`, `/conseils/…`, pages légales), `sitemap.xml.ts`, `robots.txt.ts`, `search-index.json.ts`.

## Ajouter un produit Amazon
Dans `src/data/products.ts`, ajoutez un objet avec un **ASIN réel vérifié** sur Amazon.fr, le slug du guide et l'index du bloc (`profile`, à partir de 0). Pas de prix, note ni disponibilité. Le lien `https://www.amazon.fr/dp/ASIN/?tag=amalys-21` est généré automatiquement. Sans produit, chaque bloc affiche un bouton vers une recherche Amazon.fr ciblée (avec le tag).

## Créer une nouvelle page SEO
Ajoutez un objet dans le fichier de `src/content/` de la catégorie (format documenté dans `src/content/types.ts`) : slug, cluster, type, titre, description, réponse rapide, sections, tableau, blocs produits, erreurs, FAQ. Page, sitemap, recherche et maillage sont générés au build.

## Ajouter une catégorie / un cluster
- Cluster (ex. « tapis roulant ») : ajoutez-le dans `CLUSTERS` (`taxonomy.ts`).
- Catégorie : ajoutez-la dans `CATS`, puis un fichier `src/content/xxx.ts` importé dans `src/lib/guides.ts`.

## Sitemap, robots
Générés au build (`/sitemap.xml`, `/robots.txt`) à partir de `SITE_URL`. `/recherche/` est en noindex. Soumettez le sitemap dans Google Search Console.

## Checklist SEO
- [ ] `SITE_URL` correct, sitemap soumis à la Search Console
- [ ] `npm run check:links` sans erreur
- [ ] Titres/descriptions uniques (contrôlé automatiquement)
- [ ] Mentions légales vérifiées dans `src/config.ts`
- [ ] Nouveaux guides liés depuis leur cluster (automatique)
- [ ] Mise à jour des guides : modifier `SITE.updated`

## Checklist Amazon Associates
- [ ] Mention de partenaire présente (footer, mentions légales, page « Notre fonctionnement »)
- [ ] Tous les liens en `tag=amalys-21` et `rel="sponsored"` (contrôlé)
- [ ] Aucun prix, note ou disponibilité affiché
- [ ] Ne pas utiliser les liens affiliés dans e-mails/PDF hors règles du programme
- [ ] Respecter la règle des 3 ventes qualifiées sous 180 jours
- [ ] Vérifier que le site est déclaré dans le compte Associates

## Brancher plus tard votre domaine
Cloudflare Pages → projet → Custom domains → Set up a domain. Puis définissez `SITE_URL=https://votre-domaine.fr` dans les variables, relancez le build, et déclarez le domaine dans Google Search Console et dans Amazon Associates.
