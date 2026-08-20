// check do login + cadastro: precisa do servidor rodando (npm start)
const assert = require("assert");
const db = require("./db");

const API = process.env.API || "http://localhost:3333";
const EMAIL_TESTE = "teste-cadastro@portfolio.com";

async function post(rota, corpo) {
    const r = await fetch(`${API}${rota}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(corpo),
    });
    return { status: r.status, corpo: await r.json() };
}

(async () => {
    // repetivel: apaga o usuario de teste de execucoes anteriores
    await db.query("DELETE FROM usuarios WHERE email = ?", [EMAIL_TESTE]);

    // --- login ---
    const ok = await post("/api/login", { email: "admin@portfolio.com", senha: "123456" });
    assert.strictEqual(ok.status, 200, "senha certa deveria entrar");
    assert.ok(ok.corpo.token, "deveria voltar token");

    const maiuscula = await post("/api/login", { email: " ADMIN@Portfolio.com ", senha: "123456" });
    assert.strictEqual(maiuscula.status, 200, "e-mail com espaco/maiuscula deveria entrar");

    const errada = await post("/api/login", { email: "admin@portfolio.com", senha: "senha-errada" });
    assert.strictEqual(errada.status, 401, "senha errada deveria dar 401");

    const inexistente = await post("/api/login", { email: "ninguem@portfolio.com", senha: "123456" });
    assert.strictEqual(inexistente.status, 401, "usuario inexistente deveria dar 401");

    const vazio = await post("/api/login", { email: "", senha: "" });
    assert.strictEqual(vazio.status, 400, "sem dados deveria dar 400");

    // --- cadastro ---
    const novo = await post("/api/cadastro", { nome: "Fulano Teste", email: EMAIL_TESTE, senha: "senha123" });
    assert.strictEqual(novo.status, 201, "cadastro novo deveria dar 201");
    assert.ok(novo.corpo.token, "cadastro deveria ja voltar token");

    const entrouDepois = await post("/api/login", { email: EMAIL_TESTE, senha: "senha123" });
    assert.strictEqual(entrouDepois.status, 200, "deveria conseguir logar com a conta criada");

    const repetido = await post("/api/cadastro", { nome: "Outro", email: EMAIL_TESTE, senha: "senha123" });
    assert.strictEqual(repetido.status, 409, "e-mail repetido deveria dar 409");

    const curta = await post("/api/cadastro", { nome: "X", email: "curta@portfolio.com", senha: "123" });
    assert.strictEqual(curta.status, 400, "senha curta deveria dar 400");

    const semArroba = await post("/api/cadastro", { nome: "X", email: "naoehemail", senha: "senha123" });
    assert.strictEqual(semArroba.status, 400, "e-mail invalido deveria dar 400");

    // nome maior que o VARCHAR(100): tem que ser 400, nao 500
    const longo = await post("/api/cadastro", { nome: "a".repeat(200), email: "longo@portfolio.com", senha: "senha123" });
    assert.strictEqual(longo.status, 400, "nome longo demais deveria dar 400");

    await db.query("DELETE FROM usuarios WHERE email = ?", [EMAIL_TESTE]);
    await db.end();

    console.log("login + cadastro ok: 11 checks");
})();
