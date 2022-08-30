const Box = require("../dataBase/models/boxes");

const newBox = async (req, res) => {
  const newBox = new Box({
    type: req.body.type,
    amount: req.body.amount,
    usersId: req.body.usersId,
    adminId: req.body.adminId,
    addingHistory: req.body.addingHistory,
  });
  try {
    const createBox = await newBox.save();
    res.status(201).json(createBox);
  } catch (err) {
    res.status(400).json({ message: err.message });
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
