const model = require('../models/models.js');
const faker = require('faker');
const path = require ('path');

module.exports = {

  getProductData: (req, res) => {
    const { productList } = req.params;
    model.getProductData(productList, (err, results) => {
      if (err) {
        console.log('Error getting product list from db');
      } else {
        console.log('Retrieved product list from db');
        res.json({
          list: results
        })
      }
    })
  },

  getItem: (req, res) => {
    const { productId } = req.params;
    model.getItem(productId, (err, results) => {
      if (err) {
        console.log('Error getting item from db');
      } else {
        console.log('Retrieved item from db');
        res.json({
          item: results
        })
      }
    })
  },

  getStyles: (req, res) => {
    const { productId } = req.params;
    model.getStyles(productId, (err, results) => {
      if (err) {
        console.log('Error retrieving styles from db');
      } else {
        res.json({
          styles: results
        })
      }
    })
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