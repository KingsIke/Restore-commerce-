import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithErrorHandling } from "../../app/api/baseApi";
import type { User } from "../../app/model/user";
import type { LoginSchema } from "../../lib/schemas/loginSchema";
import { router } from "../../app/routes/Routes";
import { toast } from "react-toastify";

export const accountApi = createApi({
    reducerPath: 'accountApi',
    baseQuery: baseQueryWithErrorHandling,
    tagTypes: ['UserInfo'],
    endpoints: (builder) => ({
        login: builder.mutation<void, LoginSchema> ({
            query: (creds) => {
                return{
                    url: `login?useCookies=true`,
                    method: 'POST',
                    body: creds
                }
            },
            invalidatesTags: ['UserInfo'],
            async onQueryStarted(_, {dispatch, queryFulfilled}) {
    try {
        await queryFulfilled;
        await dispatch(
            accountApi.endpoints.userInfo.initiate(undefined, { forceRefetch: true })
        ).unwrap();
    } catch(error) {
        console.log(error);
    }
}
        }),
        register: builder.mutation<void, object>({
            query: (creds) => {
                return {
                    url: 'account/register',
                    method: 'POST',
                    body: creds
                }
            },
            async onQueryStarted(_, {queryFulfilled}) {
                try{
                    await queryFulfilled;
                    toast.success('Registration successful - you can now sign in!')
                    router.navigate('/login')
                } catch(error){
                    console.log(error)
                    throw error;
                }
            }
        }),
        userInfo: builder.query<User | null, void>({
    query: () => 'account/user-info',
    providesTags: ['UserInfo'],
    transformResponse: (response: User | null) => {
        return response ?? null;
    }
}),
        logout: builder.mutation({
            query: () => ({
                url: 'account/logout',
                method: 'POST'
            }),
            invalidatesTags: ['UserInfo'],
           async onQueryStarted(_, {dispatch, queryFulfilled}) {
    try {
        await queryFulfilled;
        dispatch(accountApi.util.updateQueryData('userInfo', undefined, () => null));
        router.navigate('/');
    } catch (error) {
        console.log(error);
    }
}
        })

    })
})

export const {useLoginMutation, useLogoutMutation, useRegisterMutation, useUserInfoQuery, useLazyUserInfoQuery} = accountApi
