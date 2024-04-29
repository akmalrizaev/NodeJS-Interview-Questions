const express = require('express');
const router = express.Router();
const path = require('path');
const dirPath = require('../utils/path');

router.get('/', (req, res) => {
  res.render('store');
});

module.exports = router;
