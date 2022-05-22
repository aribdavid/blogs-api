const express = require('express');

const rescue = require('express-rescue');
const userController = require('../controllers/userController');
const validateNewUser = require('../middlewares/validateNewUser');

const router = express.Router();

router.post('/user', rescue(validateNewUser), rescue(userController.createNewUser));

module.exports = router;