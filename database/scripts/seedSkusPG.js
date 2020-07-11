const path = require('path');
const pg = require('./pgconnection.js');

const skus = () => {
  const query = `CREATE TABLE skus (
    sku_id SERIAL PRIMARY KEY,
    style_id INT NOT NULL,
    size VARCHAR(3) NOT NULL,
    quantity INT NOT NULL,
  )`;

  return pg.query('DROP TABLE IF EXISTS skus')
  .then(() => pg.query(query))
}