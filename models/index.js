const sequelize = require('../db');
const { Op } = require("sequelize");
const { initModels } = require('./tables/init-models');

const models = initModels(sequelize);

module.exports = {
  getPopulation: (count) => models.city.findAll({
    order: [
      ['population', 'DESC'],
    ],
    limit: count,
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
  getByContinent: () => 'fill me in',
};