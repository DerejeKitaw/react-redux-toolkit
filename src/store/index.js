import { configureStore } from '@reduxjs/toolkit';
import uiSlice from '../features/ui/uiSlice';
import counterReducer from '../features/counter/counterSlice';

const store = configureStore({
  reducer: { ui: uiSlice.reducer, counter: counterReducer.reducer},
});

export default store;
