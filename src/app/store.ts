import { configureStore } from "@reduxjs/toolkit";
import message from "../features/slices/messageSlice";
import weatherInfo from "../features/slices/weatherSlice";

export const store = configureStore({
    reducer: {
        weatherInfo,
        message
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;