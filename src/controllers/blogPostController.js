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

const updatePost = async (request, response) => {
  const { decodedData } = request;
  const { id } = request.params;

  const updatedPost = await blogPostService.updatePost(decodedData, request.body, id);

  return response.status(200).json(updatedPost);
};

const deletePost = async (request, response) => {
  const { decodedData } = request;
  const { id } = request.params;

  await blogPostService.deletePost(decodedData, id);

  return response.status(204).end();
};

const searchPost = async (request, response) => {
  const { q } = request.query;

  const result = await blogPostService.searchPost(q);

  return response.status(200).json(result);
};

module.exports = {
  createPost,
  getAll,
  getById,
  updatePost,
  deletePost,
  searchPost,
};