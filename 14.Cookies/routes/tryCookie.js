const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Send & create the cookie in the browser

  //   res.setHeader('Set-Cookie', 'isLoggedIn=true');

  res.cookie('isLoggedIn', 'true');

  res.send('Cookie Sent');
});

module.exports = router;
