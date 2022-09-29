//action ceator
import apis from "api/api";
//(dispatch,getState)
export const fetchBoxes = () => async (dispatch) => {
  const response = await apis.get("boxes/allboxes");
  dispatch({ type: "FETCH_BOXES", payload: response.data });
};
