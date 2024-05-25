const bodyParser = require('body-parser');
const express = require('express');
const {
  renderEditProduct,
  editProduct,
} = require('../controllers/productController');
const router = express.Router();

router.use(bodyParser.urlencoded());

router.get('/:id', renderEditProduct);

router.post('/:id', editProduct);

module.exports = router;
