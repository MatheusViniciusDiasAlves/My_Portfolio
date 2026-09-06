// Troca o endereço do site em todos os arquivos de SEO de uma vez só.
//
//   npm run seo:url -- https://meu-portfolio.pages.dev
//
// O endereço atual é lido do <link rel="canonical"> do index.html, que serve
// como fonte da verdade. Só ocorrências exatas dele são trocadas — links do
// GitHub, LinkedIn e afins ficam intactos.

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = join(dirname(fileURLToPath(import.meta.url)), "..");

const ARQUIVOS = ["index.html", "public/sitemap.xml", "public/robots.txt"];

function erro(mensagem) {
  console.error(`\n  ✗ ${mensagem}\n`);
  console.error("    Uso: npm run seo:url -- https://meu-portfolio.pages.dev\n");
  process.exit(1);
}

const informado = process.argv[2];

if (!informado) {
  erro("Faltou informar o novo endereço do site.");
}

// Sem barra no fim, para não gerar "site.com//sitemap.xml".
const novo = informado.trim().replace(/\/+$/, "");

if (!/^https:\/\/[a-z0-9.-]+\.[a-z]{2,}$/i.test(novo)) {
  erro(`"${informado}" não parece um endereço válido (esperado: https://dominio.com, sem caminho).`);
}

const caminhoIndex = join(raiz, "index.html");
const html = readFileSync(caminhoIndex, "utf8");
const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);

if (!canonical) {
  erro("Não encontrei a tag <link rel=\"canonical\"> no index.html.");
}

const atual = canonical[1].replace(/\/+$/, "");

if (atual === novo) {
  console.log(`\n  O site já está configurado como ${novo}. Nada a fazer.\n`);
  process.exit(0);
}

const hoje = new Date().toISOString().slice(0, 10);
let totalTrocas = 0;

for (const arquivo of ARQUIVOS) {
  const caminho = join(raiz, arquivo);
  const antes = readFileSync(caminho, "utf8");

  let depois = antes.split(atual).join(novo);

  // Aproveita e atualiza o lastmod do sitemap para hoje.
  if (arquivo.endsWith("sitemap.xml")) {
    depois = depois.replace(/<lastmod>[^<]*<\/lastmod>/, `<lastmod>${hoje}</lastmod>`);
  }

  if (depois !== antes) {
    const trocas = antes.split(atual).length - 1;
    totalTrocas += trocas;
    writeFileSync(caminho, depois);
    console.log(`  ✓ ${arquivo} (${trocas} ${trocas === 1 ? "ocorrência" : "ocorrências"})`);
  } else {
    console.log(`  · ${arquivo} (nada a trocar)`);
  }
}

console.log(`\n  ${atual}\n  → ${novo}\n`);
console.log(`  ${totalTrocas} substituições. Confira com "git diff" e faça commit.\n`);
