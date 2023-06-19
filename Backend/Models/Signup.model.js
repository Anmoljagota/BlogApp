const mongoose = require("mongoose");
const SignupSchema = mongoose.Schema(
  {
    Username: String,
    Avatar: String,
    Email: String,
    Password: String,
  },
  {
    versionKey: false,
  }
);
const SignupModel = mongoose.model("users", SignupSchema);
module.exports = {
  SignupModel,
};
