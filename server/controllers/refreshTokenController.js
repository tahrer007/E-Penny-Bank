const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../dataBase/models/users");
const RefreshTokenModel = require("../dataBase/models/refreshToken");

const handelRefreshToken = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.status(401);
  
  const refreshToken = cookies.jwt;
  console.log(refreshToken);
  const foundToken = await RefreshTokenModel.findOne({
    token: refreshToken,
  });
  console.log("foundToken",foundToken);
  if (!foundToken) return res.sendStatus(403); //forbidden
  const foundUser = await User.findOne({
    _id: foundToken.user,
  });
  if (!foundUser) return res.sendStatus(404); //TODO :not sure !!
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err || foundUser.email !== decoded.userName) return res.sendStatus(403);

    const accessToken = jwt.sign(
      { username: decoded.userName },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "60s",
      }
    );
     console.log("Test !!") 
    res.json({ accessToken });
  });
};

module.exports = { handelRefreshToken };
