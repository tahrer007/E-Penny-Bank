const express = require("express");
const router = express.Router();
const {getUsers ,addBoxToUser} = require("../controllers/usersControllers");

router.get('/allUsers', getUsers);
router.post('/addBox', addBoxToUser);

module.exports = router;
