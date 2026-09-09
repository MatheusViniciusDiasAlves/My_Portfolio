import { experiencias, formacao } from "../data/experiencias";

function Experiencia() {
    return (
        <section
            id="experiencia"
            className="relative z-10 text-white px-6 py-24"
        >
            <div className="max-w-4xl mx-auto">

                <h2 className="text-4xl md:text-5xl font-bold text-center">
                    Experiência
                </h2>

                <p className="text-slate-300 text-center mt-4">
                    Minha trajetória profissional, da mais recente para a mais antiga.
                </p>


                <ol className="relative mt-16 space-y-10">

                    {/* Linha da timeline */}
                    <div
                        aria-hidden="true"
                        className="absolute left-2 top-2 bottom-2 w-px bg-white/15"
                    />

                    {experiencias.map((item) => (

                        <li
                            key={`${item.empresa}-${item.cargo}`}
                            className="relative pl-10"
                        >

                            {/* Ponto da timeline */}
                            <span
                                aria-hidden="true"
                                className={`
                                    absolute
                                    left-0
                                    top-2
                                    h-4
                                    w-4
                                    rounded-full
                                    border-4
                                    border-slate-950
                                    ${item.atual ? "bg-white" : "bg-slate-500"}
                                `}
                            />

                            <div className="
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

                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="text-sm font-semibold text-slate-400">
                                        {item.periodo}
                                    </span>
                                    {item.atual && (
                                        <span className="rounded-full bg-white/10 border border-white/20 px-2.5 py-0.5 text-xs font-semibold text-white">
                                            Atual
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold mt-2">
                                    {item.cargo}
                                </h3>

                                <p className="text-slate-300 mt-1">
                                    {item.empresa} · {item.vinculo} · {item.local}
                                </p>

                                <p className="text-slate-300 mt-4 leading-relaxed">
                                    {item.descricao}
                                </p>

                                {item.destaques.length > 0 && (
                                    <ul className="mt-4 space-y-1.5">
                                        {item.destaques.map((destaque) => (
                                            <li
                                                key={destaque}
                                                className="flex gap-3 text-slate-400 text-sm"
                                            >
                                                <span aria-hidden="true">—</span>
                                                {destaque}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                <div className="flex flex-wrap gap-2 mt-5">
                                    {item.competencias.map((competencia) => (
                                        <span
                                            key={competencia}
                                            className="
                                                px-3
                                                py-1
                                                bg-slate-800/70
                                                border
                                                border-slate-700
                                                rounded-full
                                                text-xs
                                                text-slate-200
                                            "
                                        >
                                            {competencia}
                                        </span>
                                    ))}
                                </div>

                            </div>

                        </li>

                    ))}

                </ol>


                {/* FORMAÇÃO */}
                <h3 className="text-2xl md:text-3xl font-bold text-center mt-20">
                    Formação acadêmica
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

                    {formacao.map((curso) => (

                        <article
                            key={curso.curso}
                            className="
                                bg-slate-900/40
                                backdrop-blur-sm
                                border
                                border-white/10
                                rounded-2xl
                                p-6
                                hover:border-white/20
                                transition-all
                                duration-300
                            "
                        >

                            <div className="flex items-center gap-3">
                                <span className="text-sm text-slate-400">
                                    {curso.periodo}
                                </span>
                                <span className="rounded-full bg-slate-800/80 border border-slate-700 px-2.5 py-0.5 text-xs text-slate-200">
                                    {curso.situacao}
                                </span>
                            </div>

                            <h4 className="text-lg font-bold mt-2">
                                {curso.curso}
                            </h4>

                            <p className="text-slate-400 text-sm mt-1">
                                {curso.nivel}
                            </p>

                            <p className="text-slate-300 mt-2">
                                {curso.instituicao}
                            </p>

                        </article>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default Experiencia;
