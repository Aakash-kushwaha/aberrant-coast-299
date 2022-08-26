const UserValidator = async (req, res, next) => {
  const { email, password } = req.body;
  if (
    email == undefined ||
    password == undefined ||
    typeof email !== "string" ||
    typeof password !== "string"
  ) {
    res.status(203);
    return res.send({ message: "Invalid Credentials" });
  }
  next();
};

module.exports = { UserValidator };
