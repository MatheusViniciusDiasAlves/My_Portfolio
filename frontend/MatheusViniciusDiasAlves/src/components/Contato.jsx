import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { contato, linkWhatsApp } from "../data/contato";

function Contato() {
  return (
    <section id="contato" className="relative z-10 text-white px-6 py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold">Entre em contato</h2>

        <p className="text-slate-300 mt-5 text-lg">
          Gostou do meu trabalho ou quer conversar sobre algum projeto? Chame no
          WhatsApp que respondo rápido.
        </p>

        {/* WhatsApp em destaque: é o canal que mais converte para serviço */}
        <div className="flex justify-center mt-10">
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
      </div>
    </section>
  );
}

export default Contato;
