import { createSlice } from "@reduxjs/toolkit";



const getInitialThemeMode = () => {
  const savedMode = localStorage.getItem('darkMode');
  return savedMode ? JSON.parse(savedMode) : false;
}

export const uiSlice = createSlice({
    name: "ui",
    initialState: {
        isLoading: false,
        darkMode: getInitialThemeMode(),
    },
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
        },
        stopLoading: (state) => {
            state.isLoading = false;
        },
        setDarkMode: (state) => {
             localStorage.setItem('darkMode', JSON.stringify(!state.darkMode));
            state.darkMode = !state.darkMode;
        }
    },
});

export const { startLoading, stopLoading, setDarkMode } = uiSlice.actions;