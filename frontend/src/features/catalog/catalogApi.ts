import { createApi } from "@reduxjs/toolkit/query/react";
import type { IProduct } from "../../app/model/product";
import { baseQueryWithErrorHandling } from "../../app/api/baseApi";
import type { ProductParams } from "../../app/model/productParams";
import { filterEmptyValues } from "../../lib/utils";
import type { Pagination } from "../../app/model/pagination";

export const catalogApi =  createApi({
    reducerPath: "catalogApi",
    //baseQuery: fetchBaseQuery({baseUrl: `http://localhost:3050/api`}),
    baseQuery: baseQueryWithErrorHandling,
    endpoints: (builder) => ({
        getProducts: builder.query<{items: IProduct[], pagination: Pagination}, ProductParams>({
            query: (productParams) => {
              
                return{
                    url: 'products',
                    params: filterEmptyValues(productParams) 

                
        }},
            transformResponse:(items: IProduct[], meta: { response?: Response } | undefined) => {
                const paginationHeader = meta?.response?.headers.get('pagination');
                const pagination = paginationHeader ? JSON.parse(paginationHeader) : null;
                return {items, pagination}
            }
        }),
        getProductById: builder.query<IProduct, number>({
            query: (id) => ({url: `products/${id}`})
        }),
        getFilters: builder.query<{brands: string[], types: string[]}, void>({
            query: () => ({url: 'products/filters'})
        })
    })
});

export const { useGetProductsQuery, useGetProductByIdQuery, useGetFiltersQuery } = catalogApi;