require("dotenv").config();
var jwt = require("jsonwebtoken");
const authentication = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.send("Please login again");
  }
  const usertoken = req.headers.authorization;

  await jwt.verify(usertoken, process.env.secret_key, function (err, decoded) {
    if (err) {
      return res.send("Please login again");
    }

    req.body.email = decoded.email;
    next();
  });
};

module.exports = { authentication };
