const express = require("express");
const bcrypt = require("bcryptjs");
require("dotenv").config();
var jwt = require("jsonwebtoken");
const { UserModel } = require("../Models/user.Model");
const { UserValidator } = require("../Middlewares/Validator");
const { authentication } = require("../Middlewares/authentication");
const UserController = express.Router();
const secret_key = process.env.secret_key;

UserController.get("/", async (req, res) => {
  await res.send("homepage");
});
UserController.post("/signup", UserValidator, async (req, res) => {
  const { email, password, sex, born, height, weight } = req.body;

  await bcrypt.genSalt(10, async function (err, salt) {
    await bcrypt.hash(password, salt, async function (err, hash) {
      if (err) {
        res.status(404);
        res.send({ signup: false, message: "Please try again later" });
      }

      let userdata = new UserModel({
        email,
        password: hash,
        sex,
        born,
        height,
        weight,
      });
      await userdata.save();
      return res.send({ signup: true, message: "Signup Successful" });
    });
  });
});

UserController.post("/login", UserValidator, async (req, res) => {
  const { email, password } = req.body;

  const user_data = await UserModel.findOne({ email });

  if (user_data == undefined) {
    res.status(401);
    return res.send({ login: false, message: "Invalid credentials" });
  }
  const hashed_password = user_data.password;
  await bcrypt.compare(password, hashed_password, function (err, result) {
    if (err) {
      res.status(404);
      return res.send({ login: false, message: "Please try again later" });
    } else if (result) {
      const token = jwt.sign(
        { email: user_data.email, user_name: user_data.user_name },
        secret_key,
        { expiresIn: "48h" }
      );
      return res.send({
        login: true,
        message: "Login Successful",
        token: token,
      });
    } else {
      res.status(401);
      return res.send({ login: false, message: "Invalid credential" });
    }
  });
});
UserController.get("/logout", authentication, async (req, res) => {
  await res.redirect("/");
});

module.exports = { UserController };
