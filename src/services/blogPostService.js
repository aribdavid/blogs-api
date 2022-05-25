const { blogPost } = require('../database/models'); 
const userService = require('./userService');
const categoryService = require('./categoryService');

const createPost = async (email, title, content, categoryIds) => {
  const user = await userService.getByEmail(email);

  await categoryService.validateCategories(categoryIds);
  const response = await blogPost.create({
    title,
    content,
    userId: user.id,
    published: new Date(),
    updated: new Date(),
  });

  await response.addCategories(categoryIds);

  return response;
};

module.exports = {
  createPost,
};