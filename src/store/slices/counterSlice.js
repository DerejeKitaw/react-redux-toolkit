import { createSlice } from '@reduxjs/toolkit';

const counterSlice = counterSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    incrementByValue(state, action) {
      state.value += action.payload.value;
    },
  },
});

export const { increment, decrement, incrementByValue } = counterSlice.actions;
export const selectCount = state => state.counter.value;
export default counterSlice.reducer;
