import CabecalhoPagina from "../components/CabecalhoPagina";
import ServicosSecao from "../components/Servicos";
import Seo from "../components/Seo";
import { rotaPorCaminho } from "../rotas";

const rota = rotaPorCaminho("/servicos");

function Servicos() {
  return (
    <>
      <Seo titulo={rota.titulo} descricao={rota.descricao} caminho={rota.caminho} />

      <div className="mx-auto max-w-6xl px-6 pb-14 pt-14">
        <CabecalhoPagina
          faixa="Como eu posso ajudar"
          titulo="Serviços"
          apoio="Duas frentes de trabalho: desenvolvimento de software e manutenção de computadores. Atendo Rolândia, Londrina e região — e remotamente para projetos web."
        />
      </div>

      <ServicosSecao />
    </>
  );
}

export default Servicos;
