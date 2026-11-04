import CabecalhoPagina from "../components/CabecalhoPagina";
import PublicacoesSecao from "../components/Publicacoes";
import Seo from "../components/Seo";
import { rotaPorCaminho } from "../rotas";

const rota = rotaPorCaminho("/publicacoes");

function Publicacoes() {
  return (
    <>
      <Seo titulo={rota.titulo} descricao={rota.descricao} caminho={rota.caminho} />

      <div className="mx-auto max-w-5xl px-6 pb-14 pt-14">
        <CabecalhoPagina
          faixa="Produção científica"
          titulo="Publicações e prêmios"
          apoio="Trabalhos publicados como bolsista de Iniciação Científica, e os reconhecimentos que recebi pelo caminho."
        />
      </div>

      <PublicacoesSecao />
    </>
  );
}

export default Publicacoes;
