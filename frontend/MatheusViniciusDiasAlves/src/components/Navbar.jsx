import { useState } from "react";

// O botão de Login está desativado no site publicado: o backend (Express +
// MySQL, na pasta "backend") só roda localmente, então a tela dava
// "Servidor fora do ar" para quem visitasse o site.
// O componente Login.jsx continua no projeto. Para reativar, basta:
//   1. publicar o backend e definir VITE_API_URL nas variáveis do Cloudflare;
//   2. voltar o import, o estado "mostrarLogin", os dois botões e o
//      {mostrarLogin && <Login ... />} no fim deste arquivo.

// Uma lista só alimenta o menu do desktop e o do celular.
// Para ligar a seção de ebooks, descomente a linha correspondente.
const links = [
    { href: "#inicio", rotulo: "Início" },
    { href: "#sobre", rotulo: "Sobre" },
    { href: "#servicos", rotulo: "Serviços" },
    { href: "#tecnologias", rotulo: "Tecnologias" },
    { href: "#projetos", rotulo: "Projetos" },
    { href: "#publicacoes", rotulo: "Publicações" },
    { href: "#experiencia", rotulo: "Experiência" },
    // { href: "#ebooks", rotulo: "Ebooks" },
    { href: "#contato", rotulo: "Contato" },
];

function Navbar() {

    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <nav
            aria-label="Navegação principal"
            className="
            fixed
            top-0
            left-0
            right-0
            z-50
            bg-black/40
            backdrop-blur-md
            border-b
            border-white/10
        ">

            <div className="
                max-w-6xl
                mx-auto
                px-6
                py-4
                flex
                items-center
                justify-between
            ">

                {/* LOGO — o mesmo cubo do favicon, aqui sem o fundo preto */}
                <a
                    href="#inicio"
                    className="flex items-center gap-2.5 text-xl font-bold text-white"
                >
                    <svg
                        viewBox="0 0 64 64"
                        aria-hidden="true"
                        className="h-7 w-7 shrink-0"
                        fill="none"
                        strokeWidth="4.5"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                    >
                        <path
                            d="M32 11 50 21.5 50 42.5 32 53 14 42.5 14 21.5Z"
                            stroke="currentColor"
                        />
                        <path
                            d="M32 32V53M32 32 50 21.5M32 32 14 21.5"
                            stroke="#94a3b8"
                        />
                    </svg>
                    Matheus Dias
                </a>


                {/* MENU DESKTOP — só a partir de lg, senão os 8 itens não cabem */}
                <div className="hidden lg:flex items-center gap-6">

                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-slate-300 hover:text-white transition"
                        >
                            {link.rotulo}
                        </a>
                    ))}

                </div>


                {/* BOTÃO MOBILE */}
                <button
                    onClick={() => setMenuAberto(!menuAberto)}
                    aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={menuAberto}
                    className="lg:hidden text-white text-2xl"
                >
                    {menuAberto ? "✕" : "☰"}
                </button>

            </div>


            {/* MENU MOBILE */}
            {menuAberto && (

                <div className="
                    lg:hidden
                    px-6
                    pb-6
                    flex
                    flex-col
                    gap-4
                ">

                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuAberto(false)}
                            className="text-slate-300 hover:text-white"
                        >
                            {link.rotulo}
                        </a>
                    ))}

                </div>

            )}

        </nav>
    );
}

export default Navbar;
