const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('world', 'russ3', null, {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  logging: false,
});

module.exports = sequelize;