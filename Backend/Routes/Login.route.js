const jwt = require("jsonwebtoken");
const express = require("express");
const { SignupModel } = require("../Models/Signup.model");
const bcrypt = require("bcrypt");
const Loginroute = express.Router();
Loginroute.post("/api/login", async (req, res) => {
  const { Email, Password } = req.body;

  try {
    let findemail = await SignupModel.find({ Email });

    if (findemail.length > 0) {
      bcrypt.compare(Password, findemail[0].Password, function (err, result) {
        if (result) {
          var token = jwt.sign({ UserId: findemail[0]._id }, "loginornot");
          res.send(token);
        } else {
          res.send("wrong credentials");
        }
      });
    }
  } catch (err) {
    res.send(err);
  }
});

Loginroute.post("/api/users/:id/reset", async (req, res) => {
  const { password, resetpassword } = req.body;
  const Id = req.params.id;
  console.log("id", Id);
  try {
    await SignupModel.findByIdAndUpdate({ _id: Id }, resetpassword);
    res.send("Password updated successfully");
  } catch (err) {
    res.send(err);
  }
});


module.exports = {
  Loginroute,
};
