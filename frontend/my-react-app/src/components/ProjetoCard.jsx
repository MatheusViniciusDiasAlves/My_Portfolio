function ProjetoCard(props) {
    return (
        <article
            className="
                group
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
                    src={props.imagem}
                    alt={`Demonstração do projeto ${props.nome}`}
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
            <div className="p-6">

                <h3 className="text-2xl font-bold">
                    {props.nome}
                </h3>

                <p className="text-slate-300 mt-3 leading-relaxed">
                    {props.descricao}
                </p>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2 mt-5">

                    {props.tecnologias.map((tecnologia) => (
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

            </div>

        </article>
    );
}

export default ProjetoCard;