import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from './reducers/navigation.reducer';
import feedbackReducer from './reducers/feedback.reducer';
import dataReducer from './reducers/data.reducer';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    feedback: feedbackReducer,
    data: dataReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;