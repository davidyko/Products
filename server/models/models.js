const db = require('../../database/pgconnection.js');

module.exports = {

  getItem: (productId) => {
    const query = 'SELECT * FROM products WHERE id = $1';
    db.query(query, [productId]);
  },

  getStyles: (productId, callback) => {
    const query = 'SELECT styles.*, json_agg(photos.*) FROM styles INNER JOIN photos ON styles.style_id = photos.style_id WHERE styles.product_id = $1 GROUP BY styles.style_id';
    db.query(query, [productId])
      // .then(data => data.rows)
      .then(({ rows }) => {
        const changeRow = rows.map(row => {
          const photos = row.json_agg;
          delete row.json_agg;
          return {
            ...row, photos,
          };
        });
        const skuQueryArr = changeRow.map((style) => {
          const skuQuery = 'SELECT * FROM skus WHERE style_id = $1';
          return db.query(skuQuery, [style.style_id])
            .then((data) => data.rows)
            .then((results) => results.reduce((acc, sku) => ({ ...acc, [sku.size.trim()]: sku.quantity }), {}))
            .then((skusObj) => ({ ...style, skus: skusObj }));
        });
        return Promise.all(skuQueryArr);
      })
      .then((styleArr) => callback(null, styleArr))
      .catch((err) => callback(err));
  },
};
