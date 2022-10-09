const express = require("express");
const router = express.Router();
const {newBox,getUserBoxes,deposit,addUserToBox} = require("../controllers/boxesControllers");

router.get('/', getUserBoxes);
router.post('/newBox', newBox);
router.patch('/deposit', deposit);//put
router.patch('/addUser', addUserToBox);//put
module.exports = router;
