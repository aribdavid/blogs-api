// const { User } = require('../database/models');

const validateUser = (body, res) => {
  const { username, password } = body;

  if (!username || !password) {
    res
      .status(400)
      .json({ message: 'Some required fields are missing' });
    return false;
  }

  return true;
};

module.exports = validateUser;

// const flibs = async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     if (!validateBody(req.body, res)) return;

//     const user = await User.findOne({ where: { username } });
//     const userData = user.dataValues;

//     if (!user || user.password !== password) {
//       return res
//         .status(401)
//         .json({ message: 'Usuário não existe ou senha inválida' });
//     }
//     const { password: passDB, ...userWithoutPass } = userData;

//     const token = generateToken(userWithoutPass);

//     return res.status(200).json({ token });
//   } catch (err) {
//     return res
//       .status(500)
//       .json({ message: 'Erro interno', error: err.message });
//   }
// };

// module.exports = flibs;