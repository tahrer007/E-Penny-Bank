const Box = require("../dataBase/models/users");

const getUsers = () => {
  // filter users to get only names and boxes details
  console.log("sign up :)");
};
const addBoxToUser = async (userId, BoxId) => {
  console.log(userId, BoxId);
  return "TEst";
};

module.exports = {
  getUsers,
  addBoxToUser
};

