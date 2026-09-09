import { HiOutlineCodeBracket, HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { linkWhatsApp } from "./contato";

// As duas frentes de trabalho. Atendimento como autônomo — quando o MEI sair,
// dá para acrescentar CNPJ e horário de atendimento aqui.
//
// TABELA DE PREÇOS (MdFormatting): deixei os serviços sugeridos com o preço em
// branco. Preencha o campo "preco" de cada linha, ex.: preco: "R$ 80".
// Enquanto ficar vazio, o site mostra "Sob consulta" — nada quebra.

export const servicos = [
  {
    marca: "MdDeveloper",
    icone: HiOutlineCodeBracket,
    titulo: "Desenvolvimento de sites, apps e sistemas",
    chamada: "Do layout ao projeto publicado",
    descricao:
      "Sites institucionais, portfólios, aplicativos de celular e sistemas web sob medida. Trabalho com React, Node.js e banco de dados, entregando o projeto no ar e pronto para usar.",
    itens: [
      "Sites institucionais e landing pages",
      "Portfólios profissionais",
      "Aplicativos para celular",
      "Sistemas web sob medida",
      "Integração de APIs e automações",
      "Publicação, domínio e manutenção",
    ],
    tecnologias: ["React", "React Native", "Node.js", "Tailwind CSS", "MySQL"],
    cta: {
      rotulo: "Solicitar orçamento",
      href: linkWhatsApp(
        "Olá Matheus! Vim pelo seu portfólio e quero um orçamento de site, app ou sistema."
      ),
    },
  },
  {
    marca: "MdFormatting",
    icone: HiOutlineWrenchScrewdriver,
    titulo: "Formatação e manutenção de computadores",
    chamada: "5 anos de experiência em Rolândia e região",
    descricao:
      "Da formatação simples ao diagnóstico de hardware e montagem de máquina do zero. Atendimento presencial em Rolândia, Londrina e região.",
    tabela: [
      { servico: "Formatação com backup dos arquivos", preco: "" },
      { servico: "Formatação simples", preco: "" },
      { servico: "Limpeza interna e troca de pasta térmica", preco: "" },
      { servico: "Upgrade de SSD ou memória RAM", preco: "" },
      { servico: "Remoção de vírus e otimização", preco: "" },
      { servico: "Montagem de PC completo", preco: "" },
    ],
    rodape: "Diagnóstico sem compromisso. Orçamento fechado antes do serviço.",
    tecnologias: ["Windows", "Hardware", "Backup", "Redes"],
    cta: {
      rotulo: "Chamar no WhatsApp",
      href: linkWhatsApp(
        "Olá Matheus! Vim pelo seu portfólio e preciso formatar ou consertar meu computador."
      ),
    },
  },
];
