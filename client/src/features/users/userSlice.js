import { apiSlice } from "app/api/apiSlice";

const initialState = {
  users: [],
  status: "idle", // "idle" | "loading" | "succeeded" | "failed"
  error: null,
};
export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users/allUsers",
      keepUnusedDataFor: 15,
    }),
  }),
});


export const { useGetUsersQuery } = usersApiSlice;
