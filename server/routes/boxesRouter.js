const express = require("express");
const router = express.Router();
const {newBox,getUserBoxes,deposit} = require("../controllers/boxesControllers");

router.get('/', getUserBoxes);
router.post('/newBox', newBox);
router.post('/deposit', deposit);//put
//router.post('/adduser', updateBox);
module.exports = router;
