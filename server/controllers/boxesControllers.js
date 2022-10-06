const Box = require("../dataBase/models/boxes");

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
  try {
    const filter = { _id: req.body.boxId };
    const update = { $inc: { totalDeposits: req.body.deposit } };
    //const update = { $push: { depositsHistory: req.body.boxId } };

    let box = await Box.findOneAndUpdate(filter, update);

    res.status(200).send(box);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { newBox, getUserBoxes, deposit };
