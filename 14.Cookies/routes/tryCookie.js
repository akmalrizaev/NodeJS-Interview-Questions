const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.setHeader('Set-Cookie', 'isLoggedIn=true'); // Send & create the cookie in the browser
  res.send('Cookie Sent');
});

module.exports = router;
