const express = require('express');
const { renderAddProduct } = require('../controllers/productController');
const router = express.Router();

router.get('/', renderAddProduct);

module.exports = router;
