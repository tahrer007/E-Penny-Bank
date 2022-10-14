const Box = require("../dataBase/models/boxes");
const User = require("../dataBase/models/users");

const newBox = async (req, res) => {
  console.log("server", req.body);
  try {
    const newBox = new Box({
      type: req.body.type,
      boxName: req.body.boxName,
      usersId: [req.body.userId],
      adminId: req.body.userId,
      isAllowedToReveal: req.body.isAllowedToReveal,
      boxKey: req.body.boxKey,
    });

    const createBox = await newBox.save();

    res.status(201).json(createBox);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

const getUserBoxes = async (req, res) => {
  const userId = req.query.userId;

  try {
    const allBoxes = await Box.find({ usersId: userId });
    res.status(200).json(allBoxes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deposit = async (req, res) => {
  const { deposit, boxId, userId } = req.body;
  const depositsHistory = {
    userId,
    deposit,
    time: new Date().toLocaleString(),
  };
  console.log(req.body.boxId, req.body.deposit);
  try {
    const filter = { _id: req.body.boxId };
    const update = {
      $inc: { totalDeposits: req.body.deposit },
      $push: { depositsHistory: depositsHistory },
    };

    let box = await Box.findOneAndUpdate(filter, update);

    let updateUser = await User.findOneAndUpdate(
      { _id: userId },
      { $inc: { rewards: 1 } }
    );

    res.status(200).send(box);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addUserToBox = async (req, res) => {
  const { userId, boxKey } = req.body;
  const filter = { boxKey };
  const update = { $push: { usersId: userId } };
  try {
    let box = await Box.findOneAndUpdate(filter, update);
    res.status(201).json(box);
  } catch (error) {
    res.status(201).status(400).json({ message: err.message });
  }
};

module.exports = { newBox, getUserBoxes, deposit, addUserToBox };
