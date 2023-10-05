const { Router } = require("express");
const {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  getUser,
} = require("../controller/users.ctr");

const router = Router();

router.get("/read", getUsers);

router.post("/create", createUser);

router.route("/:id").get(getUser).delete(deleteUser).put(updateUser);

module.exports = router;
