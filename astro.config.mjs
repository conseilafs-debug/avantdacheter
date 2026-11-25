import { defineConfig } from 'astro/config';

// URL publique du site. À définir dans Cloudflare Pages (variable SITE_URL)
// quand le nom de domaine personnalisé sera branché.
const site = process.env.SITE_URL || 'https://avant-dacheter.pages.dev';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  compressHTML: true,
  devToolbar: { enabled: false },
});
