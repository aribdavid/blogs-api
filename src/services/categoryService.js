const { Category } = require('../database/models'); 
const validateNewCategory = require('../joi/validateNewCategory');
const createError = require('../utils/createError');

const createCategory = async (request) => {
  const { name } = request.body;

  const { error } = validateNewCategory.validate({ name });

  if (error) throw createError(400, error.message);

  const newCategory = await Category.create({ name });

  return newCategory;   
};

const getAll = async () => {
  const categories = await Category.findAll({
    attributes: {
      exclude: ['password'],
    },
  });

  return categories;
};

module.exports = {
  createCategory,
  getAll,
};
