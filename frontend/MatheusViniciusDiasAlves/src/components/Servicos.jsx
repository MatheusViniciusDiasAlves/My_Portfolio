import { servicos } from "../data/servicos";

function Servicos() {
    return (
        <section
            id="servicos"
            className="relative z-10 text-white px-6 py-24"
        >
            <div className="max-w-6xl mx-auto">

                <h2 className="text-4xl md:text-5xl font-bold text-center">
                    Serviços
                </h2>

                <p className="text-slate-300 text-center mt-4 max-w-2xl mx-auto">
                    Duas frentes de trabalho: desenvolvimento de software e
                    manutenção de computadores. Atendo Rolândia, Londrina e
                    região — e remotamente para projetos web.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">

                    {servicos.map((servico) => (

                        <article
                            key={servico.marca}
                            className="
                                flex
                                flex-col
                                bg-slate-900/40
                                backdrop-blur-sm
                                border
                                border-white/10
                                rounded-2xl
                                p-8
                                hover:bg-slate-900/60
                                hover:border-white/20
                                transition-all
                                duration-300
                            "
                        >

                            <span className="text-sm font-semibold tracking-wide text-slate-400">
                                {servico.marca}
                            </span>

                            <h3 className="text-2xl md:text-3xl font-bold mt-2">
                                {servico.titulo}
                            </h3>

                            <p className="text-slate-300 mt-4 leading-relaxed">
                                {servico.descricao}
                            </p>

                            <ul className="mt-6 space-y-2">
                                {servico.itens.map((item) => (
                                    <li
                                        key={item}
                                        className="flex gap-3 text-slate-300"
                                    >
                                        <span aria-hidden="true" className="text-slate-500">
                                            —
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2 mt-6">
                                {servico.tecnologias.map((tecnologia) => (
                                    <span
                                        key={tecnologia}
                                        className="
                                            px-3
                                            py-1
                                            bg-slate-800/80
                                            border
                                            border-slate-700
                                            rounded-full
                                            text-sm
                                            text-slate-200
                                        "
                                    >
                                        {tecnologia}
                                    </span>
                                ))}
                            </div>

                            {/* mt-auto mantém os botões alinhados mesmo com textos de alturas diferentes */}
                            <a
                                href={servico.cta.href}
                                className="
                                    mt-auto
                                    pt-8
                                    self-start
                                    text-white
                                    font-semibold
                                    underline
                                    underline-offset-4
                                    decoration-slate-600
                                    hover:decoration-white
                                    transition
                                "
                            >
                                {servico.cta.rotulo} →
                            </a>

                        </article>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default Servicos;
