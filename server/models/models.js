const db = require('../database/index.js');

module.exports = {

  // getProductData: (productList) => {
  //   const query = SELECT * FROM products;
  //   return db.query(query, [productList])
  // },

  getItem: (productId) => {
    const query = SELECT * FROM products WHERE id = $1;
    db.query(query, [productId]);
  },

  getStyles: (productId, callback) => {
    const query = SELECT styles.*, json_agg(photos.url, photos.thumbnail_url) FROM styles INNER JOIN photos ON styles.style_id = photos.style_id AS photos WHERE styles.product_id = $1;

    db.query(query, [productId])
      .then() // TODO: NESTED query
  },
}
