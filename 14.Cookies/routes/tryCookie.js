const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Send & create the cookie in the browser

  //   res.setHeader('Set-Cookie', 'isLoggedIn=true');

  //   res.cookie('isLoggedIn', 'true');

  //   res.send('Cookie Sent');

  //   const cookie = req.get('Cookie');
  //   console.log(cookie);

  //   "expires" & "max-age" are used to control the lifespan/age of a cookie

  const expDate = new Date(Date.now() + 5e3).toUTCString();
  //   res.cookie("isLoggedIn","true", {expires:expDate});
  //   res.setHeader('Set-Cookie', 'isLoggedIn=true; max-age=5');
  //   res.cookie('isLoggedIn', 'true', { maxAge: 5000 });
  res.setHeader('Set-Cookie', 'isLoggedIn=true; expires=' + expDate);
  res.send(expDate);
});

router.post('/', (req, res) => {
  res.cookie('isLoggedIn', 'true');
  res.send('Cookie Sent.');
});

// For all the subsequent requests - the same cookie will be sent
// to the server for all requests.
// And the sent cookie should also be read on the server.

module.exports = router;
