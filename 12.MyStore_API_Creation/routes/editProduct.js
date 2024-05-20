const express = require('express');
const { renderEditProduct } = require('../controllers/productController');
const router = express.Router();

router.get('/', renderEditProduct);

module.exports = router;
