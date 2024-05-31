const bodyParser = require('body-parser');
const express = require('express');
const {
  renderSignUp,
  registerUser,
  renderLogin,
  validateLogin,
} = require('../controllers/userAuthController');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/sign-up', renderSignUp);

router.post('/sign-up', registerUser);

router.get('/login', renderLogin);

router.post('/login', validateLogin);

module.exports = router;
