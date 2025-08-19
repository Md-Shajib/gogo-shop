import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, value: 5 },
  { id: 2, value: 0 },
];

const countersSlice = createSlice({
  name: "counters",
  initialState,
  reducers: {
    increment: (state, action) => {
      const idx = state.findIndex((c) => c.id === action.payload);
      if (idx !== -1) state[idx].value++;
    },
    decrement: (state, action) => {
      const idx = state.findIndex((c) => c.id === action.payload);
      if (idx !== -1) state[idx].value--;
    },
  },
});

export const { increment, decrement } = countersSlice.actions;
export default countersSlice.reducer;
