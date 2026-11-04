import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { rotasDoMenu } from "../rotas";

// O botão de Login está desativado no site publicado: o backend (Express +
// MySQL, na pasta "backend") só roda localmente, então a tela dava
// "Servidor fora do ar" para quem visitasse o site.
// O componente Login.jsx continua no projeto. Para reativar, basta:
//   1. publicar o backend e definir VITE_API_URL nas variáveis do Cloudflare;
//   2. voltar o import, o estado "mostrarLogin", os dois botões e o
//      {mostrarLogin && <Login ... />} no fim deste arquivo.

function Logo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={className}
      fill="none"
      strokeWidth="4.5"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      <path
        d="M32 11 50 21.5 50 42.5 32 53 14 42.5 14 21.5Z"
        stroke="currentColor"
      />
      <path d="M32 32V53M32 32 50 21.5M32 32 14 21.5" stroke="#94a3b8" />
    </svg>
  );
}

function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  const fecharMenu = () => setMenuAberto(false);

  // No celular o menu ocupa a tela inteira; travar a rolagem do fundo evita
  // a página correr por trás do painel.
  useEffect(() => {
    document.body.style.overflow = menuAberto ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuAberto]);

  const estiloLink = ({ isActive }) =>
    [
      "relative py-1 text-sm transition-colors",
      "after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-acento after:transition-all",
      isActive
        ? "text-white after:w-full"
        : "text-slate-400 hover:text-white after:w-0 hover:after:w-full",
    ].join(" ");

  return (
    <nav
      aria-label="Navegação principal"
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link
          to="/"
          onClick={fecharMenu}
          className="flex shrink-0 items-center gap-2.5 font-display text-lg font-bold text-white"
        >
          <Logo className="h-7 w-7 shrink-0" />
          Matheus Dias
        </Link>

        {/* MENU DESKTOP — a partir de md já cabem os seis itens */}
        <div className="hidden items-center gap-7 md:flex">
          {rotasDoMenu.map((rota) => (
            <NavLink key={rota.caminho} to={rota.caminho} className={estiloLink}>
              {rota.rotulo}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
          className="-mr-2 p-2 text-2xl leading-none text-white md:hidden"
        >
          {menuAberto ? "✕" : "☰"}
        </button>
      </div>

      {/* MENU MOBILE */}
      {menuAberto && (
        <div className="border-t border-white/10 bg-black/95 px-6 pb-8 pt-2 md:hidden">
          <div className="flex flex-col">
            {rotasDoMenu.map((rota) => (
              <NavLink
                key={rota.caminho}
                to={rota.caminho}
                onClick={fecharMenu}
                className={({ isActive }) =>
                  [
                    "border-b border-white/5 py-4 text-base transition-colors",
                    isActive ? "text-acento" : "text-slate-300 hover:text-white",
                  ].join(" ")
                }
              >
                {rota.rotulo}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
