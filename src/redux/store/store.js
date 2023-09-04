import { configureStore } from "@reduxjs/toolkit";
import colorChangerReducer from "../slices/colorChanger";

export const store = configureStore({
    reducer: {
        colorChanger  : colorChangerReducer,
    },
})