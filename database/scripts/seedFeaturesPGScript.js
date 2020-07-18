const faker = require('faker');
const fs = require('fs');

const writeFeatures = fs.createWriteStream('/media/dk/UBUNTU 20_0/SDC_CSV/features.csv');
writeFeatures.write('feature_id, product_id, feature, value\n', 'utf-8');

const writeAllFeatures = (features, encoding, callback) => {
  let product_id = 10000000;
  let id = 0;
  write = () => {
    let ok = true;
    do {
      product_id -= 1;
      for (let i = 0; i < 3; i++) {
        id += 1;
        let feature = faker.hacker.noun();
        let value = faker.hacker.adjective();
        let data = `${id}, ${product_id}, ${feature}, ${value}\n`;


        if (product_id === 0) {
          features.write(data, encoding, callback);
        } else {
          ok = features.write(data, encoding);
        }
      }
    } while (product_id > 0 && ok);
    if (product_id > 0) {
      features.once('drain', write);
    }
  }
  write()
}

writeAllFeatures(writeFeatures, 'utf-8', () => {
  writeFeatures.end();
})