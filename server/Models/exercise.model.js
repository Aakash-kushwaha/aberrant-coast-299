const mongoose = require("mongoose");

const value = Math.random() * 105;

const ExerciseSchema = mongoose.Schema({
  Exercise: {
    name: "Arm Ergometer",
    amount: { val: 30, unit: "minutes" },
    Energy: value.toFixed(1),
  },
});

const ExerciseModel = mongoose.model("all_exercise", ExerciseSchema);

module.exports = { ExerciseModel };
