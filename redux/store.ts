import { configureStore } from "@reduxjs/toolkit";

import horoscopeReducer from "./slices/HoroscopeSlice";

export const store = configureStore({
  reducer: {
    horoscope: horoscopeReducer,
  },
});
