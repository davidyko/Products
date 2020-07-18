const fs = require('fs');
const faker = require('faker');

const writePhotos = fs.createWriteStream('/media/dk/UBUNTU 20_0/SDC_CSV/photos.csv');
writePhotos.write('photo_id, style_id, url, thumbnail_url\n', 'utf8');

function writeAllPhotos(photo, encoding, callback) {
  let style_id = 20000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      style_id -= 1;
      for (let i = 0; i < 2; i++) {
        id += 1;
        let url = faker.image.imageUrl();
        let thumbnail_url = faker.image.imageUrl();
        let data = `${id}, ${style_id}, ${url}, ${thumbnail_url}\n`;
        if (style_id === 0) {
          photo.write(data, encoding, callback);
        } else {
          ok = photo.write(data, encoding);
        }
      }
    } while (style_id > 0 && ok);
    if (style_id > 0) {
      photo.once('drain', write);
    }
  }
  write()
}

writeAllPhotos(writePhotos, 'utf-8', () => {
  writePhotos.end();
});