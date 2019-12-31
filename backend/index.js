const async = () => {
  return Promise.resolve();
};

const { port, uri } = require("./config/index");

async()
  .then(() => require("./db/database/index").init(uri))
  .then(() => require("./db/models/users.model").init())
  .then((data) => require("./app/index").init(data))
  .then(app => {
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  })
  .catch(err => {
    console.log(err);
  });
