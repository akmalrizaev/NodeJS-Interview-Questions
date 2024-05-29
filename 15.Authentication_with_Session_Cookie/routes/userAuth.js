const express = require('express');
const { renderSignUp } = require('../controllers/userAuthController');
const router = express.Router();

router.get('/sign-up', renderSignUp);

module.exports = router;
