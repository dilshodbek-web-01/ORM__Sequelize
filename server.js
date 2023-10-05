const express = require("express");

//router
const usersRouter = require("./router/users.router");
const courseRouter = require("./router/courses.router");

const app = express();

app.use(express.json());

app.use("/users", usersRouter);
app.use("/courses", courseRouter);

app.listen(5000, () => console.log(5000));
