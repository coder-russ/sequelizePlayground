const sequelize = require('../db');
const { Op } = require("sequelize");
const { initModels } = require('./tables/init-models');

const models = initModels(sequelize);

module.exports = {
  getPopulation: (rowCount) => models.city.findAll({
    order: [
      ['population', 'DESC'],
    ],
    limit: rowCount,
  }),
  getCapital: (country) => models.country.findAll({
    where: {
      name: country,
    },
    include: {
      model: models.city,
      as: 'capital_city',
    }
  }),
  getByContinent: (continent) => models.country.findAll({
    where: { continent: continent },
    order: [['name', 'DESC']],
  }),
};