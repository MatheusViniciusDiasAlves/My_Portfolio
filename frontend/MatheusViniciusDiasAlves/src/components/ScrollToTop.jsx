import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Sem isto o React Router mantém a rolagem onde estava: você clica em
// "Projetos" no fim da página e cai no meio da página nova.
//
// A âncora (#servicos vindo de outra página) continua funcionando: quando há
// hash, rolamos até o elemento em vez de ir ao topo.

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const alvo = document.getElementById(hash.slice(1));

      if (alvo) {
        alvo.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
