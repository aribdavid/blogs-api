const schemaNewUser = require('../joi/validateNewUser');

module.exports = (request, response, next) => {
  const { displayName, email, password, image } = request.body;

  const { error } = schemaNewUser.validate({ displayName, email, password, image });

  if (error) throw response.status(400).json({ message: error.message });

  next();
};