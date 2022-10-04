const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../dataBase/models/users");
const RefreshTokenModel = require("../dataBase/models/refreshToken");

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  if (!email || !password)
    return res
      .status(400)
      .json({ message: "email and password are required !!" });
  const foundUser = await User.findOne({ email: req.body.email });
  if (!foundUser) return res.sendStatus(401); //unutherized
  const match = await bcrypt.compare(password, foundUser.password);
  if (!match) return res.sendStatus(401);

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
    sameSite: "None",
    secure: true,
    maxAge: 24 * 60 * 60 * 1000,
  });
  res.json({ user: foundUser, accessToken });
};

module.exports = { handleLogin };
