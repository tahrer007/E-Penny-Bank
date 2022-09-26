const express = require("express");
const router = express.Router();
const {newBox,getBoxes,deposit} = require("../controllers/boxesControllers");

router.get('/allBoxes', getBoxes);
router.post('/newBox', newBox);
router.post('/deposit', deposit);
//router.post('/updateBox', updateBox);
module.exports = router;
