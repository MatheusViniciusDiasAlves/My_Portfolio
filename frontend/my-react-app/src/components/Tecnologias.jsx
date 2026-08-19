import {
    SiHtml5,
    SiCss,
    SiJavascript,
    SiReact,
    SiTailwindcss,
    SiNodedotjs,
    SiMysql
} from "react-icons/si";


function Tecnologias() {

    const tecnologias = [
        {
            nome: "HTML",
            icone: SiHtml5
        },
        {
            nome: "CSS",
            icone: SiCss3
        },
        {
            nome: "JavaScript",
            icone: SiJavascript
        },
        {
            nome: "React",
            icone: SiReact
        },
        {
            nome: "Tailwind CSS",
            icone: SiTailwindcss
        },
        {
            nome: "Node.js",
            icone: SiNodedotjs
        },
        {
            nome: "MySQL",
            icone: SiMysql
        }
    ];


    return (
        <section
            id="tecnologias"
            className="relative z-10 text-white px-6 py-24"
        >

            <div className="max-w-6xl mx-auto">

                <h2 className="text-4xl md:text-5xl font-bold text-center">
                    Tecnologias
                </h2>

                <p className="text-slate-300 text-center mt-4">
                    Tecnologias que estou estudando e utilizando nos meus projetos.
                </p>


                <div className="
                    grid
                    grid-cols-2
                    sm:grid-cols-3
                    md:grid-cols-4
                    lg:grid-cols-7
                    gap-4
                    mt-12
                ">

                    {tecnologias.map((tecnologia) => {

                        const Icone = tecnologia.icone;

                        return (
                            <div
                                key={tecnologia.nome}
                                className="
                                    group
                                    flex
                                    flex-col
                                    items-center
                                    justify-center
                                    gap-3
                                    p-5
                                    rounded-2xl
                                    bg-slate-900/40
                                    border
                                    border-white/10
                                    backdrop-blur-sm
                                    hover:bg-slate-900/70
                                    hover:border-white/20
                                    hover:-translate-y-2
                                    transition-all
                                    duration-300
                                "
                            >

                                <Icone
                                    className="
                                        text-5xl
                                        transition-transform
                                        duration-300
                                        group-hover:scale-110
                                    "
                                />

                                <span className="text-sm text-slate-300 text-center">
                                    {tecnologia.nome}
                                </span>

                            </div>
                        );

                    })}

                </div>

            </div>

        </section>
    );
}

export default Tecnologias;