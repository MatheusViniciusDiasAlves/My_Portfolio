import CabecalhoPagina from "../components/CabecalhoPagina";
import SobreSecao from "../components/Sobre";
import Experiencia from "../components/Experiencia";
import Tecnologias from "../components/Tecnologias";
import Seo from "../components/Seo";
import { rotaPorCaminho } from "../rotas";

const rota = rotaPorCaminho("/sobre");

function Sobre() {
  return (
    <>
      <Seo titulo={rota.titulo} descricao={rota.descricao} caminho={rota.caminho} />

      <div className="mx-auto max-w-6xl px-6 pt-14">
        <CabecalhoPagina
          faixa="Quem eu sou"
          titulo="Sobre mim"
          apoio="Da bancada de manutenção ao desenvolvimento de sistemas, passando pela pesquisa científica."
        />
      </div>

      <SobreSecao />
      <Experiencia />
      <Tecnologias />
    </>
  );
}

export default Sobre;
