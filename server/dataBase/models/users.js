const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const validator = require("validator");

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Please provide an Email!"],
      unique: [true, "Email Exist"],
    },
    firstName: {
      type: String,
      required: [true, "Please provide a first name"],
    },
    lastName: {
      type: String,
      required: [true, "Please provide a last name"],
    },
    password: {
      type: String,
      required: [true, "Please provide a password!"],
      unique: false,
    },
    
    boxesId: {
      type: Array,
      default :[]
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model.users || mongoose.model("users", UserSchema);
