// Cabeçalho que abre cada página: a faixa em mono, o <h1> e a linha de apoio.
//
// Existe para que as seis páginas comecem iguais. Antes cada seção repetia
// "text-4xl md:text-5xl font-bold text-center" na mão, e qualquer ajuste de
// tipografia precisava ser feito sete vezes.

function CabecalhoPagina({ faixa, titulo, apoio }) {
  return (
    <header className="border-b border-white/10 pb-10">
      {faixa && (
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-acento">
          {faixa}
        </p>
      )}

      <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
        {titulo}
      </h1>

      {apoio && (
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
          {apoio}
        </p>
      )}
    </header>
  );
}

export default CabecalhoPagina;
