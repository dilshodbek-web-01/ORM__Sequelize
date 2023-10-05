const { Router } = require("express");
const {
  getCourses,
  getCourse,
  createCourse,
  deleteCourse,
  updateCourse,
} = require("../controller/courses.ctr");

const router = Router();

router.get("/list/:user_id", getCourses);

router.post("/create", createCourse);

router
  .route("/:user_id/:course_id")
  .get(getCourse)
  .delete(deleteCourse)
  .put(updateCourse);

module.exports = router;
