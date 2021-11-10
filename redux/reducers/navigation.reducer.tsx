import { createSlice } from '@reduxjs/toolkit';

// Routes inside application
export const routes = {
  HOME: 'HOME',
  SEARCH_CITY: 'SEARCH_CITY',
  SEARCH_COUNTRY: 'SEARCH_COUNTRY',
  COUNTRY_RESULTS: 'COUNTRY_RESULTS',
  CITY_RESULTS: 'CITY_RESULTS',
}

// Navigation reducer
export const navigationSlice = createSlice({
  name: 'posts',
  initialState: {
    currentRoute: routes.SEARCH_CITY,
    lastRoute: routes.HOME,
  },
  reducers: {
    setCurrentRoute: (state, action) => {
      state.currentRoute = action.payload;
    },
    setLastRoute: (state, action) => {
      state.lastRoute = action.payload;
    },
  },
});

export const { setCurrentRoute, setLastRoute } = navigationSlice.actions;
export default navigationSlice.reducer;