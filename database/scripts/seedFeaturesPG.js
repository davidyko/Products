const path = require('path');
const pg = require('./pgconnection.js');

const features = () => {
  const query = `CREATE TABLE product (
    _id SERIAL PRIMARY KEY,
    product_id INT NOT NULL,
    feature VARCHAR(30) NOT NULL,
    value VARCHAR(3) NOT NULL,
  )`;

  return pg.query('DROP TABLE IF EXISTS features')
  .then(() => pg.query(query))

}