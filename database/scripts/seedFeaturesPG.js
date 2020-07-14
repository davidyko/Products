const path = require('path');
const pg = require('../pgconnection.js');

const createFeatures = () => {
  const query = `CREATE TABLE features (
    feature_id SERIAL PRIMARY KEY,
    product_id INT NOT NULL,
    feature VARCHAR(30) NOT NULL,
    value VARCHAR(3) NOT NULL
  )`;

  return pg.query('DROP TABLE IF EXISTS features')
  .then(() => pg.query(query))
}

const seedFeaturesDb = () => {
  if (process.env.NODE_ENV === 'dev') {
    return;
  }
  const pathToCSV = 'home/bitnami/seed_files/features.csv';
  const delimiter = ',';
  const sqlString = `COPY features(feature_id, product_id, feature, value) FROM '${pathToCSV}' DELIMITER '${delimiter}' CSV HEADER`;
  return pg.query(sqlString);
};

const indexFeatureId = () => {
  const sqlString = 'CREATE INDEX idx_feature ON features(product_id)';

  return pg.query(sqlString)
}

createFeatures()
  .then(() => console.log('Created features table, now importing data'))
  .then(seedFeaturesDb)
  .then(() => console.log('Imported all records, now creating index on product_id'))
  .then(indexFeatureId)
  .catch(console.log)