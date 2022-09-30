import _ from "lodash"

const selectedBoxReducer = (state = [], action) => {
  switch (action.type) {
    case "SELECT_BOX":
      return [...state, action.payload];

    case "DEPOSIT":
      return [...state, action.payload];

    case "ADD_USER":
      return [...state, action.payload];

    case "UNSELECT_BOX":
      return [_.omit(...state,action.payload) ];
    default:
      return state;
  }
};
export default selectedBoxReducer;
