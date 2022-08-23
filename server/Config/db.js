const mongoose = require("mongoose");
require("dotenv").config();

const Mongo_url = process.env.Mongo_url;
const connection = mongoose.connect(Mongo_url);

module.exports = { connection };
