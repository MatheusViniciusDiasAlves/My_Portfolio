import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi2";
import Seo from "../components/Seo";

// O Worker devolve o index.html para qualquer rota desconhecida
// (not_found_handling: single-page-application no wrangler.jsonc), então é o
// React que precisa dizer que a página não existe.

function NaoEncontrada() {
  return (
    <>
      <Seo
        titulo="Página não encontrada | Matheus Vinícius Dias Alves"
        descricao="A página que você procurou não existe neste site."
        caminho="/404"
      />

      <section className="px-6 py-28">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-acento">
            Erro 404
          </p>

          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Essa página não existe
          </h1>

          <p className="mt-5 leading-relaxed text-slate-300">
            O endereço pode ter sido digitado errado, ou a página pode ter
            mudado de lugar. Os caminhos do menu continuam todos no ar.
          </p>

          <Link
            to="/"
            className="mt-9 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:bg-slate-200"
          >
            <HiArrowLeft aria-hidden="true" className="h-5 w-5" />
            Voltar para o início
          </Link>
        </div>
      </section>
    </>
  );
}

export default NaoEncontrada;
