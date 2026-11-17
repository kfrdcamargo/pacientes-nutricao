require('dotenv').config();
const mysql = require('mysql2/promise');

// Pool: conjunto de conexões com o MySQL que o Express reaproveita a cada pedido
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = pool;