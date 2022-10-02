const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../dataBase/models/users");
const RefreshTokenModel = require("../dataBase/models/refreshToken");
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
//TODO:refactor with try/catch , always return password not match with try and catch
const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res
      .status(400)
      .json({ message: "email and password are required !!" });
  const foundUser = await User.findOne({ email: req.body.email });
  if (!foundUser) return res.status(401); //unutherized
  const match = await bcrypt.compare(password, foundUser.password);
  if (match) {
    const accessToken = jwt.sign(
      {
        userName: foundUser.email,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "60s" }
    );
    const refreshToken = jwt.sign(
      {
        userName: foundUser.email,
      },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    //add refresh token to data base ;
    const findTokenInSchema = await RefreshTokenModel.findOne({
      user: foundUser._id,
    });
    if (!findTokenInSchema) {
      const refreshTokenModel = new RefreshTokenModel({
        token: refreshToken,
        user: foundUser._id,
      });
      await refreshTokenModel.save();
    } else {
      let newToken = await RefreshTokenModel.findOneAndUpdate(
        { user: foundUser._id },
        { token: refreshToken },
        { new: true }
      );
    }
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      sameSite : "None" , 
      secure : true , 
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ accessToken });
  } else {
    res.send(401);
  }
};

module.exports = { signUp, handleLogin };
