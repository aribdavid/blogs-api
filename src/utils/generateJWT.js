const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretPassword = process.env.JWT_SECRET;

const jwtConfig = { // HEADERS CONFIG
  expiresIn: '15m',
  algorithm: 'HS256',
};

const generateJWT = (payload) => {
  const token = jwt.sign({ data: payload }, secretPassword, jwtConfig);

  return token;
};

module.exports = generateJWT;