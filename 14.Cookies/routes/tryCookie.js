const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Send & create the cookie in the browser

  //   res.setHeader('Set-Cookie', 'isLoggedIn=true');

  //   res.cookie('isLoggedIn', 'true');

  //   res.send('Cookie Sent');

  const cookie = req.get('Cookie');
  console.log(cookie);
});

router.post('/', (req, res) => {
  res.cookie('isLoggedIn', 'true');
  res.send('Cookie Sent.');
});

// For all the subsequent requests - the same cookie will be sent
// to the server for all requests.
// And the sent cookie should also be read on the server.

module.exports = router;
