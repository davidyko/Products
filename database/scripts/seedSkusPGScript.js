const fs = require('fs');
const faker = require('faker');

const writeSkus = fs.createWriteStream('skus.csv');
writeSkus.write('sku_id, style_id, size, quantity\n', 'utf-8');

function writeAllSkus(sku, encoding, callback) {
  // let i = 100;
  let sku_id = 1;
  let style_id = 10000000;
  // decrement this every run throuugh
  sizeArr = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  function write() {
    let ok = true;
    // 50,000,000 styles

    do {
      style_id -= 1;
      // while id <= 59000000
      // size = XS
      for (let j = 0; j < 6; j++) {
        sku_id += 1;
        let size = sizeArr[j];
        let quantity = Math.floor(Math.random() * 1000 + 1);

        const data = `${sku_id}, ${style_id}, ${size}, ${quantity}\n`;
        if (style_id === 0) {
          sku.write(data, encoding, callback);
        } else {
          ok = sku.write(data, encoding);
        }
      }
    } while (style_id > 0 && ok);
    if (style_id > 0) {
      sku.once('drain', write);
    }
  }
  write();
}

writeAllSkus(writeSkus, 'utf-8', () => {
  writeSkus.end();
});