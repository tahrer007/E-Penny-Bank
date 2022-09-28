import { combineReducers } from "redux";

const usersReducers = () => {
  return [
    {
      name: "TAhrer",
      age: 31,
    },
    {
      name: "amera",
      age: 13,
    },
    {
      name: "barhoom",
      age: 9,
    },
  ];
};

const selectedBoxReducer = (selectedBox = null, action) => {
  if (action.type === "BOX_SELECTED") {
    return action.payload;
  }

  return selectedBox;
};

export default combineReducers({
  users: usersReducers,
  selectedBox: selectedBoxReducer,
});
