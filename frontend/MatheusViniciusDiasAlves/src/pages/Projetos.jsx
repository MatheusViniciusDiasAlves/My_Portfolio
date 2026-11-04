import CabecalhoPagina from "../components/CabecalhoPagina";
import ProjetosSecao from "../components/Projetos";
import Seo from "../components/Seo";
import { rotaPorCaminho } from "../rotas";
import { projetos } from "../data/projetos";

const rota = rotaPorCaminho("/projetos");

function Projetos() {
  return (
    <>
      <Seo titulo={rota.titulo} descricao={rota.descricao} caminho={rota.caminho} />

      <div className="mx-auto max-w-6xl px-6 pb-14 pt-14">
        <CabecalhoPagina
          faixa={`${projetos.length} projetos`}
          titulo="Projetos"
          apoio="Do primeiro experimento com JavaScript ao site institucional entregue para um cliente real. Na ordem em que fui aprendendo."
        />
      </div>

      <ProjetosSecao />
    </>
  );
}

export default Projetos;
