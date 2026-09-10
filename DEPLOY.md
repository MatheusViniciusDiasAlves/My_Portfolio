# Publicação — Cloudflare + Google

Passo a passo para colocar o portfólio no ar e registrar no Google.
Siga na ordem: cada bloco depende do anterior.

> **Estado atual:** o site já está no ar como **Worker** (a opção B do passo 1),
> em <https://portfolio.matheusviniciusdiasalves.workers.dev/>.
> Os passos 1 a 3 já foram executados; ficam registrados aqui para o caso de
> uma nova migração de host. O que ainda pode ser feito está no passo 4.

---

## 1. Subir no Cloudflare

O Cloudflare oferece dois tipos de projeto. Os dois funcionam; escolha um.

### Opção A — Pages (mais simples, mas **não** é a usada hoje)

**Workers & Pages → Create → aba Pages → Connect to Git**, escolha
`My_Portfolio` e configure:

| Campo | Valor |
| --- | --- |
| Production branch | `main` |
| Framework preset | `Vite` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| **Root directory** | `frontend/MatheusViniciusDiasAlves` |

Endereço final: `https://<nome-do-projeto>.pages.dev`

### Opção B — Worker ← **é esta que está no ar**

Mesma tela, aba **Workers**. Configure:

| Campo | Valor |
| --- | --- |
| **Root directory** | `frontend/MatheusViniciusDiasAlves` |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |

O `wrangler.jsonc` já está no repositório. **Abra o arquivo e troque o `name`
pelo nome exato do projeto que você criou no painel** — se ficar diferente, o
deploy cria um Worker separado em vez de atualizar o seu.

Endereço final: `https://<nome-do-worker>.<seu-subdominio>.workers.dev`

### O erro mais comum

> `Could not detect a directory containing static files`
> ou `added 32 packages` no log de instalação

Os dois sintomas significam a mesma coisa: o **Root directory** não foi
preenchido. Sem ele o Cloudflare lê o `package.json` da raiz do repositório
(que só tem o Tailwind), nunca instala o React nem roda o Vite, e por isso não
existe pasta `dist` para publicar.

**Anote o endereço que o Cloudflare gerar**, ele é usado no passo 2.

O arquivo `public/_headers` (cache e cabeçalhos de segurança) já está no
repositório e o Cloudflare lê automaticamente.

> **Sobre o fallback de SPA:** no **Pages** ele se faz com um `_redirects`
> contendo `/*  /index.html  200`. No **Worker** essa mesma regra é recusada
> (`Infinite loop detected in this rule`) — lá o correto é o
> `not_found_handling: "single-page-application"` do `wrangler.jsonc`, que já
> está configurado. Por isso o repositório **não** tem `_redirects`; se você
> migrar para Pages um dia, aí sim crie o arquivo.

---

## 2. Apontar o SEO para o novo endereço

Enquanto isto não for feito, as tags de SEO continuam apontando para o endereço
antigo da Netlify e o Google indexa o site errado.

```bash
cd frontend/MatheusViniciusDiasAlves
# Foi o que já se rodou para o endereço atual:
npm run seo:url -- https://portfolio.matheusviniciusdiasalves.workers.dev
```

O script atualiza de uma vez: `canonical`, `og:url`, `og:image`,
`twitter:image`, o `url`/`image` do JSON-LD, o `sitemap.xml` (incluindo o
`lastmod`) e o `robots.txt`. Depois:

```bash
git add -A && git commit -m "Aponta o SEO para o Cloudflare" && git push
```

Confirme no site publicado com `Ctrl+U` que o `<link rel="canonical">` já mostra
o endereço novo.

---

## 3. Desligar a Netlify

Só depois que o Cloudflare estiver servindo o site corretamente:

1. Netlify → seu site → **Site configuration → Danger zone → Delete this site**.
2. Remova o `netlify.toml` da raiz do repositório, que deixa de ter função:

   ```bash
   git rm netlify.toml && git commit -m "Remove config da Netlify" && git push
   ```

   > Ele foi mantido de propósito até aqui: apagá-lo antes do Cloudflare estar
   > no ar quebraria o build da Netlify e derrubaria o site que ainda responde.

3. No Search Console, a propriedade antiga (`portfoliomatheusvinicius.netlify.app`)
   pode ser removida — ela vai parar de responder.

> **O que você perde:** o Google trata o endereço novo como um site novo. O histórico
> de indexação do endereço da Netlify não é transferido, e sem o site antigo no ar
> não dá para criar redirect 301. Na prática, a indexação recomeça do zero.
> Um domínio próprio evita que isso volte a acontecer numa próxima troca de host —
> quando comprar um, é só rodar o passo 2 de novo com o domínio.

---

## 4. Google Search Console

1. Acesse <https://search.google.com/search-console> e adicione uma propriedade
   do tipo **Prefixo do URL** com `https://portfolio.matheusviniciusdiasalves.workers.dev/`.

   > Propriedade do tipo *Domínio* exige registro DNS e não funciona em
   > `workers.dev`, que é um domínio compartilhado. Use **Prefixo do URL**.

   > **Já feito.** A propriedade existe e está verificada — ela só aparece na
   > lista do Search Console depois que a verificação passa.

2. Escolha o método **Tag HTML**. Copie só o valor do atributo `content`.

3. Cole o valor no `index.html`, na linha do
   `<meta name="google-site-verification" ...>`:

   ```html
   <meta name="google-site-verification" content="SEU_CODIGO_AQUI" />
   ```

   > O código é **gerado por propriedade**: o que verifica a propriedade da
   > Netlify não serve para a do `workers.dev`. Ao trocar de host, pegue o
   > código novo.

4. Commit, push, espere o deploy do Cloudflare terminar e clique em **Verificar**.

5. Verificado, vá em **Sitemaps** e envie apenas o caminho: `sitemap.xml`
   (esse envio não consome a cota diária de indexação).

   > Se o status ficar em *"Não foi possível buscar"* nas primeiras horas, não é
   > erro: o Google processa em fila. Confira no dia seguinte.

6. Em **Inspeção de URL**, cole a home e clique em **Solicitar indexação**.
   Há um limite de ~10 URLs por dia; para um site de página única, uma vez basta.

7. Espere. A indexação leva de dias a semanas, e ver
   *"Descoberta — atualmente não indexada"* no começo é o comportamento normal
   de site novo, não um defeito a corrigir.

### Validando o sitemap por fora

Em validadores como o `xml-sitemaps.com/validate-xml-sitemap.html`, cole o
endereço **do arquivo**, com `/sitemap.xml` no final:

```
https://portfolio.matheusviniciusdiasalves.workers.dev/sitemap.xml
```

Colar só a home (`.../`) devolve o erro *"Tipo de conteúdo do cabeçalho HTTP
incorreto: text/html (esperado: application/xml)"* — o validador leu a página
inicial, que é HTML mesmo, e não o sitemap. Não é defeito do site.

Para conferir pelo terminal:

```bash
curl -I https://portfolio.matheusviniciusdiasalves.workers.dev/sitemap.xml
```

A resposta precisa trazer `content-type: application/xml`. Se vier `text/html`,
o arquivo não chegou ao deploy (`dist/sitemap.xml`) e o Worker caiu no
fallback de SPA, que devolve o `index.html` para rota desconhecida.

---

## 5. Google Business Profile

Aqui vale um alerta antes de você gastar tempo: o **Perfil da Empresa é para
negócios que atendem clientes**, não para portfólio pessoal. As regras do Google
exigem um nome de empresa real e verificação (cartão postal, telefone ou vídeo).
Perfis criados por pessoa física sem atividade comercial costumam ser
**suspensos**, e a suspensão pode respingar na conta Google.

**Faz sentido criar se** você tem MEI/CNPJ e presta serviço de fato
(desenvolvimento, formatação, manutenção — que era o caso da sua "Loja Virtual").
Nesse caso, na criação escolha **"Não tenho endereço físico"** e defina uma
*área de atendimento* (ex.: Londrina e região).

**Se for esse o caso**, aí sim adicione este bloco ao `index.html`, logo depois do
JSON-LD que já existe — e preencha com os dados reais:

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "NOME EXATO COMO ESTÁ NO PERFIL DA EMPRESA",
    "description": "Desenvolvimento de sites e sistemas web.",
    "url": "https://portfolio.matheusviniciusdiasalves.workers.dev/",
    "image": "https://portfolio.matheusviniciusdiasalves.workers.dev/perfil/matheus-formal.jpg",
    "email": "matheusviniciusdiasalves@gmail.com",
    "telephone": "+55SEUTELEFONE",
    "priceRange": "$$",
    "areaServed": { "@type": "City", "name": "Londrina" },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Londrina",
      "addressRegion": "PR",
      "addressCountry": "BR"
    },
    "founder": { "@type": "Person", "name": "Matheus Vinícius Dias Alves" }
  }
</script>
```

> Os dados aqui precisam bater **exatamente** com os do Perfil da Empresa (mesmo
> nome, mesmo telefone, mesmo endereço). Divergência atrapalha em vez de ajudar.
> Não preencha com dados inventados — schema falso é penalizado.

**Se você não tem CNPJ**, pule o Business Profile. O que realmente move o
ponteiro para busca pelo seu nome é o passo 6.

---

## 6. O que mais ajuda a aparecer no Google

Nenhum arquivo resolve isto — depende de links apontando para o site:

- [ ] LinkedIn: campo "Site" do perfil + seção Destaque
- [ ] GitHub: campo "Website" do perfil **e** do repositório `My_Portfolio`
- [ ] README do perfil do GitHub com o link
- [ ] Bio do Instagram
- [ ] Assinatura de e-mail

Site novo leva de dias a semanas para indexar, e semanas a meses para ranquear
pelo nome. Os links acima são o que mais acelera.
