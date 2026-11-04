// Fonte única de verdade das páginas do site.
//
// Alimenta de uma vez: o menu do Navbar, os links do rodapé, o <title> e a
// descrição de cada página (componente Seo) e a geração do sitemap.xml
// (scripts/gerar-sitemap.mjs). Acrescentar uma página é acrescentar um item
// aqui — nenhum dos quatro lugares precisa ser editado à mão.
//
// "menu: false" mantém a rota fora do menu, mas ainda no sitemap.

export const SITE = "https://portfolio.matheusviniciusdiasalves.workers.dev";

export const rotas = [
  {
    caminho: "/",
    rotulo: "Início",
    titulo: "Matheus Vinícius Dias Alves | Desenvolvedor Full-Stack",
    descricao:
      "Portfólio de Matheus Vinícius Dias Alves — desenvolvedor full-stack em Londrina e Rolândia. Sites e sistemas sob medida, formatação e manutenção de computadores, publicações científicas e projetos em React e Node.js.",
    prioridade: "1.0",
  },
  {
    caminho: "/sobre",
    rotulo: "Sobre",
    titulo: "Sobre mim | Matheus Vinícius Dias Alves",
    descricao:
      "Quem é Matheus Vinícius Dias Alves: estudante de Análise e Desenvolvimento de Sistemas, desenvolvedor full-stack e técnico de manutenção em Rolândia e Londrina. Formação, experiência e tecnologias que domino.",
    prioridade: "0.8",
  },
  {
    caminho: "/servicos",
    rotulo: "Serviços",
    titulo: "Serviços — sites, sistemas e manutenção | Matheus Dias",
    descricao:
      "Desenvolvimento de sites, aplicativos e sistemas web sob medida, e formatação e manutenção de computadores em Rolândia, Londrina e região. Tabela de preços e orçamento sem compromisso.",
    prioridade: "0.9",
  },
  {
    caminho: "/projetos",
    rotulo: "Projetos",
    titulo: "Projetos | Matheus Vinícius Dias Alves",
    descricao:
      "Projetos desenvolvidos por Matheus Vinícius Dias Alves: site institucional para cliente real, sistema de login com React e MySQL, e experimentos em JavaScript, React e Tailwind CSS.",
    prioridade: "0.8",
  },
  {
    caminho: "/publicacoes",
    rotulo: "Publicações",
    titulo: "Publicações científicas e premiações | Matheus Dias",
    descricao:
      "Produção científica de Matheus Vinícius Dias Alves: Inteligência Artificial na Educação Superior Brasileira e Programação Scratch para a educação básica, além de premiações e reconhecimentos.",
    prioridade: "0.7",
  },
  {
    caminho: "/contato",
    rotulo: "Contato",
    titulo: "Contato | Matheus Vinícius Dias Alves",
    descricao:
      "Fale com Matheus Vinícius Dias Alves por WhatsApp, e-mail ou LinkedIn. Atendimento em Rolândia, Londrina e região, e projetos à distância para qualquer lugar.",
    prioridade: "0.6",
  },
];

export const rotasDoMenu = rotas.filter((rota) => rota.menu !== false);

export function rotaPorCaminho(caminho) {
  return rotas.find((rota) => rota.caminho === caminho);
}
