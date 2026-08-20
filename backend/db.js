// caminho explicito: sem isso so funciona se o cwd for a pasta backend
require('dotenv').config({ path: __dirname + '/.env' });
const mysql = require('mysql2/promise');

module.exports = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
