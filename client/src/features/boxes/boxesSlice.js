import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    _id: "6331f7d692d30d25c7103d2d",
    type: 1,
    totalDeposits: 5700,
    usersId: ["6331f73f92d30d25c7103d29"],
    adminId: "6331f73f92d30d25c7103d29",
    depositsHistory: [{}],
    boxKey: "testtttt",
    isAllowedToReveal: true,
    createdAt: "2022-09-26T19:04:54.725Z",
    updatedAt: "2022-09-26T20:25:30.816Z",
    __v: 0,
  },
  {
    _id: "63321e602105c96f0f3f57ed",
    boxName: "vication",
    type: 1,
    totalDeposits: 0,
    usersId: ["6331f73f92d30d25c7103d29"],
    adminId: "6331f73f92d30d25c7103d29",
    depositsHistory: [{}],
    boxKey: "testtttt",
    isAllowedToReveal: true,
    createdAt: "2022-09-26T21:49:20.156Z",
    updatedAt: "2022-09-26T21:49:20.156Z",
    __v: 0,
  },
];

const boxesSlice = createSlice({
  name: "boxes",
  initialState,
  reducers: {},
});

export const selectAllBoxes = (state) => state.boxes;
export default boxesSlice.reducer;
