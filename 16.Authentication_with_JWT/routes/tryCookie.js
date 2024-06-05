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
  //   res.setHeader('Set-Cookie', 'isLoggedIn=true; expires=' + expDate);
  //   res.send(expDate);

  //   The cookies are not protected on the browser.
  // They can be accessed from the browser.
  // The client side Javascript code can tamper with the cookies.

  // To prevent Javascript from accessing the cookie,
  // we can set the cookie as "httpOnly".

  res.cookie('isLoggedIn', 'true', {
    expires: expDate,
    httpOnly: true,
  });

  res.send('Cookie Sent.');

  //   How can we have another level of security where only the URLs
  // with "https" should be able to access the cookie?
  // using "secure" atribute

  //   "sameSite" attribute is especially useful for protection against
  // XSRF type of attacks
  //   sameSite: "strict"
});

router.post('/', (req, res) => {
  res.cookie('isLoggedIn', 'true');
  res.send('Cookie Sent.');
});

// For all the subsequent requests - the same cookie will be sent
// to the server for all requests.
// And the sent cookie should also be read on the server.

module.exports = router;
