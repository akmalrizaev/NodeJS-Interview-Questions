const express = require('express');
const router = express.Router();
const path = require('path');
const dirPath = require('../utils/path');
const bodyParser = require('body-parser');

const products = [];

router.use(bodyParser.urlencoded());

router.get('/', (req, res) => {
  res.render('new-product');
});

router.post('/', (req, res) => {
  products.push({ title: req.body.title, img: req.body.img });
  console.log(products);
  res.redirect('/');
});

exports.route = router;
exports.products = products;
