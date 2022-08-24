const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  sex: { type: String, default: "" },
  born: { type: String, default: "" },
  height: { type: String, default: "" },
  weight: { type: String, default: "" },
});

const UserModel = mongoose.model("user_details", UserSchema);

module.exports = { UserModel };
