/* eslint-disable import/no-anonymous-default-export */
export const boxesReducer = (state = [], action) => {
  console.log("Action", action.payload);
  switch (action.type) {
    case "FETCH_BOXES":
      return [...state, action.payload];
    default:
      return state;
  }
};
