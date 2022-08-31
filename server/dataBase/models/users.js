const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");

const validateEmail = (email) => validator.isEmail(email);

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
  },

  password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
  },
});

module.exports = mongoose.model.users || mongoose.model("users", UserSchema);

