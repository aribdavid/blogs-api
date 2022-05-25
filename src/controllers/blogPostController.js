const blogPostService = require('../services/blogPostService');

const createPost = async (request, response) => {
  const { decodedData } = request;
  const { title, content, categoryIds } = request.body;

  const newPost = await blogPostService.createPost(decodedData, title, content, categoryIds);
  return response.status(201).json(newPost);
};

module.exports = {
  createPost,
};