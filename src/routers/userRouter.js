const express = require('express');

const rescue = require('express-rescue');
const userController = require('../controllers/userController');
const validateNewUser = require('../middlewares/validateNewUser');
 const tokenAuthenticator = require('../middlewares/tokenAuthenticator');

const router = express.Router();

router.post('/user', rescue(validateNewUser), rescue(userController.createUser));
router.get('/user', rescue(tokenAuthenticator), rescue(userController.getAll));
router.get('/user/:id', rescue(tokenAuthenticator), rescue(userController.getById));
module.exports = router;