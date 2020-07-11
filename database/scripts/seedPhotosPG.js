const path = require('path');
const pg = require('./pgconnection.js');

const photos = () => {
  const query = `CREATE TABLE photos (
    _id SERIAL PRIMARY KEY,
    style_id INT NOT NULL,
    url VARCHAR(100) NOT NULL,
  )`;

  return pg.query('DROP TABLE IF EXISTS photos')
  .then(() => pg.query(query))
}