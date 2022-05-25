const express = require('express');

const rescue = require('express-rescue');
const blogPostController = require('../controllers/blogPostController');
const tokenAuthenticator = require('../middlewares/tokenAuthenticator');

const router = express.Router();

router.post('/post', rescue(tokenAuthenticator), rescue(blogPostController.createPost));
