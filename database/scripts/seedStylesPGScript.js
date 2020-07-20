const fs = require('fs');
const faker = require('faker');

const writeStyles = fs.createWriteStream('styles.csv');
writeStyles.write('style_id, product_id, name, original_price, sale_price, default_style\n', 'utf-8')

const writeAllStyles = (style, encoding, callback) => {
  let product_id = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      product_id -= 1;
      for (let i = 0; i < 1; i++) {
        id += 1;
        let name = faker.commerce.productAdjective();
        let original_price = Math.floor(Math.random() * 1000 + 1);
        let sale_price = (original_price * .75).toFixed(2);
        let default_style = Math.round(Math.random());
        let data = `${id}, ${product_id}, ${name}, ${original_price}, ${sale_price}, ${default_style}\n`;
        if (product_id === 0) {
          style.write(data, encoding, callback);
        } else {
          ok = style.write(data, encoding);
        }
      }
    } while (product_id > 0 && ok);
    if (product_id > 0) {
      style.once('drain', write);
    }
  }
  write()
}

writeAllStyles(writeStyles, 'utf-8', () => {
  writeStyles.end();
})