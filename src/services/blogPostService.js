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

const validateUser = async (email, idPost) => {
  const post = await BlogPost.findByPk(idPost);
  if (!post) throw createError(404, 'Post does not exist');

  const user = await userService.getByEmail(email);

  if (user.id !== post.userId) throw createError(401, 'Unauthorized user');
};

const updatePost = async (email, newPost, idPost) => {
  await validateUser(email, idPost);

  await BlogPost
    .update({ title: newPost.title, content: newPost.content }, {
      where: {
        id: idPost,
      },
    });

  const updatedPost = await getById(idPost);

  return updatedPost;
};

const deleteUser = async (email) => {
  const user = await Category.getByEmail(email);

  await User.destroy({
    where: {
      id: user.id,
    },
  });
};

module.exports = {
  createPost,
  getAll,
  getById,
  updatePost,
  deleteUser,
};