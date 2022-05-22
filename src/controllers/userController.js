 const userService = require('../services/userService');

const createNewUser = async (request, response) => {
  const { displayName, email, password, image } = request.body;

  const token = await userService.createUser(displayName, email, password, image);

   response.status(201).json({ token });
};
module.exports = {
  createNewUser,
};
