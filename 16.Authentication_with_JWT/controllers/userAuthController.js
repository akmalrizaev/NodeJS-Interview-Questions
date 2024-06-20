const Users = require('../models/users');
const JWT = require('jsonwebtoken');
const { tokenSignature } = require('../utils/globals');

exports.renderSignUp = (req, res) => {
  // const cookie = req.cookies;
  const cookie = req.session.isLoggedIn;

  res.render('sign-up', { isLoggedIn: cookie.isLoggedIn });
};

exports.registerUser = (req, res) => {
  const { userName, password, confirmPassword } = req.body;

  const users = new Users(null, userName, password);

  users.insertUser().then(() => {
    res.redirect('/');
  });
};

exports.renderLogin = (req, res) => {
  // const cookie = req.cookies;
  const cookie = req.session.isLoggedIn;

  // res.render('login', { isLoggedIn: cookie.isLoggedIn });
  res.render('login', { isLoggedIn: cookie });
};

exports.validateLogin = (req, res) => {
  const { userName, password } = req.body;

  Users.fetchUserByUsername(userName).then(([[userCredentials], tInfo]) => {
    if (userCredentials) {
      if (userCredentials.password === password) {
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
