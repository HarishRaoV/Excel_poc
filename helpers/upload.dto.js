const { sequelize } = require("../config/db.Connect");
const { Sequelize, DataTypes, Model } = require("sequelize");

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

User.sync({ alter: true });

module.exports = User;
