const { Users } = require("../model");

Users.sync({ force: false });

const getUsers = async (_, res) => {
  let users = await Users.findAll();
  res.json(users);
};

const getUser = async (req, res) => {
  const { id } = req.params;

  let user = await Users.findOne({ where: { id } });
  return res.json(user);
};

const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  await Users.create({ username, email, password });

  return res.json({ message: "Created!" });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  const deletedUser = await Users.destroy({
    returning: true,
    plain: true,
    where: {
      id,
    },
  });

  if (deletedUser == 0) return res.json({ message: "User not found!" });

  return res.json({ message: "deleted user!" });
};

const updateUser = async (req, res) => {
  const { username, email, password } = req.body;
  const { id } = req.params;

  const updatedUser = await Users.update(
    { username, email, password },
    {
      returning: true,
      plain: false,
      where: {
        id,
      },
    }
  );

  if (updatedUser[0] == 0) return res.json({ message: "User not found" });

  return res.json(updatedUser.filter((e) => e));
};

module.exports = {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  getUser,
};
