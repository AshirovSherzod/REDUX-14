import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({

  baseUrl: "https://ecommerceapi.firdavsdev.uz",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("x-auth-token")
    if (token) {

        headers.set('Authorization', `Bearer  ${token}`)
    }
    return headers
  },
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 })

export const api = createApi({
  reducerPath: 'mainApi',
  baseQuery: baseQueryWithRetry,
  tagTypes: ["User", "Product"], 
  endpoints: () => ({}),
})