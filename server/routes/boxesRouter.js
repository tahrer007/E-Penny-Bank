const express = require("express");
const router = express.Router();
const {newBox,getBoxs,updateBox} = require("../controllers/boxesControllers");

router.get('/allBoxes', getBoxs);
router.post('/newBox', newBox);
router.post('/updateBox', updateBox);
module.exports = router;
