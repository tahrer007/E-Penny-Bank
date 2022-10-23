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
        { type: "Box", id: "LIST" },
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
    deposit: builder.mutation({
      query: (details) => ({
        url: `/boxes/deposit`,
        method: "PATCH",
        body: details,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Box", id: arg.id }],
    }),
    addUser: builder.mutation({
      query: (details) => ({
        url: `/boxes/addUser`,
        method: "PATCH",
        body: details,
      }),

      invalidatesTags: (result, error, arg) => [
        { type: "Box", id: arg.id },
        { type: "User" },
      ],
    }),
  }),
});
export const {
  useGetBoxesByUserIdQuery,
  useAddNewBoxMutation,
  useDepositMutation,
  useAddUserMutation,
} = extendedApiSlice;
export const selectBoxesResult =
  extendedApiSlice.endpoints.getBoxesByUserId.select();

export const getBoxForId = (state, id) =>
  extendedApiSlice.endpoints.getBoxById.select(id)(state)?.data ?? {};

export const selectBoxesData = (state, userId) =>
  extendedApiSlice.endpoints.getBoxesByUserId.select(userId)(state)?.data ?? {};
//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllBoxes,
  selectById: selectBoxById,
  selectIds: selectBoxesIds,
  // Pass in a selector that returns the posts slice of state
} = boxesAdapter.getSelectors(
  (state) => selectBoxesData(state) ?? initialState
);
