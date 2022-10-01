const express = require("express");
const router = express.Router();
const {newBox,getBoxes,deposit} = require("../controllers/boxesControllers");

router.get('/allBoxes', getBoxes);
router.post('/newBox', newBox);
router.post('/deposit', deposit);//put
//router.post('/adduser', updateBox);
module.exports = router;
