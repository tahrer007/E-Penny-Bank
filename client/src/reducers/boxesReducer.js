/* eslint-disable import/no-anonymous-default-export */
export const boxesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_BOXES":
      return [...state, action.payload];
    default:
      return state;
  }
};
