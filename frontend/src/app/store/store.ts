import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../../features/contact/counterReducer";

export function configureTheStore() {
    return configureStore({
        reducer: counterReducer
    });
}