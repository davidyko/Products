const path = require('path');
const pg = require('../pgconnection.js');

// TODO: TEXT is faster than VARCHAR(num). Play
const createProducts = () => {
  const query = `CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    default_price TEXT NOT NULL,
    slogan TEXT NOT NULL,
    description TEXT NOT NULL,
    category TEXT NOT NULL
  )`;

  return pg.query('DROP TABLE IF EXISTS products')
    .then(() => pg.query(query))
};

const seedProductsDb = () => {
  const pathToCSV = process.env.NODE_ENV === 'prod' ? '' : path.resolve(__dirname, '../../products.csv');
  const delimiter = ',';
  const sqlString = `COPY products(product_id, name, default_price, slogan, description, category) FROM '${pathToCSV}' DELIMITER '${delimiter}' CSV HEADER`;
  return pg.query(sqlString);
};

const indexProductId = () => {
  const sqlString = 'CREATE INDEX idx_productId ON products(product_id)';
  return pg.query(sqlString);
};

createProducts()
  .then(() => console.log('Created products table, now importing data'))
  .then(seedProductsDb)
  .then(() => console.log('Imported all records, now creating index on productId'))
  .then(indexProductId)
  .catch(console.log);