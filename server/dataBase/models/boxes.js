const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savingBoxSchema = new Schema({
  type: {
    type: Number,
    required: [true, "Please provide a box type (personal/shared)"],
  },
  amount: {
    type: Number,
    required: [false],
    default: 0,
  },
  usersId: {
    type: Array,
    required: [true, "Please provide a user Id"],
  },
  adminId: {
    type: String,
    required: [true, "Please provide an admin id"],
  },
  addingHistory: {
    type: Array, //{userId , amount, date & time }
    default: [{}],
    required: [false],
  },
  createdTime: {default :Date},
}, {timestamps: true});
const savingBox = mongoose.model("savingBoxes", savingBoxSchema);

module.exports = savingBox;
