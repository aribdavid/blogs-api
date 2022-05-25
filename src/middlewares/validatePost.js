const validateNewPost = require('../joi/validateNewPost');
const createError = require('../utils/createError');

module.exports = (request, _response, next) => {
  const { title, content, categoryIds } = request.body;

  const { error } = validateNewPost.validate({ title, content, categoryIds });

  if (error) throw createError(400, 'Some required fields are missing');

  next();
};
