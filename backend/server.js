const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("./db");
require("dotenv").config({ path: __dirname + "/.env" });

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        mensagem: "API funcionando!"
    });
});

app.get("/api/teste", async (req, res) => {
    try {
        const [resultados] = await db.query("SELECT 1 AS teste");
        res.json(resultados);
    } catch (err) {
        console.error("Erro ao consultar o banco:", err);
        res.status(500).json({ erro: "Erro ao consultar o banco" });
    }
});

app.post("/api/login", async (req, res) => {
    const { senha } = req.body ?? {};
    const email = String(req.body?.email ?? "").trim().toLowerCase();

    if (!email || !senha) {
        return res.status(400).json({ erro: "Informe e-mail e senha" });
    }

    try {
        const [linhas] = await db.query(
            "SELECT id, nome, email, senha_hash FROM usuarios WHERE email = ?",
            [email]
        );

        const usuario = linhas[0];

        // mesma resposta pros dois casos: nao entrega se o e-mail existe
        if (!usuario || !(await bcrypt.compare(senha, usuario.senha_hash))) {
            return res.status(401).json({ erro: "E-mail ou senha invalidos" });
        }

        const token = jwt.sign(
            { id: usuario.id, email: usuario.email },
            process.env.JWT_SECRET,
            { expiresIn: "2h" }
        );

        res.json({
            token,
            usuario: { id: usuario.id, nome: usuario.nome, email: usuario.email }
        });
    } catch (err) {
        console.error("Erro no login:", err);
        res.status(500).json({ erro: "Erro no servidor" });
    }
});

app.post("/api/cadastro", async (req, res) => {
    const { senha } = req.body ?? {};
    const nome = String(req.body?.nome ?? "").trim();
    const email = String(req.body?.email ?? "").trim().toLowerCase();

    if (!nome || !email || !senha) {
        return res.status(400).json({ erro: "Informe nome, e-mail e senha" });
    }

    const partes = email.split("@");

    if (
        partes.length !== 2 ||
        !partes[0] ||
        !partes[1].includes(".") ||
        partes[1].endsWith(".") ||
        email.includes(" ")
    ) {
        return res.status(400).json({ erro: "E-mail invalido" });
    }

    if (senha.length < 6) {
        return res.status(400).json({ erro: "A senha precisa de pelo menos 6 caracteres" });
    }

    // as colunas sao VARCHAR(100)/(150): sem isso o MySQL estoura e vira 500
    if (nome.length > 100 || email.length > 150) {
        return res.status(400).json({ erro: "Nome ou e-mail muito longo" });
    }

    try {
        const hash = await bcrypt.hash(senha, 10);

        const [resultado] = await db.query(
            "INSERT INTO usuarios (nome, email, senha_hash) VALUES (?, ?, ?)",
            [nome, email, hash]
        );

        const token = jwt.sign(
            { id: resultado.insertId, email },
            process.env.JWT_SECRET,
            { expiresIn: "2h" }
        );

        res.status(201).json({
            token,
            usuario: { id: resultado.insertId, nome, email }
        });
    } catch (err) {
        // quem barra e-mail repetido e o UNIQUE da tabela, nao um SELECT antes
        if (err.code === "ER_DUP_ENTRY") {
            return res.status(409).json({ erro: "Esse e-mail ja esta cadastrado" });
        }

        console.error("Erro no cadastro:", err);
        res.status(500).json({ erro: "Erro no servidor" });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
