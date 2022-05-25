const express = require('express');

const rescue = require('express-rescue');
const blogPostController = require('../controllers/blogPostController');
const tokenAuthenticator = require('../middlewares/tokenAuthenticator');
const validatePost = require('../middlewares/validatePost');
const validatePostUpdate = require('../middlewares/validatePostUpdate');

const router = express.Router();

router.post('/post',
  rescue(tokenAuthenticator),
  rescue(validatePost),
  rescue(blogPostController.createPost));
router.get('/post', rescue(tokenAuthenticator), rescue(blogPostController.getAll));
router.get('/post/search', rescue(tokenAuthenticator), rescue(blogPostController.searchPost));

router.get('/post/:id', rescue(tokenAuthenticator), rescue(blogPostController.getById));

router.put('/post/:id',
  rescue(tokenAuthenticator),
  rescue(validatePostUpdate),
  rescue(blogPostController.updatePost));
router.delete('/post/:id', rescue(tokenAuthenticator), rescue(blogPostController.deletePost));

module.exports = router;