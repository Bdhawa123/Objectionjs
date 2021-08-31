// Update with your config settings.

const { knexSnakeCaseMappers } = require("objection");

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "bnay",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./seeds",
    },
    ...knexSnakeCaseMappers,
  },
};
