const express = require('express');

const rescue = require('express-rescue');
const blogPostController = require('../controllers/blogPostController');
const tokenAuthenticator = require('../middlewares/tokenAuthenticator');
const validatePost = require('../middlewares/validatePost');

const router = express.Router();

router.post('/post',
  rescue(tokenAuthenticator),
  rescue(validatePost),
  rescue(blogPostController.createPost));

router.get('/post', rescue(tokenAuthenticator), rescue(blogPostController.getAll));

module.exports = router;