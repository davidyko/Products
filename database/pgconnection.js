const { Pool } = require('pg');
const config = require('../config.js');

// const pool = new Pool(config.db);
const pool = new Pool({
  user: 'sdc',
  password: 'abc',
  database: 'sdc',
});

module.exports = {
  query: (text, params, callback) => pool.query(text, params, callback)
};