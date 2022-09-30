//action ceator
import apis from "api/api";
import _ from "lodash";
//(dispatch,getState)
export const fetchallBoxes = () => async (dispatch) => {
  const response = await apis.get("boxes/allboxes");

  dispatch({ type: "FETCH_ALL_BOXES", payload: response.data });
};

export const selectBox = (box = null) => {
  return { type: "SELECT_BOX", payload: box };
};
export const unselectBox = () => {
  return { type: "UNSELECT_BOX", payload: "selectedBox" };
};
