import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apis from "api/api";
import axios from "axios";
//const baseURL = process.env.REACT_APP_BASE_URL;

const initialState = {
  boxes: [],
  status: "idle", // "idle" | "loading" | "succeeded" | "failed"
  error: null,
};

export const fetchBoxes = createAsyncThunk("boxes/allboxes", async () => {
  try {

    
    const response =await apis.get("boxes/allboxes");
    //const response = await axios.get(baseURL);
    console.log(response);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const addNewBox = createAsyncThunk("boxes/newBox", async (newBox) => {
  try {
    const response = await apis.post("boxes/newBox")
    console.log(response.data);
    return response.data;
  } catch (err) {
    return err.message;
  }
});
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
        console.log(state.status, action.payload);
        state.boxes = action.payload;
        
      })
      .addCase(fetchBoxes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewBox.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      });
  },
});
export const { postAdded } = boxesSlice.actions;

export const selectAllBoxes = (state) => state.boxes.boxes;
export const getBoxesStatus = (state) => state.boxes.status;
export const getBoxesError = (state) => state.boxes.error;
export default boxesSlice.reducer;
