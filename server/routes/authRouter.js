const express = require("express");
const router = express.Router();
const { handleLogin } = require("../controllers/AuthControllers");

router.post("/", handleLogin);
module.exports = router;
