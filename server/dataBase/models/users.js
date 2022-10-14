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
    name: {
      type: String,
      required: [true, "Please provide a first name"],
    },

    password: {
      type: String,
      required: [true, "Please provide a password!"],
      unique: false,
    },

    boxesId: {
      type: Array,
      default: [],
    },
    lastLogIn: {
      type: Date,
      default: null,
      required: [false],
    },
    rewards: {
      type: Number,
      default: 0,
      required: [false],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model.users || mongoose.model("User", UserSchema);
