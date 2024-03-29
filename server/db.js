require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'blogdb',
  password: process.env.DB_PASSWORD,
  port: 5432,
});