import ProjetoCard from "./ProjetoCard";

function Projetos() {

    const projetos = [
{
    nome: "Projeto DOM com JS",
    descricao:
        "Meu primeiro projeto com JavaScript, explorando a manipulação do DOM por meio de uma vitrine de carros.",
    tecnologias: ["JavaScript", "HTML", "CSS", "Bootstrap"],
    imagem: "/demonstrativos/2026-08-18-11-04-43.gif",
},

{
    nome: "Sistema de Login",
    descricao:
        "Sistema de cadastro e login de usuários desenvolvido com React, Node.js e MySQL, utilizando HASH para proteger as senhas.",
    tecnologias: ["React", "Node.js", "MySQL"],
    imagem: "/demonstrativos/2026-08-18-17-17-57.gif",
},

{
    nome: "Lista de Tarefas com LocalStorage",
    descricao:
        "Após aprender sobre armazenamento de dados no navegador, desenvolvi uma lista de tarefas utilizando LocalStorage para salvar as informações.",
    tecnologias: ["HTML", "Tailwind CSS", "JavaScript"],
    imagem: "/demonstrativos/2026-08-18-16-40-46.gif",
},

{
    nome: "SpinningCube",
    descricao:
        "Desenvolvi um cubo 3D animado utilizando HTML, CSS e auxílio de ferramentas de Inteligência Artificial para explorar animações e efeitos visuais.",
    tecnologias: ["HTML", "CSS", "Claude Code", "IA"],
    imagem: "/demonstrativos/2026-08-19-11-59-10.gif",
},

{
    nome: "Calculadora em JavaScript",
    descricao:
        "Desenvolvi uma calculadora web inspirada no design da calculadora do iPhone, utilizando JavaScript para implementar suas funcionalidades.",
    tecnologias: ["HTML", "JavaScript", "CSS"],
    imagem: "/demonstrativos/2026-08-19-12-10-06.gif",
},

{
    nome: "Minha Loja Virtual",
    descricao:
        "Projeto desenvolvido quando comecei a criar meus próprios sites para divulgar meus serviços de formatação e manutenção de computadores.",
    tecnologias: ["HTML", "JavaScript", "CSS"],
    imagem: "/demonstrativos/2026-08-19-12-18-11.gif",
},

{
    nome: "Teste Front-End xBrain",
    descricao:
        "Meu primeiro teste técnico para uma vaga de estágio em Front-End na xBrain. Apesar de não ter sido aprovado, o desafio proporcionou uma excelente experiência de aprendizado e evolução.",
    tecnologias: ["HTML", "React", "JavaScript"],
    imagem: "/demonstrativos/2026-08-19-13-56-35.gif",
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