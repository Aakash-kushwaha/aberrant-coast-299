const express = require("express");
const { authentication } = require("../Middlewares/authentication");
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
    const { email, date } = req.body;
    const { id } = req.params;
    const user = await UserModel.findOne({ email });
    const user_id = user._id;
    const food_data = await FoodModel.findOne({ _id: id });

    const userfood_data = new UserFoodModel({
      user_id,
      date,
      Food: food_data.Food,
    });
    await userfood_data.save();
    return res.send({ foodadded: true, message: "food added success" });
  }
);

FoodController.get("/userdashboard", authentication, async (req, res) => {

  const { email} = req.body;
  const date = req.headers.authorization.split(" ")[0]
  console.log(date,"date")
  const user = await UserModel.findOne({ email });
  const user_id = user._id;
  const user_dashboard_data = await UserFoodModel.find({ user_id, date });

  return res.send(user_dashboard_data);

});

module.exports = { FoodController };
