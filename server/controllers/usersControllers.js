const User = require("../dataBase/models/users");

const getUsers = async (req, res) => {
  // filter users to get only names and id
  try {
    console.log("get users !!! ")
    const allUsers = await User.find();
    const filterUsersDetails = allUsers.map((user) => ({
      userId: user._id,
      name: user.name,
    }));

    res.status(200).json(filterUsersDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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
