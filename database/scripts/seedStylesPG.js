const path = require('path');
const pg = require('./pgconnection.js');

const styles = () => {
  const query = `CREATE TABLE styles (
    style_id SERIAL PRIMARY KEY,
    product_id INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    original_price INT NOT NULL,
    sale_price INT NOT NULL,
    default? INT NOT NULL,
    skus INT NOT NULL,
    photos INT NOT NULL
  )`;

  return pg.query('DROP TABLE IF EXISTS styles')
  .then(() => pg.query(query))
}
