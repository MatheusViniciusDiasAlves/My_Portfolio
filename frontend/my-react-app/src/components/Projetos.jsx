import ProjetoCard from "./ProjetoCard";

function Projetos() {

    const projetos = [
        {
            nome: "Projeto DOM com JS",
            descricao:
                "Primeiro projeto feito com JavaScript manipulando DOM com vitrine de carros.",
            tecnologias: ["JavaScript", "HTML", "CSS", "Bootstrap"],
            imagem: "/demonstrativos/2026-08-18-11-04-43.gif",
        },

        {
            nome: "Lista de Tarefas",
            descricao:
                "Sistema de cadastramento de usuário utilizando Node.js e MySQL. Também fiz a camada de proteção com HASH no projeto",
            tecnologias: ["React", "Node.js", "MySQL"],
            imagem: "/demonstrativos/2026-08-18-17-17-57.gif",
        },

        {
            nome: "Lista de Tarefas em LocalStorage",
            descricao:
                "Após aprender sobre armazenamento, aprofundei meus conhecimentos em LocalStorage.",
            tecnologias: ["HTML", "Tailwind CSS", "JavaScript"],
            imagem: "/demonstrativos/2026-08-18-16-40-46.gif",
        },
    ];

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
                        <ProjetoCard
                            key={projeto.nome}
                            nome={projeto.nome}
                            descricao={projeto.descricao}
                            tecnologias={projeto.tecnologias}
                            imagem={projeto.imagem}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}

export default Projetos;