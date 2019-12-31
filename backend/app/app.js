const express = require("express");

const init = () => {
  const app = express();

  app.use(express.json());

  const usersRouter = require("../app/routers/users");

  app.use("/users", usersRouter);

  return Promise.resolve(app);
};

module.exports = { init };
