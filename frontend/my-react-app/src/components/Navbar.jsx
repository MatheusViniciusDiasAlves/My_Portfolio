import { useState } from "react";

function Navbar() {

    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <nav className="
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

                {/* LOGO */}
                <a
                    href="#inicio"
                    className="text-xl font-bold text-white"
                >
                    Matheus<span className="text-slate-400">.</span>
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
                    className="md:hidden text-white text-2xl"
                >
                    ☰
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