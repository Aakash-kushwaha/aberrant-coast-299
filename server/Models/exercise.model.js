const mongoose = require("mongoose");

const ExerciseSchema = mongoose.Schema({
  Exercise: { type: Object, required: true },
});

const ExerciseModel = mongoose.model("all_exercise", ExerciseSchema);

module.exports = { ExerciseModel };
