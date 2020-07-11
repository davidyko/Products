const db = require('../database/index.js');

module.exports = {

  getProductData: (productList) => {
    const query = SELECT * FROM products;
    return db.query(query, [productList])
  },

  getItem: (productId) => {
    const query = SELECT * FROM products WHERE id = productId;
    db.query(query, [productId]);
  },

  // getStyles: (productId, callback) => {
  //   const query =
  // },
}
