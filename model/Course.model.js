const { sequelize, DataTypes } = require("../db/db_config");

const Courses = sequelize.define("courses", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  title: {
    type: DataTypes.CHAR(50),
    allowNull: false,
  },
  price: {
    type: DataTypes.CHAR(20),
    allowNull: false,
  },
});

module.exports = Courses;
