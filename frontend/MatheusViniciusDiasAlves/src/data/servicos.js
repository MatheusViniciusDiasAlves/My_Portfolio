import { HiOutlineCodeBracket, HiOutlineWrenchScrewdriver } from "react-icons/hi2";

// As duas frentes de trabalho. Atendimento como autônomo — quando o MEI sair,
// dá para acrescentar CNPJ e horário de atendimento aqui.
//
// TODO (Matheus): se quiser botão de WhatsApp, me passe o número que eu troco
// o "cta" abaixo por https://wa.me/55DDDNUMERO?text=...

export const servicos = [
  {
    marca: "MdDeveloper",
    icone: HiOutlineCodeBracket,
    titulo: "Desenvolvimento de sites e sistemas",
    chamada: "Do layout ao site publicado",
    descricao:
      "Sites institucionais, landing pages e sistemas web sob medida. Trabalho com React, Node.js e banco de dados, entregando o projeto no ar e pronto para usar.",
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
    icone: HiOutlineWrenchScrewdriver,
    titulo: "Formatação e manutenção de computadores",
    chamada: "5 anos de experiência em Rolândia e região",
    descricao:
      "Da formatação simples ao diagnóstico de hardware e montagem de máquina do zero. Atendimento presencial em Rolândia, Londrina e região.",
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
