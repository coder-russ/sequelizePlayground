# Sequelize Playground

Sequelize playground is a shell repo with a server and database connection built in that allows you to test out different sequelize methods.

## Installation

- [ ] Create Postgres/SQL database on local machine with tables/schema
- [ ] NPM install
- [ ] Input your database connection details in /db/index.js
- [ ] Create "tables" folder in /models
- [ ] NPM run automate
- [ ] NPM run start
- [ ] Confirm you are connected to the server and database
- [ ] update your routes and queries in:
  - routes.js
  - /models/index.js
  
## Sample Databases

Here is a git repo with sample databases to use:

https://github.com/morenoh149/postgresDBSamples

> I used worldDB-1.0 for this project

## Usage

`getPopulation: (rowCount) => models.city.findAll({
    order: [
      ['population', 'DESC'],
    ],
    limit: rowCount,
  })`

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
