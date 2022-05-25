const blogPostService = require('../services/blogPostService');

const createPost = async (request, response) => {
  const { decodedData } = request;
  const { title, content, categoryIds } = request.body;

  const newPost = await blogPostService.createPost(decodedData, title, content, categoryIds);
  
  return response.status(201).json(newPost);
};

const getAll = async (_request, response) => {
  const posts = await blogPostService.getAll();
  
  return response.status(200).json(posts);
};

const getById = async (request, response) => {
  const { id } = request.params;
  const post = await blogPostService.getById(id);
  
  return response.status(200).json(post);
};

module.exports = {
  createPost,
  getAll,
  getById,
};