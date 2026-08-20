import { useState } from "react";
import { createPortal } from "react-dom";

const API = import.meta.env.VITE_API_URL || "http://localhost:3333";

function Login({ aoFechar }) {
    const [modo, setModo] = useState("entrar");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const [enviando, setEnviando] = useState(false);
    const [usuario, setUsuario] = useState(null);

    const cadastrando = modo === "cadastrar";

    function trocarModo() {
        setModo(cadastrando ? "entrar" : "cadastrar");
        setErro("");
    }

    async function enviar(evento) {
        evento.preventDefault();
        setErro("");
        setEnviando(true);

        try {
            const resposta = await fetch(`${API}${cadastrando ? "/api/cadastro" : "/api/login"}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(cadastrando ? { nome, email, senha } : { email, senha }),
            });

            const dados = await resposta.json();

            if (!resposta.ok) {
                setErro(dados.erro || "Não foi possível continuar");
                return;
            }

            localStorage.setItem("token", dados.token);
            setUsuario(dados.usuario);
        } catch {
            setErro("Servidor fora do ar");
        } finally {
            setEnviando(false);
        }
    }

    return createPortal(
        <div
            onClick={aoFechar}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center px-6"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-sm rounded-2xl border border-slate-700 bg-slate-900 p-8 text-white"
            >
                {usuario ? (
                    <>
                        <h2 className="text-2xl font-bold">Bem-vindo, {usuario.nome}!</h2>
                        <p className="mt-2 text-slate-400 text-sm">{usuario.email}</p>
                        <button
                            onClick={aoFechar}
                            className="mt-6 w-full rounded-lg bg-white py-3 font-semibold text-black hover:bg-slate-200 transition"
                        >
                            Fechar
                        </button>
                    </>
                ) : (
                    <form onSubmit={enviar}>
                        <h2 className="text-2xl font-bold">
                            {cadastrando ? "Criar conta" : "Login"}
                        </h2>

                        {cadastrando && (
                            <input
                                type="text"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                placeholder="Nome"
                                maxLength={100}
                                required
                                className="mt-6 w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-slate-500"
                            />
                        )}

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-mail"
                            maxLength={150}
                            required
                            className={`${cadastrando ? "mt-4" : "mt-6"} w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-slate-500`}
                        />

                        <input
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            placeholder="Senha"
                            minLength={cadastrando ? 6 : undefined}
                            required
                            className="mt-4 w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-slate-500"
                        />

                        {cadastrando && (
                            <p className="mt-2 text-xs text-slate-500">Mínimo de 6 caracteres.</p>
                        )}

                        {erro && <p className="mt-4 text-sm text-red-400">{erro}</p>}

                        <button
                            type="submit"
                            disabled={enviando}
                            className="mt-6 w-full rounded-lg bg-white py-3 font-semibold text-black hover:bg-slate-200 transition disabled:opacity-50"
                        >
                            {enviando ? "Enviando..." : cadastrando ? "Cadastrar" : "Entrar"}
                        </button>

                        <button
                            type="button"
                            onClick={trocarModo}
                            className="mt-4 w-full text-sm text-slate-300 hover:text-white transition"
                        >
                            {cadastrando ? "Já tenho conta" : "Não tem conta? Criar conta"}
                        </button>

                        <button
                            type="button"
                            onClick={aoFechar}
                            className="mt-3 w-full text-sm text-slate-500 hover:text-white transition"
                        >
                            Cancelar
                        </button>
                    </form>
                )}
            </div>
        </div>,
        document.body
    );
}

export default Login;
