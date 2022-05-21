const { User } = require('../database/models');
const generateToken = require('../utils/generateJWT');

module.exports = async (request, response) => {
  const { displayName, password, email, image } = request.body;
  const user = await User.findOne({ where: { email } });
  if (user) {
  return response.status(409)
  .json({ message: 'User already registered' }); 
  } 
  await User.create({ displayName, password, email, image });
  const userWithNoPassword = {
    id: user.id,
    displayName: user.displayName,
    email: user.email,
    image: user.image,
   };
  const token = generateToken(userWithNoPassword);

  return response.status(201).json({ token });
};
