import { combineReducers } from "redux";
//import { selectedBoxReducer } from "./boxesReducers";
import boxesReducer from "./boxesReducer";
import selectedBoxReducer from "./selectedBoxReducer";

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

export default combineReducers({
  users: usersReducers,
  boxes: boxesReducer,
  selectedBox: selectedBoxReducer,
});
