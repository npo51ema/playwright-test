import { configureStore } from "@reduxjs/toolkit";
import caloriesReducer, { CALORIES_NAME } from "./calories";

export const store = configureStore({
  reducer: {
    [CALORIES_NAME]: caloriesReducer,
  }
});
