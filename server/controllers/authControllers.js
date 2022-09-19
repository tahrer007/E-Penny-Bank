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

const signIn = async (req, res) => {
  let user;
 /* try{
    user = await User.findOne({ email: req.body.email });
  }catch(error){
    res.status(404).send({
      message: "Email not found",
      e,
  }*/

 user = await User.findOne({ email: req.body.email });
  if (!user)
    return res.status(404).send({
      message: "Email not found",
      //e,
    });

  const match = await bcrypt.compare(req.body.password, user.password);
  if (!match)
    return res.status(400).send({
      message: "Passwords does not match",
     // error,
    });

  const accessToken = jwt.sign(
    user,
    process.env.ACCESS_TOKEN_SECRET
  );
  console.log(accessToken);
  return res.status(200).send({
    message: "Login Successful",
    user: user,
    accessToken,
  });
};
module.exports = { signUp, signIn };
