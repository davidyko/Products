const fs = require('fs');
const faker = require('faker');

const writeProducts = fs.createWriteStream('/media/dk/UBUNTU 20_0/SDC_CSV/products.csv');
writeProducts.write('product_id, name, default_price, slogan, description, category\n', 'utf8');

function writeAllProducts(product, encoding, callback) {
  let i = 100;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const name = faker.commerce.productName();
      const default_price = Math.floor(Math.random() * 1000 + 1);
      const slogan = faker.lorem.sentence();
      const description = faker.lorem.paragraph();
      const category = faker.commerce.department();
      const data = `${id}, ${name}, ${default_price}, ${slogan}, ${description}, ${category}\n`;
      if (i === 0) {
        product.write(data, encoding, callback);
      } else {
        ok = product.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      product.once('drain', write);
    }
  }
  write()
}

writeAllProducts(writeProducts, 'utf-8', () => {
  writeProducts.end();
});