import { apiSlice } from "app/api/apiSlice";
import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";

const usersAdapter = createEntityAdapter({
  //sort users by name
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const initialState = usersAdapter.getInitialState();
//const initialState = {};
export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users/allUsers",
      transformResponse: (response) => {
        console.log(response.data);
        return usersAdapter.setAll(initialState, response.data);
      },
      providesTags: (result, error, arg) => [
        { type: "User", id: "LIST" },
        ...result._id.map((id) => ({ type: "User", id })),
      ],
    }),
  }),
});

export const { useGetUsersQuery } = extendedApiSlice;

//returns the query result object
export const selectUsersResult = extendedApiSlice.endpoints.getUsers.select();

//Create memoized selector
const selectUsersData = createSelector(
  selectUsersResult,
  (usersResult) => usersResult.data //normalized state object with ids and entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUsersIds,
  // Pass in a selector that returns the posts slice of state
} = usersAdapter.getSelectors(
  (state) => selectUsersData(state) ?? initialState
);
