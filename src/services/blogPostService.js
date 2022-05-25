const { BlogPost, User, Category } = require('../database/models'); 
const userService = require('./userService');
const categoryService = require('./categoryService');
const createError = require('../utils/createError');

const validateCategories = async (categories) => {
  const response = await categoryService.getCategories(categories);

  if (response.length !== categories.length) throw createError(400, '"categoryIds" not found');
};

const createPost = async (email, title, content, categoryIds) => {
  const user = await userService.getByEmail(email);

  await validateCategories(categoryIds);
  const response = await BlogPost.create({
    title,
    content,
    userId: user.id,
    published: new Date(),
    updated: new Date(),
  });

  await response.addCategories(categoryIds);

  return response;
};

const getAll = async () => {
  const response = await BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: {
          exclude: ['password'],
        },        
      },
      {
        model: Category,
        as: 'categories',
      },
    ],
  });

  return response;
};

const getById = async (id) => {
  const response = await BlogPost.findByPk(id, {
    include: [
      {
        model: User,
        as: 'user',
        attributes: {
          exclude: ['password'],
        },        
      },
      {
        model: Category,
        as: 'categories',
      },
    ],
  });

  if (!response) throw createError(404, 'Post does not exist');

  return response;
};

module.exports = {
  createPost,
  getAll,
  getById,
};