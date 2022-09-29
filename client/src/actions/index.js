//action ceator
import apis from "api/api";
//(dispatch,getState)
export const fetchallBoxes = () => async (dispatch) => {
  const response = await apis.get("boxes/allboxes");

  dispatch({ type: "FETCH_ALL_BOXES", payload: response.data });
};

export const selectedBox = (box = []) => {
  return { type: "SELECT_BOX", payload: box };
};
export const unselectedBox = (box = []) => {
  return { type: "UNSELECT_BOX", payload: box };
};