const Box = require("../dataBase/models/boxes");
const User = require("../dataBase/models/users");

const newBox = async (req, res) => {
  try {
    const newBox = new Box({
      type: req.body.type,
      usersId: [req.body.userId],
      adminId: req.body.userId,
      isAllowedToReveal: req.body.isAllowedToReveal,
      boxKey: req.body.boxKey,
    });

    const createBox = await newBox.save();
    res.status(201).json(createBox);
    console.log("here!!!!!!!!!");
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

const getBoxs = async (req, res) => {
  const getAllBoxs = () => Box.find();

  try {
    const allBoxs = await getAllBoxs();
    res.status(200).json(allBoxs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateBox = () => {
  console.log("updateBox:)");
};

module.exports = { newBox, getBoxs, updateBox };
