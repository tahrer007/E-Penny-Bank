import { apiSlice } from "app/api/apiSlice";
import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
const boxesAdapter = createEntityAdapter({
  selectId: (box) => box._id,
  sortComparer: (a, b) => a.boxName.localeCompare(b.boxName),
});

const initialState = boxesAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBoxesByUserId: builder.query({
      query: (id) => `/boxes/?userId=${id}`,
      transformResponse: (responseData) =>
        boxesAdapter.setAll(initialState, responseData),

      providesTags: (result, error, arg) => [
        ...result.ids.map((id) => ({ type: "Box", id })),
      ],
    }),
    addNewBox: builder.mutation({
      query: (initialBox) => ({
        url: "/boxes/newBox",
        method: "POST",
        body: initialBox,
      }),
      invalidatesTags: [{ type: "Box", id: "LIST" }],
    }),
  }),
});
export const { useGetBoxesByUserIdQuery, useAddNewBoxMutation } =
  extendedApiSlice;
export const selectBoxesResult =
  extendedApiSlice.endpoints.getBoxesByUserId.select();

const selectBoxesData = createSelector(selectBoxesResult, (boxesResult) => {
  console.log("tesssssst", boxesResult.data);
  return boxesResult.data;
});
//selectById notworking , temprory fuction

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllBoxes,
  selectById: selectBoxById,
  selectIds: selectBoxesIds,
  // Pass in a selector that returns the posts slice of state
} = boxesAdapter.getSelectors(
  (state) => selectBoxesData(state) ?? initialState
);
