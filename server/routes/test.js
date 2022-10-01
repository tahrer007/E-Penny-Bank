const express = require("express");
const router = express.Router();
const { signUp, handleLogin } = require("../controllers/AuthControllers");

router.post("/signup", signUp);
router.post("/login", handleLogin);
module.exports = router;
