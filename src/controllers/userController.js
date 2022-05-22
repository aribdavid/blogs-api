 const userService = require('../services/userService');

const createNewUser = async (request, response) => {
  const { displayName, email, password, image } = request.body;

  const token = await userService.createUser(displayName, email, password, image);

   response.status(201).json({ token });
};

const getAll = async (request, response) => {
  const { decodedData } = request;

  const users = await userService.getAll(decodedData, response);

  return response.status(200).json(users);
};

module.exports = {
  createNewUser,
  getAll,
};
