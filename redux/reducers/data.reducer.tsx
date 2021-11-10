import { createSlice } from '@reduxjs/toolkit';

// Navigation reducer
export const dataSlice = createSlice({
  name: 'posts',
  initialState: {
    cities: [],
    selectedCity: 0,
    country: '',
  },
  reducers: {
    setCities: (state, action) => {
      state.cities = action.payload;
    },
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setSelectedCity: (state, action) => {
      state.selectedCity = action.payload;
    },
  },
});

export const { setCities, setCountry, setSelectedCity } = dataSlice.actions;
export default dataSlice.reducer;