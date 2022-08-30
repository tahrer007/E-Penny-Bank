const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const validator = require('validator');

const validateEmail =(email)=> validator.isEmail(email);


module.exports = User;
