# Publicação — Cloudflare Pages + Google

Passo a passo para colocar o portfólio no ar e registrar no Google.
Siga na ordem: cada bloco depende do anterior.

---

## 1. Subir no Cloudflare Pages

No painel do Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**,
escolha o repositório `My_Portfolio` e use exatamente estas configurações:

| Campo | Valor |
| --- | --- |
| Production branch | `main` |
| Framework preset | `Vite` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| **Root directory** | `frontend/MatheusViniciusDiasAlves` |

> O **Root directory** é o campo que mais gera erro. Sem ele o Cloudflare procura
> o `package.json` na raiz do repositório e o build falha.

Ao criar o projeto você escolhe um nome — ele vira o endereço
`https://<nome>.pages.dev`. **Anote esse endereço**, ele é usado no passo 2.

Os arquivos `public/_redirects` e `public/_headers` já estão no repositório: o
primeiro faz o fallback de SPA, o segundo define cache e cabeçalhos de segurança.
O Cloudflare lê os dois automaticamente.

---

## 2. Apontar o SEO para o novo endereço

Enquanto isto não for feito, as tags de SEO continuam apontando para o endereço
antigo da Netlify e o Google indexa o site errado.

```bash
cd frontend/MatheusViniciusDiasAlves
npm run seo:url -- https://SEU-PROJETO.pages.dev
```

O script atualiza de uma vez: `canonical`, `og:url`, `og:image`,
`twitter:image`, o `url`/`image` do JSON-LD, o `sitemap.xml` (incluindo o
`lastmod`) e o `robots.txt`. Depois:

```bash
git add -A && git commit -m "Aponta o SEO para o Cloudflare Pages" && git push
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

> **O que você perde:** o Google trata `pages.dev` como um site novo. O histórico
> de indexação do endereço da Netlify não é transferido, e sem o site antigo no ar
> não dá para criar redirect 301. Na prática, a indexação recomeça do zero.
> Um domínio próprio evita que isso volte a acontecer numa próxima troca de host —
> quando comprar um, é só rodar o passo 2 de novo com o domínio.

---

## 4. Google Search Console

1. Acesse <https://search.google.com/search-console> e adicione uma propriedade
   do tipo **Prefixo do URL** com `https://SEU-PROJETO.pages.dev`.

   > Propriedade do tipo *Domínio* exige registro DNS e não funciona em
   > `pages.dev`, que é um domínio compartilhado. Use **Prefixo do URL**.

2. Escolha o método **Tag HTML**. Copie só o valor do atributo `content`.

3. No `index.html` (linha ~17) há um bloco comentado. Descomente e cole:

   ```html
   <meta name="google-site-verification" content="SEU_CODIGO_AQUI" />
   ```

4. Commit, push, espere o deploy do Cloudflare terminar e clique em **Verificar**.

5. Verificado, vá em **Sitemaps** e envie: `sitemap.xml`
   (esse caminho não consome a cota diária de indexação).

6. Em **Inspeção de URL**, cole a home e clique em **Solicitar indexação**.
   Há um limite de ~10 URLs por dia; para um site de página única, uma vez basta.

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
    "url": "https://SEU-PROJETO.pages.dev/",
    "image": "https://SEU-PROJETO.pages.dev/perfil/matheus-formal.jpg",
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
