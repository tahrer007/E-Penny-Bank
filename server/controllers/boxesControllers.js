const Box = require("../dataBase/models/boxes")


const newBox =async (req, res) => {
  const newBox= new Box({
    type : req.body.type ,
    amount : req.body.type ,
    usersId : req.body.usersId ,
    adminId : req.body.adminId ,
    addingHistory : req.body.addingHistory ,

  });
  try {
    const addLocation = await newLocation.save();
    res.status(201).json(addLocation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }

  
};

const getBox = () => {
  console.log("getBox:)");
};

const updateBox = () => {
  console.log("updateBox:)");
};

module.exports = { newBox, getBox, updateBox };
