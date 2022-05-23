require('dotenv').config();
const jwt = require('jsonwebtoken');
const createError = require('./createError');

module.exports = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    return decoded;
  } catch (error) {
    return createError(401, 'Expired or invalid token');
  }  
};