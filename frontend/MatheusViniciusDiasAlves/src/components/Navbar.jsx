import { useState } from "react";

// O botão de Login está desativado no site publicado: o backend (Express +
// MySQL, na pasta "backend") só roda localmente, então a tela dava
// "Servidor fora do ar" para quem visitasse o site.
// O componente Login.jsx continua no projeto. Para reativar, basta:
//   1. publicar o backend e definir VITE_API_URL nas variáveis do Cloudflare;
//   2. voltar o import, o estado "mostrarLogin", os dois botões e o
//      {mostrarLogin && <Login ... />} no fim deste arquivo.

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


                {/* MENU DESKTOP */}
                <div className="hidden md:flex items-center gap-8">

                    <a href="#inicio" className="text-slate-300 hover:text-white transition">
                        Início
                    </a>

                    <a href="#sobre" className="text-slate-300 hover:text-white transition">
                        Sobre
                    </a>

                    <a href="#tecnologias" className="text-slate-300 hover:text-white transition">
                        Tecnologias
                    </a>

                    <a href="#projetos" className="text-slate-300 hover:text-white transition">
                        Projetos
                    </a>

                    <a href="#jornada" className="text-slate-300 hover:text-white transition">
                        Jornada
                    </a>

                    <a href="#contato" className="text-slate-300 hover:text-white transition">
                        Contato
                    </a>

                </div>


                {/* BOTÃO MOBILE */}
                <button
                    onClick={() => setMenuAberto(!menuAberto)}
                    aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={menuAberto}
                    className="md:hidden text-white text-2xl"
                >
                    {menuAberto ? "✕" : "☰"}
                </button>

            </div>


            {/* MENU MOBILE */}
            {menuAberto && (

                <div className="
                    md:hidden
                    px-6
                    pb-6
                    flex
                    flex-col
                    gap-4
                ">

                    <a
                        href="#inicio"
                        onClick={() => setMenuAberto(false)}
                        className="text-slate-300 hover:text-white"
                    >
                        Início
                    </a>

                    <a
                        href="#sobre"
                        onClick={() => setMenuAberto(false)}
                        className="text-slate-300 hover:text-white"
                    >
                        Sobre
                    </a>

                    <a
                        href="#tecnologias"
                        onClick={() => setMenuAberto(false)}
                        className="text-slate-300 hover:text-white"
                    >
                        Tecnologias
                    </a>

                    <a
                        href="#projetos"
                        onClick={() => setMenuAberto(false)}
                        className="text-slate-300 hover:text-white"
                    >
                        Projetos
                    </a>

                    <a
                        href="#jornada"
                        onClick={() => setMenuAberto(false)}
                        className="text-slate-300 hover:text-white"
                    >
                        Jornada
                    </a>

                    <a
                        href="#contato"
                        onClick={() => setMenuAberto(false)}
                        className="text-slate-300 hover:text-white"
                    >
                        Contato
                    </a>

                </div>

            )}

        </nav>
    );
}

export default Navbar;