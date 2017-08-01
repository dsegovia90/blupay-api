const express = require('express');

const router = express.Router();

const products = require('../lib/products');

/* GET home page. */
router.get('/products', (req, res) => {
  res.json(products);
});

module.exports = router;
