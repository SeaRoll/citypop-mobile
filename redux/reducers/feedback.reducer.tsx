import { createSlice } from '@reduxjs/toolkit';

// Navigation reducer
export const feedbackSlice = createSlice({
  name: 'posts',
  initialState: {
    isLoading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoading } = feedbackSlice.actions;
export default feedbackSlice.reducer;