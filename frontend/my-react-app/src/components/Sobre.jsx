function Sobre() {
    return (
        <section
            id="sobre"
            className="relative z-10 text-white px-6 py-24"
        >
            <div className="max-w-6xl mx-auto">

                <h2 className="text-4xl md:text-5xl font-bold text-center">
                    Sobre mim
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">

                    {/* FOTO */}
                    <div className="flex justify-center">

                        <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border border-white/20">

                            <img
                                src="/projetos/MatheusDias.png"
                                alt="Matheus Dias"
                                className="w-full h-full object-contain"
                            />

                        </div>

                    </div>

                    {/* TEXTO */}
                    <div>

                        <h3 className="text-3xl font-bold">
                            Olá! Eu sou o Matheus 👋
                        </h3>

                        <p className="text-slate-300 mt-6 leading-relaxed">
                            Sou estudante de Análise e Desenvolvimento de
                            Sistemas e estou construindo minha carreira na
                            área de desenvolvimento de software.
                        </p>

                        <p className="text-slate-300 mt-4 leading-relaxed">
                            Atualmente estou focado principalmente no
                            desenvolvimento Frontend, estudando JavaScript,
                            React, HTML, CSS e outras tecnologias do
                            desenvolvimento web.
                        </p>

                        <p className="text-slate-300 mt-4 leading-relaxed">
                            Gosto de transformar ideias em interfaces,
                            aprender novas tecnologias e colocar meus
                            conhecimentos em prática através de projetos.
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Sobre;