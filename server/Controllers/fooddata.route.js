const express = require("express");
const { authentication } = require("../Middlewares/authentication");
const { UserExerciseModel } = require("../Models/exercisebydate.model");
const { FoodModel } = require("../Models/fooddata.model");
const { UserModel } = require("../Models/user.Model");
const { UserFoodModel } = require("../Models/userfoodbydate.model");

const FoodController = express.Router();

FoodController.get("/", authentication, async (req, res) => {
  const query = req.query;
  if (query.q == undefined) {
    const food_data = await FoodModel.find();
    res.send(food_data);
  } else {
    var regex = new RegExp(query.q, "i");
    const filterd = await FoodModel.find({ "Food.name": regex });
    res.send(filterd);
  }
});

FoodController.post(
  "/:id",
  authentication,

  async (req, res) => {
    const { email, date, amount } = req.body;
    const { id } = req.params;
    const user = await UserModel.findOne({ email });
    const user_id = user._id;
    const food_data = await FoodModel.findOne({ _id: id });

    const userfood_data = new UserFoodModel({
      user_id,
      date,
      amount,
      Food: food_data.Food,
    });
    await userfood_data.save();
    return res.send({ foodadded: true, message: "food added success" });
  }
);

FoodController.get("/userdashboard", authentication, async (req, res) => {
  const { email } = req.body;
  const date = req.headers.authorization.split(" ")[0];
  const user = await UserModel.findOne({ email });
  const user_id = user._id;
  const user_dashboardFood_data = await UserFoodModel.find({ user_id, date });
  const user_dashboardExercise_data = await UserExerciseModel.find({
    user_id,
    date,
  });

  return res.send({
    Food_data: user_dashboardFood_data,
    Exercise_data: user_dashboardExercise_data,
  });
});

module.exports = { FoodController };
