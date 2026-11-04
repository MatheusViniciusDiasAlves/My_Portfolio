import { useEffect } from "react";
import { SITE } from "../rotas";

// Atualiza <title>, a meta description e o <link rel="canonical"> a cada
// troca de página. Num site de página única o index.html resolvia tudo; com
// rotas, cada endereço precisa dos seus próprios dados — é o que o Google lê
// para decidir o que mostrar no resultado de busca.
//
// Mexe também nas tags Open Graph para o link ficar certo no WhatsApp e no
// LinkedIn, que é por onde a maior parte das visitas chega.

function definirMeta(seletor, atributo, valor, conteudo) {
  let tag = document.head.querySelector(seletor);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(atributo, valor);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", conteudo);
}

function Seo({ titulo, descricao, caminho }) {
  useEffect(() => {
    const url = `${SITE}${caminho === "/" ? "/" : caminho}`;

    document.title = titulo;

    definirMeta('meta[name="description"]', "name", "description", descricao);
    definirMeta('meta[property="og:title"]', "property", "og:title", titulo);
    definirMeta('meta[property="og:description"]', "property", "og:description", descricao);
    definirMeta('meta[property="og:url"]', "property", "og:url", url);
    definirMeta('meta[name="twitter:title"]', "name", "twitter:title", titulo);
    definirMeta('meta[name="twitter:description"]', "name", "twitter:description", descricao);

    let canonical = document.head.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", url);
  }, [titulo, descricao, caminho]);

  return null;
}

export default Seo;
