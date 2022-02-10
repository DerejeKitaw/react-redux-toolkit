import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './slices/ui';
import counterReducer from './slices/counterSlice';

const store = configureStore({
  reducer: { ui: uiSlice.reducer, counter: counterReducer},
});

export default store;
