const express = require('express');
const router = express.Router();
const path = require('path');
const dirPath = require('../utils/path');
const { products } = require('./newProduct');

router.get('/', (req, res) => {
  res.render('store', { products: products });
});

module.exports = router;
