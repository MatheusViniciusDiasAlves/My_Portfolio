import Navbar from "./components/Navbar";
import Contato from "./components/Contato";
import Hero from "./components/Hero";
import Projetos from "./components/Projetos";
import Sobre from "./components/Sobre";
import Jornada from "./components/Jornada";
import Tecnologias from "./components/Tecnologias";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sobre />
    
      <Projetos />
      <Jornada />
      <Contato />
    </>
  );
}

export default App;
