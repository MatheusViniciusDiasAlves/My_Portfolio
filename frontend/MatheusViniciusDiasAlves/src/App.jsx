import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Inicio from "./pages/Inicio";
import Sobre from "./pages/Sobre";
import Servicos from "./pages/Servicos";
import Projetos from "./pages/Projetos";
import Publicacoes from "./pages/Publicacoes";
import Contato from "./pages/Contato";
import NaoEncontrada from "./pages/NaoEncontrada";

// Os endereços e seus textos de SEO ficam em src/rotas.js, que também
// alimenta o menu, o rodapé e a geração do sitemap.xml. Acrescentar uma
// página é acrescentar um item lá e uma <Route> aqui.
//
// A seção de Ebooks continua pronta e desligada (src/components/Ebooks.jsx).
// Quando o primeiro título existir, ela vira a página /ebooks.

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="servicos" element={<Servicos />} />
        <Route path="projetos" element={<Projetos />} />
        <Route path="publicacoes" element={<Publicacoes />} />
        <Route path="contato" element={<Contato />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Route>
    </Routes>
  );
}

export default App;
