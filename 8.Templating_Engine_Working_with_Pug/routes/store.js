const express = require('express');
const router = express.Router();
const path = require('path');
const dirPath = require('../utils/path');

router.get('/', (req, res) => {
  res.sendFile(path.join(dirPath, 'views', 'store.html'));
});

module.exports = router;
