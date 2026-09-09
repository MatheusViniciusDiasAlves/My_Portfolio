// As duas frentes de trabalho. Atendimento como autônomo — quando o MEI sair,
// dá para acrescentar CNPJ e horário de atendimento aqui.
//
// TODO (Matheus): se quiser botão de WhatsApp, me passe o número que eu troco
// o "cta" abaixo por https://wa.me/55DDDNUMERO?text=...

export const servicos = [
  {
    marca: "MdDeveloper",
    titulo: "Desenvolvimento de sites e sistemas",
    descricao:
      "Sites institucionais, landing pages e sistemas web sob medida, do layout ao deploy. Trabalho com React, Node.js e banco de dados, entregando o projeto publicado e pronto para usar.",
    itens: [
      "Sites institucionais e landing pages",
      "Sistemas web sob medida",
      "Integração de APIs e automações",
      "Publicação, domínio e manutenção",
    ],
    tecnologias: ["React", "Node.js", "Tailwind CSS", "MySQL"],
    cta: {
      rotulo: "Solicitar orçamento",
      href: "mailto:matheusviniciusdiasalves@gmail.com?subject=Or%C3%A7amento%20de%20site%20ou%20sistema%20%E2%80%94%20MdDeveloper",
    },
  },
  {
    marca: "MdFormatting",
    titulo: "Formatação e manutenção de computadores",
    descricao:
      "Cinco anos formatando, montando e consertando computadores em Rolândia e região. Atendo desde a formatação simples até diagnóstico de hardware e montagem de máquina do zero.",
    itens: [
      "Formatação e instalação de Windows",
      "Manutenção preventiva e corretiva",
      "Montagem e upgrade de peças",
      "Backup e recuperação de dados",
    ],
    tecnologias: ["Windows", "Hardware", "Backup", "Redes"],
    cta: {
      rotulo: "Falar sobre manutenção",
      href: "mailto:matheusviniciusdiasalves@gmail.com?subject=Formata%C3%A7%C3%A3o%20ou%20manuten%C3%A7%C3%A3o%20%E2%80%94%20MdFormatting",
    },
  },
];
