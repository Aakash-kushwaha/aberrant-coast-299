const express = require("express");
const { authentication } = require("../Middlewares/authentication");
const { ExerciseModel } = require("../Models/exercise.model");

const ExerciseController = express.Router();

ExerciseController.post("/", async (req, res) => {
  const data = await new ExerciseModel();
  await data.save();

  res.send("done");
});

module.exports = {
  ExerciseController,
};
