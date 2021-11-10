import { createSlice } from '@reduxjs/toolkit';

/**
 * Feedback Slice to handle feedback state
 * 
 * isLoading: if the app is loading something
 * error: the error message. will show a snackbar if the error is not empty
 */
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