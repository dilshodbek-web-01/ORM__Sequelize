const { sequelize, DataTypes } = require("../db/db_config");

const Users = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  username: {
    type: DataTypes.CHAR(40),
    allowNull: false,
  },
  email: {
    type: DataTypes.CHAR(40),
    allowNull: false,
  },
  password: {
    type: DataTypes.CHAR(40),
    allowNull: false,
  },
});

module.exports = Users;
