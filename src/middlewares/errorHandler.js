module.exports = (error, _request, response, _next) => {
  console.log(error);
  if (error.statusCode) return response.status(error.statusCode).json({ message: error.message });

  return response.status(500).json({ message: 'Internal Server Error' });
};