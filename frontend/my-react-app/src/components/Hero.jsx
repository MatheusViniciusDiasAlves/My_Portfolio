import CubeBackground from "./CubeBackground";

function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

      <CubeBackground />

      <div className="relative z-10 text-center">

        <p className="text-lg text-slate-400">
          Olá, eu sou
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mt-2">
          Matheus Dias
        </h1>

        <h2 className="text-xl md:text-2xl text-slate-300 mt-4">
          Analista e Desenvolvedor de Sistemas
        </h2>

        <p className="text-slate-400 max-w-xl mt-4">
          Desenvolvedor focado em Full-Stack
        </p>
    
    

      </div>

    </section>
  );
}

export default Hero;