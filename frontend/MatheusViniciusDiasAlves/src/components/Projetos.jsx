import ProjetoCard from "./ProjetoCard";
import { projetos } from "../data/projetos";

function Projetos() {

    return (
        <section id="projetos" className="px-6 pb-24">

            <div className="max-w-6xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {projetos.map((projeto) => (
                        <ProjetoCard key={projeto.nome} projeto={projeto} />
                    ))}

                </div>

            </div>

        </section>
    );
}

export default Projetos;
