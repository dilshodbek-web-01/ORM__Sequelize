const Users = require("./Users.model");
const Courses = require("./Course.model");

Users.hasMany(Courses, {
  foreignKey: "id",
  onDelete: "CASCADE",
});
Courses.belongsTo(Users);

module.exports = {
  Users,
  Courses,
};

/*
   relation ship
     hasOne()
     hasMany()
     belongsTo()
     belongsToMany()

*/
