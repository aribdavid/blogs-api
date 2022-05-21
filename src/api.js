const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routers');

// ...

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.json());

app.use('/', router.user);
app.use('/', router.login);
// app.use((error, _req, response, _next) => {
//   if (!error.status) {
//     console.log('Error: ', error.message);
//     return response.status(500).json({ message: 'Internal server error' });
//   }
//   return response.status(error.status).json({ message: error.message });
// });

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
