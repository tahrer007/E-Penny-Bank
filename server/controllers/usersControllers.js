const User = require("../dataBase/models/users");

const getUsers = () => {
  // filter users to get only names and boxes details
  console.log("sign up :)");
};

const addBoxToUser = async (req, res) => {
  
  const filter = { _id: req.body.userId };
  const update = { $push: { boxesId: req.body.boxId } };
  try {
    let user = await User.findOneAndUpdate(filter, update);
    res.status(201).json(user);
  } catch (error) {
    res.status(201).status(400).json({ message: err.message });
  }
};

module.exports = {
  getUsers,
  addBoxToUser,
};
