import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IProduct } from "../../app/model/product";
import { baseQueryWithErrorHandling } from "../../app/api/baseApi";

export const catalogApi =  createApi({
    reducerPath: "catalogApi",
    //baseQuery: fetchBaseQuery({baseUrl: `http://localhost:3050/api`}),
    baseQuery: baseQueryWithErrorHandling,
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], void>({
            query: () => ({url: 'products'})
        }),
        getProductById: builder.query<IProduct, number>({
            query: (id) => ({url: `products/${id}`})
        })
    })
});

export const { useGetProductsQuery, useGetProductByIdQuery } = catalogApi;