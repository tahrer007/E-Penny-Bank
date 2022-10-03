import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "api/axios";
import axios from "axios";
const React_App_BASE_URL = "https://saving-box.herokuapp.com/";
const Local = "http://localhost:5000/";

const initialState = {
  boxes: [],
  status: "idle", // "idle" | "loading" | "succeeded" | "failed"
  error: null,
};

export const fetchBoxes = createAsyncThunk("boxes/allboxes", async () => {
  try {

    const response = await api.get("boxes/allboxes");
    //const response = await axios.get(baseURL);
    console.log(response);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const addNewBox = createAsyncThunk(
  //TO:DO post not working 
  "boxes/newBox",
  async (initialBox) => {
    try {
      console.log(initialBox);
      const response = await axios.post(React_App_BASE_URL, initialBox);
      console.log(response.data);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

const boxesSlice = createSlice({
  name: "boxes",
  initialState,
  reducers: {
    boxAdded: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(boxName, boxType, boxKey, allowedToRevel) {
        return {
          payload: {
            boxName,
            boxType,
            boxKey,
            allowedToRevel: !boxKey ? true : allowedToRevel,
          },
        };
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBoxes.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchBoxes.fulfilled, (state, action) => {
        state.status = "succeeded";

        state.boxes = action.payload;
      })
      .addCase(fetchBoxes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewBox.fulfilled, (state, action) => {
        state.boxes.push(action.payload);
      });
  },
});
//export const { postAdded } = boxesSlice.actions;

export const selectAllBoxes = (state) => state.boxes.boxes;
export const getBoxesStatus = (state) => state.boxes.status;
export const getBoxesError = (state) => state.boxes.error;
export default boxesSlice.reducer;
