require("dotenv").config();
var jwt = require("jsonwebtoken");
const authentication = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.send({ login: false, message: "Please login again" });
  }
  const usertoken = req.headers.authorization.split(" ")[1];
  // console.log(usertoken,"usertoken")

  await jwt.verify(usertoken, process.env.secret_key, function (err, decoded) {
    if (err) {
      return res.send({ login: false, message: "Please login again" });
    }

    req.body.email = decoded.email;
    next();
  });
};

module.exports = { authentication };
