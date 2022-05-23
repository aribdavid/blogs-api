const { Category } = require('../database/models'); 
const validateNewCategory = require('../joi/validateNewCategory');
const createError = require('../utils/createError');

const createNew = async (request) => {
  const { name } = request.body;

  const { error } = validateNewCategory.validate({ name });

  if (error) throw createError(400, error.message);

  const newCategory = await Category.create({ name });

  return newCategory;
};

module.exports = {
  createNew,
};
