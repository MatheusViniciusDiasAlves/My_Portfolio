function Jornada() {

    const jornada = [
        {
            ano: "2021",
            titulo: "Curso de Manutenção de Computadores e Celulares",
            descricao:
                "Aprendi sobre formatação de computadores, manutenção, instalação de softwares que aprofundou meus conhecimentos!",
        },
        {
            ano: "2025",
            titulo: "Primeiros projetos",
            descricao:
                "Comecei a colocar meus conhecimentos em prática criando pequenos projetos para desenvolver minha lógica de programação.",
        },
        {
            ano: "2026",
            titulo: "JavaScript e desenvolvimento Web",
            descricao:
                "Passei a estudar JavaScript de forma mais aprofundada, trabalhando com funções, arrays, eventos, DOM e armazenamento de dados.",
        },
        {
            ano: "2026",
            titulo: "React, Node.js e MySQL",
            descricao:
                "Comecei a estudar React no frontend e também Node.js, Express e MySQL para entender o desenvolvimento de aplicações completas.",
        },
        {
            ano: "Atual",
            titulo: "Construindo meu portfólio",
            descricao:
                "Estou desenvolvendo este portfólio para colocar meus projetos em prática e continuar evoluindo como desenvolvedor.",
        },
    ];

    return (
        <section
            id="jornada"
            className="relative z-10 text-white px-6 py-24"
        >
            <div className="max-w-4xl mx-auto">

                <h2 className="text-4xl md:text-5xl font-bold text-center">
                    Minha Jornada
                </h2>

                <p className="text-slate-300 text-center mt-4">
                    Um pouco da minha evolução na programação.
                </p>


                <div className="relative mt-16">

                    {/* Linha da timeline */}
                    <div className="
                        absolute
                        left-4
                        md:left-1/2
                        top-0
                        bottom-0
                        w-px
                        bg-white/20
                    " />


                    {jornada.map((item, index) => (

                        <div
                            key={`${item.ano}-${item.titulo}`}
                            className={`
                                relative
                                flex
                                mb-12
                                ${
                                    index % 2 === 0
                                        ? "md:justify-start"
                                        : "md:justify-end"
                                }
                            `}
                        >

                            {/* Ponto da timeline */}
                            <div className="
                                absolute
                                left-4
                                md:left-1/2
                                -translate-x-1/2
                                w-3
                                h-3
                                rounded-full
                                bg-white
                                border-4
                                border-slate-950
                                z-10
                            " />


                            {/* Card */}
                            <div className="
                                ml-12
                                md:ml-0
                                md:w-[45%]
                                bg-slate-900/40
                                backdrop-blur-sm
                                border
                                border-white/10
                                rounded-2xl
                                p-6
                                hover:bg-slate-900/60
                                hover:border-white/20
                                transition-all
                                duration-300
                            ">

                                <span className="
                                    text-sm
                                    text-slate-400
                                    font-semibold
                                ">
                                    {item.ano}
                                </span>

                                <h3 className="
                                    text-xl
                                    md:text-2xl
                                    font-bold
                                    mt-2
                                ">
                                    {item.titulo}
                                </h3>

                                <p className="
                                    text-slate-300
                                    mt-3
                                    leading-relaxed
                                ">
                                    {item.descricao}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default Jornada;