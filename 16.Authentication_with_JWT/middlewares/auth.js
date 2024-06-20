const JWT = require('jsonwebtoken');
const { tokenSignature } = require('../utils/globals');

exports.auth = (req, res, next) => {
  const token = req.session.token;

  console.log(token);

  try {
    const decodedToken = JWT.verify(token, tokenSignature);

    console.log(decodedToken);
  } catch (error) {
    res.redirect('/login');
  }

  next();
};
