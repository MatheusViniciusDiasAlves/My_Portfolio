// Gera public/sitemap.xml a partir de src/rotas.js.
//
// Roda sozinho antes do build (ver "build" no package.json), então o sitemap
// nunca fica desatualizado em relação às páginas que existem de verdade —
// que era o risco de manter o XML na mão.

import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { rotas, SITE } from "../src/rotas.js";

const raiz = join(dirname(fileURLToPath(import.meta.url)), "..");
const hoje = new Date().toISOString().slice(0, 10);

const urls = rotas
  .map((rota) =>
    [
      "  <url>",
      `    <loc>${SITE}${rota.caminho}</loc>`,
      `    <lastmod>${hoje}</lastmod>`,
      "    <changefreq>monthly</changefreq>",
      `    <priority>${rota.prioridade}</priority>`,
      "  </url>",
    ].join("\n")
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

writeFileSync(join(raiz, "public", "sitemap.xml"), xml);

console.log(`  ✓ sitemap.xml com ${rotas.length} páginas (${hoje})`);
