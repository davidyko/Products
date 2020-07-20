const path = require('path');
const pg = require('../pgconnection.js');

const createSkus = () => {
  const query = `CREATE TABLE skus (
    sku_id SERIAL PRIMARY KEY,
    style_id INT NOT NULL,
    size TEXT NOT NULL,
    quantity INT NOT NULL
  )`;

  return pg.query('DROP TABLE IF EXISTS skus')
    .then(() => pg.query(query))
};

const seedSkusDb = () => {
  const pathToCSV = process.env.NODE_ENV === 'prod' ? '' : path.resolve(__dirname, '../../skus.csv');
  const delimiter = ',';
  const sqlString = `COPY skus(sku_id, style_id, size, quantity) FROM '${pathToCSV}' DELIMITER '${delimiter}' CSV HEADER`;
  return pg.query(sqlString);
};

const indexSkusId = () => {
  const sqlString = 'CREATE INDEX idx_skusId ON skus(style_id)';
  return pg.query(sqlString);
};

createSkus()
  .then(() => console.log('Created skus table, now importing data'))
  .then(seedSkusDb)
  .then(() => console.log('Imported all records, now creating index on sku_id'))
  .then(indexSkusId)
  .catch(console.log);
