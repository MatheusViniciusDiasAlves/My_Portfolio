import CabecalhoPagina from "../components/CabecalhoPagina";
import ContatoSecao from "../components/Contato";
import Seo from "../components/Seo";
import { rotaPorCaminho } from "../rotas";

const rota = rotaPorCaminho("/contato");

function Contato() {
  return (
    <>
      <Seo titulo={rota.titulo} descricao={rota.descricao} caminho={rota.caminho} />

      <div className="mx-auto max-w-4xl px-6 pb-14 pt-14 text-center">
        <CabecalhoPagina
          faixa="Vamos conversar"
          titulo="Entre em contato"
          apoio="Gostou do meu trabalho ou quer conversar sobre algum projeto? O WhatsApp é onde eu respondo mais rápido."
        />
      </div>

      <ContatoSecao />
    </>
  );
}

export default Contato;
