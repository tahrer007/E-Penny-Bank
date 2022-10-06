const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.sendStatus(401);
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    //console.log("req " , req.email)
    console.log("decoded ", decoded);

    if (err) return res.sendStatus(403);

    req.email = decoded.email;
    next();
  });
};

module.exports = verifyJWT;
