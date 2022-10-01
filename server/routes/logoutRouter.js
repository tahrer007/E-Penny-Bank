const express = require("express");
const router = express.Router();
const { handleLogout } = require("../controllers/logoutController");

router.delete("/", handleLogout);

module.exports = router;
