const { User } = require('../database/models');
const generateToken = require('../utils/generateJWT');
const loginValidator = require('../middlewares/loginValidator');

module.exports = async (request, response) => {
  const { email, password } = request.body;

  if (!loginValidator(request.body, response)) return;

  const user = await User.findOne({ where: { email, password } });

  if (!user) {
    return response.status(400)
      .json({ message: 'Invalid fields' });
  }
 
  const token = generateToken(email);

   return token;
};