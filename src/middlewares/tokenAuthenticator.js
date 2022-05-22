const jwt = require('jsonwebtoken');

require('dotenv').config();

const secretPassword = process.env.JWT_SECRET;

const authToken = async (request, response, next) => {
    const token = request.headers.authorization;
    const decoded = jwt.verify(token, secretPassword);

    if (!token) {
      return response.status(401).json({ message: 'Token not found' });
    }
    if (token !== decoded) {
      return response.status(401).json({ message: 'Expired or invalid token' });
    }

    request.user = decoded;

    next();
};

module.exports = authToken;