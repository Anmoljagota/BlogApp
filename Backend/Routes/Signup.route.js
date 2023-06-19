const express = require("express");
const bcrypt = require("bcrypt");
const { SignupModel } = require("../Models/Signup.model");
const Signuproute = express.Router();
Signuproute.post("/api/register", async (req, res) => {
  const { Username, Avatar, Email, Password } = req.body;
  console.log(Username, Avatar, Email, Password);
  try {
    bcrypt.hash(Password, 5, async function (err, hash) {
      console.log("i am hash", hash);
      const storeuser = new SignupModel({
        Username,
        Avatar,
        Email,
        Password: hash,
      });
      await storeuser.save();
      res.send("user created successfully");
    });
  } catch (err) {
    res.send("something went wrong");
  }
});
module.exports = {
  Signuproute,
};
