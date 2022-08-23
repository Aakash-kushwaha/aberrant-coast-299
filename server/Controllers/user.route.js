const express = require("express");
const bcrypt = require("bcryptjs");
require("dotenv").config();
var jwt = require("jsonwebtoken");
const { UserModel } = require("../Models/user.Model");
const UserController = express.Router();
const secret_key = process.env.secret_key;

UserController.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  await bcrypt.genSalt(10, async function (err, salt) {
    await bcrypt.hash(password, salt, async function (err, hash) {
      if (err) {
        res.status(404);
        res.send({ message: "Please try again later" });
      }

      let userdata = new UserModel({
        email,
        password: hash,
      });
      await userdata.save();
      return res.send({ message: "Signup Successful" });
    });
  });
});

UserController.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  const user_data = await UserModel.findOne({ email });

  if (user_data == undefined) {
    res.status(404);
    return res.send({ message: "Invalid credentials" });
  }
  const hashed_password = user_data.password;
  await bcrypt.compare(password, hashed_password, function (err, result) {
    if (err) {
      res.send(404);
      return res.send("Please try again later");
    } else if (result) {
      const token = jwt.sign(
        { email: user_data.email, user_name: user_data.user_name },
        secret_key,
        { expiresIn: "48h" }
      );
      return res.send({
        message: "Signin Successful",
        token: token,
      });
    } else {
      return res.send({ message: "Invalid credential" });
    }
  });
});

module.exports = { UserController };
