const { Category } = require('../database/models'); 
const validateNewCategory = require('../joi/validateNewCategory');
const createError = require('../utils/createError');

const getCategories = async (categories) => {
  const response = await Category.findAll({
    where: {
      id: categories,
    },
  });

  return response;
};

const validateCategories = async (categories) => {
  const response = await getCategories(categories);

  if (response.length !== categories.length) throw createError(400, '"categoryIds" not found');
};

const createCategory = async (request) => {
  const { name } = request.body;

  const { error } = validateNewCategory.validate({ name });

  if (error) throw createError(400, error.message);

  const newCategory = await Category.create({ name });

  return newCategory;   
};

const getAll = async () => {
  const categories = await Category.findAll();

  return categories;
};

module.exports = {
  createCategory,
  getAll,
  validateCategories,
};
