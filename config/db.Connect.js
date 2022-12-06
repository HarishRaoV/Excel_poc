const { Sequelize, DataTypes } = require("sequelize");
const { PGDATABASE, PGUSER, PGHOST, PGPASSWORD, PGPORT } = require(".");

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
  host: PGHOST,
  dialect:
    "postgres" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

let dbConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { dbConnect, sequelize };
