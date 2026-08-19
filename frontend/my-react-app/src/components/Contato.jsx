function Contato() {
  return (
    <section id="contato" className="relative z-10 text-white px-6 py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold">Entre em contato</h2>

        <p className="text-slate-300 mt-5 text-lg">
          Gostou do meu trabalho ou quer conversar sobre algum projeto? Entre em
          contato comigo.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="mailto:seuemail@gmail.com"
            className="
                            px-6 py-3
                            rounded-lg
                            bg-white
                            text-black
                            font-semibold
                            hover:bg-slate-200
                            transition
                        "
          >
            Enviar e-mail
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="
                            px-6 py-3
                            rounded-lg
                            border border-slate-700
                            bg-slate-900/70
                            hover:bg-slate-800
                            transition
                        "
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="
                            px-6 py-3
                            rounded-lg
                            border border-slate-700
                            bg-slate-900/70
                            hover:bg-slate-800
                            transition
                        "
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contato; 