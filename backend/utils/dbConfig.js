const { Pool } = require('pg');
const { Sequelize } = require('sequelize');

const db = new Pool({
  user: 'postgres.mwhhooogxrjjdtnsngts',
  host: 'aws-0-us-east-1.pooler.supabase.com',
  database: 'postgres',
  password: 'Alciro06/12',
  port: 6543,
});

const sequelize = new Sequelize('postgres', 'postgres.mwhhooogxrjjdtnsngts', 'Alciro06/12', {
  host: 'aws-0-us-east-1.pooler.supabase.com',
  dialect: 'postgres',
  port: 6543,
});

module.exports = { db, sequelize };
