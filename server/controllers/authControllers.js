const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../dataBase/models/users");
const saltRounds = 10;

const signUp = async (req, res) => {
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
    email: req.body.email,
    password: hashedPassword,
    firstName : req.body.firstName,
    lastName : req.body.lastName,
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
//TODO:refactor with try/catch , always return password not match with try and catch
const signIn = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user)
    return res.status(404).send({
      message: "Email not found",
      //error,
    });

  const match = await bcrypt.compare(req.body.password, user.password);
  if (!match)
    return res.status(400).send({
      message: "Passwords does not match",
      // error,
    });

  const accessToken = jwt.sign(
    { mail: user.email },
    process.env.ACCESS_TOKEN_SECRET
  );
  return res.status(200).send({
    message: "Login Successful",
    user: user,
    accessToken,
  });
};
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.sendStatus(401); // dont have token
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
    if (error) return res.sendStatus(403); // dont have access
    req.user = user;
    next();
  });
}
module.exports = { signUp, signIn };
