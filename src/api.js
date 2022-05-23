const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routers');
const errorHandler = require('./middlewares/errorHandler');

// ...

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.json());

app.use('/', router.user);
app.use('/', router.login);
app.use('/', router.category);
app.use(errorHandler);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
