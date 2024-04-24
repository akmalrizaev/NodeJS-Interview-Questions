const express = require('express');
const router = express.Router();

router.get('/john', (req, res) => {
  res.send('Hey there ' + req.url + ' !');
});

router.get('/lucy', (req, res) => {
  res.send('Hey there ' + req.url + ' !');
});

router.get('/nick', (req, res) => {
  res.send('Hey there ' + req.url + ' !');
});

module.exports = router;
