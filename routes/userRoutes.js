const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const loginController = require('../controllers/loginController');

router.post('/register', authController.register);
router.post('/login', loginController.login);

module.exports = router;
