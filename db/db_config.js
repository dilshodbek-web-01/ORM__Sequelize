const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  username: "postgres",
  database: "orm",
  password: "01023dk",
  port: 5432,
  host: "localhost",
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));

module.exports = {
  sequelize,
  DataTypes,
};
