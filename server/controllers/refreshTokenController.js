
require("dotenv").config();
const User = require("../dataBase/models/users");
const RefreshTokenModel = require("../dataBase/models/refreshToken");
const {createAccessToken } = require("../utils/signTokens");
const jwt = require('jsonwebtoken');


const handelRefreshToken = async (req, res) => {
  const cookies = req.cookies;
  console.log(cookies?.jwt);
  console.log("teeeeeeeeeeeeeeeeeeeest", cookies);
  if (!cookies) return res.status(401);
  if (!cookies?.jwt) return res.status(401);
  const refreshToken = cookies.jwt;
  const foundToken = await RefreshTokenModel.findOne({
    token: refreshToken,
  });

  if (!foundToken) return res.sendStatus(403); //forbidden
  const foundUser = await User.findOne({
    _id: foundToken.user,
  });
  if (!foundUser) return res.sendStatus(404); //TODO :not sure !!
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err || foundUser.email !== decoded.email) return res.sendStatus(403);

    const accessToken = createAccessToken(foundUser.email) ;

    res.json({ accessToken });
  });
};

module.exports = { handelRefreshToken };
