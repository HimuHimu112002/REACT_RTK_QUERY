import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
  endpoints: (builder) => ({
    // GET method
    getItems: builder.query({
      query: () => '/foodget',
    }),
    getFoods: builder.query({
      query: () => '/foodbrand/Food',
    }),

    // POST method
    createItem: builder.mutation({
      query: (newItem) => ({
        url: '/items',
        method: 'POST',
        body: newItem,
      }),
    }),
  }),
});
export const { useGetItemsQuery, useGetFoodsQuery, useCreateItemMutation } = apiSlice;