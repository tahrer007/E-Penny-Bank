const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savingBoxSchema = new Schema(
  { 
    boxName : {
      type : String , 
      required: [true, "Please provide box name"],
    },
    type: {
      type: Number,
      required: [true, "Please provide a box type (private/shared)"],
    },
    totalDeposits: {
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
    depositsHistory: {
      type: Array, //{userId , amount, date & time }
      default: [],
      required: [false],
    },
    boxKey: {
      type: String,
      required: [false],
    },
    isAllowedToReveal: {
      type: Boolean,
      required: [false],
    },

  },
  { timestamps: true }
);
const savingBox = mongoose.model("savingBoxes", savingBoxSchema);

module.exports = savingBox;
