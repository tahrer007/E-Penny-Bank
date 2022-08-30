require("dotenv").config();
const mongoose = require("mongoose");
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.auigb.mongodb.net/digitalSavingBox?retryWrites=true&w=majority`;

