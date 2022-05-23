const express = require('express');

const rescue = require('express-rescue');
const categoryController = require('../controllers/categoryController');
const tokenAuthenticator = require('../middlewares/tokenAuthenticator');

const router = express.Router();

router.post('/categories', rescue(tokenAuthenticator), rescue(categoryController.createCategory));

module.exports = router;