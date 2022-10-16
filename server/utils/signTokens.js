const jwt = require("jsonwebtoken");
require("dotenv").config();

const createAccessToken = (email) =>
  jwt.sign(
    {
      email,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "900s" }
  );
const createRefreshToken = (email) =>
  jwt.sign(
    {
      email,
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "1d" }
  );

module.exports = { createAccessToken, createRefreshToken };
