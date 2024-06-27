const Users = require('../models/users');
const JWT = require('jsonwebtoken');
const { tokenSignature } = require('../utils/globals');
const bcrypt = require('bcrypt');

exports.renderSignUp = (req, res) => {
  // const cookie = req.cookies;
  const cookie = req.session.isLoggedIn;

  res.render('sign-up', { isLoggedIn: global.isLoggedIn });
};

exports.registerUser = async (req, res) => {
  const { userName, password, confirmPassword } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    // const users = new Users(null, userName, hashedPassword);
    await Users.insertUser({ userName, password: hashedPassword });

    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).redirect('/error');
  }
};

exports.renderLogin = (req, res) => {
  // const cookie = req.cookies;
  const cookie = req.session.isLoggedIn;

  // res.render('login', { isLoggedIn: cookie.isLoggedIn });
  res.render('login', { isLoggedIn: global.isLoggedIn });
};

exports.validateLogin = (req, res) => {
  const { userName, password } = req.body;

  Users.fetchUserByUsername(userName).then(([[userCredentials], tInfo]) => {
    if (userCredentials) {
      const isMatch = bcrypt.compare(userCredentials.password, password);

      if (isMatch) {
        // res.cookie('isLoggedIn', 'true');
        const token = JWT.sign({ userName }, tokenSignature);
        // req.session.isLoggedIn = 'true';
        req.session.token = token;
        res.redirect('/');
      } else {
        // res.cookie('isLoggedIn', 'invalidPassword');
        // req.session.isLoggedIn = 'invalidPassword';
        res.redirect('/login');
      }
    } else {
      // res.cookie('isLoggedIn', 'invalidUserName');
      // req.session.isLoggedIn = 'invalidUsername';
      res.redirect('/login');
    }
  });
};

exports.logout = (req, res) => {
  // res.cookie('isLoggedIn', 'false');
  // req.session.isLoggedIn = 'false';

  req.session.destroy(req.session.id);
  res.redirect('/');
};
