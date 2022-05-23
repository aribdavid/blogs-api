const categoryService = require('../services/categoryService');

const createCategory = async (request, response) => {
  const newCategory = await categoryService.createNew(request);
  return response.status(201).json(newCategory);
};

const getAll = async (request, response) => {
  const categories = await categoryService.getAll();
  return response.status.json(categories);
};
module.exports = {
  createCategory,
  getAll,
};