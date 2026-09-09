import { FaGithub } from "react-icons/fa";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

function ProjetoCard({ projeto }) {
    return (
        <article
            className="
                group
                flex
                flex-col
                bg-slate-900/85
                backdrop-blur-md
                rounded-2xl
                overflow-hidden
                border border-slate-700/70
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-slate-500
            "
        >

            {/* Imagem / GIF / WebP */}
            <div className="aspect-video bg-black overflow-hidden">

                <img
                    src={projeto.imagem}
                    alt={`Demonstração do projeto ${projeto.nome}`}
                    width="1600"
                    height="900"
                    loading="lazy"
                    decoding="async"
                    className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                    "
                />

            </div>

            {/* Informações */}
            <div className="flex flex-col flex-1 p-6">

                <h3 className="text-2xl font-bold">
                    {projeto.nome}
                </h3>

                <p className="text-slate-300 mt-3 leading-relaxed">
                    {projeto.descricao}
                </p>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2 mt-5">

                    {projeto.tecnologias.map((tecnologia) => (
                        <span
                            key={tecnologia}
                            className="
                                px-3
                                py-1
                                bg-slate-800/90
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

                {/* Links — só aparecem nos projetos que os têm.
                    mt-auto mantém a linha colada na base do card. */}
                {(projeto.demo || projeto.repo) && (
                    <div className="flex flex-wrap items-center gap-5 mt-auto pt-6">

                        {projeto.demo && (
                            <a
                                href={projeto.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    font-semibold
                                    text-white
                                    underline
                                    underline-offset-4
                                    decoration-slate-600
                                    hover:decoration-white
                                    transition
                                "
                            >
                                <HiArrowTopRightOnSquare
                                    aria-hidden="true"
                                    className="h-5 w-5"
                                />
                                Ver o site
                            </a>
                        )}

                        {projeto.repo && (
                            <a
                                href={projeto.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    text-slate-300
                                    hover:text-white
                                    transition
                                "
                            >
                                <FaGithub aria-hidden="true" className="h-5 w-5" />
                                Código
                            </a>
                        )}

                    </div>
                )}

            </div>

        </article>
    );
}

export default ProjetoCard;
