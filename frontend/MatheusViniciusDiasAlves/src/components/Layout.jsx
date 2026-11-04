import { Outlet } from "react-router-dom";
import CubeBackground from "./CubeBackground";
import Navbar from "./Navbar";
import Rodape from "./Rodape";
import ScrollToTop from "./ScrollToTop";

// Moldura comum às seis páginas.
//
// O CubeBackground vive aqui, e não dentro do Hero como antes: ele é
// "fixed inset-0", ou seja, fundo do site inteiro. Preso ao Hero, sumia em
// toda página que não fosse a inicial.
//
// O pt-20 compensa a altura do Navbar, que é fixo.

function Layout() {
  return (
    <>
      <CubeBackground />
      <ScrollToTop />

      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-black"
      >
        Pular para o conteúdo
      </a>

      <Navbar />

      <main id="conteudo" className="relative z-10 pt-20 text-white">
        <Outlet />
      </main>

      <Rodape />
    </>
  );
}

export default Layout;
