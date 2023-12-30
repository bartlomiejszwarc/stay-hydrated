import { configureStore } from '@reduxjs/toolkit';
import storageSlice from './slices/storageSlice';
import recordsSlice from './slices/recordsSlice';

export const store = configureStore({
  reducer: {
    storage: storageSlice,
    records: recordsSlice,
  },
});
