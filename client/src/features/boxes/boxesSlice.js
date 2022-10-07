import { apiSlice } from "app/api/apiSlice";
import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import build from "babel-plugin-root-import/build";

const boxesAdapter = createEntityAdapter({
  selectId: (box) => box._id,
  //sort users by name
  sortComparer: (a, b) => a.boxName.localeCompare(b.boxName),
});

const initialState = boxesAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBoxesByUserId: builder.query({
      query: (id) => `/boxes/?userId=${id}`,
      transformResponse: (responseData) => {
        console.log(responseData);
        return boxesAdapter.setAll(initialState, responseData);
      },
      providesTags: (result, error, arg) => [
        ...result.ids.map((id) => ({ type: "Box", id })),
      ],
    }),
  }),
});
