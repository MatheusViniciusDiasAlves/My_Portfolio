import { HiCheck } from "react-icons/hi2";
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">

                    {servicos.map((servico) => {

                        const Icone = servico.icone;

                        return (
                            <article
                                key={servico.marca}
                                className="
                                    group
                                    relative
                                    flex
                                    flex-col
                                    overflow-hidden
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-slate-900/50
                                    backdrop-blur-sm
                                    p-8
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:border-white/25
                                    hover:bg-slate-900/70
                                "
                            >

                                {/* Brilho sutil no topo, só no hover — dá profundidade
                                    sem introduzir cor nova na paleta do site */}
                                <div
                                    aria-hidden="true"
                                    className="
                                        pointer-events-none
                                        absolute
                                        -top-24
                                        left-1/2
                                        h-48
                                        w-72
                                        -translate-x-1/2
                                        rounded-full
                                        bg-white/5
                                        blur-3xl
                                        opacity-0
                                        transition-opacity
                                        duration-500
                                        group-hover:opacity-100
                                    "
                                />

                                {/* CABEÇALHO: ícone + marca */}
                                <div className="relative flex items-center gap-4">

                                    <span className="
                                        flex
                                        h-14
                                        w-14
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-xl
                                        border
                                        border-white/15
                                        bg-white/5
                                        transition-colors
                                        duration-300
                                        group-hover:border-white/30
                                        group-hover:bg-white/10
                                    ">
                                        <Icone
                                            aria-hidden="true"
                                            className="h-7 w-7 text-white"
                                        />
                                    </span>

                                    <div>
                                        <p className="text-lg font-bold tracking-tight">
                                            {servico.marca}
                                        </p>
                                        <p className="text-sm text-slate-400">
                                            {servico.chamada}
                                        </p>
                                    </div>

                                </div>

                                <h3 className="relative text-2xl font-bold mt-7 leading-snug">
                                    {servico.titulo}
                                </h3>

                                <p className="relative text-slate-300 mt-3 leading-relaxed">
                                    {servico.descricao}
                                </p>

                                {/* Duas formas de listar: checklist do que está
                                    incluído, ou tabela de serviço + preço */}
                                {servico.itens && (
                                    <ul className="relative mt-6 space-y-3">
                                        {servico.itens.map((item) => (
                                            <li
                                                key={item}
                                                className="flex items-start gap-3 text-slate-200"
                                            >
                                                <HiCheck
                                                    aria-hidden="true"
                                                    className="mt-0.5 h-5 w-5 shrink-0 text-white"
                                                />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {servico.tabela && (
                                    <>
                                        <ul className="relative mt-6 divide-y divide-white/10 border-y border-white/10">
                                            {servico.tabela.map((linha) => (
                                                <li
                                                    key={linha.servico}
                                                    className="flex items-baseline justify-between gap-4 py-3"
                                                >
                                                    <span className="text-slate-200">
                                                        {linha.servico}
                                                    </span>
                                                    <span
                                                        className={`shrink-0 font-semibold ${
                                                            linha.preco
                                                                ? "text-white"
                                                                : "text-sm font-normal text-slate-400"
                                                        }`}
                                                    >
                                                        {linha.preco || "Sob consulta"}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>

                                        {servico.rodape && (
                                            <p className="relative mt-3 text-sm text-slate-400">
                                                {servico.rodape}
                                            </p>
                                        )}
                                    </>
                                )}

                                <div className="relative flex flex-wrap gap-2 mt-7">
                                    {servico.tecnologias.map((tecnologia) => (
                                        <span
                                            key={tecnologia}
                                            className="
                                                rounded-full
                                                border
                                                border-slate-700
                                                bg-slate-800/70
                                                px-3
                                                py-1
                                                text-sm
                                                text-slate-200
                                            "
                                        >
                                            {tecnologia}
                                        </span>
                                    ))}
                                </div>

                                {/* mt-auto alinha os botões mesmo com textos de alturas diferentes */}
                                <a
                                    href={servico.cta.href}
                                    className="
                                        relative
                                        mt-auto
                                        pt-8
                                    "
                                >
                                    <span className="
                                        block
                                        w-full
                                        rounded-lg
                                        bg-white
                                        px-6
                                        py-3
                                        text-center
                                        font-semibold
                                        text-black
                                        transition
                                        hover:bg-slate-200
                                    ">
                                        {servico.cta.rotulo}
                                    </span>
                                </a>

                            </article>
                        );

                    })}

                </div>

            </div>
        </section>
    );
}

export default Servicos;
