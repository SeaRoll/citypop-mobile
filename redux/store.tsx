import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from './reducers/navigation.reducer';

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch