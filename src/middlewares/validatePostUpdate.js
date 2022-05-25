const validatePostUpdate = require('../joi/validatePostUpdate');
const createError = require('../utils/createError');

module.exports = (req, _res, next) => {
  const { title, content } = req.body;

  const { error } = validatePostUpdate.validate({ title, content });

  if (error) throw createError(400, 'Some required fields are missing');

  next();
};