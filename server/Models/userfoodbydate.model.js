const mongoose = require("mongoose");

const UserFoodeSchema = mongoose.Schema({
  Food: { type: Object, required: true },
  date: { type: String, required: true },
  user_id: { type: String, default: "" },
});

const UserFoodModel = mongoose.model("user_food_collection", UserFoodeSchema);

module.exports = { UserFoodModel };
