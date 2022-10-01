const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  //const authHeader2 = req.headers["Authorizathion"];
  console.log(req)
  console.log(authHeader); //Bearer token
  if (!authHeader) return res.sendStatus(401);
  console.log(authHeader); //Bearer token
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403); // invalid token
    req.user = decoded.username;
    next();
  });
};

module.exports = verifyJWT