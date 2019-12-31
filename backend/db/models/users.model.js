const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
    },
    password: {
      type: String,
      minlength: 5,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const init = () => {
  const User = mongoose.model("User", userSchema);
  return Promise.resolve(User);
};

module.exports = { init };
