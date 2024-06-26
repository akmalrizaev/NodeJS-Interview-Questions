const bodyParser = require('body-parser');
const express = require('express');
const {
  renderSignUp,
  registerUser,
  renderLogin,
  validateLogin,
  logout,
} = require('../controllers/userAuthController');
const { auth } = require('../middlewares/auth');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/sign-up', renderSignUp);

router.post('/sign-up', registerUser);

router.get('/login', renderLogin);

router.post('/login', validateLogin);

router.get('/logout', auth, logout);

module.exports = router;
