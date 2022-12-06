const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  PGUSER: process.env.PGUSER,
  PGHOST: process.env.PGHOST,
  PGDATABASE: process.env.PGDATABASE,
  PGPASSWORD: process.env.PGPASSWORD,
  PGPORT: process.env.PGPORT,
  PGCLOUD: process.env.PGCLOUD
};
