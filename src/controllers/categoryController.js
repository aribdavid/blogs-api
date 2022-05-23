const categoryService = require('../services/categoryService');

const createCategory = async (request, response) => {
  const newCategory = await categoryService.createNew(request);
  return response.status(201).json(newCategory);
};

module.exports = {
  createCategory,
};