const express = require("express");
const bodyParser = require("body-parser");

const init = data => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  require("../app/routers").usersRouter(app, data);

  return Promise.resolve(app);
};

module.exports = { init };
