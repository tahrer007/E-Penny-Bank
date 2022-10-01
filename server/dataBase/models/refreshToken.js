const mongoose = require("mongoose");
const RefreshTokenSchema = new mongoose.Schema({
  token: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
const refreshToken = mongoose.model("RefreshToken", RefreshTokenSchema);

module.exports = refreshToken;
