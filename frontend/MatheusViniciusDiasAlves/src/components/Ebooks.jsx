// SEÇÃO DESATIVADA — ainda não há ebook publicado.
//
// Para ativar quando o primeiro estiver pronto:
//   1. preencha a lista "ebooks" abaixo (título, descrição, preço, capa e link
//      de pagamento). As capas ficam em public/ebooks/;
//   2. em src/App.jsx, descomente o import e o <Ebooks /> ;
//   3. em src/components/Navbar.jsx, descomente os dois links "#ebooks".
//
// Enquanto a lista estiver vazia o componente não renderiza nada, então ligar
// no App sem preencher os dados não quebra o site — só não aparece a seção.

const ebooks = [
    // {
    //     titulo: "",
    //     descricao: "",
    //     preco: "R$ 0,00",
    //     capa: "/ebooks/exemplo.jpg",
    //     paginas: 0,
    //     link: "https://",
    // },
];

function Ebooks() {

    if (ebooks.length === 0) {
        return null;
    }

    return (
        <section
            id="ebooks"
            className="relative z-10 text-white px-6 py-24"
        >
            <div className="max-w-6xl mx-auto">

                <h2 className="text-4xl md:text-5xl font-bold text-center">
                    Ebooks
                </h2>

                <p className="text-slate-300 text-center mt-4 max-w-2xl mx-auto">
                    Materiais que escrevi sobre tecnologia, programação e
                    manutenção de computadores.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

                    {ebooks.map((ebook) => (

                        <article
                            key={ebook.titulo}
                            className="
                                group
                                flex
                                flex-col
                                bg-slate-900/60
                                backdrop-blur-md
                                border
                                border-slate-700/70
                                rounded-2xl
                                overflow-hidden
                                shadow-xl
                                hover:-translate-y-2
                                hover:border-slate-500
                                transition-all
                                duration-300
                            "
                        >

                            <div className="aspect-[3/4] bg-black overflow-hidden">
                                <img
                                    src={ebook.capa}
                                    alt={`Capa do ebook ${ebook.titulo}`}
                                    width="600"
                                    height="800"
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

                            <div className="flex flex-col flex-1 p-6">

                                <h3 className="text-xl font-bold">
                                    {ebook.titulo}
                                </h3>

                                <p className="text-slate-300 mt-3 leading-relaxed">
                                    {ebook.descricao}
                                </p>

                                {ebook.paginas > 0 && (
                                    <p className="text-sm text-slate-400 mt-3">
                                        {ebook.paginas} páginas
                                    </p>
                                )}

                                <div className="flex items-center justify-between gap-4 mt-auto pt-6">

                                    <span className="text-2xl font-bold">
                                        {ebook.preco}
                                    </span>

                                    <a
                                        href={ebook.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            rounded-lg
                                            bg-white
                                            px-5
                                            py-2.5
                                            font-semibold
                                            text-black
                                            hover:bg-slate-200
                                            transition
                                        "
                                    >
                                        Comprar
                                    </a>

                                </div>

                            </div>

                        </article>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default Ebooks;
