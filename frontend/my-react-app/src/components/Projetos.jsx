import ProjetoCard from "./ProjetoCard";

function Projetos() {

    const projetos = [
        {
            nome: "Lista de Tarefas",
            descricao:
                "Aplicação de lista de tarefas desenvolvida durante meus estudos de JavaScript.",
            tecnologia: "JavaScript",
            imagem: "/projetos/lista-tarefas.webp",
        },

        {
            nome: "Sistema de Login",
            descricao:
                "Sistema de autenticação desenvolvido com React, Node.js e MySQL.",
            tecnologia: "React",
            imagem: "/projetos/sistema-login.webp",
        },

        {
            nome: "Meu Portfólio",
            descricao:
                "Meu portfólio pessoal desenvolvido utilizando React e Tailwind CSS.",
            tecnologia: "React",
            imagem: "/projetos/portfolio.webp",
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
                            tecnologia={projeto.tecnologia}
                            imagem={projeto.imagem}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}

export default Projetos;