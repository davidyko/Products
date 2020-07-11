const path = require('path');
const pg = require('./pgconnection.js');

const createProducts = () => {
  const query = `CREATE TABLE products (
    _id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    default_price VARCHAR(3) NOT NULL,
    slogan VARCHAR(100) NOT NULL,
    description VARCHAR(200) NOT NULL,
    category VARCHAR(30) NOT NULL
  )`;

  return pg.query('DROP TABLE IF EXISTS products')
  .then(() => pg.query(query))
}

const seedProductsDb = () => {
  const pathToCSV = process.env.NODE_ENV === 'prod' ? '/home/bitnami/seed_files/products.csv' : path.resolve(_dirname, '../../products.csv');
  const delimiter = ',';
  // TODO: Watch for need of quotes around variables in template literal
  const sqlString = `COPY products() FROM ${pathToCSV} DELIMITER ${delimiter} CSV HEADER`;
  return pg.query(sqlString);
};

const indexProductId = () => {
  const sqlString = 'CREATE INDEX idx_productId ON product(product_id)';

  return pg.query(sqlString);
}

createProducts()
  .then(() => console.log('Created products table, now importing data'))
  .then(seedProductsDb)
  .then(() => console.log('Imported all records, now creating index on productId'))
  .then(indexProductId)
  .catch(console.log);