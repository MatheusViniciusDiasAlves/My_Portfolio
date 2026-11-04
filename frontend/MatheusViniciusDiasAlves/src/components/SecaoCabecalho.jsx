// Cabeçalho de uma seção dentro de uma página (<h2>), irmão do
// CabecalhoPagina. Mantém a mesma faixa em mono para o site inteiro ter uma
// hierarquia visual só.

function SecaoCabecalho({ faixa, titulo, apoio, centro = false }) {
  return (
    <div className={centro ? "text-center" : ""}>
      {faixa && (
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-acento">
          {faixa}
        </p>
      )}

      <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl">
        {titulo}
      </h2>

      {apoio && (
        <p
          className={`mt-4 max-w-2xl text-slate-300 leading-relaxed ${
            centro ? "mx-auto" : ""
          }`}
        >
          {apoio}
        </p>
      )}
    </div>
  );
}

export default SecaoCabecalho;
