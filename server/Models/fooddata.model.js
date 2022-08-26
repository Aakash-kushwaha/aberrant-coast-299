const mongoose = require("mongoose");

const FoodeSchema = mongoose.Schema({
  Food: { type: Object, required: true },
});

const FoodModel = mongoose.model("all_food", FoodeSchema);

module.exports = { FoodModel };
