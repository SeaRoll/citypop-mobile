import { createSlice } from '@reduxjs/toolkit';

// Navigation reducer
export const feedbackSlice = createSlice({
  name: 'posts',
  initialState: {
    isLoading: false,
    error: '',
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  },
});

export const { setLoading, setError } = feedbackSlice.actions;
export default feedbackSlice.reducer;