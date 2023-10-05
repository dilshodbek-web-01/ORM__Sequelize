const { Courses } = require("../model");

Courses.sync({ force: false });

const getCourses = async (req, res) => {
  const { user_id } = req.params;

  console.log(req.params);
  let courses = await Courses.findAll({ where: { userId: user_id } });
  res.json(courses);
};

const getCourse = async (req, res) => {
  const { user_id, course_id } = req.params;
  let courses = await Courses.findAll({ where: { userId: user_id } });
  return res.json(courses.filter((c) => c.id == course_id));
};

const createCourse = async (req, res) => {
  const { title, price, user_id } = req.body;

  await Courses.create({ title, price, userId: user_id });
  return res.json({ msg: "Created course!" });
};

const deleteCourse = async (req, res) => {
  const { user_id, course_id } = req.params;

  let foundedCourse = await Courses.findOne({
    returning: true,
    plain: false,
    where: { id: course_id },
  });

  if (!foundedCourse) return { msg: "Course not found!" };

  if (foundedCourse[0].userId == user_id) {
    await Courses.destroy({
      returning: true,
      plain: true,
      where: {
        id: course_id,
      },
    });
  }

  return res.send("Deleted!");
};

const updateCourse = async (req, res) => {
  const { user_id, course_id } = req.params;
  const { title, price } = req.body;

  let foundedCourse = await Courses.findOne({
    returning: true,
    plain: false,
    where: { id: course_id },
  });

  if (!foundedCourse) return { msg: "Course not found!" };

  if (foundedCourse[0].userId == user_id) {
    await Courses.update(
      { title, price },
      {
        returning: true,
        plain: false,
        where: {
          id: course_id,
        },
      }
    );
  }

  return res.send("Updated!");
};

module.exports = {
  getCourses,
  getCourse,
  createCourse,
  deleteCourse,
  updateCourse,
};
