import { ORCID, publicacoes, premiacoes } from "../data/publicacoes";

function Publicacoes() {
    return (
        <section
            id="publicacoes"
            className="relative z-10 text-white px-6 py-24"
        >
            <div className="max-w-5xl mx-auto">

                <h2 className="text-4xl md:text-5xl font-bold text-center">
                    Publicações e prêmios
                </h2>

                <p className="text-slate-300 text-center mt-4">
                    Produção científica como bolsista de Iniciação Científica e
                    reconhecimentos que recebi pelo caminho.
                </p>

                <a
                    href={ORCID}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        flex
                        w-fit
                        mx-auto
                        mt-6
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-slate-700
                        bg-slate-900/60
                        px-4
                        py-2
                        text-sm
                        text-slate-300
                        hover:border-white/30
                        hover:text-white
                        transition
                    "
                >
                    <span aria-hidden="true">🆔</span>
                    ORCID 0009-0009-5914-1135
                </a>


                {/* PREMIAÇÕES */}
                {premiacoes.map((premio) => (

                    <article
                        key={premio.titulo}
                        className="
                            grid
                            grid-cols-1
                            md:grid-cols-2
                            gap-8
                            items-center
                            mt-16
                            bg-slate-900/40
                            backdrop-blur-sm
                            border
                            border-white/10
                            rounded-2xl
                            overflow-hidden
                        "
                    >

                        {/* aspect fixo: sem ele o h-full acompanha a coluna de
                            texto e o corte sobe para o teto do auditório */}
                        <div className="aspect-[4/3] w-full overflow-hidden bg-black">
                            <img
                                src={premio.imagem}
                                alt={`Equipe do projeto ${premio.projeto} recebendo o prêmio de ${premio.posicao} na ${premio.titulo}`}
                                width="800"
                                height="600"
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>

                        <div className="p-8 md:pl-0">

                            <div className="flex items-center gap-3">
                                <span className="text-3xl" aria-hidden="true">🥈</span>
                                <div>
                                    <p className="text-xl font-bold">
                                        {premio.posicao} — {premio.titulo}
                                    </p>
                                    <p className="text-sm text-slate-400">
                                        {premio.ano} · Prêmio de {premio.premio}
                                    </p>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mt-6">
                                {premio.projeto}
                            </h3>

                            <p className="text-slate-300 mt-3 leading-relaxed">
                                {premio.descricao}
                            </p>

                            <p className="text-sm text-slate-400 mt-4">
                                Equipe: {premio.equipe.join(", ")}
                            </p>

                            <div className="flex flex-wrap gap-4 mt-6">
                                {premio.links.map((link) => (
                                    <a
                                        key={link.url}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            text-white
                                            font-semibold
                                            underline
                                            underline-offset-4
                                            decoration-slate-600
                                            hover:decoration-white
                                            transition
                                        "
                                    >
                                        {link.rotulo} →
                                    </a>
                                ))}
                            </div>

                        </div>

                    </article>

                ))}


                {/* PUBLICAÇÕES */}
                <div className="grid grid-cols-1 gap-6 mt-8">

                    {publicacoes.map((publicacao) => (

                        <article
                            key={publicacao.titulo}
                            className="
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

                            <div className="flex flex-wrap items-center gap-3 text-sm">
                                <span className="rounded-full bg-slate-800/80 border border-slate-700 px-3 py-1 text-slate-200">
                                    {publicacao.tipo}
                                </span>
                                <span className="text-slate-400">
                                    {publicacao.ano} · {publicacao.veiculo}
                                </span>
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold mt-4 leading-snug">
                                {publicacao.titulo}
                            </h3>

                            <p className="text-sm text-slate-400 mt-3">
                                {publicacao.autores.join(" · ")}
                            </p>

                            <p className="text-slate-300 mt-4 leading-relaxed">
                                {publicacao.resumo}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-5">
                                {publicacao.palavrasChave.map((palavra) => (
                                    <span
                                        key={palavra}
                                        className="
                                            px-3
                                            py-1
                                            bg-slate-800/60
                                            border
                                            border-slate-700/70
                                            rounded-full
                                            text-xs
                                            text-slate-300
                                        "
                                    >
                                        {palavra}
                                    </span>
                                ))}
                            </div>

                        </article>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default Publicacoes;
