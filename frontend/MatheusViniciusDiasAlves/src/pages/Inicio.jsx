import { Link } from "react-router-dom";
import { HiArrowRight, HiOutlineCodeBracket, HiOutlineWrenchScrewdriver, HiOutlineAcademicCap } from "react-icons/hi2";
import Hero from "../components/Hero";
import SecaoCabecalho from "../components/SecaoCabecalho";
import Seo from "../components/Seo";
import { rotaPorCaminho } from "../rotas";

const rota = rotaPorCaminho("/");

// A home não repete o site inteiro: ela apresenta e encaminha. Cada cartão
// leva para a página que trata o assunto a fundo.
const caminhos = [
  {
    icone: HiOutlineCodeBracket,
    titulo: "Sites e sistemas",
    texto:
      "Sites institucionais, portfólios, aplicativos e sistemas web sob medida em React, Node.js e MySQL.",
    para: "/servicos",
    acao: "Ver serviços e preços",
  },
  {
    icone: HiOutlineWrenchScrewdriver,
    titulo: "Manutenção de computadores",
    texto:
      "Formatação com backup, limpeza, troca de pasta térmica e montagem de PC. Atendimento presencial na região.",
    para: "/servicos",
    acao: "Ver a tabela de preços",
  },
  {
    icone: HiOutlineAcademicCap,
    titulo: "Pesquisa científica",
    texto:
      "Bolsista de Iniciação Científica, com trabalhos sobre Inteligência Artificial na educação e o Scratch na escola.",
    para: "/publicacoes",
    acao: "Ver as publicações",
  },
];

function Inicio() {
  return (
    <>
      <Seo titulo={rota.titulo} descricao={rota.descricao} caminho={rota.caminho} />

      <Hero />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SecaoCabecalho
            faixa="O que eu faço"
            titulo="Três frentes de trabalho"
            apoio="Desenvolvimento, manutenção e pesquisa. Cada uma com a sua página, se você quiser o detalhe."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {caminhos.map((item) => {
              const Icone = item.icone;

              return (
                <Link
                  key={item.titulo}
                  to={item.para}
                  className="group flex flex-col rounded-2xl border border-white/10 bg-slate-900/50 p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1.5 hover:border-acento/40 hover:bg-slate-900/70"
                >
                  <Icone
                    aria-hidden="true"
                    className="h-9 w-9 text-acento"
                  />

                  <h3 className="mt-5 font-display text-xl font-bold">
                    {item.titulo}
                  </h3>

                  <p className="mt-3 flex-1 leading-relaxed text-slate-300">
                    {item.texto}
                  </p>

                  <span className="mt-6 flex items-center gap-2 text-sm font-semibold text-white">
                    {item.acao}
                    <HiArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-slate-900/50 p-10 text-center backdrop-blur-sm sm:p-14">
          <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Tem um projeto em mente?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-slate-300">
            Orçamento fechado antes de começar, sem compromisso. Me conte o que
            você precisa e eu digo o que dá para fazer.
          </p>

          <Link
            to="/contato"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 font-semibold text-black transition hover:bg-slate-200"
          >
            Falar comigo
            <HiArrowRight aria-hidden="true" className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Inicio;
