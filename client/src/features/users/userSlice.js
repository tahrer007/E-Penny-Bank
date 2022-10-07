import { apiSlice } from "app/api/apiSlice";
import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";

const usersAdapter = createEntityAdapter({
  selectId: (user) => user.userId,
  //sort users by name
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const initialState = usersAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users/allUsers",
      transformResponse: (response) => {
        console.log(response);
        return usersAdapter.setAll(initialState, response);
      },
      providesTags: (result, error, arg) => [
        { type: "User", id: "LIST" },
        ...result.ids.map((id) => ({ type: "User", id })),
      ],
    }),
  }),
});

export const { useGetUsersQuery } = extendedApiSlice;

//returns the query result object
export const selectUsersResult = extendedApiSlice.endpoints.getUsers.select();

//Create memoized selector
  //normalized state object with ids and entities

const selectUsersData = createSelector(
  selectUsersResult,
  (usersResult) => {
    console.log(usersResult.data);
    return usersResult.data;
  }

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
