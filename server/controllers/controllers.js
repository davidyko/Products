const model = require('../models/models.js');

module.exports = {

  // getProductData: (req, res) => {
  //   const { productId } = req.params;
  //   model.getProductData(productId, (err, results) => {
  //     if (err) {
  //       console.log('Error getting product list from db');
  //     } else {
  //       console.log('Retrieved product list from db');
  //       res.json({
  //         item: results,
  //       });
  //     }
  //   });
  // },

  getItem: (req, res) => {
    const { productId } = req.params;
    model.getItem(productId)
      .then((data) => data.rows)
      .then((results) => res.json({
        items: results,
      }))
      .catch((err) => console.log(err));
    // , (err, results) => {
    //   if (err) {
    //     console.log('Error getting item from db');
    //   } else {
    //     console.log('Retrieved item from db');
    //     res.json({
    //       item: results,
    //     });
    //   }
    // });
  },

  getStyles: (req, res) => {
    const { productId } = req.params;
    model.getStyles(productId)
      .then((data) =>
        res.json({
          results: data
        }));
    // .then((results) => console.log(results))

    // , (err, results) => {
    //   if (err) {
    //     console.log('Error retrieving styles from db', err);
    //   } else {
    //     console.log('controller styles', results);
    //     res.json({
    //       styles: results,
    //     });
    //   }
    // });
  },

  // getRelated: (req, res) => {
  //   const { productId } = req.params;
  //   model.getRelated(productId, (err, results) => {
  //     if (err) {
  //       console.log('Error retrieving related items from db');
  //     } else {
  //       res.json({
  //         related: results
  //       })
  //     }
  //   })
  // },

  // getReview: (req, res) => {
  //   const { productId } = req.params;
  //   model.getReview(productId, (err, results) => {
  //     if (err) {
  //       console.log('Error retrieving review from db');
  //     } else {
  //       res.json({
  //         review: results
  //       })
  //     }
  //   })
  // }
}