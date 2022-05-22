module.exports = (body, response) => {
  const { email, password } = body;

  if (!email || !password) {
    response
      .status(400)
      .json({ message: 'Some required fields are missing' });
    return false;
  }

  return true;
};
