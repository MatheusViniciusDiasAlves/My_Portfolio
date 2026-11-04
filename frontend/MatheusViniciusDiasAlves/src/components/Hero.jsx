import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";
import { linkWhatsApp } from "../data/contato";

// O CubeBackground saiu daqui e foi para o Layout: ele é "fixed inset-0", o
// fundo do site inteiro, e preso ao Hero sumia em toda página que não fosse
// a inicial.

function Hero() {
  return (
    <section
      id="inicio"
      className="px-6 pb-24 pt-14 sm:pt-20"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 md:grid-cols-2">

        {/* TEXTO */}
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-acento">
            Rolândia e Londrina — PR
          </p>

          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.03] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Matheus Vinícius
            <span className="block text-slate-400">Dias Alves</span>
          </h1>

          <p className="mt-5 text-xl text-slate-200 sm:text-2xl">
            Desenvolvedor full-stack
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            Crio sites, aplicativos e sistemas web sob medida — do layout ao
            projeto publicado. Também cuido de formatação e manutenção de
            computadores, com cinco anos de bancada atendendo a região.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/projetos"
              className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:bg-slate-200"
            >
              Ver meus projetos
              <HiArrowRight aria-hidden="true" className="h-5 w-5" />
            </Link>

            <a
              href={linkWhatsApp(
                "Olá Matheus! Vim pelo seu portfólio e quero um orçamento."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-acento/60 hover:bg-white/10"
            >
              <FaWhatsapp aria-hidden="true" className="h-5 w-5" />
              Pedir orçamento
            </a>
          </div>
        </div>

        {/* FOTO */}
        <div className="flex justify-center md:justify-end">
          <div className="h-72 w-72 overflow-hidden rounded-full border-2 border-white/25 shadow-[0_0_60px_rgba(255,255,255,0.12)] md:h-96 md:w-96">
            <img
              src="/perfil/matheus-formal.jpg"
              alt="Foto de Matheus Vinícius Dias Alves"
              width="384"
              height="384"
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
