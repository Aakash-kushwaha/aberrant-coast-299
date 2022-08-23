const express = require("express");
const { authentication } = require("../Middlewares/authentication");
const { FoodModel } = require("../Models/fooddata.model");

const FoodController = express.Router();

FoodController.get("/", authentication, async (req, res) => {
  const query = req.query;
  if (query.q == undefined) {
    const food_data = await FoodModel.find();
    res.send(food_data);
  } else {
    var regex = new RegExp(query.q, "i");
    const filterd = await FoodModel.find({ "Food.name": regex });
    res.send({ message: "yes", filterd });
  }
});

module.exports = { FoodController };
