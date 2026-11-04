function Sobre() {
    return (
        <section id="sobre" className="px-6 py-16">
            <div className="max-w-6xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* FOTO */}
                    <div className="flex justify-center">

                        <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border border-white/20">

                            <img
                                src="/perfil/matheus-casual.jpg"
                                alt="Matheus Vinícius Dias Alves sentado em uma arquibancada"
                                width="384"
                                height="384"
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover object-center"
                            />

                        </div>

                    </div>

                    {/* TEXTO */}
                    <div>

                        <h2 className="font-display text-3xl font-bold tracking-tight">
                            Prazer, eu sou o Matheus
                        </h2>

                        <p className="text-slate-300 mt-6 leading-relaxed">
                            Sou estudante de Análise e Desenvolvimento de
                            Sistemas e trabalho como Auxiliar de Tecnologia da
                            Informação e desenvolvedor de sistemas. Moro em
                            Rolândia e atendo também Londrina e região.
                        </p>

                        <p className="text-slate-300 mt-4 leading-relaxed">
                            No desenvolvimento, trabalho com React, Node.js,
                            Express e MySQL — do layout até o projeto
                            publicado e funcionando. Antes disso, foram cinco
                            anos consertando e formatando computadores, o que
                            me deu uma noção de infraestrutura que pouca gente
                            tem começando pelo código.
                        </p>

                        <p className="text-slate-300 mt-4 leading-relaxed">
                            Também sou bolsista de Iniciação Científica, com
                            trabalhos publicados sobre Inteligência Artificial
                            no Ensino Superior e sobre o uso do Scratch na
                            educação básica.
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Sobre;