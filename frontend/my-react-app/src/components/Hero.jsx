import CubeBackground from "./CubeBackground";

function Hero() {
  return (
    <section className="relative z-10 min-h-screen flex items-center px-6 py-20 text-white">

    <CubeBackground />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* TEXTO */}
        <div>

          <p className="text-slate-400 text-lg mb-3">
            Olá, eu sou
          </p>

          <h1 className="text-5xl md:text-7xl font-bold">
            Matheus Vinicius
          </h1>

          <h2 className="text-2xl md:text-3xl text-slate-300 mt-4">
            Desenvolvedor Full-Stack
          </h2>

          <p className="text-slate-400 mt-6 max-w-xl text-lg leading-relaxed">
            Desenvolvedor em formação, apaixonado por tecnologia e
            desenvolvimento de sistemas. Atualmente trabalhando como
            Auxiliar de Tecnologia da Informação e Desenvolvedor de Sistemas.
          </p>

          <div className="flex gap-4 mt-8">

            <a
              href="#projetos"
              className="
                px-6
                py-3
                bg-white
                text-black
                rounded-lg
                font-semibold
                hover:bg-slate-200
                transition
              "
            >
              Ver meus projetos
            </a>

          </div>

        </div>

        {/* FOTO */}
        <div className="flex justify-center md:justify-end md:translate-x-12">

          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.15)]">

            <img
              src="/projetos/MatheusDias.png"
              alt="Foto de Matheus Vinicius"
              className="w-full h-full object-cover object-center"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;