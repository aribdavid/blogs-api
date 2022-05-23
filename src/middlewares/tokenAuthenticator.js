const createError = require('../utils/createError');
const tokenDecoder = require('../utils/tokenDecoder');

module.exports = async (request, _response, next) => {
  const { authorization } = request.headers;

  if (!authorization) throw createError(401, 'Token not found');

  const decoded = tokenDecoder(authorization);

  if (!decoded.data) throw createError(401, 'Expired or invalid token');

  request.decodedData = decoded.data;

  next();
};
