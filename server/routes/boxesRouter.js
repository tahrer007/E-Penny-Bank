const express = require("express");
const router = express.Router();
const {newBox,getBox,updateBox} = require("../controllers/boxesControllers");

router.get('/allBoxes', getBox);
router.post('/newBox', newBox);
router.post('/updateBox', updateBox);
module.exports = router;
