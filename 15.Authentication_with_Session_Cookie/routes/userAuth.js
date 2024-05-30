const bodyParser = require('body-parser');
const express = require('express');
const {
  renderSignUp,
  registerUser,
} = require('../controllers/userAuthController');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/sign-up', renderSignUp);

router.post('/sign-up', registerUser);

module.exports = router;
