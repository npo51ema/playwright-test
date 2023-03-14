import { createSlice } from "@reduxjs/toolkit";

export const CALORIES_NAME = 'calories';

/**
 * @property {number} calories - calories counter
 */
const initialState = {
  calories: 0,
};

export const calories = createSlice({
  name: CALORIES_NAME,
  initialState,
  reducers: {
    setCalories: (state, action) => {
      state.calories += action.payload
    },
  },
});

export const { setCalories } = calories.actions;

export default calories.reducer;
