import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { contato, linkWhatsApp } from "../data/contato";

function Contato() {
  return (
    <section id="contato" className="px-6 pb-24">
      <div className="max-w-4xl mx-auto text-center">

        {/* WhatsApp em destaque: é o canal que mais converte para serviço */}
        <div className="flex justify-center">
          <a
            href={linkWhatsApp(
              "Olá Matheus! Vim pelo seu portfólio e gostaria de conversar."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-3
              rounded-lg
              bg-white
              px-8
              py-4
              text-lg
              font-semibold
              text-black
              transition
              hover:bg-slate-200
            "
          >
            <FaWhatsapp aria-hidden="true" className="h-6 w-6" />
            {contato.telefone}
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <a
            href={`mailto:${contato.email}`}
            className="
              flex
              items-center
              gap-2
              rounded-lg
              border border-slate-700
              bg-slate-900/70
              px-6 py-3
              hover:bg-slate-800
              transition
            "
          >
            <HiOutlineEnvelope aria-hidden="true" className="h-5 w-5" />
            E-mail
          </a>

          <a
            href={contato.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-2
              rounded-lg
              border border-slate-700
              bg-slate-900/70
              px-6 py-3
              hover:bg-slate-800
              transition
            "
          >
            <FaGithub aria-hidden="true" className="h-5 w-5" />
            GitHub
          </a>

          <a
            href={contato.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-2
              rounded-lg
              border border-slate-700
              bg-slate-900/70
              px-6 py-3
              hover:bg-slate-800
              transition
            "
          >
            <FaLinkedin aria-hidden="true" className="h-5 w-5" />
            LinkedIn
          </a>
        </div>

        <p className="text-slate-400 mt-8 text-sm">
          {contato.email}
        </p>

        {/* Responde as três perguntas que todo cliente faz antes de chamar.
            A página terminava no e-mail e sobrava um vão preto até o rodapé. */}
        <dl className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 text-left sm:grid-cols-3">
          {[
            {
              termo: "Onde eu atendo",
              texto:
                "Presencialmente em Rolândia, Londrina e região. Projetos de site e sistema, para qualquer lugar.",
            },
            {
              termo: "Como eu respondo",
              texto:
                "WhatsApp é o canal mais rápido. E-mail e LinkedIn também chegam, só demoram mais.",
            },
            {
              termo: "Quanto custa",
              texto:
                "Diagnóstico sem compromisso e orçamento fechado antes de começar. Sem surpresa no fim.",
            },
          ].map((item) => (
            <div key={item.termo} className="bg-slate-900/70 p-6">
              <dt className="font-mono text-xs uppercase tracking-[0.14em] text-acento">
                {item.termo}
              </dt>
              <dd className="mt-3 text-sm leading-relaxed text-slate-300">
                {item.texto}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default Contato;
