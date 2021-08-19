const express = require('express');
const compression = require('compression');
const sequelize = require('./db');

const app = express();
const port = 3000;
const router = require('./routes');

app.use(express.json());
app.use(compression());

app.use('/', router);

app.listen(port, () => console.log('Server listening on port ', port));

sequelize.authenticate()
  .then(() => sequelize.sync({ alter: true }))
  .then(() => console.log('Database Successfully Connected and Synced'))
  .catch((err) => console.log('Unable to connect to Postgres DB: ', err));