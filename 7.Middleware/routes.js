const express = require('express');
const router = express.Router();

const checkContentType = (req, res, next) => {
  if (req.headers['content-type'] !== 'application/json') {
    res.send('INVALID REQUEST!');
  } else {
    next();
  }
};

router.use(checkContentType);

router.get('/client', (req, res) => {
  res.send('Welcome to /client Route.');
});

module.exports = router;
