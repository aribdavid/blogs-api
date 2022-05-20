const { User } = require('../database/models');
const generateToken = require('../utils/generateJWT');

const validateBody = (body, res) => {
  const { email, password } = body;

  if (!email || !password) {
    res
      .status(400)
      .json({ message: 'Some required fields are missing' });
    return false;
  }

  return true;
};

module.exports = async (req, res) => {
    const { email } = req.body;

    if (!validateBody(req.body, res)) return;

    const user = await User.findOne({ where: { email } });
  
    if (!user) {
      return res.status(400)
        .json({ message: 'Invalid fields' });
    }
   const userWithNoPassword = {
    id: user.id,
    displayName: user.displayName,
    email: user.email,
    image: user.image,
   };
    const token = generateToken(userWithNoPassword);

     return res.status(200).json({ token });
};