const bcrypt = require("bcrypt");
require("dotenv").config();
const User = require("../dataBase/models/users");
const RefreshTokenModel = require("../dataBase/models/refreshToken");
//import { createAccessToken, createRefreshToken } from "../utils/signTokens" ; 
const { createAccessToken, createRefreshToken } = require("../utils/signTokens");



async function handleLogin(req, res) {
  const { email, password } = req.body;
  if (!email || !password)
    return res
      .status(400)
      .json({ message: "email and password are required !!" });
  const foundUser = await User.findOne({ email: req.body.email.toLowerCase() });
  if (!foundUser) return res.sendStatus(401); //unutherized
  const match = await bcrypt.compare(password, foundUser.password);
  if (!match) return res.sendStatus(401);

  const accessToken = createAccessToken(foundUser.email);
  const refreshToken = createRefreshToken(foundUser.email);

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
    secure: false, // in production : true  
    maxAge: 24 * 60 * 60 * 1000,
  });

  //res.json({ user: foundUser, accessToken });
  res.status(201).json({ user: foundUser, accessToken });
  //res.json({ user: foundUser, accessToken });
 //res.sendStatus(200)
}

module.exports = { handleLogin };
