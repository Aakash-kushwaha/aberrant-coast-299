const express = require("express");
const cors = require("cors");
const { connection } = require("./Config/db");
const { UserController } = require("./Controllers/user.route");
const { FoodController } = require("./Controllers/fooddata.route");

const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());

app.use("/", UserController);
app.use("/food", FoodController);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }

  console.log(`Listening on port ${PORT} `);
});
