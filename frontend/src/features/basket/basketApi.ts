import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithErrorHandling } from "../../app/api/baseApi";
import { IBasketItem, type IBasket } from "../../app/model/basket";
import type { IProduct } from "../../app/model/product";
function isBasketItem( product: IProduct | IBasketItem): product is IBasketItem {
    return (product as IBasketItem).quantity !== undefined;
}

export const basketApi = createApi({
  reducerPath: "basketApi",
  baseQuery: baseQueryWithErrorHandling,
  tagTypes: ["Basket"],
  endpoints: (builder) => ({
    getBasket: builder.query<IBasket, void>({
        query: () => "basket",
        providesTags: ["Basket"]
    }),
    addItemToBasket: builder.mutation<IBasket, {product: IProduct | IBasketItem, quantity: number}>({
        query: ({product, quantity}) => {
            const productId = isBasketItem(product) ? product.productId : product.id;
            return {
                url: `basket?productId=${productId}&quantity=${quantity}`,
            method: "POST"
        }
        },
        onQueryStarted: async ({product, quantity}, {dispatch, queryFulfilled}) => {
            let isNewBasket = false;
            const patchResult = dispatch(
                basketApi.util.updateQueryData( "getBasket", undefined, (draft) => {
            const productId = isBasketItem(product) ? product.productId : product.id;

                    if(!draft?.basketId) {
                        isNewBasket = true;
                    }
                    if(!isNewBasket){
                          const existingItem = draft?.items.find(item => item.productId === productId);
                    if(existingItem) existingItem.quantity += quantity;
                    else draft?.items.push(isBasketItem(product) ? product :{...product, productId: product.id, quantity});
                    }
                  
                })

            )
            try {
                await queryFulfilled;
                if(isNewBasket)
                dispatch(basketApi.util.invalidateTags(["Basket"])) 
            } catch (error) {
                console.log(error)
                patchResult.undo();
            }
        } ,
        invalidatesTags: ["Basket"]

    }),
    removeItemFromBasket: builder.mutation<void, {productId: number, quantity: number}>({
        query: ({productId, quantity}) => ({
            url: `basket?productId=${productId}&quantity=${quantity}`,
            method: "DELETE"
        }),

         onQueryStarted: async ({productId, quantity}, {dispatch, queryFulfilled}) => {
            const patchResult = dispatch(
                basketApi.util.updateQueryData( "getBasket", undefined, (draft) => {
                    const existingItem = draft?.items.findIndex(item => item.productId === productId);
                    if(existingItem >= 0) {
                        draft.items[existingItem].quantity -= quantity;
                        if(draft?.items[existingItem].quantity <= 0) {
                            draft.items.splice(existingItem, 1);
                        }
                    } 
                })

            )
            try {
                await queryFulfilled;
                dispatch(basketApi.util.invalidateTags(["Basket"])) 
            } catch (error) {
                console.log(error)
                patchResult.undo();
            }
        } ,
        invalidatesTags: ["Basket"]
    })
  })
}); 

export const {
    useGetBasketQuery,
    useAddItemToBasketMutation,
    useRemoveItemFromBasketMutation
} = basketApi;