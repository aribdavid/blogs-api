const categoryService = require('../services/categoryService');

const createCategory = async (request, response) => {
  const newCategory = await categoryService.createCategory(request);
  return response.status(201).json(newCategory);
};

const getAll = async (_request, response) => {
  const categories = await categoryService.getAll();
  return response.status(200).json(categories);
};
module.exports = {
  createCategory,
  getAll,
};