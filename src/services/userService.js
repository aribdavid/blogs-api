const { User } = require('../database/models'); 
const createError = require('../utils/createError');
const generateToken = require('../utils/generateJWT');
const tokenAuthenticator = require('../middlewares/tokenAuthenticator');

const getUserByEmail = async (email) => {
  const user = await User.findOne({
    where: {
      email,
    },
  });

  return user;
};

const getAll = async (request, response) => {
  tokenAuthenticator(request, response);
  const users = await User.findAll({
    attributes: {
      exclude: ['password'],
    },
  });

  return users;
};

const createUser = async (displayName, email, password, image) => {
  const foundUser = await getUserByEmail(email);

  if (foundUser) throw createError(409, 'User already registered');

  await User.create({
    displayName,
    email,
    password,
    image,
  });

  const token = generateToken(email);

  return token;
};

module.exports = {
  createUser,
  getAll,
};    