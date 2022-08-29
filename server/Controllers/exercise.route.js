const express = require("express");
const { authentication } = require("../Middlewares/authentication");
const { ExerciseModel } = require("../Models/exercise.model");
const { UserExerciseModel } = require("../Models/exercisebydate.model");
const { UserModel } = require("../Models/user.model");

const ExerciseController = express.Router();

ExerciseController.get("/", authentication, async (req, res) => {
  const query = req.query;
  if (query.q == undefined) {
    const all_exercise_data = await ExerciseModel.find();
    return res.send(all_exercise_data);
  } else {
    var regex = new RegExp(query.q, "i");
    const filterd = await ExerciseModel.find({ "Exercise.name": regex });
    res.send(filterd);
  }
});

ExerciseController.post(
  "/:id",
  authentication,

  async (req, res) => {
    const { email, date } = req.body;
    const { id } = req.params;
    const user = await UserModel.findOne({ email });
    const user_id = user._id;
    const exercise_data = await ExerciseModel.findOne({ _id: id });
    const userexercise_data = new UserExerciseModel({
      user_id,
      date,
      Exercise: exercise_data.Exercise,
    });
    await userexercise_data.save();
    return res.send({ exerciseadded: true, message: "exercise added success" });
  }
);

module.exports = {
  ExerciseController,
};
