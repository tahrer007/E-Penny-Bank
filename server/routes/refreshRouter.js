const express = require("express");
const router = express.Router();
const { handelRefreshToken } = require("../controllers/refreshTokenController");

router.put("/", handelRefreshToken);

module.exports = router;
