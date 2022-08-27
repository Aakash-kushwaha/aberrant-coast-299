const mongoose = require("mongoose");

const UserExerciseSchema = mongoose.Schema({
  Exercise: { type: Object, required: true },
  date: { type: String, required: true },
  user_id: { type: String, default: "" },
});

const UserExerciseModel = mongoose.model(
  "user_exercise_collection",
  UserExerciseSchema
);

module.exports = { UserExerciseModel };
