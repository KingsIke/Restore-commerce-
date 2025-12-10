
import { useDispatch, useSelector } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../../features/contact/counterReducer";
import { catalogApi } from '../../features/catalog/catalogApi';
import { uiSlice } from '../layout/uiSlice';
import { errorApi } from '../../features/errorsPage/errorApi';
// import counterReducer from "../../features/contact/counterReducer";//For Normal redux

/*export function configureTheStore() {
    return configureStore({
        reducer: counterReducer
    });
}*/

export const store = configureStore({
        reducer:{
            [catalogApi.reducerPath]: catalogApi.reducer,
            [errorApi.reducerPath]: errorApi.reducer,

            counter: counterSlice.reducer,
            ui: uiSlice.reducer
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(catalogApi.middleware, errorApi.middleware) 
    })

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()



