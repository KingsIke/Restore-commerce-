import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithErrorHandling } from "../../app/api/baseApi";

export const errorApi = createApi({
    reducerPath: 'errorApi',
    baseQuery: baseQueryWithErrorHandling,
    endpoints: (builder) => ({
        get400Error: builder.query<void, void>({
            query: () => ({
                url:'bugerror/bad-request'
            })
        }),

        get404Error: builder.query<void, void>({
            query: () => ({
                url:'bugerror/not-found'
            })
        }),

        get401Error: builder.query<void, void>({
            query: () => ({
                url:'bugerror/Unauthorized'
            })
        }),

        getValidationError: builder.query<void, void>({
            query: () => ({
                url:'bugerror/validation-error'
            })
        }),
         
        get500Error: builder.query<void, void>({
            query: () => ({
                url:'bugerror/server-error'
            })
        })
       
    })
})

export const {
    useLazyGet400ErrorQuery,
    useLazyGet401ErrorQuery,
    useLazyGet404ErrorQuery,
    useLazyGet500ErrorQuery,
    useLazyGetValidationErrorQuery
} = errorApi