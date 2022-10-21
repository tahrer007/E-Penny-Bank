import { apiSlice } from "app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    signup: builder.mutation({
      query: (user) => ({
        url: "/signup",
        method: "POST",
        body: { ...user },
      }),
    }),
  }),
  
});
export const { useLoginMutation , useSignupMutation  } = authApiSlice;
