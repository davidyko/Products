const path = require('path');
const pg = require('../pgconnection.js');

const createPhotos = () => {
  const query = `CREATE TABLE photos (
    photo_id SERIAL PRIMARY KEY,
    style_id INT NOT NULL,
    url TEXT NOT NULL,
    thumbnail_url TEXT NOT NULL
  )`;

  return pg.query('DROP TABLE IF EXISTS photos')
  .then(() => pg.query(query))
}

const seedPhotosDB = () => {
  // const pathtoCSV = process.env.NODE_ENV === 'prod' ? '/home/bitnami/seed_files/products.csv' : path.resolve(__dirname, '/media/dk/UBUNTU 20_0/SDC_CSV/photos.csv');
  if (process.env.NODE_ENV === 'dev') {
    return;
  }
  const pathToCSV = 'home/bitnami/seed_files/features.csv';
  const delimiter = ',';
  const sqlString = `COPY photos(photo_id, style_id, url, thumbnail_url) FROM ${pathtoCSV}' DELIMITER '${delimiter}' CSV HEADER`;
  return pg.query(sqlString);
};

const indexPhotosId = () => {
  const sqlString = 'CREATE INDEX idx_photoId ON photos(style_id)';

  return pg.query(sqlString);
}

createPhotos()
  .then(() => console.log('Created photos table, now importing data'))
  .then(seedPhotosDB)
  .then(() => console.log('Imported all records, now creating index on style_id'))
  .then(indexPhotosId)
  .catch(console.log)