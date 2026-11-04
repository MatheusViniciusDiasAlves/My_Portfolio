import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { rotasDoMenu } from "../rotas";
import { contato, linkWhatsApp } from "../data/contato";

// O site não tinha rodapé. Num site de uma página só isso passa; com seis
// páginas, é o que fecha a leitura e dá um segundo caminho para o contato
// sem obrigar a voltar ao topo.

const redes = [
  { nome: "WhatsApp", icone: FaWhatsapp, href: linkWhatsApp("Olá Matheus! Vim pelo seu portfólio.") },
  { nome: "GitHub", icone: FaGithub, href: contato.github },
  { nome: "LinkedIn", icone: FaLinkedin, href: contato.linkedin },
  { nome: "E-mail", icone: HiOutlineEnvelope, href: `mailto:${contato.email}` },
];

function Rodape() {
  return (
    <footer className="relative z-10 mt-24 border-t border-white/10 bg-black/60 text-slate-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-lg font-bold text-white">
            Matheus Vinícius Dias Alves
          </p>

          <p className="mt-3 max-w-sm text-sm leading-relaxed">
            Desenvolvedor full-stack e técnico de manutenção. Sites, sistemas
            sob medida e atendimento presencial em Rolândia, Londrina e região.
          </p>

          <div className="mt-6 flex gap-3">
            {redes.map((rede) => {
              const Icone = rede.icone;

              return (
                <a
                  key={rede.nome}
                  href={rede.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={rede.nome}
                  className="rounded-lg border border-white/10 bg-white/5 p-2.5 text-slate-300 transition hover:border-acento/50 hover:text-white"
                >
                  <Icone aria-hidden="true" className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        <nav aria-label="Navegação do rodapé">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
            Navegação
          </p>

          <ul className="mt-4 space-y-2.5 text-sm">
            {rotasDoMenu.map((rota) => (
              <li key={rota.caminho}>
                <Link to={rota.caminho} className="transition hover:text-white">
                  {rota.rotulo}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
            Contato
          </p>

          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a
                href={linkWhatsApp("Olá Matheus! Vim pelo seu portfólio.")}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                {contato.telefone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contato.email}`}
                className="break-all transition hover:text-white"
              >
                {contato.email}
              </a>
            </li>
            <li>Rolândia e Londrina — PR</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <p className="mx-auto max-w-6xl px-6 py-6 text-xs text-slate-500">
          © {new Date().getFullYear()} Matheus Vinícius Dias Alves. Feito com
          React, Tailwind CSS e publicado na Cloudflare.
        </p>
      </div>
    </footer>
  );
}

export default Rodape;
