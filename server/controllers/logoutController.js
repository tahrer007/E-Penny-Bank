const jwt = require("jsonwebtoken");

const RefreshTokenModel = require("../dataBase/models/refreshToken");

const handleLogout = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); // NO CENTENT
  const refreshToken = cookies.jwt;
  const foundToken = await RefreshTokenModel.findOne({
    token: refreshToken,
  });

  if (!foundToken) {
    //clear cookie
    res.clearCookie("jwt", { httpOnly: true });
    return res.sendStatus(204);
  }
  //delete from mongodb ; 
  await RefreshTokenModel.deleteOne({ _id:foundToken._id },function(err, obj) {
    if (err) res.sendStatus(400); //TODO : not sure !! 
    res.clearCookie("jwt", { httpOnly: true });
    return res.sendStatus(204);
  });
 
};

module.exports = { handleLogout };