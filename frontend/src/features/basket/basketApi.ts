import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithErrorHandling } from "../../app/api/baseApi";
import type { IBasket } from "../../app/model/basket";

export const basketApi = createApi({
  reducerPath: "basketApi",
  baseQuery: baseQueryWithErrorHandling,
  tagTypes: ["Basket"],
  endpoints: (builder) => ({
    getBasket: builder.query<IBasket, void>({
        query: () => "basket",
        providesTags: ["Basket"]
    }),
    addItemToBasket: builder.mutation<IBasket, {productId: number, quantity: number}>({
        query: ({productId, quantity}) => ({
            url: `basket?productId=${productId}&quantity=${quantity}`,
            method: "POST"
        }),
        invalidatesTags: ["Basket"]
    }),
    removeItemFromBasket: builder.mutation<void, {productId: number, quantity: number}>({
        query: ({productId, quantity}) => ({
            url: `basket?productId=${productId}&quantity=${quantity}`,
            method: "DELETE"
        }),
        invalidatesTags: ["Basket"]
    })
  })
}); 

export const {
    useGetBasketQuery
} = basketApi;