const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('databaseName', 'user', 'password', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  logging: false, //change to true if you would like to see the raw queries in console
});

module.exports = sequelize;
