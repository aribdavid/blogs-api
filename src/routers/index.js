const user = require('./userRouter');
const login = require('./loginRouter');
const category = require('./categoryRouter');
const blogPost = require('./blogPostRouter');

module.exports = {
  user,
  login,
  category,
  blogPost,
};