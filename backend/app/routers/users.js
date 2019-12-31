
// we need to make a function with two inputs which are app and data for routing.
// app is for express. data is for mongodb model name.
const usersRouter = (app, data) => {
  app.route("/").get((req, res) => {
    data
      .find()
      .then(users => res.json(users))
      .catch(err => res.status(400).json("Error: " + err));
  });

  app.route("/add").post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const newUser = new data({ username, password });

    newUser
      .save()
      .then(() => res.json("User added!"))
      .catch(err => res.status(400).json("Error: " + err));
  });
};

module.exports = { usersRouter };
