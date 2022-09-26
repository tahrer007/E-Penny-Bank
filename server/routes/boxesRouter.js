const express = require("express");
const router = express.Router();
const {newBox,getBoxs,deposit} = require("../controllers/boxesControllers");

router.get('/allBoxes', getBoxs);
router.post('/newBox', newBox);
router.post('/deposit', deposit);
//router.post('/updateBox', updateBox);
module.exports = router;
