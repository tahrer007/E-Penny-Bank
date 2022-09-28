const usersReducers = () => {
  return [{}];
};

const selectedBoxReducer = (selectedBox = null, action) => {
  if (action.type === "BOX_SELECTED") {
    return action.payload;
  }

  return selectedBox;
};
