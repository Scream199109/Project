import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {TOKEN} from "components/shared/const/localStorage";
import {API_URL} from "http/index";

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem(TOKEN);
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
        return headers
      }
    }
  }),
  endpoints: (builder) => ({
    getUserDetails: builder.query({
      query: () => ({
        url: 'auth/me',
        method: 'GET'
      })
    })
  })
})




export const {useGetUserDetailsQuery} = authApi;
