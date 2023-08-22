import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from './theme/themeSlice';
import localStorageMiddleware from './theme/localStorageMiddleware';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(localStorageMiddleware),
});
