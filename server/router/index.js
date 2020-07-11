const express = require('express');

const router = express.Router();
const controller = require('./controllers/controllers.js');

// req.params in req
router.get('/products/list', controller.getProductData);
router.get('/products/:id/', controller.getItem);
router.get('/products/:id/styles', controller.getStyles);
router.get('/products/:id/related', controller.getRelated);
router.get('/reviews/:id/list', controller.getReview);

module.exports = router;