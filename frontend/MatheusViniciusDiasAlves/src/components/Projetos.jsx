import ProjetoCard from "./ProjetoCard";
import { projetos } from "../data/projetos";

function Projetos() {

    return (
        <section
            id="projetos"
            className="relative z-10 text-white px-6 py-20"
        >

            <div className="max-w-6xl mx-auto">

                <h2 className="text-4xl md:text-5xl font-bold text-center">
                    Meus projetos
                </h2>

                <p className="text-slate-300 text-center mt-4">
                    Alguns dos projetos que desenvolvi durante meus estudos.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

                    {projetos.map((projeto) => (
                        <ProjetoCard key={projeto.nome} projeto={projeto} />
                    ))}

                </div>

            </div>

        </section>
    );
}

export default Projetos;
