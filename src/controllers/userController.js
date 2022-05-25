 const userService = require('../services/userService');

const createUser = async (request, response) => {
  const { displayName, email, password, image } = request.body;

  const token = await userService.createUser(displayName, email, password, image);

   response.status(201).json({ token });
};

const getAll = async (_request, response) => {
  const users = await userService.getAll();

  return response.status(200).json(users);
};

const getById = async (request, response) => {
  const { id } = request.params;
  const users = await userService.getById(id);

  return response.status(200).json(users);
};

const deleteUser = async (request, response) => {
  const { decodedData } = request;
  
  await userService.deleteUser(decodedData);
  
  return response.status(204).end();
};
module.exports = {
  createUser,
  getAll,
  getById,
  deleteUser,
};
