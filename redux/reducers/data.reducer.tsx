import { createSlice } from '@reduxjs/toolkit';

/**
 * Data slice to handle data relating to city and country
 * 
 * cities: array of cities
 * selectedCity: the index to display
 * country: name of the country searched by the user
 */
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