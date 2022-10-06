const bcrypt = require("bcrypt");
require("dotenv").config();
const User = require("../dataBase/models/users");
const saltRounds = 10;

const handleRegister = async (req, res) => {
  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
  } catch (error) {
    res.status(500).send({
      message: "Password was not hashed successfully",
      error,
    });
  }
  const user = new User({
    email: req.body.email.toLowerCase(),
    password: hashedPassword,
    name: req.body.name,
  });

  try {
    const result = await user.save();
    res.status(201).send({
      message: "User Created Successfully",
      result,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error creating user",
      error,
    });
  }
};

module.exports = { handleRegister };
