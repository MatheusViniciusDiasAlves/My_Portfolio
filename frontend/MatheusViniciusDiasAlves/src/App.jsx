import Navbar from "./components/Navbar";
import Contato from "./components/Contato";
import Hero from "./components/Hero";
import Projetos from "./components/Projetos";
import Publicacoes from "./components/Publicacoes";
import Servicos from "./components/Servicos";
import Sobre from "./components/Sobre";
import Experiencia from "./components/Experiencia";
import Tecnologias from "./components/Tecnologias";

// Ebooks está pronto mas desativado até existir o primeiro título.
// Para ligar: descomente o import e o <Ebooks /> abaixo, e os links no Navbar.
// import Ebooks from "./components/Ebooks";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Tecnologias />
        <Projetos />
        <Publicacoes />
        <Experiencia />
        {/* <Ebooks /> */}
        <Contato />
      </main>
    </>
  );
}

export default App;
