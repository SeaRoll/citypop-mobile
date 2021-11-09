import { createSlice } from '@reduxjs/toolkit';

// Routes inside application
export const routes = {
  HOME: 'HOME',
  SEARCH_CITY: 'SEARCH_CITY',
  SEARCH_COUNTRY: 'SEARCH_COUNTRY',
  SEARCH_COUNTRY_RESULTS: 'SEARCH_COUNTRY_RESULTS',
  CITY_RESULTS: 'CITY_RESULTS',
}

// Navigation reducer
export const navigationSlice = createSlice({
  name: 'posts',
  initialState: {
    currentRoute: routes.HOME,
  },
  reducers: {
    setCurrentRoute: (state, action) => {
      state.currentRoute = action.payload;
    },
  },
});

export const { setCurrentRoute } = navigationSlice.actions;
export default navigationSlice.reducer;