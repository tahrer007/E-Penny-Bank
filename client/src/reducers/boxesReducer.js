/* eslint-disable import/no-anonymous-default-export */
const boxesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_BOXES":
      return [...state, action.payload];

    default:
      return state;
  }
};
export default boxesReducer;
